 importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js');
 
 // Initialize the Firebase app in the service worker by passing in the
 // messagingSenderId.
 firebase.initializeApp({
   'messagingSenderId': '508807738325'
 });
 const messaging = firebase.messaging();

// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});



// [END background_handler]
