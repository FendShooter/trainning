let url = `/products`;
let results = document.querySelector('.results')

fetch(url).then(response => {
  return response.json();
}).then(data => {
  data.filter(item => {
    
    
    results.innerHTML += `
  

    <div class="prod">
    <div class="prod_name">${item.prod_name}</div>
    <div class="prod_price">${item.price}</div>
    <div class="prod_qty">${item.qty}</div>
    <div class="prod_total">${item.total}</div>
    </div>`
   
  })
  console.log(data);
  
})