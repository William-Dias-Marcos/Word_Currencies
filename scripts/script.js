const url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

    fetch(url).then((res) => {

        return res.json()

    })
    .then((data) => {

        // dólar
        let USD = data.USDBRL.ask
        document.getElementById("usd").innerHTML = `R$ ${Number(USD).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,  
            maximumFractionDigits: 2
         })}`

        // euro
        let EUR = data.EURBRL.ask
        document.getElementById("eur").innerHTML = `R$ ${Number(EUR).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,  
            maximumFractionDigits: 2
         })}`

        // bitcoin
        let BTC = data.BTCBRL.ask
        document.getElementById("btc").innerHTML = `R$ ${Number(BTC).toFixed(3)},00`

    
    })

    // calcular dólar 

    function dolarBR (){
            
        let brDolar = document.getElementById("brDolar").value
        let usd = document.getElementById("usd").innerText

        Usd = usd.substring(3,1000)

        resUsd = parseFloat(Usd.replace(",", "."))

        result = resUsd * brDolar
    
        document.getElementById("brlDolar").innerText = `R$ ${Number(result).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,  
            maximumFractionDigits: 2
         })}`

    }



