
import React, { useEffect } from 'react';

interface ErrorInfo {
  message: string;
  url: string;
  timestamp: number;
}

class LightErrorMonitoring {
  private static instance: LightErrorMonitoring;
  private errors: ErrorInfo[] = [];
  private maxErrors = 10;

  static getInstance(): LightErrorMonitoring {
    if (!LightErrorMonitoring.instance) {
      LightErrorMonitoring.instance = new LightErrorMonitoring();
    }
    return LightErrorMonitoring.instance;
  }

  init() {
    // Monitor apenas erros críticos
    window.addEventListener('error', (event) => {
      this.logError({
        message: event.message,
        url: window.location.href,
        timestamp: Date.now()
      });
    });

    // Monitor promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.logError({
        message: `Promise rejection: ${event.reason}`,
        url: window.location.href,
        timestamp: Date.now()
      });
    });
  }

  private logError(error: ErrorInfo) {
    this.errors.push(error);
    
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Log apenas em desenvolvimento
    if (import.meta.env.DEV) {
      console.error('Error:', error);
    }
  }

  getErrors(): ErrorInfo[] {
    return [...this.errors];
  }
}

const LightErrorMonitoringComponent: React.FC = () => {
  useEffect(() => {
    const monitor = LightErrorMonitoring.getInstance();
    monitor.init();
  }, []);

  return null;
};

export default LightErrorMonitoringComponent;
export { LightErrorMonitoring };
