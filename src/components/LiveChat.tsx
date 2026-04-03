import React, { useEffect } from 'react';

interface LiveChatProps {
  provider?: 'tawk' | 'intercom' | 'crisp' | 'zendesk';
  siteId?: string;
  enabled?: boolean;
}

/**
 * LiveChat Component
 * 
 * Integrates live chat widget for sales and support
 * 
 * Supported providers:
 * - Tawk.to (default, free)
 * - Intercom
 * - Crisp
 * - Zendesk
 * 
 * Usage:
 * <LiveChat provider="tawk" siteId="YOUR_SITE_ID" enabled={true} />
 */
export default function LiveChat({ 
  provider = 'tawk', 
  siteId,
  enabled = true 
}: LiveChatProps): null {
  
  useEffect(() => {
    if (!enabled || !siteId) {
      return;
    }

    // Tawk.to integration
    if (provider === 'tawk') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://embed.tawk.to/${siteId}/default`;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      // Add script to page
      document.head.appendChild(script);
      
      // Cleanup
      return () => {
        document.head.removeChild(script);
        // @ts-ignore
        if (window.Tawk_API) {
          // @ts-ignore
          window.Tawk_API.hideWidget();
        }
      };
    }

    // Intercom integration
    if (provider === 'intercom') {
      // @ts-ignore
      window.intercomSettings = {
        app_id: siteId,
      };
      
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://widget.intercom.io/widget/${siteId}`;
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }

    // Crisp integration
    if (provider === 'crisp') {
      // @ts-ignore
      window.$crisp = [];
      // @ts-ignore
      window.CRISP_WEBSITE_ID = siteId;
      
      const script = document.createElement('script');
      script.src = 'https://client.crisp.chat/l.js';
      script.async = true;
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
    
  }, [provider, siteId, enabled]);

  return null; // This component doesn't render anything
}
