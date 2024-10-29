class Book {
}
let myBook = new Book();
myBook.isbn = "9781101906118";
myBook.title = "The Vegetarian";
myBook.price = 10.99;
myBook.releaseDate = new Date("2016-08-23");
console.log(myBook);
window.onload = function () {
    let addBookBtn = document.querySelector("#add-book");
    addBookBtn.onclick = processBook;
};
function processBook() {
    console.log("processBook was called");
    let userBook = getBook();
    if (userBook != null) {
        addBook(userBook);
    }
}
function getBook() {
    let isbnTextBox = document.querySelector("#isbn");
    let titleTextBox = document.querySelector("#title");
    let priceTextBox = document.querySelector("#price");
    let releaseDateTextBox = document.querySelector("#release-date");
    let isValidData = true;
    let isbn = isbnTextBox.value;
    if (!isValidIsbn(isbn)) {
        isValidData = false;
        isbnTextBox.nextElementSibling.textContent = "ISBN must be 13 digits only";
    }
}
function isValidIsbn(data) {
    const isbn13Pattern = /^(97(8|9))?\d{9}(\d|X)$/;
    return isbn13Pattern.test(data);
}
function addBook(b) {
}
