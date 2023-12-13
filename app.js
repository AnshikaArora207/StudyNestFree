const firebaseConfig = {
  apiKey: "AIzaSyDn4RHIu6mtNuOjELGiiafD7Cacj1tVCvo",
  authDomain: "realtime-comment-system-6e500.firebaseapp.com",
  databaseURL: "https://realtime-comment-system-6e500-default-rtdb.firebaseio.com",
  projectId: "realtime-comment-system-6e500",
  storageBucket: "realtime-comment-system-6e500.appspot.com",
  messagingSenderId: "897422691159",
  appId: "1:897422691159:web:7525ab154631306070cc12"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firestore database service
const db = firebase.firestore();

// Reference to the 'comments' collection
const commentsRef = db.collection("comments");

// Function to display comments
function displayComments() {
  commentsRef.get().then((querySnapshot) => {
    const commentsContainer = document.querySelector('.container.cont'); // Target the container where comments will be displayed

    querySnapshot.forEach((doc) => {
      const commentData = doc.data();
      const commentElement = document.createElement('div');
      commentElement.innerHTML = `<div class="bg-white rounded-lg flex flex-col shadow-cyan-400/80 shadow-xl my-4 text-black p-2">
        <p><strong>Name : </strong> ${commentData.name}</p>
        <p><strong>Comment : </strong> ${commentData.comment}</p>
        </div>
      `;
      commentsContainer.appendChild(commentElement);
    });
  }).catch((error) => {
    console.error("Error getting comments: ", error);
  });
}

// Call the displayComments function to fetch and display comments when the page loads
window.addEventListener('load', displayComments);

// Form submission and saving comment function (if needed)
document.getElementById('comments').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal('name');
  var comment = getElementVal('comment');
  saveMessage(name, comment);
  document.getElementById('comments').reset(); // Reset form after submission
}

const getElementVal = (id) => {
  return document.getElementById(id).value;
}

const saveMessage = (name, comment) => {
  commentsRef.add({
    name: name,
    comment: comment
  })
  .then(() => {
    console.log("Comment added successfully!");
  })
  .catch((error) => {
    console.error("Error adding comment: ", error);
  });
}