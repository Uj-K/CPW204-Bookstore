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
    function getBook() {
        clearAllErrorMsg();
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
        let title = titleTextBox.value;
        if (title.trim() == "") {
            isValidData = false;
            titleTextBox.nextElementSibling.textContent = "You must provide title";
        }
        let price = parseFloat(priceTextBox.value);
        if (isNaN(price) || price < 0) {
            isValidData = false;
            priceTextBox.nextElementSibling.textContent = "Price must be a positive number";
        }
        let releaseDate = releaseDateTextBox.value;
        let releaseDateCheck = Date.parse(releaseDate);
        if (isNaN(releaseDateCheck)) {
            isValidData = false;
            releaseDateTextBox.nextElementSibling.textContent = "Release date must be a valid date";
        }
        if (isValidData) {
            let addedBook = new Book();
            addedBook.isbn = isbn;
            addedBook.title = title;
            addedBook.price = price;
            addedBook.releaseDate = new Date(releaseDate);
            return addedBook;
        }
        return null;
    }
    function isValidIsbn(data) {
        const isbn13Pattern = /^(97(8|9))?\d{9}(\d|X)$/;
        return isbn13Pattern.test(data);
    }
    function addBook(b) {
        alert("Data was valid, book added");
        console.log(b);
    }
    function clearAllErrorMsg() {
        let allSpans = document.querySelectorAll("span.error-msg");
        for (let i = 0; i < allSpans.length; i++) {
            let currentSpan = allSpans[i];
            currentSpan.textContent = "";
        }
    }
}
