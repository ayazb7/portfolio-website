import React, { useEffect } from 'react';

const TestRedirect = () => {
  useEffect(() => {
    const redirectToApp = () => {
      // Use the ayazbaig.co.uk deep link
      const flutterDeepLink = "https://ayazbaig.co.uk/test-redirect";

      // Redirect to app (or fallback to home if not handled)
      window.location.href = flutterDeepLink;

      setTimeout(() => {
        window.location.href = "https://ayazbaig.co.uk/";
      }, 3000);
    };

    redirectToApp();
  }, []);

  return (
    <div>
      <h2>Redirecting to App...</h2>
      <p>If the app does not open, <a href="https://ayazbaig.co.uk/test-redirect">click here</a>.</p>
    </div>
  );
};

export default TestRedirect;
