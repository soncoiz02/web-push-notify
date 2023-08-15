// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcs02msrfXPg4cssAPRQxXdeGT5vkM3TE",
    authDomain: "web-push-notify-2bf08.firebaseapp.com",
    projectId: "web-push-notify-2bf08",
    storageBucket: "web-push-notify-2bf08.appspot.com",
    messagingSenderId: "246847208869",
    appId: "1:246847208869:web:68259bf3f5a7a52b623c4c",
    measurementId: "G-CKJR35W9G9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app)

