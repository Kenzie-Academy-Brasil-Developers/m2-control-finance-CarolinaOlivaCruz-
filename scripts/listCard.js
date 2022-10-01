const cardFinance = (element, array, index) => {

    const li = document.createElement("li")
    const pPreco = document.createElement("p")
    const div = document.createElement("div")
    const pTipo = document.createElement("p")
    const button = document.createElement("button")

    pPreco.innerText = element.value.toLocaleString("pt-br", { style: "currency", currency: "BRL", })

    if (element.categoryID === 1) {
        pTipo.innerText = "Entrada"
    } else {
        pTipo.innerText = "Saída"
    }

    button.innerHTML = `<i class="fa-solid fa-trash"></i>`
    button.addEventListener('click', (event)=>{
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
    div.innerHTML = ""

    array.forEach((element, index) => {
        ul.appendChild(cardFinance(element, array, index))
    });
    div.appendChild(ul)
}
listFinance(insertedValues)

//     li.innerHTML = `
    // <p>${element.value.toLocaleString("pt-br", { style: "currency", currency: "BRL", })}</p>
    // <div>
    //     <p>${element.categoryID === 1 ? "Entrada" : "Saída"}</p>
    //     <button onClick=${() => {console.log("oi")}}>
    //         <i class="fa-solid fa-trash"></i>
    //     </button>
    // </div>
    // `