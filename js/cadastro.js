const cpf = document.getElementById("cpf")

cpf.addEventListener('input', () => {
  var proibeLetras = cpf.value.replace(/\D/g, "").substring(0, 11)
  var cpfArray = proibeLetras.split("")
  var cpfFormatado = ""
  if (cpfArray.length > 0) {
    cpfFormatado += `${cpfArray.slice(0, 3).join("")}`
  } if (cpfArray.length > 3) {
    cpfFormatado += `.${cpfArray.slice(3, 6).join("")}`
  } if (cpfArray.length > 6) {
    cpfFormatado += `.${cpfArray.slice(6, 9).join("")}`
  } if (cpfArray.length > 9) {
    cpfFormatado += `-${cpfArray.slice(9, 11).join("")}`
  }
  cpf.value = cpfFormatado;
})

const telefone = document.getElementById("telefone")

telefone.addEventListener('input', () => {
  var proibeLetras = telefone.value.replace(/\D/g, "").substring(0, 11)
  var telefoneArray = proibeLetras.split("")
  var telefoneFormatado = ""
  if (telefoneArray.length > 0) {
    telefoneFormatado += `(${telefoneArray.slice(0, 2).join("")})`
  } if (telefoneArray.length > 2) {
    telefoneFormatado += ` ${telefoneArray.slice(2, 7).join("")}`
  } if (telefoneArray.length > 7) {
    telefoneFormatado += `-${telefoneArray.slice(7, 11).join("")}`
  }
  telefone.value = telefoneFormatado;
})

function mostrarDados() {
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var telefone = document.getElementById('telefone').value
  var cpf = document.getElementById('cpf').value
  var senha = document.getElementById('senha').value
  alert(`Nome: ${nome}` + `\nE-mail: ${email}` + `\nTelefone: ${telefone}` + `\nCPF: ${cpf}` + `\nSenha:${senha} `)
}

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  mostrarDados();
});
