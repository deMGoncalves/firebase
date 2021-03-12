import firebase from 'firebase/app';
import settings from "./settings";
import 'firebase/analytics';
import 'firebase/performance';
firebase.initializeApp(settings);
export default firebase;
