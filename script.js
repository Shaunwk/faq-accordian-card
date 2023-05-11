const accordianItem = document.querySelectorAll('.accordian-item');

accordianItem.forEach(function(item){
  const question = item.querySelector('.accordian-question');
  const answer = item.querySelector('.accordian-answer');
  const arrow = item.querySelector('.accordian-arrow');

  question.addEventListener('click', function(){
    if(answer.style.display === 'none'){
      question.classList.add('active'); //so I can make the question turn black when the answer is out
      answer.style.display = 'block';
      arrow.style.transform = 'rotate(180deg)';
    } else {
      question.classList.remove('active');
      answer.style.display = 'none';
      arrow.style.transform = 'rotate(0deg)';
    }
  })

  

});