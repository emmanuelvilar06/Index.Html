function openModal() {
    var designDiv = document.getElementById("designDiv");
    if (designDiv.classList.contains("translate-x-[-100%]")) {
        designDiv.classList.remove("translate-x-[-100%]");
        designDiv.classList.add("translate-x-0");
    } else {
        designDiv.classList.remove("translate-x-0");
        designDiv.classList.add("translate-x-[-100%]");
    }
}
function closeBtn(){
    var designDiv = document.getElementById("designDiv");
    designDiv.classList.remove("translate-x-0");
    designDiv.classList.add("translate-x-[-100%]");
}

const element = document.getElementById('typing');
    const words = ["Emman ", "ICT Student ", "Handsome ASF! "];
    let wordIndex = 0;
    let letterIndex = 0;
    let currentWord = "";
    let isDeleting = false;

    function typeEffect() {
      if (wordIndex >= words.length) wordIndex = 0; // Restart loop

      currentWord = words[wordIndex];
      element.textContent = isDeleting
        ? currentWord.substring(0, letterIndex--)
        : currentWord.substring(0, letterIndex++);

      if (!isDeleting && letterIndex === currentWord.length) {
        // Pause after typing
        isDeleting = true;
        setTimeout(typeEffect, 1000);
      } else if (isDeleting && letterIndex === 0) {
        // Move to next word
        isDeleting = false;
        wordIndex++;
        setTimeout(typeEffect, 600);
      } else {
        // Continue typing or deleting
        setTimeout(typeEffect, isDeleting ? 50 : 100);
      }
    }

    // Start Typing Effect
    typeEffect();

    const burgerButton = document.getElementById('burgerButton');
    const menu = document.getElementById('menu');

    burgerButton.addEventListener('click', () => {
      if (menu.classList.contains('translate-x-[-100%]')) {
          menu.classList.remove('translate-x-[-100%]'); // Slide-in
          menu.classList.add('translate-x-0');
      } else {
          menu.classList.remove('translate-x-0'); // Slide-out
          menu.classList.add('translate-x-[-100%]');
      }
  });