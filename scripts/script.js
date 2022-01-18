// dólar
let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

    fetch(url)
    .then((res) => {

        return res.json()

    })
    .then((data) => {

        console.log(data.USDBRL.ask)
        let USD = data.USDBRL.ask

        document.getElementById("usd").innerHTML = `R$ ${Number(USD).toFixed(2)} `
        
    })
    
   

