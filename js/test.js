// const firstName = 'Rakib';
// const lastName = 'hasan';

// const fullName = `${firstName} ${lastName} ${7+5}`;
// console.log(fullName);

// first card operation 
document.getElementById('first-card').addEventListener('click',function(){
    serial += 1;

    /* // get the data html id 
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
    console.log(productName,typeof productPrice,typeof productQuantity);

    const priceTotal = parseInt(productPrice) * parseInt(productQuantity);
    console.log(priceTotal,typeof priceTotal); 

    // show the data
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML =`
    <td>${1}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td>
    `;
    container.appendChild(tr); */
    

    // getting data using common function using getElemetnById method
    const pd = getData('first-name','first-price','first-quantity');
    // multiply logic 
    const priceTotal = parseInt(pd.productPrice) * parseInt(pd.productQuantity);
    // show the data using function
    displayData(pd.productName,pd.productPrice,pd.productQuantity,priceTotal);
    // disabled button uisng function 
    disabledButton('first-card'); 

});

// using event object from browser
document.getElementById('second-card').addEventListener('click',function(e){
    // console.log(e.target.parentNode.parentNode.children[0].innerText);

    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    // console.log(productName,productPrice,productQuantity);

    const sumTotal = parseInt(pPrice) + parseInt(pQuantity);
    // console.log(sumTotal);

    displayData(pName,pPrice,pQuantity,sumTotal);


})

function displayData(nameOfP,priceOfP,quantityOfP,resultP){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${1}<td>
    <td>${nameOfP}<td>
    <td>${priceOfP}<td>
    <td>${quantityOfP}<td>
    <td>${resultP}<td>
    <button class="btn btn-sm btn-red-500">Square</button>
    `;
    container.appendChild(tr);
}
