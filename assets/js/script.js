const selectFilter = document.querySelector('#optionCategory')
const sectionItems = document.querySelector('.main-items')


fetch('../assets/json/items.json')
  .then(response => response.json())
  .then(data => {

    data.categorias.map((item) => {
      dropDownListFilter(item.nome, item.id)
    })

    data.produtos.map((item) => {
      showItems(item.foto, item.nome, item.descricao, item.preco)
    })
  })

function dropDownListFilter(name, id) {
  let option = document.createElement('option')

  option.text = name;
  option.setAttribute('id', id)
  selectFilter.appendChild(option)

}

function showItems(image, name, description, price) {
  let div = document.createElement('div')
  let img = document.createElement('img')
  let h1 = document.createElement('h1')
  let paragraph = document.createElement('p')
  let span = document.createElement('span')

  img.src = image;
  h1.innerHTML = name;
  paragraph.innerHTML = description;
  span.innerHTML = `R$ ${price.toFixed(2)}`;

  div.appendChild(img)
  div.appendChild(h1)
  div.appendChild(paragraph)
  div.appendChild(span)
  sectionItems.appendChild(div)
}
