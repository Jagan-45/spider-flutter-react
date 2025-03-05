// This file is used to bootstrap the Flutter web app

// This function can be used to customize Flutter web initialization
function initializeFlutter() {
  // Define Flutter configuration
  window._flutter = window._flutter || {};
  window._flutter.buildConfig = window._flutter.buildConfig || {
    canvasKitBaseUrl: "/canvaskit/",
    canvasKitVariant: "full", // or "profile" or "release"
  };
  
  // Add any additional web-specific initialization here
  console.log("Flutter web bootstrap initialized");
}

// Call initialization function
initializeFlutter();
