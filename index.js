function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div.target')
}


 function increaseRankBy(n) {
  var listItems =  document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < listItems.length; i++) {

     listItems[i].innerHTML = parseInt(listItems[i].innerHTML) + n;
  }
} 

 function deepestChild() {
  var search = document.getElementById('grand-node').querySelectorAll('div'); 
 
  for (let i = 0; i < search.length; i++) {
    if (search[i] == search.length - 1)  {
      return search[i]
    }
  } 
} 

/* function deepestChild() {
  var lis=document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i=0;i<lis.length - 1;i++) {
    test=lis[i].querySelector("div");
  }
return test;
} */


