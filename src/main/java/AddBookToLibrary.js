import {Book} from "./Book.mjs";
import {libContainer, myLibrary} from "./Main.mjs";

export function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    var bookDiv = document.createElement("div");
    bookDiv.classList.add("book-div");
    libContainer.append(bookDiv);

    var titleDiv = document.createElement("div");
    titleDiv.classList.add("title-div");
    titleDiv.innerText = title;
    bookDiv.append(titleDiv);

    var button = document.createElement("button");
    button.classList.add("remove-button");
    button.textContent = "rmv";
    bookDiv.append(button);
}