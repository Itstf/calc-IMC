const form = document.querySelector('#formulario');
const resultado = document.querySelector('.resultado');

// Func forms
function resultadoFormulario(event) {
  event.preventDefault();
  
  // Valores inputs
  const inputPeso = document.querySelector('#peso').value;
  const inputAltura = document.querySelector('#altura').value;

  // Calc resultado do IMC ( Peso dividido por altura² )
  const imcTotal = (inputPeso / (inputAltura * inputAltura)).toFixed(2);
  
  // IMC menor que 18.5
   if (imcTotal >= 0.00 && imcTotal <= 18.49){
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Isso significa que você está abaixo do peso. &#x1F626;  </p>`
  }
  
  // Estiver entre 18,5 e 24,9
   else if (imcTotal >= 18.50 && imcTotal <= 24.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Seu IMC é considerado "Normal". &#x1F604;  </p>`
  }

  // Estiver entre 25,00 e 29,9
   else if (imcTotal >= 25.00 && imcTotal <= 29.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Isso significa "Pré-obesidade". &#x1F615;  </p>`
  }

  // Estiver entre 30,00 e 34,9
   else if (imcTotal >= 30.00 && imcTotal <= 34.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Você é considerado "Obeso de Grau 1". &#128559;  </p>`
  } 

  // Estiver entre 35,00 e 39,9
  else if (imcTotal >= 35.00 && imcTotal <= 39.99) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Você é considerado "Obeso de Grau 2". &#128559;  </p>`
  } 

  // IMC maior que 40,00
   else if (imcTotal >= 40.00) {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> ${imcTotal} </strong> - Sua classificação é "Obesidade grave, grau 3", &#x1F630;  </p>`
  }
   else {
    resultado.innerHTML = `<p> Seu IMC é de: <strong> 0 </strong> - Algo de errado não está certo... &#x1F61C;</p>`
  }
} 

// Quando pressionar o botão
form.addEventListener('submit', resultadoFormulario)
