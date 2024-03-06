function saveData() {

  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const dob = document.getElementById('dob').value;
  const gender = document.querySelectorAll('input[name = "gender"]:checked').value;
  const city = document.getElementById('city').value;
  const address = document.getElementById('address').value;

  const languages = [];
  const  LanguageCheckboxes = document.querySelectorAll('input[name = "language"]:checked');
  LanguageCheckboxes.forEach(function (checkbox) {
    languages.push((checkbox.value));
  })

  const userData = {
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    gender: gender,
    city: city,
    address: address,
    languages: languages
  };

  const table = document.getElementById('userDataTable').getElementsByTagName("tbody")[0];
  const row = table.insertRow(-1);

  const cellFirstName = row.insertCell(0);

  const cellLastName = row.insertCell(1);
  const cellDob = row.insertCell(2);
  const cellGender = row.insertCell(3);
  const cellCity = row.insertCell(4);
  const cellAddress =row.insertCell(5);
  const cellLanguages = row.insertCell(6);

  cellFirstName.textContent = userData.firstName;
  cellLastName.textContent = userData.lastName;
  cellDob.textContent = userData.dob;
  cellGender.textContent = userData.gender;
  cellCity.textContent = userData.city;
  cellAddress.textContent = userData.address;
  cellLanguages.textContent = userData.languages.join(', ');

  userDataTable.style.display = 'table'
}


