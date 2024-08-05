
# Pesto Test Task

This is a task management application built using React and Firebase, styled with Tailwind CSS. The app allows users to add, update, and delete tasks, as well as filter tasks based on their status.


- Add new tasks
- Update task status
- Delete tasks
- Filter tasks by status (All, To Do, In Progress, Done)

## Technologies Used

- React
- Firebase Firestore
- Tailwind CSS

## Setup and Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pesto-test-task.git
   cd pesto-test-task

2. Clone the repository:

```bash
 npm install
 ```

3. Run the application:
```bash
 npm start
 ```

 ## Deployed on Vercel
[Visit] (https://pesto-test-task.vercel.app/)


## Firebase Setup
Create a Firebase project in the Firebase Console.

Add a web app to your Firebase project and copy the Firebase config object.

Create a firebase.js file in the src directory and add the following content:

```bash
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id',
  measurementId: 'your-measurement-id'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
```
Replace the placeholders in the firebaseConfig object with your Firebase project's configuration values.


## License

This project is licensed under the MIT License.

This README file includes detailed setup and installation instructions, Firebase setup steps, and a link to the deployed application on Vercel. Make sure to replace the placeholders in the Firebase config with your actual Firebase project configuration values.





