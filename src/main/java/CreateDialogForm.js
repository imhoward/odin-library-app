import {Book} from "./Book.mjs";
import {myLibrary, libContainer} from "./Main.mjs";

export function CreateDialogForm() {
    var body = document.querySelector("body");
    var dialog = document.createElement("dialog");
    dialog.classList.add("dialog");
    dialog.open = true;
    body.append(dialog);

    var formp = document.createElement("p");
    formp.textContent = "Add a new book to your library";
    dialog.append(formp);

    var form = document.createElement("form");
    form.method = "dialog";
    dialog.append(form);

    var titleLabel = document.createElement("label");
    titleLabel.for = "title";
    titleLabel.textContent = "Title:";
    form.append(titleLabel);

    var titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title";
    titleInput.name = "title";
    form.append(titleInput);

    var authorLabel = document.createElement("label");
    authorLabel.for = "author";
    authorLabel.textContent = "Author:";
    form.append(authorLabel);

    var authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.id = "author";
    authorInput.name = "author";
    form.append(authorInput);

    var pagesLabel = document.createElement("label");
    pagesLabel.for = "pages";
    pagesLabel.textContent = "Pages:";
    form.append(pagesLabel);

    var pagesInput = document.createElement("input");
    pagesInput.type = "text";
    pagesInput.id = "pages";
    pagesInput.name = "pages";
    form.append(pagesInput);

    var readLabel = document.createElement("label");
    readLabel.for = "read";
    readLabel.textContent = "Read:";
    form.append(readLabel);

    var readInput = document.createElement("input");
    readInput.type = "text";
    readInput.id = "read";
    readInput.name = "read";
    form.append(readInput);

    var submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Submit";
    form.append(submit);

    form.addEventListener("submit", function(e) {
        const newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
        myLibrary.push(newBook);
        var div = document.createElement("div");
        div.classList.add("book");
        div.innerText = titleInput.value;
        libContainer.append(div);
        e.preventDefault();
        dialog.close();
    });
}
