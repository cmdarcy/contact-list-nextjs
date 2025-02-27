'use client';

import { useEffect } from 'react';

/**
 * Client-side component to dynamically import Bootstrap JavaScript
 * 
 * @component
 * @returns {null} Does not render any visible UI, only loads Bootstrap JS
 */
function BootstrapClient() {
  useEffect(() => {
    // Import Bootstrap JS on the client-side
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return null;
}

export default BootstrapClient;
