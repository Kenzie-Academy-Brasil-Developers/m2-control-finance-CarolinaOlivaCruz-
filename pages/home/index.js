// Soma
function soma(array) {
    const somaP = document.getElementById('soma-p')

    let total = array.reduce((contador, elemento) => contador + elemento.value, 0)

    somaP.innerText = total
}
soma(insertedValues)




// Filtro
function eventFiltro() {
    const buttons = document.querySelectorAll(".button-nav")
    console.log(buttons)
    const mainList = document.getElementById("app")

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // mainList.innerHTML = ''
            const filtro = button.innerText

            if (filtro === 'Todos') {
                listFinance(insertedValues)
            } else {
                const filtroList = filtroCategoria(filtro)

                listFinance(filtroList)
            }
        })
    })
}


function filtroCategoria(text) {
    let categorias = []

    if (text === 'Entradas') {
        categorias = insertedValues.filter(categoria => categoria.categoryID === 1)

    } else if (text === 'Saídas') {
        categorias = insertedValues.filter(categoria => categoria.categoryID === 2)
    }

    return categorias
}

eventFiltro()