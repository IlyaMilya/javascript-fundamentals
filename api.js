
 let div = document.getElementById('container')

const request = async () => {
    let req = await fetch ("https://raw.githubusercontent.com/rmdashrfv/javascript-fundamentals/main/mock_data.json")
    let res = await req.json()
    console.log("response", res)
    res.forEach((element) => {
    let img = document.createElement('img')
    let button = document.createElement('button')
    let h3 = document.createElement('h3')
    h3.innerText = element.company_name
    let h4 = document.createElement('h4')
    h4.innerText = `Vacancies ${element.vacancies}`
    button.innerText = `Rent Building${element.id}!`
    button.addEventListener('click', () => {
       let updatedVacancies = --element.vacancies
       if (updatedVacancies <= -1) return alert('NO MORE')
        h4.innerText =`Vacancies: ${updatedVacancies}`
    })
    img.setAttribute('src', element.photo)
    div.appendChild(h3)
    div.appendChild(h4)
    div.appendChild(img)
    div.appendChild(button)
})
}

request()



/* let div = document.getElementById('container')

const requesty = async () => {
    res = await fetch("https://raw.githubusercontent.com/rmdashrfv/javascript-fundamentals/main/mock_data.json")
    req = await res.json()
    console.log("respondant", res)
    let img = createElement('img')
    let 
} */