const create_note_btn = document.querySelector('.create-note-btn');
const note_container = document.querySelector(".note-container");


console.log(note_container);
console.log(create_note_btn);


create_note_btn.addEventListener('click', () => {

    const note_para = document.createElement("P");
    const del_btn = document.createElement("BUTTON");

    note_para.className = 'input-box';
    note_para.contentEditable = true;
    note_para.innerHTML = "type your note";

    del_btn.innerHTML = "Delete";
    del_btn.className = 'delete-btn';

    note_container.appendChild(note_para).appendChild(del_btn);
    updateStorage();

})

note_container.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        updateStorage()
    }
    else if(e.target.tagName === "P"){
        const note = document.querySelectorAll('.input-box');

        // console.log(note);

        note.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
            nt.addEventListener('keyup', updateStorage())
        })
    }
})

function updateStorage() {

    console.log(note_container.innerHTML);
    localStorage.setItem('notes', note_container.innerHTML );
}

function showNotes(){
    note_container.innerHTML = localStorage.getItem('notes');
}

showNotes();