getDateRelationship = () => {
    const date = document.querySelector(".dateRelationship").value

    //získá přesný aktuálí čas
    const toDay = new Date().getTime()
    //získá přesný čas z data
    const dateTime = new Date(date).getTime()

    //vypočítá rozdíl v milisekundách
    const difference = toDay - dateTime
    
    //Zaokrouhlení na celá čísla
    const resultSecond = Math.round(difference / 1000)
    const resultMinute = Math.round(resultSecond / 60)
    const resultHour = Math.round(resultMinute / 60)
    const resultDay = Math.round(resultHour / 24)

    let text = document.querySelector(".textR")
    let showDay = document.querySelector(".resultDayR")
    let showHour = document.querySelector(".resultHourR")
    let showMinute = document.querySelector(".resultMinuteR")
    let showSecond = document.querySelector(".resultSecondR")

    //Podmínka pro vypsání dat pokud je vyplněné dotum či výstraha s nevypsáním
    if(date == ""){
        alert("Musí se zadat nějaké datum")
        showDay.style.visibilit = "hidden"
        showHour.style.visibilit = "hidden"
        showMinute.style.visibilit = "hidden"
        showSecond.style.visibilit = "hidden"
       }else{ 
        text.innerHTML = `Váš vztah trvá:`
        showDay.innerHTML = `${resultDay} Days or`
        showHour.innerHTML = `${resultHour} Hours or`
        showMinute.innerHTML = `${resultMinute} Minutes or`
        showSecond.innerHTML = `${resultSecond} Seconds`
       }
}

getDateWedding = () => {
    const date = document.querySelector(".dateWedding").value

    //získá přesný aktuálí čas
    const toDay = new Date().getTime()
    //získá přesný čas z data
    const dateTime = new Date(date).getTime()

    //vypočítá rozdíl v milisekundách
    const difference = toDay - dateTime
    
    //Zaokrouhlení na celá čísla
    const resultSecond = Math.round(difference / 1000)
    const resultMinute = Math.round(resultSecond / 60)
    const resultHour = Math.round(resultMinute / 60)
    const resultDay = Math.round(resultHour / 24)

    let text = document.querySelector(".textW")
    let showDay = document.querySelector(".resultDayW")
    let showHour = document.querySelector(".resultHourW")
    let showMinute = document.querySelector(".resultMinuteW")
    let showSecond = document.querySelector(".resultSecondW")

    //Podmínka pro vypsání dat pokud je vyplněné dotum či výstraha s nevypsáním
    if(date == ""){
        alert("Musí se zadat nějaké datum")
        showDay.style.visibilit = "hidden"
        showHour.style.visibilit = "hidden"
        showMinute.style.visibilit = "hidden"
        showSecond.style.visibilit = "hidden"
       }else{ 
        text.innerHTML = `Od vaší svatby uplynulo již:`
        showDay.innerHTML = `${resultDay} Days or`
        showHour.innerHTML = `${resultHour} Hours or`
        showMinute.innerHTML = `${resultMinute} Minutes or`
        showSecond.innerHTML = `${resultSecond} Seconds`
       }
}

getDateChild = () => {
    const date = document.querySelector(".dateChild").value

    //získá přesný aktuálí čas
    const toDay = new Date().getTime()
    //získá přesný čas z data
    const dateTime = new Date(date).getTime()

    //vypočítá rozdíl v milisekundách
    const difference = toDay - dateTime
    
    //Zaokrouhlení na celá čísla
    const resultSecond = Math.round(difference / 1000)
    const resultMinute = Math.round(resultSecond / 60)
    const resultHour = Math.round(resultMinute / 60)
    const resultDay = Math.round(resultHour / 24)

    let text = document.querySelector(".textCh")
    let showDay = document.querySelector(".resultDayCh")
    let showHour = document.querySelector(".resultHourCh")
    let showMinute = document.querySelector(".resultMinuteCh")
    let showSecond = document.querySelector(".resultSecondCh")

    //Podmínka pro vypsání dat pokud je vyplněné dotum či výstraha s nevypsáním
    if(date == ""){
        alert("Musí se zadat nějaké datum")
        showDay.style.visibilit = "hidden"
        showHour.style.visibilit = "hidden"
        showMinute.style.visibilit = "hidden"
        showSecond.style.visibilit = "hidden"
       }else{ 
        text.innerHTML = `Od narození Vašeho dítěte uplynulo:`
        showDay.innerHTML = `${resultDay} Days or`
        showHour.innerHTML = `${resultHour} Hours or`
        showMinute.innerHTML = `${resultMinute} Minutes or`
        showSecond.innerHTML = `${resultSecond} Seconds`
       }
}

