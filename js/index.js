
let serial = 0;

// first card operation 
document.getElementById('first-card').addEventListener('click',function(){
    serial += 1;

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
// second card
document.getElementById('second-card').addEventListener('click',function(e){
     // console.log(e.target.parentNode.parentNode.children[0].innerText);
     serial += 1;

     const pName = e.target.parentNode.parentNode.children[0].innerText;
     const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
     const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
     // console.log(productName,productPrice,productQuantity);
 
     const sumTotal = parseInt(pPrice) + parseInt(pQuantity);
     // console.log(sumTotal);
     displayData(pName,pPrice,pQuantity,sumTotal);
      // disabled button uisng function 
    disabledButton('second-card'); 
})

document.getElementById('third-card').addEventListener('click',function(){
    
})

// common function to display data 
function displayData(nameOfP,priceOfP,quantityOfP,resultP){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}<td>
    <td>${nameOfP}<td>
    <td>${priceOfP}<td>
    <td>${quantityOfP}<td>
    <td>${resultP}<td>
    <button class="btn btn-sm btn-red-500">Square</button>
    `;
    container.appendChild(tr);
    // document.getElementById('total-product').innerText = serial;
}

// common function to disabled button
function disabledButton(id){
    document.getElementById(id).setAttribute("disabled",true);
}

// common function got get data using event object
function getAllData(e){
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const pd = {
        pName: pName,
        pPrice: pPrice,
        pQuantity: pQuantity,
    };
    return pd;
}

// common function to get data using getElementId method
function getData(id1,id2,id3){
    // get element 
    const productName = document.getElementById(id1).innerText;
    const productPrice = document.getElementById(id2).innerText;
    const productQuantity = document.getElementById(id3).innerText;

    const pd = {
        productName: productName,
        productPrice: productPrice,
        productQuantity: productQuantity,
    };
    return pd;



}