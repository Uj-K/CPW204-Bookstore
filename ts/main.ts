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

window.onload = function() {
    //set up button click for add book form
    let addBookBtn = document.querySelector("#add-book") as HTMLButtonElement; // not just element, button element so need casting
    addBookBtn.onclick = processBook;
}

function processBook() {
    console.log("processBook was called");
    
    let userBook = getBook();
    if (userBook != null) {
        addBook(userBook);

    }
}

/**
 * This function will retrieve all the book data from the HTML page.
 * If all data is valid, a Book object will be returned. 
 * If any data is invalid, null will be returned.
 * (JavaScrip can have multiple return types)
 */
function getBook():Book {

}

/**
 * Add a Book object to web storage.
 * Assumes all data is valid.
 * @param b The book containing valid data to be added
 */
function addBook(b:Book):void {

}