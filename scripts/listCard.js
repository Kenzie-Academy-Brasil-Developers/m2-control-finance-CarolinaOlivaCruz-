const cardFinance = (element, array, index) => {

    const li = document.createElement("li")
    const pPreco = document.createElement("p")
    const div = document.createElement("div")
    div.className = "div-list"
    const pTipo = document.createElement("p")
    pTipo.className = "p-tipo"
    const button = document.createElement("button")
    button.className = "button-nav"

    pPreco.innerText = element.value.toLocaleString("pt-br", { style: "currency", currency: "BRL", })

    if (element.categoryID === 1) {
        pTipo.innerText = "Entrada"
    } else {
        pTipo.innerText = "Saída"
    }

    button.innerHTML = `<i class="fa-solid fa-trash"></i>`
    button.addEventListener('click', (event) => {
        event.preventDefault()
        array.splice(index, 1)
        listFinance(insertedValues)
    })


    div.append(pTipo, button)
    li.append(pPreco, div)
    return li
}

const listFinance = (array) => {
    const div = document.querySelector(".container-registros")
    const ul = document.createElement("ul")
    ul.className = "list-finance"
    div.innerHTML = ""
    
    soma(array)

    array.forEach((element, index) => {
        ul.appendChild(cardFinance(element, array, index))
    });
    div.appendChild(ul)

}
listFinance(insertedValues)