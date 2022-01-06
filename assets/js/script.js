const selectFilter = document.querySelector('#optionCategory')


fetch('../assets/json/items.json')
.then(response => response.json())
.then(data => {
  
  data.categorias.map((item) =>{
    dropDownListFilter(item.nome, item.id)

    
  })
})

function dropDownListFilter(name, id) {
    let option = document.createElement('option') 

    option.text = name;
    option.setAttribute('id', id)
    selectFilter.appendChild(option)
    
  }