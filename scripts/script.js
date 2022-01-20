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

    


    
    
   

