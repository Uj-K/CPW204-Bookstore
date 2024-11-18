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
    let userBook = getBook();
    if (userBook != null) {
        addBookToWebpage(userBook);
        addBookToStorage(userBook);
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

            /*When creating a Date object in JavaScript, 
            the timezone is automatically taken into account, 
            which can cause a difference between the user's local timezone and UTC. 
            This can result in a problem where the date is off by one day. 
            To avoid this issue, it is necessary to first split the date value 
            before directly creating the Date object, 
            and then explicitly recombine the components (year, month, day) 
            to prevent any timezone-related problems
            Date 객체를 직접적으로 생성하기 전에 날짜 값을 분리하고, 이를 명시적으로 재조합해서 시간대 문제를 피한다*/
            const dateParts:string[] = releaseDate.split("-"); // .split method will split the string by "-"
            const year = parseInt(dateParts[0]);
            const month = parseInt(dateParts[1]) - 1; // because month are index based
            const day = parseInt(dateParts[2]); // save the day as it is input
            const correctDate = new Date(year, month, day);

            addedBook.releaseDate = new Date(correctDate);

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
     * Add a Book object to the web page
     * Assumes all data is valid
     * @param b The book containing valid data to be added
     */
    function addBookToWebpage(b:Book):void {
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
     * Adds a single Book object to existing Book list in storage
     * If no books are currently stored a new list will be created and stored
     * @param b The book that will be added to localStorage
     */
    function addBookToStorage(b:Book):void {
        const BookStorageKey = "Books"
        // Read existing books out of storage
        let bookData = localStorage.getItem(BookStorageKey);
        // if bookData is null, the "Books" key did not exist
        if (bookData == null) {
            // Create a new list and add our current book
            let books:Book[] = [];
            books.push(b);

            // Add to localStorage
            bookData = JSON.stringify(books);
            localStorage.setItem(BookStorageKey, bookData);
        }
        else {
            // Parse string into a list of books and add new book to the list
            // store the newly modified list back in storage
            let books:Book[] = JSON.parse(bookData);
            books.push(b);

            // Add back to localStorage
            bookData = JSON.stringify(books);
            localStorage.setItem(BookStorageKey, bookData);
        }

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