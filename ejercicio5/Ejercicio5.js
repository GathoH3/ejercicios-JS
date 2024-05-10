function calcular() {

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
  
    // Verificar si los valores son números válidos
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
      document.getElementById('resultado').innerHTML = '<p>Por favor, ingrese números válidos en todos los campos.</p>';
    } else {

      const suma = num1 + num2;

      const producto = num3 * num4;
  
      document.getElementById('resultado').innerHTML = `<p>La suma de los dos primeros números es: ${suma}</p>
                                                        <p>El producto del tercer y cuarto número es: ${producto}</p>`;
    }
  }
  