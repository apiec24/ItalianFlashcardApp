document.addEventListener('DOMContentLoaded', () => {
    const flashcard = document.querySelector('.flashcard');
    const nextButton = document.getElementById('next-button');
    const flipButton = document.getElementById('flip-button');
    const backButton = document.getElementById('back-button');
  
    const vocabulary = [
      { italian: 'Ciao', english: 'Hello' },
      { italian: 'Amore', english: 'Love' },
      { italian: 'Gatto', english: 'Cat' },
      { italian: 'Cane', english: 'Dog' },git 
      { italian: 'Famiglia', english: 'Family' },
      { italian: 'Scuola', english: 'School' },
      { italian: 'Libro', english: 'Book' },
      { italian: 'Amico', english: 'Friend' },
      { italian: 'Casa', english: 'House' },
      { italian: 'Mare', english: 'Sea' }
      // Add more words here
    ];
  
    let currentIndex = 0;
    let clickCount = 1;
  
    function updateFlashcard() {
      const { italian, english } = vocabulary[currentIndex];
      const front = document.querySelector('.front');
      const back = document.querySelector('.back');
  
      front.textContent = italian;
      back.textContent = english;
    }
  
    // flashcard.addEventListener('click', () => {
    //   flashcard.classList.toggle('flipped');
    // });
  
    backButton.addEventListener('click', () => {
      if(currentIndex!=0){
        currentIndex = (currentIndex - 1) % vocabulary.length;
        updateFlashcard();
        flashcard.classList.remove('flipped');
      }else if(currentIndex==0){
        currentIndex = (vocabulary.length - 1) % vocabulary.length;
        updateFlashcard();
        flashcard.classList.remove('flipped');
      };
    });

    flipButton.addEventListener('click', () => {
      flashcard.classList.toggle('flipped');
      updateFlashcard
      clickCount += 1;
      if(clickCount%2 == 0){
        flipButton.innerHTML = "in l'Italiano"
        clickCount = 0
      }else if(clickCount%2 == 1){
        flipButton.innerHTML = "English"
      };
    });

    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % vocabulary.length;
      updateFlashcard();
      flashcard.classList.remove('flipped');
    });
  
    // Initial display
    updateFlashcard();
  });
  