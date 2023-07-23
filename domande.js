window.onload=function(){
    // let labelAnswer=document.querySelectorAll(".risp")
    // let radioRisposte=document.querySelectorAll("input[name='answer']")
    // let h3QuestionN=document.querySelector("h3")
    
    // allAnswers()
    // proceed(n)
    creazioneRadioLabel()
  }
  
  const testoDomanda=document.querySelector("h1")
  const shownumberquestion=document.querySelector("h3")
  let nDomandaCorrente=0
  let tRisp=tutteLeRisposte()
  const buttonNext=document.querySelector(".next")  
  let punteggio=0

  function tutteLeRisposte(){
    let answerAll=questions[nDomandaCorrente].incorrect_answers.concat(questions[nDomandaCorrente].correct_answer)
    console.log(answerAll)
    return answerAll
  }

  function creazioneRadioLabel(){
    const divRisposte=document.getElementById("answers")
    divRisposte.innerHTML=""
    testoDomanda.innerText=questions[nDomandaCorrente].question
    for (const answer of tRisp) {
    const inputRisp=document.createElement('input')
    inputRisp.type = 'radio'
    inputRisp.name = 'answer'
    inputRisp.value = answer
    inputRisp.id = answer
    const labelRisp=document.createElement('label')
    const divRisposte=document.getElementById("answers")
    labelRisp.innerText = answer
    labelRisp.htmlFor=answer
    divRisposte.appendChild(inputRisp)
    divRisposte.appendChild(labelRisp)     
    }
  }

  function controllaRisposta(){
    const selezioneUtente=document.querySelector('input[name="answer"]:checked')
    if(selezioneUtente&&selezioneUtente.value===questions[nDomandaCorrente].correct_answer)
      punteggio++
  }

  buttonNext.addEventListener("click", function(){
    // let h3QuestionN=document.querySelector("h3")
    
    if(nDomandaCorrente<questions.length-1){
      controllaRisposta()
      nDomandaCorrente++
      tRisp=tutteLeRisposte(nDomandaCorrente)
      creazioneRadioLabel()
      shownumberquestion.innerHTML="QUESTION " + (nDomandaCorrente+1) +" / 10"
    }else {
      alert("Test terminato")      
      shownumberquestion.innerHTML="Hai Totalizzato "+ punteggio + " punti"
    }
  })
