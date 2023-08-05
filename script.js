function addNote() {
  const noteInput = document.getElementById("noteInput");
  const noteText = noteInput.value.trim();

  if (noteText !== "") {
    const noteList = document.getElementById("noteList");
    const newNote = document.createElement("li");
    newNote.innerText = noteText;
    noteList.appendChild(newNote);
    noteInput.value = "";
  }
}
