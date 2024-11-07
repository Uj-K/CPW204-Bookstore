/**
 * Represents a individual book that can be purchased.
 */
class Book {
    /**
     * The 13 digit ISBN number of the book.
     */
    isbn: string;

    /**
     * The title of the book.
     */
    title: string;

    /**
     * The retail price of the book.
     */
    price: number;

    /**
     * The release date of the book.
     * This could be a future date if the book has not been released yet.
     */
    releaseDate: Date;
}

window.onload = function () {
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

    /**
     * This function will retrieve all the book data from the HTML page.
     * If all data is valid, a Book object will be returned. 
     * If any data is invalid, null will be returned.
     * and error messages will be shown on the web pages.
     * (JavaScrip can have multiple return types)
     */
    function getBook(): Book {
        clearAllErrorMsg();

        // Get all inputs
        let isbnTextBox = document.querySelector("#isbn") as HTMLInputElement;
        let titleTextBox = document.querySelector("#title") as HTMLInputElement;
        let priceTextBox = document.querySelector("#price") as HTMLInputElement;
        let releaseDateTextBox = document.querySelector("#release-date") as HTMLInputElement;

        // Validate data
        let isValidData = true; // flag variable

        // ISBN Validation

        let isbn = isbnTextBox.value; // .value is always a string coming out of an inout element.
        if (!isValidIsbn(isbn)) {
            isValidData = false;
            isbnTextBox.nextElementSibling.textContent = "ISBN must be 13 digits only";
        }

        // Title Validation
        let title = titleTextBox.value;
        if (title.trim() == "") { // Trim the white spaces if there are,,
            isValidData = false;
            titleTextBox.nextElementSibling.textContent = "You must provide title"
        }

        // Price Validation
        let price = parseFloat(priceTextBox.value);
        if (isNaN(price) || price < 0) {
            isValidData = false;
            priceTextBox.nextElementSibling.textContent = "Price must be a positive number"
        }

        // Released date Validation
        let releaseDate = releaseDateTextBox.value;
        let releaseDateCheck = Date.parse(releaseDate); // releaseDate is sting so we needed another variable. if invalid, this will return NaN
        if (isNaN(releaseDateCheck)) {
            isValidData = false;
            releaseDateTextBox.nextElementSibling.textContent = "Release date must be a valid date"
        }

        if (isValidData) {
            // Create and populate Book object if all data is valid
            let addedBook = new Book();
            addedBook.isbn = isbn;
            addedBook.title = title;
            addedBook.price = price;
            addedBook.releaseDate = new Date(releaseDate);

            return addedBook;
        }
        return null; // Return null if any invalid data is present.


    }

    /**
     * This validate an ISBN 13 number
     * @param data The string to be validated.
     * @returns True if data is a valid ISBN 13
     */
    function isValidIsbn(data: string) {
        const isbn13Pattern = /^(97(8|9))?\d{9}(\d|X)$/;
        return isbn13Pattern.test(data);
    }



    /**
     * Add a Book object to the web page and to web storage.
     * Assumes all data is valid.
     * @param b The book containing valid data to be added
     */
    function addBook(b: Book): void {
        console.log(b);

        // Add the book the web page;
        let bookDiv:HTMLDivElement = document.createElement("div"); 

        let titleHeading:HTMLHeadingElement = document.createElement("h2");
        titleHeading.textContent = `${b.title} : ${b.isbn}`; // need backtick(`)

        // Add h2 to book div <div><h2> Title : ISBN </h2></div>
        bookDiv.appendChild(titleHeading); 

        // add bookDiv to web page

        let bookListDisplay = document.querySelector("#book-display")
        bookListDisplay.appendChild(bookDiv); // Add the newly created book

        // you can make one lind the two above line. 
        // document.querySelector("#book-display").appendChild(bookDiv);

        let bookDescription:HTMLParagraphElement = document.createElement("p");
        const currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency", 
            currency: "USD",

        });
        let formattedPrice = currencyFormatter.format(b.price);
        bookDescription.textContent = `This book was released on ${b.releaseDate} and costs ${formattedPrice}`;
        bookDiv.appendChild(bookDescription);


    }

    /**
     * Clears all the validation error message spans in the form
     */
    function clearAllErrorMsg() {
        // Get all error spans
        let allSpans = document.querySelectorAll("span.error-msg"); // Or you can do ("form span.error-msg");

        // Loop through, and set empty string 
        // There is one way with lambda function: allSpans.forEach(span => span.textContent = ""); 
        for (let i = 0; i < allSpans.length; i++) {
            let currentSpan = allSpans[i];
            currentSpan.textContent = "";
        }
    }
}