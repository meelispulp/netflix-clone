import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// now we need to seed the database

// we need a config here

const config = {
  apiKey: 'AIzaSyDczGa7ul4cF-w7s8kUUcw2q_5UkipbnTE',
  authDomain: 'netflix-c9601.firebaseapp.com',
  databaseURL: 'https://netflix-c9601.firebaseio.com',
  projectId: 'netflix-c9601',
  storageBucket: 'netflix-c9601.appspot.com',
  messagingSenderId: '786076571443',
  appId: '1:786076571443:web:18b0a79b653662a5199046',
};
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
