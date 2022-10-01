function renderModal() {
    let categoria = null
    const bodyModal = document.createElement("section")
    bodyModal.id = "body-modal"

    const containerModal = document.createElement("div")
    containerModal.id = "container-modal"

    const modalTitle = document.createElement("div")
    modalTitle.className = "modal-title"
    const modalTitleH3 = document.createElement("h3")
    modalTitleH3.innerText = "Registro do valor"
    const botaoFechar = document.createElement("button")
    botaoFechar.innerText = "X"
    botaoFechar.type = "button"
    botaoFechar.id = "fechar-modal"

    const modalP = document.createElement("div")
    const modalTitleSpan = document.createElement("span")
    const modalTitleP = document.createElement("p")
    modalTitleP.innerText = "Digite o valor e em seguida aperte no botão"

    const form = document.createElement("form")
    const modalValor = document.createElement("div")
    const modalValorH4 = document.createElement("h4")
    modalValorH4.innerText = "Valor"
    const modalValorInput = document.createElement("input")
    modalValorInput.type = "number"
    modalValorInput.required = true
    modalValorInput.placeholder = "0,00"

    const containerTipo = document.createElement("div")
    const containerTipoH4 = document.createElement("h4")
    containerTipoH4.innerText = "Tipo de valor"
    const containerTipoButton1 = document.createElement("button")
    containerTipoButton1.innerText = "Entrada"
    containerTipoButton1.className = "button-nav"
    containerTipoButton1.addEventListener('click', () => {
        categoria = 1
    })

    const containerTipoButton2 = document.createElement("button")
    containerTipoButton2.innerText = "Saída"
    containerTipoButton2.className = "button-nav"
    containerTipoButton2.addEventListener('click', () => {
        categoria = 2
    })

    const botoesEnviar = document.createElement("div")
    const botoesEnviar1 = document.createElement("button")
    botoesEnviar1.innerText = "Cancelar"
    const botoesEnviar2 = document.createElement("button")
    botoesEnviar2.innerText = "Inserir valor"
    botoesEnviar2.type = "submit"
    botoesEnviar2.addEventListener('click', () => {
        let valorInserido = modalValorInput.value
        salvarValor(categoria, valorInserido)
    })

    modalTitle.append(modalTitleH3, botaoFechar)
    modalTitleSpan.appendChild(modalTitleP)
    modalP.appendChild(modalTitleSpan)
    modalValor.append(modalValorH4, modalValorInput)
    containerTipo.append(containerTipoH4, containerTipoButton1, containerTipoButton2)
    botoesEnviar.append(botoesEnviar1, botoesEnviar2)
    form.append(modalValor, containerTipo, botoesEnviar)
    containerModal.append(modalTitle, modalP, modalValor, containerTipo, botoesEnviar)
    bodyModal.appendChild(containerModal)

    return bodyModal
}

const modalButton = document.getElementById('abrir-modal')
modalButton.addEventListener('click', (event) => {
    event.preventDefault()
    showModal()
})

function showModal() {
    const body = document.getElementById('body-principal')
    const modal = renderModal()
    body.appendChild(modal)

    closeModal()
}

function closeModal() {
    const closeModalButton = document.getElementById('fechar-modal')
    const modalContainer = document.getElementById('body-modal')

    closeModalButton.addEventListener('click', () => {
        modalContainer.remove()
    })
}

function salvarValor(categoria, valor) {
    let ultimoId = 0

    if (insertedValues.length === 0) {
        ultimoId = 1
    } else {
        ultimoId = insertedValues[insertedValues.length - 1].id
    }

    const data = {
        id: ultimoId + 1,
        value: Number(valor),
        categoryID: categoria,
    }
    insertedValues.push(data)
    listFinance(insertedValues)

}
