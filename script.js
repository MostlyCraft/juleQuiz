let questionString = document.getElementById('question')
let sporsmaalsContainer = document.getElementById('question-container')
let alternativContainer = document.getElementById('alternativ-container')

let alternativKnapp_0 = document.getElementById('btn-0')
let alternativKnapp_1 = document.getElementById('btn-1')
let alternativKnapp_2 = document.getElementById('btn-2')
let alternativKnapp_3 = document.getElementById('btn-3')

let startKnapp = document.getElementById('start-btn')

let skjekkOmRettKnapp = document.getElementById('check-btn')
let nextQuestion = document.getElementById('next-btn')
let avsluttQuizKnapp = document.getElementById('end-quiz')

let questionIndex = 0;
let alternativIndex;
let poengSum = 0;

let sumString = document.getElementById('sumString')

const questions = [{
    question: 'Kortid er det julaften i Norge?',
    answer: [{
        text: '14 Desember',
        correct: false,
      },

      {
        text: '24 November',
        correct: false,
      },
      {
        text: '25 Desember',
        correct: false,
      },

      {
        text: '24 Desember',
        correct: true,
      },
    ]
  },
  {
    question: 'Kva skjedde i følge kristne tru på den 24.des?',
    answer: [{
        text: 'Moses blei født',
        correct: false,
      },

      {
        text: 'Nils-Jakob blei født',
        correct: false,
      },
      {
        text: 'Jesus blei født',
        correct: true,
      },

      {
        text: 'Gud blei født',
        correct: false,
      },
    ]
  },
  {
    question: 'Velg kva slags av desse som er norsk tradisjon',
    answer: [{
        text: 'Spise fåreribbe',
        correct: true,
      },

      {
        text: 'Åpne gåver',
        correct: true,
      },
      {
        text: 'Spise svineribbe',
        correct: true,
      },

      {
        text: 'Vere med familie',
        correct: true,
      },
    ]
  },
  {
    question: 'Kva varm drikke er vanlig å drikke i "Juletider" ',
    answer: [{
        text: 'Gløgg',
        correct: true,
      },

      {
        text: 'Vørterøl',
        correct: false,
      },
      {
        text: 'Milkshake',
        correct: false,
      },

      {
        text: 'Vatn',
        correct: false,
      }
    ]
  },
  {
    question: 'Kor mange helligdagar er det etter juledagen til skulestart?',
    answer: [{
        text: '3',
        correct: false,
      },

      {
        text: '2',
        correct: false,
      },
      {
        text: '5',
        correct: false,
      },

      {
        text: '4',
        correct: true,
      }
    ]
  },
  {
    question: 'Kva er på toppen av grana?',
    answer: [{
        text: 'Nordstjerna',
        correct: false,
      },

      {
        text: 'Jesus',
        correct: false,
      },
      {
        text: 'Buddha',
        correct: false,
      },

      {
        text: 'Julestjerna',
        correct: true,
      }
    ]
  },
  {
    question: 'Kor mange søndagar er det i advent?',
    answer: [{
        text: '8',
        correct: false,
      },

      {
        text: '5',
        correct: false,
      },
      {
        text: '2',
        correct: false,
      },

      {
        text: '4',
        correct: true,
      }
    ]
  },
  {
    question: 'Kva er den beste gava å få?',
    answer: [{
        text: 'Ei lita og mjuk',
        correct: false,
      },

      {
        text: 'Ei lita og hard',
        correct: true,
      },
      {
        text: 'Ei stor og mjuk',
        correct: false,
      },

      {
        text: 'Ei stor og hard',
        correct: true,
      }
    ]
  },
  {
    question: 'Kva er den mest sette julekalenderen på norsk TV?',
    answer: [{
        text: 'Jul i blåfjell',
        correct: false,
      },

      {
        text: 'Jesus',
        correct: false,
      },
      {
        text: 'Snøfall',
        correct: true,
      },

      {
        text: 'Julestjerna',
        correct: false,
      }
    ]
  },
  {
    question: 'Kortid åpnes julegavene i USA?',
    answer: [{
        text: 'Andre juledag',
        correct: false,
      },

      {
        text: 'Tredje juledag',
        correct: false,
      },
      {
        text: 'Første juledag',
        correct: true,
      },

      {
        text: 'Julaften',
        correct: false,
      }
    ]
  }
];

