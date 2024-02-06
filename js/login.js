function mostrarDados() {
  var email = document.getElementById('email').value
  var senha = document.getElementById('senha').value
  alert(`E-mail: ${email}` + `\nSenha:${senha} `)
}

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  mostrarDados();
});
