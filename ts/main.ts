/**
 * Represents a individual book that can be purchased.
 */
class Book {
    isbn : string;
    title : string;
    price : number;
    releaseDate : Date;
}

// Book object text code
let myBook = new Book();
myBook.isbn = "9781101906118";
myBook.title = "The Vegetarian";
myBook.price = 10.99;
myBook.releaseDate = new Date("2016-08-23");

console.log(myBook);