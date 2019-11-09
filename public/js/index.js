let url = `/products`;
let results = document.querySelector('.results');
let lowQty = document.querySelector('.red')

fetch(url).then(response => {
  return response.json();
}).then(data => {
  data.filter(item => {
    
    
    results.innerHTML += `
  

    <div class="prod">
    <div class="prod_name">${item.prod_name}</div>
    <div class="prod_price">${item.price}</div>
    <div class="prod_qty ">
    ${item.qty}<span class="${indicator(item.qty)} "> ${command(item.qty)}</span></div>
    <div class="prod_total">${item.total}</div>
    </div>`;
   
  })
  console.log(data);
  
})

function indicator(data) {
const trans =parseInt(data)
  if(trans >=3){
    return "green";
  }
  else {
     return "red";
  }
}
function command(data) {
const trans =parseInt(data)
  if(trans >=3){
    return "";
  }
  else {
     return "passes commande";
  }
}
