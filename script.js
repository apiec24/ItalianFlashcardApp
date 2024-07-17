document.addEventListener('DOMContentLoaded', () => {
    const flashcard = document.querySelector('.flashcard');
    const nextButton = document.getElementById('next-button');
    const flipButton = document.getElementById('flip-button');
    const backButton = document.getElementById('back-button');
    const buttons = document.querySelectorAll('.sort-buttons button');
  
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
      { italian: 'Dovere', english: 'to need'},
      { italian: 'Andare', english: 'to go'},
      { italian: 'Essere', english: 'to be'},
      { italian: 'Volere', english: 'to want'},
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
      { italian: '', english: ''},
      { italian: '', english: ''},
      { italian: '', english: ''},
      { italian: '', english: ''},
    ];

    const phrasesVocab = [
      { italian: '', english: ''},
      { italian: '', english: ''},
      { italian: '', english: ''},
      { italian: '', english: ''},
    ];


    let currentIndex = 0;
    let clickCount = 1;


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
    };
  
    // flashcard.addEventListener('click', () => {
    //   flashcard.classList.toggle('flipped');
    // });
  

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
      if(currentIndex!=0){
        currentIndex = (currentIndex - 1) % vocab.length;
        updateFlashcard();
        flashcard.classList.remove('flipped');
      }else if(currentIndex==0){
        currentIndex = (vocab.length - 1) % vocab.length;
        updateFlashcard();
        flashcard.classList.remove('flipped');
      };
    });

    flipButton.addEventListener('click', () => {
      flashcard.classList.toggle('flipped');
      clickCount += 1;
      if(clickCount%2 == 0){
        flipButton.innerHTML = "in l'Italiano"
        clickCount = 0
      }else if(clickCount%2 == 1){
        flipButton.innerHTML = "English"
      };
      updateFlashcard();
    });

    nextButton.addEventListener('click', () => {
      const vocab = getActiveVocab();
      currentIndex = (currentIndex + 1) % vocab.length;
      updateFlashcard();
      flashcard.classList.remove('flipped');
      clickCount = 1
      flipButton.innerHTML = "English"
    });
  
    // Initial display
    updateFlashcard();
  });
  