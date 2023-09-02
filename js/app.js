/*

<-------------------------------------------------------------- version 01 --------------------------------------------------------------->

// for calling the function which is written below

showNotes();


// to take event

let addNoteBtn = document.getElementById("addNoteBtn");

addNoteBtn.addEventListener("click", function () {
    let textArea = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    };
    notesObj.push(textArea.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    textArea.value = "";

    showNotes();

});


// fucntion to show elements from localStorage

function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    };
    let card = "";
    notesObj.forEach(function(element, index) {
        card += `
        <div class="noteCard card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary" id="deleteNoteBtn">Delete Note</button>
            </div>
        </div>
        `;
    });

    let notesArea = document.getElementById("notes");
    if(notesObj.length!=0){
        notesArea.innerHTML = card;
    }

    else{
        notesArea.innerHTML = `Nothing to show! "Add a Note" section aove to add notes.`;
    };
};



// functio to delete a note

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    };
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
};


// fro search engine

let search = document.getElementById("searchTxt");

search.addEventListener("input",function(){
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    });
});

<----------------------------------------------------------------------------------------------------------------------------------------->

*/




/*
<-------------------------------------------------------------- version 02 --------------------------------------------------------------->
*/

// for calling the function which is written below

showNotes();


// to take event

let addNoteBtn = document.getElementById("addNoteBtn");

addNoteBtn.addEventListener("click", function () {
    let textArea = document.getElementById("addTxt");
    let textAreaHead = document.getElementById("addTxtHead");
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = {};
    }
    else {
        notesObj = JSON.parse(notes);
    };
    notesObj[textAreaHead.value] = textArea.value;
    localStorage.setItem("notes", JSON.stringify(notesObj));
    textArea.value = "";
    textAreaHead.value = "";

    showNotes();

});


// fucntion to show elements from localStorage

function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = {};
    }
    else {
        notesObj = JSON.parse(notes);
    };
    let i = 1;
    let card = "";
    for (let key in notesObj){
        card += `
        <div class="noteCard card my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${key}</h5>
                <p class="card-text">${notesObj[key]}</p>
                <button id="${key}" onclick="deleteNote(this.id)" class="btn btn-primary" id="deleteNoteBtn">Delete Note</button>
            </div>
        </div>
        `;
        i++;
    };

    let notesArea = document.getElementById("notes");
    if(Object.keys(notesObj).length!=0){
        notesArea.innerHTML = card;
    }

    else{
        notesArea.innerHTML = `Nothing to show! "Add a Note" section aove to add notes.`;
    };
};



// functio to delete a note

function deleteNote(key){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = {};
    }
    else {
        notesObj = JSON.parse(notes);
    };
    delete notesObj[key];
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
};


// fro search engine

let search = document.getElementById("searchTxt");

search.addEventListener("input",function(){
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    });
});








/*
Further Features:
01 : Add Tittle                                        true
02 : Mark a note as importent (like red note)          false
03 : Pin a note                                        false
04 : Login/Register page                               false
*/