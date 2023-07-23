window.onload=function(){
    //al caricamento della pagina mi inserisce 
    //domande e risposte nella pagina
    creazioneRadioLabel()
  }

  const domandeMescolate=mescolaArray(questions)
  const testoDomanda=document.querySelector("h1") 
  const shownumberquestion=document.querySelector("h3")
  let nDomandaCorrente=0
  let tRisp=tutteLeRisposte()
  const buttonNext=document.querySelector(".next")  
  let punteggio=0

  function mescolaArray(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  function tutteLeRisposte(){
    let answerAll=domandeMescolate[nDomandaCorrente].incorrect_answers.concat(domandeMescolate[nDomandaCorrente].correct_answer)
    console.log(answerAll)
    return answerAll=mescolaArray(answerAll)
  }

  function creazioneRadioLabel(){

    const divRisposte=document.getElementById("answers")
    divRisposte.innerHTML=""
    testoDomanda.innerText=domandeMescolate[nDomandaCorrente].question
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
    if(selezioneUtente&&selezioneUtente.value===domandeMescolate[nDomandaCorrente].correct_answer)
      punteggio++
  }

  buttonNext.addEventListener("click", function(){
    
    controllaRisposta()
    
    if(nDomandaCorrente<domandeMescolate.length-1){
      // controllaRisposta()
      nDomandaCorrente++
      tRisp=tutteLeRisposte(nDomandaCorrente)
      creazioneRadioLabel()
      shownumberquestion.innerHTML="QUESTION " + (nDomandaCorrente+1) +" / 10"
    }else {
      alert("Test terminato")      
      shownumberquestion.innerHTML="Hai Totalizzato "+ punteggio + " punti"
    }
  })
