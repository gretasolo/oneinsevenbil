import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyDx4-HPFS-cZKsV7ixoGjKCseoxWaLX_V0",
    authDomain: "oneinsevenbil-4f7ad.firebaseapp.com",
    databaseURL: "https://oneinsevenbil-4f7ad.firebaseio.com",
    projectId: "oneinsevenbil-4f7ad",
    storageBucket: "oneinsevenbil-4f7ad.appspot.com",
    messagingSenderId: "508807738325",
    appId: "1:508807738325:web:7a34a37564f8349278035c",
    measurementId: "G-X1BC8811KZ",
  });
}

export const askForPermissionToReceiveNotifications = async () => {
  try {

    const messaging = firebase.messaging();

    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('user token: ', token);

    return token;
  } catch (error) {
    console.error(error);
  };
}