var productName=document.getElementById('name')
var productPrice=document.getElementById('price')
var productCate=document.getElementById('cat')
var productDescr=document.getElementById('desc')
var addProduct=document.getElementById('addBtn')
var products=[];
// var car=document.getElementById("info")

addProduct.addEventListener('click',function(){
    
    var product={
        name: productName.value,
        price: productPrice.value,
        category:productCate.value,
        description:productDescr.value
    }
    // console.log(product.name.value)   
    products.push(product);
    // console.log(products)
    // for(var i=0;i<products.length;i++){
    //     console.log(i)
    //     console.log(products[i].name.value)}  
    clearForm();
    display();
    
    
})

function display(){
    var cartona=``;
    for(var i=0;i<products.length;i++){
        // console.log(i)
        // console.log(products[i].name.value)
        // console.log(products[i].category.value)
        // console.log(products[i].price.value)
        // console.log(products[i].description.value)
        cartona+=`<tr>
        <th scope="row"> <p id='nameProduct'> ${i} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
        <th scope="row"> <p id='nameProduct'> ${products[i].name} </p><input type="text" class="form-control d-none " id="nameUpdate"></th>
        <td> <p id='priceProduct'>${products[i].price}</p><input type="text" class="form-control d-none " id="priceUpdate"></td>
        <td> <p id='catProduct'>${products[i].category}</p><input type="text" class="form-control d-none " id="catUpdate"></td>
        <td> <p id='descProduct'>${products[i].description}</p><input type="text" class="form-control d-none " id="descUpdate"></td>
        <td><button class="btn btn-outline-danger" onclick="Delet(${i})">Delete</button></td> 
        <td><button class="btn btn-outline-warning" id='updatebttn'onclick="Update(${i})" >Update</button>
        <button class="btn btn-outline-success px-3 d-none" id='savebtn'>Save</button></td>
        </tr>`
        
    }
    document.getElementById("info").innerHTML=cartona;
}

function clearForm(){
    productName.value=``;
    productPrice.value=``;
    productCate.value=``;
    productDescr.value=``;
}

function Delet(deletindex){
    products.splice(deletindex,1)//delet in start deletindex 
    display()
}
var index;
function Update(updateindex){
    index=updateindex;
    productName.value=products[updateindex].name;
    productPrice.value=products[updateindex].price;
    productCate.value=products[updateindex].category;
    productDescr.value=products[updateindex].description;
    document.getElementById("updateBtn").style.display="flex"
}
function updateProduct(){
    products[index].name=productName.value
    products[index].price=productPrice.value
    products[index].category=productCate.value
    products[index].description=productDescr.value
    display()
    clearForm();
    document.getElementById("updateBtn").style.display="none"
}

