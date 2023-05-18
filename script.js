const accordianItem = document.querySelectorAll('.accordian-item');

accordianItem.forEach(function(item) {
  const question = item.querySelector('.accordian-question');
  const answer = item.querySelector('.accordian-answer');
  const arrow = item.querySelector('.accordian-arrow');

  question.addEventListener('click', function() {
    answer.classList.toggle('show');
    arrow.classList.toggle('rotate');
  });
});
