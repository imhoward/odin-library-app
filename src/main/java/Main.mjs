import {CreateDialogForm} from "./CreateDialogForm.js";
import {addBookToLibrary} from "./AddBookToLibrary.js"

export var libContainer = document.getElementById("lib-container")

var addBookButton = document.getElementById("add-book");

export const myLibrary = [];

addBookButton.addEventListener('click', function (e) {
    CreateDialogForm();
    e.preventDefault();
});

addBookToLibrary("The Hobbit", "J.R. Tolkien", 295, true);
addBookToLibrary("Eragon", "Christopher Paolini", 544, false);
addBookToLibrary("Twilight", "Stephenie Meyer", 498, true);

for (var i = 0; i < myLibrary.length; i++) {
    myLibrary[i].info();
}