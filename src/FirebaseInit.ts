// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZPmRnFsz1yIsd6YXKwZdPRoHI-6dY2r4",
  authDomain: "ttm-ai.firebaseapp.com",
  projectId: "ttm-ai",
  storageBucket: "ttm-ai.appspot.com",
  messagingSenderId: "1007710284363",
  appId: "1:1007710284363:web:6ba421a881f1f225723bce",
  measurementId: "G-93ML6JK6GM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// _________________Keep____________________
/*
Use this token to login on a CI server:
1//038HoX2JZcxxTCgYIARAAGAMSNwF-L9IrdgZ-v8M2zXPg3gvQ08y8jaNDy_YXeB6ULIMCcNxD-xTIN9lxUIrHhD1UAsUOjTWODgg
*/