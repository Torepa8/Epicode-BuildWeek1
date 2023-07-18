   
    const questions = [
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
          "Central Process Unit",
          "Computer Personal Unit",
          "Central Processor Unit",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
          "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
          "Counter Strike: Source",
          "Corrective Style Sheet",
          "Computer Style Sheet",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
          "Ice Cream Sandwich",
          "Jelly Bean",
          "Marshmallow",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
      },
    ];


//Abbiamo un array di domande composto da:
//category, type, difficulty, question, correct_answer, incorrect_answers

//per prima cosa direi di preparare la pagina iniziale che sarà composta da:
//logo epicode, titolo (Welcome to Your Exam), instructions, lista di info, 
//campo checked da flaggare per abilitare il bottone di inizio esame.

//array di risposte utente da caricare mentre fa il test
//ora ho messo delle risposte per provare il funzionamento
let answersUser=[
  "Central Processing Unit",
  "Final",
  "False",
  "Computer Personal Unit",
  "Final",
  "False",
  "Nougat",
  "140",
  "False",
  "Java"
]
//punteggio utente 
let score=0


//funzione per confrontare le risposte corrette 
//con quelle dell'utente 
function controllarisposte(rispUser){
  for (let i=0;i<questions.length;i++) {
    if(rispUser[i]===questions[i].correct_answer){
      score+=1;
    }
  }
}


function allAnswers(){
  let allAns=[]
  // const oneAns={uno:"",due:"",tre:"",quattro:""}
    for(let x=0;x<questions.length;x++){
      const oneAns={uno:"",due:"",tre:"",quattro:""}
      oneAns.uno=questions[x].correct_answer
      oneAns.due=questions[x].incorrect_answers[0]
      oneAns.tre=questions[x].incorrect_answers[1]
      oneAns.quattro=questions[x].incorrect_answers[2]
      allAns.push(oneAns)
      // alert(oneAns)
    }
  return allAns
}
// controllarisposte(answersUser)

// console.log("Hai totalizzato "+ score + " su 10")

window.onload=function(){
  const buttonStart=document.getElementById("start")
  buttonStart.addEventListener("click", function(){
    
    //elimino h1,h3, dalla pagina
    let h1=document.querySelector("h1")
    h1.remove()
    let h3=document.querySelector("h3")
    h3.innerText=questions[0].question
    let p=document.querySelector("p")
    p.remove()
    let divF=document.querySelector("div.footer")
    divF.remove()

    alert("Sta per iniziare il tuo esame")

    //al click del bottone proceed parte questo
    let newli=document.createElement('li')
    let domand=document.querySelector('ul')
    
    //newli.innerText=questions[0].incorrect_answers[0]
    // console.log(newli.innerText)
    domand.appendChild(newli)
    let radioButton=document.createElement('input')
    radioButton.setAttribute("type", "radio")
    // newli.classList.add("newClass")
    radioButton.innerHTML=questions[0].correct_answer
    console.log(radioButton.innerText)
    domand.appendChild(radioButton)

    let TutteRisposte=[]=allAnswers()
    console.log(TutteRisposte)
  })
}
