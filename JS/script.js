
function validateform() {
    const name = document.form["message-form"]["full-name"].value;
    const birthdate = document.form["message-form"]["birth-date"].value;
    const gender = document.form["message-form"]["gender"].value;
    const messages = document.form["message-form"]["messages"].value;

    if (name == "" || birthdate == "" || gender == "" || messages == "" ) {
        alert("tidak boleh ada yang kosong");
        return false;
    }
    setSenderUI(name, birthdate, gender, messages);

    return false
}
