 const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
    const list = document.createElement('ul');

    // Add your code here
for(let i = 0; i < myArray.length; i++){
  const li = document.createElement('li');
  li.textContent = myArray[i];
  list.appendChild(li);
}
  

    // Don't edit the code below here!

    const section = document.querySelector('section');
    section.appendChild(list);
