document.getElementById('increment').addEventListener('click', function() {
    var counterValue = document.getElementById('counter-value');
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
  });
  
  document.getElementById('decrement').addEventListener('click', function() {
    var counterValue = document.getElementById('counter-value');
    var currentValue = parseInt(counterValue.textContent);
    
    // Sıfırdan küçük olmaması için kontrol
    if (currentValue > 0) {
      counterValue.textContent = currentValue - 1;
    }
  });
  
 