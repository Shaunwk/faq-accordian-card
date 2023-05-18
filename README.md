# Frontend Mentor - FAQ accordion card

### Links

- Live Site URL: https://shaunwk.github.io/faq-accordian-card/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I learned how to use a forEach method in JavaScript to iterate over the different FAQ questions. 
Also how to rotate a arrow in the if/else statement.


### Continued development

I am having trouble getting the full container to stay still when a FAQ question is dropped down. The entire container expands but I would like to make it just drop down. I will be trying to figure this out soon and will update the code when I figure it out. 

Another thing I need to work on is getting the JS to respond on the first click because right now on a fresh page load it takes 2 clicks to drop down an answer. 

Progress update 5/17/2023

Javascript has been fixed so the 2 clicks is no longer a issue. I was using a if/else statement and changed it to a classList.toggle instead.

CSS I added the new classes created by the classList.toggle and updated them as needed like .show has display:block; 
I incorporated some transition effects on the arrow so it rotates on click. I also used animation with a keyframe to ease in the answers.
