<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBfUh1PIogDz-a4qRoqXk9PiCI0NU2YxsM",
    authDomain: "main-domain-yashwanth-co-in.firebaseapp.com",
    projectId: "main-domain-yashwanth-co-in",
    storageBucket: "main-domain-yashwanth-co-in.appspot.com",
    messagingSenderId: "1083299471257",
    appId: "1:1083299471257:web:d9306e76eaf4d14f197d08",
    measurementId: "G-1GYM3K46BC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>