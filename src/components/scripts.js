import { useEffect } from 'react';

const Scripts = () => {
  useEffect(() => {
    // Function to dynamically load a script
    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    // Load the vendor.bundle.js and theme.bundle.js files
    loadScript('/assets/js/vendor.bundle.js');
    loadScript('/assets/js/theme.bundle.js');

    // Cleanup function to remove the scripts when the component is unmounted
    return () => {
      const scripts = document.querySelectorAll('script[src*="vendor.bundle.js"], script[src*="theme.bundle.js"]');
      scripts.forEach((script) => document.body.removeChild(script));
    };
  }, []);

  return null; // No JSX is returned because this component is just for script loading
};

export default Scripts;