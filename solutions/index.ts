// =======1=======
function formatString(input: string, toUpper?: boolean): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));

// =======2=======

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

// const result = filterByRating(books);
// console.log(result);

// =======3=======

function concatenateArrays<T>(...arrays: T[][]): T[]{
    return arrays.reduce((acc, curr) => [...acc, ...curr], []);
}

// console.log(concatenateArrays(["a", "b"], ["c"]));


// =======4=======
class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;

    }

    getInfo() {
        return (`${this.make}, ${this.year}`)
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;

    }

    getModel() {
        return (`${this.model}`)
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
(myCar.getInfo());
(myCar.getModel())




// =======5=======

function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    }
    else {
        return value * 2;
    }
}

const result = processValue("hello");
// console.log(result);

const result2 = processValue(10);
// console.log(result2);


// =======6=======

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }

    return products.reduce((expensive, current) => {
        return current.price > expensive.price ? current : expensive;
    })
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

const expensiveProduct = getMostExpensiveProduct(products);
// console.log(expensiveProduct);


// =======7=======
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}

const result6 = getDayType(Day.Saturday);
// console.log(result6);


// =======8=======

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject("Rejects if the number is negative")
            } else {
                resolve(n * n)
            }
        }, 1000)

    })
}

// squareAsync(4).then(console.log);
// squareAsync(-3).catch(console.error);










