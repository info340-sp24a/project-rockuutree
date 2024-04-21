const radioButtons = document.querySelectorAll('.form-check-input');
radioButtons.forEach(button => {
  button.addEventListener('click', () => {
    radioButtons.forEach(btn => {
      if (btn !== button) {
        btn.checked = false;
      }
    });
  });
});