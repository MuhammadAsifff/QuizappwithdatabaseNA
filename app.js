 
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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
 
const db = getDatabase() 

var loader = document.getElementById('loader');
var showQuestion = document.getElementById('showQuestion');
 
 
function getDataFromDtabase() {
    loader.style.display = 'block';
    showQuestion.style.display = 'none';

    const reference = ref(db, 'questions/');
    onChildAdded(reference, function (data) {
        console.log(data.val())
        questions.push(data.val());
        loader.style.display = 'none';
        showQuestion.style.display = 'block';
        renderQuestion();
    })
}
getDataFromDtabase();
 
 
 
 
 var questions = [
    // {
    //     question: "Html stands for _____________",
    //     option: ["hyper markup", "JS", "hyper text markup language", "cascading style sheet"],
    //     correctAns: "hyper text markup language"
    // },
    // {
    //     question: "JS stands for _____________",
    //     option: ["java script", "hyper text markup language", "css", "html"],
    //     correctAns: "java script"
    // },
    // {
    //     question: "CSS stands for _____________",
    //     option: ["cascading style sheet", "hyper text markup language", "Java Script", "html"],
    //     correctAns: "cascading style sheet"
    // },

    // {
    //     question: "RAM stands for _____________",
    //     option: ["random access memoery", "hyper text markup language", "html", "html"],
    //     correctAns: "random access memoery"
    // },
    // {
    //     question: "ROM stands for _____________",
    //     option: ["read only memory", "hyper text markup language", "html", "html"],
    //     correctAns: "read only memory"
    // }
]


var currentQuestion = document.getElementById('currentQuestion');
var totalQuestion = document.getElementById('totalQuestion');
var question = document.getElementById('question');
var answerParent = document.getElementById('answerParent');

var indexNum = 0;
var score = 0;

window.checkQuestion = function (a,b) {
    if (a == b) {
        score++
        console.log(score);
    }
    nextQuestion()
}
window.nextQuestion = function () {
    if (indexNum + 1 == questions.length) {
        alert('Your score is ' + score);
    } else {
        indexNum++
        renderQuestion()
    }
    
}

function renderQuestion(){
    currentQuestion.innerHTML = indexNum + 1;
    totalQuestion.innerHTML = questions.length;

    var obj = questions[indexNum];

    answerParent.innerHTML = ''

    question.innerHTML = obj.question
    for (var i =0; i< obj.options.length; i++){
        answerParent.innerHTML += ` <div class="col-md-4">
        <div class="py-2">
            <button onclick="checkQuestion('${obj.options[i]}','${obj.correctAnswer}')" class="btn btn-dark fs-4 rounded-pill w-100">
                ${obj.options[i]}
            </button>
        </div>
     </div>`
    }
}
renderQuestion();









