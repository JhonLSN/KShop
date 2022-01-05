const mainFilter = document.querySelector('.main-filter')
let select = document.createElement('select')


fetch('../assets/json/items.json')
.then(response => response.json())
.then(data => {
  
  data.categorias.map((item) =>{
    dropDownListFilter(item.nome)
  })
})

function dropDownListFilter(name) {
    let option = document.createElement('option')
    

    option.text = name;

    mainFilter.appendChild(select)
    select.appendChild(option)
    
  }