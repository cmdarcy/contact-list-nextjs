'use client';

import { useEffect } from 'react';

function BootstrapClient() {
  useEffect(() => {
    // Import Bootstrap JS on the client-side
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return null;
}

export default BootstrapClient;
