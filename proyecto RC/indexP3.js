function calcular() {
    const base = parseFloat(document.getElementById('base').value);
    const exponente1 = parseFloat(document.getElementById('exponente1').value);
    const exponente2 = parseFloat(document.getElementById('exponente2').value);

    if (isNaN(base) || isNaN(exponente1) || isNaN(exponente2)) {
        alert('Por favor, introduce valores válidos.');
        return;
    }

    const producto = Math.pow(base, exponente1 + exponente2);
    const cociente = Math.pow(base, exponente1 - exponente2);
    const potencia = Math.pow(base, exponente1 * exponente2);
    const negativo = Math.pow(base, -exponente1);

    document.getElementById('resultados').innerHTML = `
        <p><strong>Producto de potencias con la misma base:</strong> ${base}^${exponente1} * ${base}^${exponente2} = ${base}^(${exponente1 + exponente2}) = ${producto}</p>
        <p><strong>Cociente de potencias con la misma base:</strong> ${base}^${exponente1} / ${base}^${exponente2} = ${base}^(${exponente1 - exponente2}) = ${cociente}</p>
        <p><strong>Potencia de una potencia:</strong> (${base}^${exponente1})^${exponente2} = ${base}^(${exponente1 * exponente2}) = ${potencia}</p>
        <p><strong>Exponente negativo:</strong> ${base}^${-exponente1} = 1/(${base}^${exponente1}) = ${negativo}</p>
    `;
}
