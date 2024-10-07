document.addEventListener('DOMContentLoaded', () => {
    const message = document.getElementById('message');
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const buttons = document.getElementById('buttons');
    const iceCream = document.getElementById('iceCream');
    const teddyBear = document.getElementById('teddyBear');
    const cuteContent = document.getElementById('cute-content');
  
    // Show the message first, then the buttons
    setTimeout(() => {
      message.innerText = "Will you take me for an ice cream? 🍦";
      message.style.opacity = 1;
    }, 1000);
  
    // Show the buttons after a delay
    setTimeout(() => {
      buttons.style.opacity = 1;
    }, 3000);
  
    // Move the 'No' button when hovered
    noButton.addEventListener('mouseover', () => {
      const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
      const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
      noButton.style.position = 'absolute';
      noButton.style.left = `${randomX}px`;
      noButton.style.top = `${randomY}px`;
    });
  
    // Handle "Yes" button click
    yesButton.addEventListener('click', () => {
      // Hide buttons and the original message
      buttons.style.opacity = 0;
      message.style.opacity = 0;
  
      // After a short delay, show "I love you" and cute content
      setTimeout(() => {
        message.innerText = "I love you ❤️";
        message.classList.add('heartbeat');
        message.style.opacity = 1;
        iceCream.classList.remove('hidden');
        teddyBear.classList.remove('hidden');
        cuteContent.style.opacity = 1;
      }, 1500);
    });
  });
  
  
  