//interface declaration
interface Car {
    type: string;
    model: string;
    color: string;
    horsePower: number;
}

// Object declarations
const car: Car = {
    type: 'Mercedes',
    model: 'S-Class',
    color: 'Black',
    horsePower: 450,
};
//console.log(car);

//interface person object
interface person {
    name: string;
    lastName: string;
    adress: string;
    Age: number;
    hobbies: string[];
    greeting: () => string;
}

// object with method and array value

const person: person = {
    name: 'Daniel',
    lastName: 'Penev',
    adress: "bul. Vitosha 60",
    Age: 30,
    hobbies: ['Reading', 'Traveling', 'Gaming'],
    greeting: function () {
        return `Hello, my name is Daniel.`;

    },
};
//console.log(person);
// property access
person.name; // dot notation
person.Age;
person["adress"];

person.greeting();
person["greeting"]();

//console.log(person.greeting());

//properties redeclaration
//person.age = 35;
//console.log(person);


//explicit object type
const mouse: { name: string; favFood: string; age: number; isCute: boolean } = {
    name: "Jerry",
    favFood: "Cheese",
    age: 2,
    isCute: true,
};

// interfaces - optional parameters,read only and string literals

interface User {
    name: string;
    readonly email: string;
    //string literals
    role: "admin" | "user" | "super-admin";
    //optional parameter
    job?: string;
    password?: string | number;

}

const user: User & { password?: number } = {
    name: 'Tom',
    email: 'tom@mail.com',
    role: 'admin',
    job: 'QA',
    password: 12345,
};
//console.log(user);

const user2: User = {
    name: 'Alice',
    email: 'alice@mail.com',
    role: 'user',
    job: 'Developer',
};
//console.log(user2);

interface userpemissions extends User {
    permissions: string;
}

const user3: userpemissions = {
    name: 'Bob',
    email: 'bob@mail.com',
    role: 'super-admin',
    job: 'Manager',
    permissions: 'denied',
};

//exercise sum total price
interface Product {
    name: string;
    price: number;
    getTotalPrice: (quantity: number) =>  number;
}

const phone: Product = {
    name: 'iPhone 17',
    price: 100,
    getTotalPrice: function(quantity: number = 1) {
        return this.price * quantity;
    }
};

function orderDetails(product: Product, quantity: number) {
   // console.log("quantity", quantity);
    //console.log("product", product);
    console.log("Order for:", `${product.name}`);
    console.log("Product quantity:", `${quantity}`);
console.log(`Product unit price: $${product.price}$`);
console.log(`Total price: ${product.getTotalPrice(quantity)}$`);
};
orderDetails(phone, 5);
