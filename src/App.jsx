import { Outlet } from 'react-router-dom';
import Header from './components/Header';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGCWIBnt2YVTDcilNIIldH5FdzqD5PmDE",
  authDomain: "ds-backend-function.firebaseapp.com",
  projectId: "ds-backend-function",
  storageBucket: "ds-backend-function.firebasestorage.app",
  messagingSenderId: "878550424563",
  appId: "1:878550424563:web:772da00ba13e7805b85086",
  measurementId: "G-CZFD1R9ZQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="max-w-screen-xl mx-auto text-center">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
