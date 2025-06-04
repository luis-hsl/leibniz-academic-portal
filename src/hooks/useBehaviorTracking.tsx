
import { useEffect, useRef } from 'react';
import { trackEvent } from '@/components/Analytics';

interface ScrollData {
  maxScroll: number;
  timeOnPage: number;
  scrollEvents: number;
}

export const useBehaviorTracking = (pageName: string) => {
  const startTime = useRef<number>(Date.now());
  const scrollData = useRef<ScrollData>({
    maxScroll: 0,
    timeOnPage: 0,
    scrollEvents: 0
  });
  const hasTrackedEngagement = useRef<boolean>(false);

  useEffect(() => {
    const trackScrollBehavior = () => {
      const scrollPercentage = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      scrollData.current.maxScroll = Math.max(scrollData.current.maxScroll, scrollPercentage);
      scrollData.current.scrollEvents += 1;

      // Track engagement milestones
      if (scrollPercentage >= 25 && !hasTrackedEngagement.current) {
        trackEvent('scroll_engagement', {
          event_category: 'engagement',
          event_label: `${pageName}_25_percent`,
          page_name: pageName,
          scroll_percentage: 25
        });
        hasTrackedEngagement.current = true;
      }

      if (scrollPercentage >= 50) {
        trackEvent('scroll_engagement', {
          event_category: 'engagement',
          event_label: `${pageName}_50_percent`,
          page_name: pageName,
          scroll_percentage: 50
        });
      }

      if (scrollPercentage >= 75) {
        trackEvent('scroll_engagement', {
          event_category: 'engagement',
          event_label: `${pageName}_75_percent`,
          page_name: pageName,
          scroll_percentage: 75
        });
      }

      if (scrollPercentage >= 90) {
        trackEvent('scroll_engagement', {
          event_category: 'engagement',
          event_label: `${pageName}_90_percent`,
          page_name: pageName,
          scroll_percentage: 90
        });
      }
    };

    const trackTimeOnPage = () => {
      scrollData.current.timeOnPage = Date.now() - startTime.current;
    };

    const trackClickPattern = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const elementType = target.tagName.toLowerCase();
      const elementClass = target.className;
      const elementId = target.id;

      trackEvent('click_pattern', {
        event_category: 'user_interaction',
        event_label: `${pageName}_${elementType}`,
        element_type: elementType,
        element_class: elementClass,
        element_id: elementId,
        page_name: pageName
      });
    };

    const handleBeforeUnload = () => {
      trackTimeOnPage();
      
      trackEvent('page_exit', {
        event_category: 'engagement',
        event_label: pageName,
        time_on_page: scrollData.current.timeOnPage,
        max_scroll: scrollData.current.maxScroll,
        scroll_events: scrollData.current.scrollEvents,
        page_name: pageName
      });
    };

    // Event listeners
    window.addEventListener('scroll', trackScrollBehavior, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('click', trackClickPattern);

    // Track page view
    trackEvent('page_view', {
      event_category: 'navigation',
      event_label: pageName,
      page_name: pageName
    });

    return () => {
      window.removeEventListener('scroll', trackScrollBehavior);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('click', trackClickPattern);
    };
  }, [pageName]);

  return {
    trackCustomEvent: (eventName: string, data: Record<string, any>) => {
      trackEvent(eventName, {
        ...data,
        page_name: pageName
      });
    }
  };
};
