importScripts("https://www.gstatic.com/firebasejs/12.6.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.6.0/firebase-messaging-compat.js");

firebase.initializeApp({
apiKey:"AIzaSyDpPKkgBLLDv2QoG9ObGfObZd5S-auUKhg",
authDomain:"enfermeria-c2edc.firebaseapp.com",
projectId:"enfermeria-c2edc",
storageBucket:"enfermeria-c2edc.appspot.com",
messagingSenderId:"955092319230",
appId:"1:955092319230:web:66b5f8d168f6748ce45eaf"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload=>{
self.registration.showNotification(payload.notification.title,{
body:payload.notification.body
});
});
