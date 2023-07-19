   
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


//funzione per confrontare le risposte corrette 
//con quelle dell'utente 
function controllarisposte(rispUser){
  for (let i=0;i<questions.length;i++) {
    if(rispUser[i]===questions[i].correct_answer){
      score+=1;
    }
  }
}

let allAns=[]
function allAnswers(){
  // const oneAns={uno:"",due:"",tre:"",quattro:""}
    for(let x=0;x<questions.length;x++){
      if(questions[x].type!="boolean"){
      const oneAns={uno:"",due:"",tre:"",quattro:""}
      oneAns.uno=questions[x].correct_answer
      oneAns.due=questions[x].incorrect_answers[0]
      oneAns.tre=questions[x].incorrect_answers[1]
      oneAns.quattro=questions[x].incorrect_answers[2]
      allAns.push(oneAns)
      }else{
        const bAns={uno:"",due:""}
        bAns.uno=questions[x].correct_answer
        bAns.due=questions[x].incorrect_answers[0]
        allAns.push(bAns)
      }
    }
    // let currentIndex=allAns.length, randomIndex
    // while(currentIndex!=0){
    //   randomIndex=Math.floor(Math.random()*currentIndex)
    //   currentIndex--
    //   [allAns[currentIndex], allAns[randomIndex]]=[allAns[randomIndex],allAns[currentIndex]]
    // }
  return allAns
}

//variabile per il controllo del numero della domanda
let n=0

function random(){  
  return Math.floor(Math.random()*4)
}

function proceed(nDom){
  const buttonAnswer=document.querySelectorAll(".answer")
  const questionLabel=document.querySelector("h1.question")
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
    buttonAnswer[nRan1].innerHTML=allAns[nDom].uno
    buttonAnswer[nRan2].innerHTML=allAns[nDom].due
    buttonAnswer[nRan3].innerHTML=allAns[nDom].tre
    buttonAnswer[nRan4].innerHTML=allAns[nDom].quattro
  }
  //buttonAnswer[0].innerHTML=questions[0].correct_answer


window.onload=function(){
  allAnswers()
  proceed(n)
  let buttonAnswer=document.querySelectorAll(".answer")
  let h3QuestionN=document.querySelector("h3")
  h3QuestionN.innerHTML="Question " + (n+1) +" / 10"
  // buttonAnswer[0].innerHTML=questions[0].correct_answer
  
  
  for (const bA of buttonAnswer) {
     //al click di una delle risposte  
      bA.addEventListener("click", function(event){
        //aggiungo all'array delle risposte dell'utente la risposta cliccata
        answersUser.push(event.target.innerHTML)

        //per vedere con un alert la risposta cliccata
        alert(event.target.innerHTML)
        n++;
        h3QuestionN.innerHTML="Question " + (n+1) +" / 10"
        if(n<questions.length){
        proceed(n)
        }else {
          alert("Test terminato")
          for (const bOff of buttonAnswer) {
            bOff.remove()
          }
          document.querySelector("h1.question").remove()
          controllarisposte(answersUser)
          // alert("hai totalizzato " + score)
          h3QuestionN.innerHTML="Hai Totalizzato "+ score + " punti"
        }
    })
  }
}
