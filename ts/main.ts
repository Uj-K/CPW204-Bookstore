/**
 * Represents a individual book that can be purchased.
 */
class Book {
    /**
     * The 13 digit ISBN number of the book.
     */
    isbn : string;

    /**
     * The title of the book.
     */
    title : string;

    /**
     * The retail price of the book.
     */
    price : number;

    /**
     * The release date of the book.
     * This could be a future date if the book has not been released yet.
     */
    releaseDate : Date;
}

// Book object text code
let myBook = new Book();
myBook.isbn = "9781101906118";
myBook.title = "The Vegetarian";
myBook.price = 10.99;
myBook.releaseDate = new Date("2016-08-23");

console.log(myBook);