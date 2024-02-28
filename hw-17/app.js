const myTextField = document.getElementById('myTextField');

const myDiv = document.getElementById('myDiv');

myTextField.addEventListener('focus', function() {
  myDiv.classList.remove('hidden')
})

myTextField.addEventListener('blur' , function () {
  myDiv.classList.add('hidden')
})