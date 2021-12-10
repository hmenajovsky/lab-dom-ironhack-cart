// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").textContent;
  const quantity = product.querySelector(".quantity input").value;
  return price * quantity;  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  const subtotal = singleProduct.querySelector('.subtotal span');
  subtotal.textContent = updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  let sum = 0;
  Array.from(allProducts).forEach((product) => {
    const subtotal = product.querySelector('.subtotal span');
    subtotal.textContent = updateSubtotal(product);
    subtotalValue = Number(subtotal.textContent);
    sum += subtotalValue;
  } );

  // ITERATION 3
   let total = document.querySelector("#total-value span");
    total.textContent = sum;
}

// ITERATION 4

function removeProduct(event) {  
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const removedProduct = target.parentNode.parentNode;
  const productChilds = removedProduct.getElementsByTagName('td');
   Array.from(productChilds).forEach((child) => {
     removedProduct.removeChild(child);
   });
}

// ITERATION 5

function createProduct() {
  let inputName = document.querySelector('.create-product input[type="text"]');
  let inputPrice = document.querySelector('.create-product input[type="number');
  //const singleProduct = document.querySelector('.product'); 

  const template = document.querySelector("#productrow");
  const tBody = document.querySelector('#cart tbody')
  const clone = document.importNode(template.content, true);
  //const clone = singleProduct.cloneNode([true]); other method but same issue with remove event listening

  console.log('clone :>> ', clone);
  clone.querySelector('.product:last-child .name span').textContent = inputName.value;
  clone.querySelector('.product:last-child .price span').textContent = inputPrice.value;
  clone.querySelector('.product:last-child .quantity input').value = 0;
  clone.querySelector('.product:last-child .subtotal span').textContent = 0;
  tBody.append(clone);
  inputName.value = '';
  inputPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductsBtn = document.querySelectorAll('.btn-remove');
  removeProductsBtn.forEach((btn) => btn.addEventListener("click", removeProduct));

const createProductBtn = document.getElementById('create');
createProductBtn.addEventListener("click", createProduct);

})
