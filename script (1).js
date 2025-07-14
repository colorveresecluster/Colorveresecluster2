document.getElementById('spinBtn')?.addEventListener('click', () => {
      const options = ['Red', 'Green', 'Blue', 'Big', 'Small', 'Number'];
        const result = options[Math.floor(Math.random() * options.length)];
          document.getElementById('result').textContent = `Result: ${result}`;
          });

          document.querySelectorAll('.bet-btn')?.forEach(button => {
            button.addEventListener('click', () => {
                alert(`Bet placed on: ${button.dataset.bet}`);
                  });
                  });
})