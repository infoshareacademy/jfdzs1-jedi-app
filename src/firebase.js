import firebase from 'firebase'

                    const config = {
                    apiKey: "AIzaSyDcwN94RaxBOlMusc3ncRYQ3F1Mh63AoEQ",
                    authDomain: "project-jedi-72218.firebaseapp.com",
                    databaseURL: "https://project-jedi-72218.firebaseio.com",
                    projectId: "project-jedi-72218",
                    storageBucket: "project-jedi-72218.appspot.com",
                    messagingSenderId: "807089447575"
                };
                    firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();

export const auth = new firebase.auth();
