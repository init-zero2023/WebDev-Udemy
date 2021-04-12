// Object property shorthand

const name = "Andrew";
const age = 27;

const user = {
    name,
    age,
    location: 'New Delhi'
}

console.log(user);



// Object destructuring

const product = {
    label :"red notebook",
    price : 3,
    stock: 201,
    salesprice : undefined
}

// const label = product.label;
// const stock = product.stock
// console.log(label, stock);

// this won't work
// const {labelofproduct, priceofproduct, stockofproduct} = product
// console.log(labelofproduct, priceofproduct, stockofproduct);

// this will work
// syntax property: newPropertyName 
const {label : productlabel, price, stock=5, rating=200} = product
console.log(productlabel, price, stock, rating);



const transaction = (type, {label, stock})=>{
    console.log(type, label, stock);
}

transaction('order', product);