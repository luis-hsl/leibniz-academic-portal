import React, { useEffect } from 'react';

interface ErrorInfo {
  message: string;
  stack?: string;
  url: string;
  timestamp: number;
  userAgent: string;
}

class ErrorMonitoring {
  private static instance: ErrorMonitoring;
  private errors: ErrorInfo[] = [];
  private maxErrors = 50;

  static getInstance(): ErrorMonitoring {
    if (!ErrorMonitoring.instance) {
      ErrorMonitoring.instance = new ErrorMonitoring();
    }
    return ErrorMonitoring.instance;
  }

  init() {
    // Monitor JavaScript errors
    window.addEventListener('error', (event) => {
      this.logError({
        message: event.message,
        stack: event.error?.stack,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent
      });
    });

    // Monitor unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.logError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        url: window.location.href,
        timestamp: Date.now(),
        userAgent: navigator.userAgent
      });
    });

    // Monitor resource loading errors
    document.addEventListener('error', (event) => {
      if (event.target !== window) {
        const target = event.target as HTMLElement;
        this.logError({
          message: `Resource loading error: ${target.tagName} - ${(target as any).src || (target as any).href}`,
          url: window.location.href,
          timestamp: Date.now(),
          userAgent: navigator.userAgent
        });
      }
    }, true);
  }

  logError(error: ErrorInfo) {
    this.errors.push(error);
    
    // Keep only the most recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', error);
    }

    // In production, you could send to an error tracking service
    // Example: Sentry, LogRocket, or custom endpoint
    this.sendToErrorService(error);
  }

  private sendToErrorService(error: ErrorInfo) {
    // Only send critical errors in production
    if (process.env.NODE_ENV === 'production') {
      // Example implementation - replace with your error tracking service
      try {
        fetch('/api/errors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(error),
        }).catch(() => {
          // Silently fail if error reporting fails
        });
      } catch {
        // Silently fail if error reporting fails
      }
    }
  }

  getErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  clearErrors() {
    this.errors = [];
  }
}

const ErrorMonitoringComponent: React.FC = () => {
  useEffect(() => {
    const monitor = ErrorMonitoring.getInstance();
    monitor.init();

    // Performance monitoring
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Page Load Performance:', {
            domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
            loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
            totalTime: navEntry.loadEventEnd - navEntry.fetchStart
          });
        }
      });
    });

    if ('PerformanceObserver' in window) {
      observer.observe({ entryTypes: ['navigation', 'resource'] });
    }

    return () => {
      if ('PerformanceObserver' in window) {
        observer.disconnect();
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ErrorMonitoringComponent;
export { ErrorMonitoring };
