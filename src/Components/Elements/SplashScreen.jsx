import React, { useEffect, useState } from "react";


const SplashScreen = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show the text after a delay (e.g., 5 seconds)
    setTimeout(() => {
      setShowText(true);
    }, 5000); // 5-second delay before showing the text
  }, []);

  return (
    <div className="splash-screen d-flex justify-content-center align-items-center">
      {showText && <p className="logo">Webby Wasay</p>}
    </div>
  );
};

export default SplashScreen;
