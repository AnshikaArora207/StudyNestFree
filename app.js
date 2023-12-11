const firebaseConfig = {
  apiKey: "AIzaSyDn4RHIu6mtNuOjELGiiafD7Cacj1tVCvo",
  authDomain: "realtime-comment-system-6e500.firebaseapp.com",
  databaseURL: "https://realtime-comment-system-6e500-default-rtdb.firebaseio.com",
  projectId: "realtime-comment-system-6e500",
  storageBucket: "realtime-comment-system-6e500.appspot.com",
  messagingSenderId: "897422691159",
  appId: "1:897422691159:web:7525ab154631306070cc12"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref("comments");

document.getElementById('comments').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal('name');
  var comment = getElementVal('comment');
  console.log(name, comment);
  saveMessage(name, comment);
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}

const saveMessage = (name, comment) => {
  var key = db.push();
  key.set({
    name: name,
    comment: comment
  })
}



// const form = document.getElementById('comments');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('comments').add({
//        name: form.name.value,
//        comment: form.comment.value
//     });
//     form.name.value = '';
//     form.comment.value = '';
// });