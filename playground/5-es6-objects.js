const name = "Andrew";
const age = 27

const user = {
    name,
    age: age,
    location: "Philadelphia"
}

//console.table(user)


const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const Weird = (Order, {label, price}) => {
    console.log(label, price);
}

Weird('jdk', product)