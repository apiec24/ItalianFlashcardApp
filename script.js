document.addEventListener('DOMContentLoaded', () => {
    const flashcard = document.querySelector('.flashcard');
    const front = document.querySelector('.front');
    const back = document.querySelector('.back');
    const nextButton = document.getElementById('next-button');
    const flipButton = document.getElementById('flip-button');
    const backButton = document.getElementById('back-button');
    const buttons = document.querySelectorAll('.sort-buttons button');
    const undstdButton = document.getElementById('understand-button');
    const practButton = document.getElementById('practice-button');
  
    const nounsVocab = [
      { italian: 'Gatto', english: 'Cat' },
      { italian: 'Cane', english: 'Dog' }, 
      { italian: 'Famiglia', english: 'Family' },
      { italian: 'Scuola', english: 'School' },
      { italian: 'Libro', english: 'Book' },
      { italian: 'Amico', english: 'Friend' },
      { italian: 'Casa', english: 'House' },
      { italian: 'Mare', english: 'Sea' }
    ];

    const verbsVocab = [
      { italian: 'Dovere', english: 'to need (irregular verb)'},
      { italian: 'Essere', english: 'to be (irregular verb)'},
      { italian: 'Volere', english: 'to want(irregular verb)'},
      { italian: 'Mangiare', english: 'to eat'},
      { italian: 'Noleggiare', english: 'to rent'},
      { italian: 'Studiare', english: 'to study'},
      { italian: 'Fare', english: 'to do (irregular verb)'},
      { italian: 'Parlare', english: 'to speak'},
      { italian: 'Dormire', english: 'to sleep'},
      { italian: 'Leggere', english: 'to read'},
      { italian: 'Correre', english: 'to run'},
      { italian: 'Andare', english: 'to go (irregular verb)'},
      { italian: 'Preparare', english: 'to prepare'},
      { italian: 'Comprare', english: 'to buy'},
      { italian: 'Giocare', english: 'to play (sport)'},
      { italian: 'Suonare', english: 'to play (music'},
      { italian: 'Aiutare', english: 'to help'},
      { italian: 'Cantare', english: 'to sing'},
      { italian: 'Credere', english: 'to believe'},
      { italian: 'Sperare', english: 'to hope'},
      { italian: 'Aprire', english: 'to open'},
      { italian: 'Pulire', english: 'to clean'},
      { italian: 'Cenare', english: 'to have dinner'},
      { italian: 'Partire', english: 'to start'},
      { italian: 'Preferire', english: 'to prefer'},
      { italian: 'Guadagnare', english: 'to earn'},
      { italian: 'Passare', english: 'to pass'},
      { italian: 'Ascoltare', english: 'to listen'},
      { italian: 'Amare', english: 'to love'},
      { italian: 'Arrivare', english: 'to arrive'},
      { italian: 'Guardare', english: 'to watch'},
      { italian: 'Aumentare', english: 'to increase'},
      { italian: 'Durare', english: 'to last'},
      { italian: 'Firmare', english: 'to sign'},
      { italian: 'Vivere', english: 'to live'},
      { italian: 'Accettare', english: 'to accept'},
      { italian: 'Gridare', english: 'to scream'},
      { italian: 'Lavare', english: 'to wash'},
      { italian: 'Curare', english: 'to cure'},
      { italian: 'Vestirsi', english: 'get dressed (reflexive verb)'},
      { italian: 'Alzarsi', english: 'get up (reflexive verb)'},
      { italian: 'Sentirsi', english: 'feel (physical) (reflexive verb)'},
      { italian: 'Vedersi', english: 'see each other/oneself (reflexive verb)'},
      { italian: 'Sposarsi', english: 'get married (reflexive verb)'},
      { italian: 'Lavarsi', english: 'wash oneself (reflexive verb)'},
      { italian: 'Chiamarsi', english: 'be called (reflexive verb)'},
      { italian: 'Amarsi', english: 'love yourself (reflexive verb)'},
      { italian: 'Svegliarsi', english: 'wake up (reflexive verb)'},
      { italian: 'Lavorare', english: 'to work'},
      { italian: 'Pranzare', english: 'to have lunch'},
      { italian: 'Rilassarsi', english: 'relax (reflexive verb)'},
      { italian: 'Lavarsi', english: 'clean (reflexive verb)'},
      { italian: 'Cucinare', english: 'to cook'},
      { italian: 'Camminare', english: 'to walk'},
      { italian: 'Tornare', english: 'to return'},
      { italian: 'Pettinarsi', english: 'to brush (reflexive verb'},
      { italian: 'Avere', english: 'to have (irregular verb)'},
      { italian: 'Bere', english: 'to drink (irregular verb)'},
      { italian: 'Cuocere', english: 'to cook (irregular verb)'},
      { italian: 'Dare', english: 'to give (irregular verb)'},
      { italian: 'Dire', english: 'to say (irregular verb)'},
      { italian: 'Piacere', english: 'to like (irregular verb)'},
      { italian: 'Morire', english: 'to die (irregular verb)'},
      { italian: 'Potere', english: 'to be able to/can (irregular verb)'},
      { italian: 'Rimanere', english: 'to remain/stay (irregular verb)'},
      { italian: 'Salire', english: 'to climb/go up (irregular verb)'},
      { italian: 'Sapere', english: 'to know (irregular verb)'},
      { italian: 'Spegnere', english: 'to turn off (irregular verb)'},
      { italian: 'Tenere', english: 'to hold (irregular verb)'},
      { italian: 'Uscire', english: 'to go out (irregular verb)'},
      { italian: 'Venire', english: 'to come (irregular verb)'},
    ];

    const adverbsVocab = [
      { italian: '', english: ''},
      { italian: '', english: ''},
      { italian: '', english: ''},
      { italian: '', english: ''},
    ];

    const adjectivesVocab = [
      { italian: '', english: ''},
      { italian: '', english: ''},
      { italian: '', english: ''},
      { italian: '', english: ''},
    ];

    const pronounsVocab = [
      { italian: 'Io', english: 'I'},
      { italian: 'Tu', english: 'You'},
      { italian: 'Lui/Lei', english: 'He/She'},
      { italian: 'Noi', english: 'We'},
      { italian: 'Voi', english: 'You (group)'},
      { italian: 'Loro', english: 'They/Them'},
    ];

    const phrasesVocab = [
      { italian: 'Senza ombra di dubbio', english: 'Without a doubt'},
      { italian: 'Mi dispiace', english: 'I am sorry'},
      { italian: 'Buongiorno', english: 'Good Morning'},
      { italian: 'Buenosera', english: 'Good Evening'},
      { italian: 'Grazie', english: 'Thanks'},
      { italian: 'Ce vediamo presto', english: 'Will see you soon'},
      { italian: 'Ciao', english: 'Hello'},
      { italian: 'Un po', english: 'A little bit'},
    ];


    let currentIndex = 0;
    let clickCount = 1;
    let newClickCount = 1;
    const statusMap = JSON.parse(localStorage.getItem('statusMap')) || {};
  
    function getActiveVocab() {
      const activeButton = document.querySelector('.sort-buttons .active');
      const vocabID = activeButton.id;
      switch(vocabID){
        case 'nouns':
          return nounsVocab;
        case 'verbs':
          return verbsVocab;
        case 'adverbs':
          return adverbsVocab;
        case 'adjectives':
          return adjectivesVocab;
        case 'pronouns':
          return pronounsVocab
        case 'phrases':
          return phrasesVocab
        default:
          return nounsVocab;
      };
    };
  
    function updateFlashcard() {
      const vocab = getActiveVocab();
      const { italian, english } = vocab[currentIndex];
      const front = document.querySelector('.front');
      const back = document.querySelector('.back');
  
      front.textContent = italian;
      back.textContent = english;
      
      const status = statusMap[`${italian}-${english}`];
      if (status === 'understood') {
        front.style.backgroundColor = 'lightgreen';
        back.style.backgroundColor = 'lightgreen';
        undstdButton.classList.add('active');
        practButton.classList.remove('active');
      } else if (status === 'need-practice') {
        front.style.backgroundColor = 'lightcoral';
        back.style.backgroundColor = 'lightcoral';
        practButton.classList.add('active');
        undstdButton.classList.remove('active');
      } else {
        front.style.backgroundColor = 'white';
        back.style.backgroundColor = 'white';
        undstdButton.classList.remove('active');
        practButton.classList.remove('active');
      }
    };
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove the 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Add the 'active' class to the clicked button
        button.classList.add('active');
  
        currentIndex = 0;
        updateFlashcard();
        flashcard.classList.remove('flipped');
        clickCount = 1;
        flipButton.innerHTML = "English";
      });
    });
  
    backButton.addEventListener('click', () => {
      const vocab = getActiveVocab();
      if(currentIndex !== 0){
        currentIndex = (currentIndex - 1) % vocab.length;
      } else {
        currentIndex = vocab.length - 1;
      }
      updateFlashcard();
      flashcard.classList.remove('flipped');
    });
  
    flipButton.addEventListener('click', () => {
      flashcard.classList.toggle('flipped');
      clickCount += 1;
      if(clickCount % 2 === 0){
        flipButton.innerHTML = "in l'Italiano";
        clickCount = 0;
      } else {
        flipButton.innerHTML = "English";
      }
      updateFlashcard();
    });
  
    nextButton.addEventListener('click', () => {
      const vocab = getActiveVocab();
      currentIndex = (currentIndex + 1) % vocab.length;
      updateFlashcard();
      flashcard.classList.remove('flipped');
      clickCount = 1;
      flipButton.innerHTML = "English";
    });


    function saveStatusMap() {
      localStorage.setItem('statusMap', JSON.stringify(statusMap));
    }
  
    undstdButton.addEventListener('click', () => {
      const vocab = getActiveVocab();
      const { italian, english } = vocab[currentIndex];
      const key = `${italian}-${english}`;
  
      if (statusMap[key] === 'understood') {
        delete statusMap[key];
      } else {
        statusMap[key] = 'understood';
        practButton.classList.remove('active');
      }
  
      saveStatusMap();
      updateFlashcard();
    });
  
    practButton.addEventListener('click', () => {
      const vocab = getActiveVocab();
      const { italian, english } = vocab[currentIndex];
      const key = `${italian}-${english}`;
  
      if (statusMap[key] === 'need-practice') {
        delete statusMap[key];
      } else {
        statusMap[key] = 'need-practice';
        undstdButton.classList.remove('active');
      }
  
      saveStatusMap();
      updateFlashcard();
    });
  
    // Initial display
    updateFlashcard();
  });
  