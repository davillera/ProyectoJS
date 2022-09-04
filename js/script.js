
document.getElementById("bandera0").src = `../banderas/${from.value}.png`
document.getElementById("bandera1").src = `../banderas/${to.value}.png`

importe = document.getElementById("importe")
from = document.getElementById("from")
to = document.getElementById("to")
let historial =[]

const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", () => calcular());

const btnLimpiar = document.getElementById("btnLimpiar")
btnLimpiar.addEventListener("click", () =>{
    document.getElementById("historial").innerHTML = ""
})

const btnCambio = document.getElementById("btnCambio")
btnCambio.addEventListener("click", () =>{
    const optionTemp = from.value
    from.value = to.value
    to.value = optionTemp
    cambioBandera()
})

function cambioBandera(){
    document.getElementById("bandera0").src = `../banderas/${from.value}.png`
    document.getElementById("bandera1").src = `../banderas/${to.value}.png`
}

function calcular(){
    let myHeaders = new Headers();
    myHeaders.append("apikey", "LS7OtHZzG4it51Zv4zZL5Uv0GpU6L2CO");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    localStorage.setItem("importe", importe.value);

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${importe.value}`, requestOptions)
    .then(response => response.json())
    .then((data) =>{
        let total = data.result
        console.log(data.result);

        historial.push({
            from: `${from.value}`,
            to: `${to.value}`,
            amount: `${importe.value}`,
            result: `${total}`
        })

        let resultado = document.getElementById("historial")
        // const element = `<p> ${from.value} ${importe.value} = ${to.value} ${total}</p>`
        const element = document.createElement("br")
        const contenido = document.createTextNode(`${from.value} ${importe.value} = ${to.value} ${total}`)
        resultado.appendChild(contenido)
        resultado.appendChild(element)
    })
    .catch(error => console.log('error', error))
}

