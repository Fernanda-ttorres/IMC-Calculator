const theWeight = document.getElementById('weight');
const theHeight = document.getElementById('height');
const theResult = document.getElementById('result');
const theCalcular = document.getElementById('calcular');

export const ImcCalc = () => {
    if(theWeight.value || theHeight.value) {
      const imc = (theWeight.value/(theHeight.value*theHeight.value)).toFixed(2)
      let classification = ''

      if (imc < 18.5) {
        classification = 'Abaixo do peso'
      } else if (imc < 25) {
        classification = 'Peso normal'
      } else if (imc < 30) {
        classification = 'Acima do peso'
      } else if (imc < 35) {
        classification = 'Obesidade Grau I'
      } else if (imc < 41) {
        classification = 'Obesidade Grau II'
      } else {
        classification = 'Obesidade Grau III'
      }
      
      theResult.innerHTML = `IMC: ${imc} (${classification})`
    } else {
      theResult.innerHTML = 'Fail'
    }
}
