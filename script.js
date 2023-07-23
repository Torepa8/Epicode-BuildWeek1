   
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
let answersUser=[]

//punteggio utente 
let score=0

let allAns=[]  //array con tutte le risposte di tutte le domande
//funzione che inserisce tutte le risposte in un array
function allAnswers(){
  const allR=questions.incorrect_answers.concat(questions.correct_answer)
  alert(allR)
  // const oneAns={uno:"",due:"",tre:"",quattro:""}
    for(let x=0;x<questions.length;x++){
      if(questions[x].type!="boolean"){
      const oneAns={}
      oneAns.uno=questions[x].correct_answer
      oneAns.due=questions[x].incorrect_answers[0]
      oneAns.tre=questions[x].incorrect_answers[1]
      oneAns.quattro=questions[x].incorrect_answers[2]
      allAns.push(oneAns)
      }else{
        const bAns={}
        bAns.uno=questions[x].correct_answer
        bAns.due=questions[x].incorrect_answers[0]
        allAns.push(bAns)
      }
    }
  return allAns
}

//funzione che abilita il bottone quando la check è spuntata
function oncheck(){
  document.querySelector("#start").disabled=!document.querySelector("input").checked
}

//variabile per il controllo del numero della domanda
let n=0


//generare numero a caso tra 0 e 3
function random(){  
  return Math.floor(Math.random()*4)
}


//questa funzione inserisce nelle label tutte le risposte
//della domanda (nDom - n) che viene passata come parametro
//una volta che clicchiamo next

function proceed(nDom){
  const labelAnswer=document.querySelectorAll(".risp")
  const questionLabel=document.querySelector(".question")
  // const radioRisposte=document.querySelectorAll("input[name='answer']")
    console.log(allAns)
    questionLabel.innerHTML=questions[nDom].question
    let nRan1=random()
    
    let nRan2=0
    while(nRan2===nRan1){
         nRan2=random()
      }
      let nRan3=0
      while((nRan3===nRan1)||(nRan3===nRan2)){
        nRan3=random()
      }
      let nRan4=0
      while((nRan4===nRan1)||(nRan4===nRan2)||(nRan4===nRan3)){
       nRan4=random()
      }
    labelAnswer[nRan1].innerHTML=allAns[nDom].uno
    labelAnswer[nRan2].innerHTML=allAns[nDom].due
    labelAnswer[nRan3].innerHTML=allAns[nDom].tre
    labelAnswer[nRan4].innerHTML=allAns[nDom].quattro
  }

function controlCheckAnswer(radButt,labRisp){
  for (let i=0;i<radButt.length;i++) {
    if(radButt[i].checked){
      // document.querySelector(.next).disabled=false
      answersUser.push(labRisp[i].innerHTML)
      // alert(labRisp[i].innerHTML)
      break;
    }
  }
}

 //funzione per confrontare le risposte corrette
//con quelle dell'utente 
function controllarisposte(){
  for (let i=0;i<questions.length;i++) {
    if(answersUser[i]===questions[i].correct_answer){
      score+=1;
    }
  }
  return score
}
