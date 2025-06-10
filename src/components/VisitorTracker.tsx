import { useEffect } from 'react';

const VisitorTracker = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      try {
        // Get visitor information
        const visitorInfo = {
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          language: navigator.language,
          platform: navigator.platform,
          screenWidth: window.screen.width,
          screenHeight: window.screen.height,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          referrer: document.referrer || 'Direct',
          url: window.location.href,
        };

        // Log the data being sent
        console.log('Sending visitor data:', visitorInfo);

        // Send to Google Sheet
        const response = await fetch('https://script.google.com/macros/s/AKfycbxYhQpKVP8znnFv-iw1AIYBdV1RJk8kIGSgqFqJ2_dcfaL0xKSS3Ct0TXY4vZO-FRxYZQ/exec', {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'visitor',
            ...visitorInfo
          }),
        });

        // Log the response
        console.log('Response status:', response.status);
        console.log('Response type:', response.type);
        
        // Log success even if we can't verify it due to no-cors
        console.log('Visitor tracked successfully');
      } catch (error) {
        console.error('Error tracking visitor:', error);
      }
    };

    // Add a small delay to ensure the page is fully loaded
    setTimeout(trackVisitor, 1000);
  }, []);

  return null; // This component doesn't render anything
};

export default VisitorTracker; 