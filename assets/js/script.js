const selectFilter = document.querySelector('#optionCategory')
const sectionItems = document.querySelector('.main-items')


fetch('../assets/json/items.json')
  .then(response => response.json())
  .then(data => {

    data.categorias.map((item) => {
      dropDownListFilter(item.nome, item.nome)
    })

    data.produtos.map((item) => {
      showItems(item.id, item.foto, item.nome, item.descricao, item.preco, item.categoria_id)
    })
  })

  showOption()

function dropDownListFilter(name, id) {
  let option = document.createElement('option')

  option.text = name;
  option.setAttribute('value', id)
  selectFilter.appendChild(option)
}

function showItems(id, image, name, description, price, category) {
  let div = document.createElement('div')
  let img = document.createElement('img')
  let h1 = document.createElement('h1')
  let paragraph = document.createElement('p')
  let span = document.createElement('span')
  let btn = document.createElement('a')

  img.src = image;
  h1.innerHTML = name;
  paragraph.innerHTML = description;
  span.innerHTML = `${price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`;
  btn.href = '#'
  btn.innerHTML = 'COMPRAR'
  
  div.setAttribute('class', `main-items__card category-${category}`)
  div.setAttribute('id', `card-${id}`)
  btn.setAttribute('class', `btn btnItem${id}`)
  div.appendChild(img)
  div.appendChild(h1)
  div.appendChild(paragraph)
  div.appendChild(span)
  div.appendChild(btn)
  sectionItems.appendChild(div)
}

function showOption() {
  selectFilter.addEventListener('click', () => {
    const category1 = document.querySelectorAll('.category-1')
    const category2 = document.querySelectorAll('.category-2')
    const category3 = document.querySelectorAll('.category-3')

    if (selectFilter.value === 'Todos') {
      category1.forEach((cat1) =>
        cat1.style.display = 'flex'
      );
      category2.forEach((cat2) =>
        cat2.style.display = 'flex'
      );
      category3.forEach((cat3) =>
        cat3.style.display = 'flex'
      );
    } else if (selectFilter.value === 'Video Games') {
      category1.forEach((cat1) =>
        cat1.style.display = 'flex'
      );
      category2.forEach((cat2) =>
        cat2.style.display = 'none'
      );
      category3.forEach((cat3) =>
        cat3.style.display = 'none'
      );
    } else if (selectFilter.value === 'Smartphones') {
      category1.forEach((cat1) =>
        cat1.style.display = 'none'
      );
      category2.forEach((cat2) =>
        cat2.style.display = 'flex'
      );
      category3.forEach((cat3) =>
        cat3.style.display = 'none'
      );
    } else {
      category1.forEach((cat1) =>
        cat1.style.display = 'none'
      );
      category2.forEach((cat2) =>
        cat2.style.display = 'none'
      );
      category3.forEach((cat3) =>
        cat3.style.display = 'flex'
      );
    }
  })
}



