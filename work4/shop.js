const form = document.getElementById('productForm');
const list = document.getElementById('productList');

let products = JSON.parse(localStorage.getItem('products')) || [];

function renderProducts() {
  list.innerHTML = '';
  products.forEach((product, index) => {
    const li = document.createElement('li');
    li.style.color = 'white';
    li.innerHTML = `<strong>${product.name}</strong> — ${product.price}₽<br>${product.description}<br>
      <button onclick="deleteProduct(${index})">Удалить</button><hr>`;
    list.appendChild(li);
  });
}


document.getElementById('deleteall').addEventListener('click', () => {
  if (confirm("Вы уверены, что хотите удалить все товары?")) {
    products = [];
    localStorage.removeItem('products');
    renderProducts();
  }
});


function deleteProduct(index) {
  products.splice(index, 1);
  localStorage.setItem('products', JSON.stringify(products));
  renderProducts();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const price = parseFloat(form.price.value);
  const description = form.description.value.trim();

  if (name && !isNaN(price) && description) {
    products.push({ name, price, description });
    localStorage.setItem('products', JSON.stringify(products));
    form.reset();
    renderProducts();
  }
});

renderProducts();