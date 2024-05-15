let genderCoEff = 0; //0=male 2=female
function changeGender() {
    let genderButton = document.getElementById('genderButton');
    if (genderButton.innerText == "Male") {
        genderButton.innerText = "Female";
        genderCoEff = 2;
    } else {
        genderButton.innerText = "Male";
        genderCoEff = 0;
    }
}

