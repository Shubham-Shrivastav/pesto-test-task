import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
const firebaseConfig = {
  apiKey: 'AIzaSyARFR3ax91HR0QqoBosN7b8UV6eSXcIrUE',
  authDomain: 'test-task-af9df.firebaseapp.com',
  projectId: 'test-task-af9df',
  storageBucket: 'test-task-af9df.appspot.com',
  messagingSenderId: '819733140524',
  appId: '1:819733140524:web:a1f10ad0b6095d607b2d89',
  measurementId: 'G-Y84RRM1ZMB'
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
