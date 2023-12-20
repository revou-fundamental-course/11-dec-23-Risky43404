
const firstNameInput = document.getElementById("first-name-input")
const submitButton = document.getElementById("submit-button")
console. log("sudah masuk JSNya")
submitButton.addEventListener("click", function(event) {
    event.preventDefault()
    var firstName = firstNameInput.value
    if (firstName =="") {
        alert=("tidak boleh kosong")
    } else {
        alert("sukses")
    }
} )