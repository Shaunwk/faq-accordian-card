// const questions = document.querySelector('.questions');
// const answers = document.querySelector('.answers');
// const arrow = document.querySelector('.arrow');

// questions.addEventListener('click', function(){
//     if(answers.style.display === 'none'){
//         answers.style.display = 'block';
//     } else {
//         answers.style.display = 'none';
//     }
// });


//Chat GPT reccomended code//

const questionElements = document.querySelectorAll('.questions');
const arrowElements = document.querySelectorAll('.arrow');

questionElements.forEach(function(question) {
  question.addEventListener('click', function() {
    const answer = this.querySelector('.answers');
    if (answer.style.display === 'none') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';
    }
  });
});

/*By using querySelectorAll, the code selects 
all elements with the class name 'questions' 
and iterates over them using the forEach method.
Inside the event listener function, it selects 
the corresponding answer element using 
querySelector('.answers') on the clicked question element. 
*/