// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase, set, ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFVbOkAS6aYci2I1Csy0FFaWtI9am-tdE",
  authDomain: "quizappna.firebaseapp.com",
  projectId: "quizappna",
  storageBucket: "quizappna.appspot.com",
  messagingSenderId: "322867345550",
  appId: "1:322867345550:web:46deccabed8fb5e0af71df",
  measurementId: "G-56TQCKD8BV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

var question = document.getElementById('question');
var option = document.getElementById('option');
var optionParent = document.getElementById('optionParent');
var correctAnswerElem = document.getElementById('correctAnswer');

var options = []
var correctAnswer

function renderOptions(){
  optionParent.innerHTML = ''
  for(var i=0; i<options.length; i++){
    optionParent.innerHTML += `<li onclick="setCorrctAnswer('${options[i]}')" class='p-2 bg-light fs-5 rounded shadow my-2'>${options[i]}</li>`
  }
}

window.addOption = function(){
  options.push(option.value)
  console.log(options)
  renderOptions();
}

window.setCorrctAnswer = function(){

}

window.setCorrctAnswer = function (a) {
  correctAnswer = a;
  correctAnswerElem.innerHTML = correctAnswer;
}

window.submitQuestion = function () {
  var obj = {
    question: question.value,
    options: options,
    correctAnswer: correctAnswer
  }

  // data over writting so do this & and also import push from data base

  obj.id = push(ref(db, 'questions/')).key;

  // data transfering to real time firebase

  const reference = ref(db, `questions/${obj.id}`);
  set(reference, obj);


  console.log(obj);
}