// This file contains additional initialization code for the Flutter web app

// This function runs after the Flutter app is initialized
function onFlutterAppInitialized() {
  console.log("Flutter app initialized successfully");
  
  // You can add any post-initialization code here
  // For example, you might want to interact with the Flutter app
  // or set up web-specific features
}

// Listen for the Flutter app initialization
window.addEventListener('flutter-first-frame', function() {
  onFlutterAppInitialized();
});