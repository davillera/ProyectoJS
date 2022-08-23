
document.getElementById("bandera0").src = `./banderas/${from.value}.png`
document.getElementById("bandera1").src = `./banderas/${to.value}.png`

importe = document.getElementById("importe")
from = document.getElementById("from")
to = document.getElementById("to")

const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", () => calcular());




function cambioBandera(){
    document.getElementById("bandera0").src = `./banderas/${from.value}.png`
    document.getElementById("bandera1").src = `./banderas/${to.value}.png`
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
        document.getElementById("resultado").innerHTML = `${from.value} son ${total} ${to.value} `
    })

    .catch(error => console.log('error', error))
}
