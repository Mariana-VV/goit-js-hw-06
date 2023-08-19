const count = (parameter) => {
  let counter = 0;
 parameter.forEach((item) => {
    counter++;
  });
  return console.log('Number of categories:' + counter);
};


 const countElements = (parameter) =>{
    parameter.forEach(element =>{
       console.log('Category:' + element.querySelector('h2').textContent);
       count(element.querySelectorAll('li'))
    })
   
   
    };


    const element = document.querySelectorAll('.item');
count(element);
    countElements(element);