const antallSpm = questions.length - 1

function activateInputZero() {
  alternativKnapp_0.checked = true;
}
function activateInputOne() {
  alternativKnapp_1.checked = true;
}
function activateInputTwo() {
  alternativKnapp_2.checked = true;
}
function activateInputThree() {
  alternativKnapp_3.checked = true;
}

console.log(questions)

function startSpill() {
  startKnapp.classList.add("hide")
  sporsmaalsContainer.classList.remove("hide")
  skjekkOmRettKnapp.classList.remove("hide")

  questionIndex = 0;
  questionString.innerHTML = questions[questionIndex].question
  for (let test = 0; test <= 3; test++) {
    document.getElementById('btn-' + test).nextSibling.textContent = questions[questionIndex].answer[test].text;
  }
}

function nesteQuestion(){
  skjekkOmRettKnapp.classList.remove('hide')
  nextQuestion.classList.add('hide');
  console.log(questionIndex + " Question index");
  questionIndex +=1;
  questionString.style.background="";
  questionString.style.color="";
  for (let test = 0; test < questions[0].answer.length; test++){
    questionString.innerHTML = questions[questionIndex].question
    document.getElementById('btn-' + test).nextSibling.textContent = questions[questionIndex].answer[test].text;
    document.getElementById('btn-' + test).checked = false
    document.body.style.background = ""
    document.getElementById('btn-' + test).nextSibling.textContent = questions[questionIndex].answer[test].text;
    document.getElementById('btn-' + test).checked = false
    document.body.style.background = ""
  }

  if(questionIndex === antallSpm){
    alternativContainer.classList.add('hide')
    skjekkOmRettKnapp.classList.add('hide')
    nextQuestion.classList.add('hide')
    if(poengSum === questionIndex){
      document.getElementById('background-blink').classList.remove('hide')
      questionString.innerHTML="WHOHO du fekk"+ poengSum + ' / ' + questionIndex
    } else if (poensSum === 0){
      questionString.innerHTML="Du fekk ingen rette desverre, du må øve litt på jul..."
    } else{
      questionString.innerHTML="Gratulerer du fekk:"+ poengSum + ' / ' + questionIndex
    }
  }
}

function skjekkOmRett() {
  nextQuestion.classList.remove('hide')
  skjekkOmRettKnapp.classList.add('hide')
  if (alternativKnapp_0.checked && questions[questionIndex].answer[0].correct === true) {
    document.body.style.background = "green";
    questionString.style.background ="green"
    questionString.style.color ="white"
    questionString.innerHTML = "Woho det var heilt rett. <br> +1 poeng"
    poengSum += 1;
  } else if (alternativKnapp_1.checked && questions[questionIndex].answer[1].correct === true) {
    document.body.style.background = "green";
    questionString.style.background ="green"
    questionString.style.color ="white"
    questionString.innerHTML = "Woho det var heilt rett. <br> +1 poeng"
    poengSum += 1;
  } else if (alternativKnapp_2.checked && questions[questionIndex].answer[2].correct === true) {
    document.body.style.background = "green";
    questionString.style.background ="green"
    questionString.style.color ="white"
    questionString.innerHTML = "Woho det var heilt rett. <br> +1 poeng"
    poengSum += 1;
  } else if (alternativKnapp_3.checked && questions[questionIndex].answer[3].correct === true) {
    document.body.style.background = "green";
    questionString.style.background ="green"
    questionString.style.color ="white"
    questionString.innerHTML = "Woho det var heilt rett. <br> +1 poeng"
    poengSum += 1;
  } else {
    document.body.style.background = "red";
    console.log("Feil svar")
    questionString.innerHTML = "Desverre ingen poeng... feil svar."
  }
}

function quizResultater() {
  sporsmaalsContainer.classList.add('hide')
  skjekkOmRettKnapp.classList.add('hide')
  quizResultater.classList.add('hide')
  nesteQuestion.classList.add('hide')
}

console.log(questions.length)

if (questionIndex == questions.length){
  sporsmaalsContainer.classList.add ="hide"
}

