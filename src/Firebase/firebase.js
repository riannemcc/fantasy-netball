
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}



class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig)

    this.auth = app.auth()
    this.db = app.firestore()
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password)

  doLogInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password)

  doLogOut = () => this.auth.signOut()

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password)

  // *** User API ***
  user = uid => this.db.collection('users').doc(uid);
  users = () => this.db.collection('users').get();
  get currentUserId() {
    return this.auth.currentUser && this.auth.currentUser.uid
  }
  getUserData = (uid) => this.user(uid).get()
  updateUserData = (uid, data) => this.db.collection('users').doc(uid).update(data)

  players = () => this.db.collection('players').orderBy('name').get();
  playersByPositions = positions => this.db.collection('players').where('position', 'array-contains-any', positions).get();
}

export default Firebase
