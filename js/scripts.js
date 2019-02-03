window.onload = function() {
    setTimeout(function() {
      document.querySelector('.card-animation').classList.add('active');
    }, 300);
  }
  
  // Replay on click
  window.onclick = function() {
    document.querySelector('.card-animation').classList.remove('active');
    
    setTimeout(function() {
      document.querySelector('.card-animation').classList.add('active');
    }, 2000);
  }