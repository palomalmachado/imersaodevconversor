function conversao(){
  var real = document.getElementById('valor').value
  if (real == '' || real <= 0){
    document.getElementById('valorReal').innerHTML = 'Por favor, digite um valor.'
 }
  else{
    var dolar = parseFloat(real) * 173.215
    var valorConvertido = dolar.toFixed(3)
    var nomeUsuario = "Paloma";
    document.getElementById('valorReal').innerHTML = "Olá " + nomeUsuario + ' o valor de Bitcoins em reais é R$ ' + valorConvertido
  }
}
