// Ordena los servants por fecha
servants.sort((a, b) => {
    if (new Date(a.bannerDate).getTime() < new Date(b.bannerDate).getTime()) {
        return -1
    }
})

const filterByAlignment = () => {
    let alignmentOptions1 = []
    let alignmentOptions2 = []

    document.getElementById('Lawful').checked ? alignmentOptions1.push('Lawful') : ''
    document.getElementById('Neutral').checked ? alignmentOptions1.push('Neutral') : ''
    document.getElementById('Chaotic').checked ? alignmentOptions1.push('Chaotic') : ''

    if (alignmentOptions1.length == 0) {
        alignmentOptions1 = ['Lawful', 'Neutral', 'Chaotic']
    }

    document.getElementById('Good').checked ? alignmentOptions2.push('Good') : ''
    document.getElementById('Balanced').checked ? alignmentOptions2.push('Balanced') : ''
    document.getElementById('Evil').checked ? alignmentOptions2.push('Evil') : ''
    document.getElementById('Summer').checked ? alignmentOptions2.push('Summer') : ''
    document.getElementById('Madness').checked ? alignmentOptions2.push('Madness') : ''
    document.getElementById('Bride').checked ? alignmentOptions2.push('Bride') : ''

    if (alignmentOptions2.length == 0) {
        alignmentOptions2 = ['Good', 'Balanced', 'Evil', 'Summer', 'Madness', 'Bride']
    }

    let filteredServants = servants.filter(a => {
        if (a.alignment.filter(b => alignmentOptions1.includes(b)).length > 0) {
            return 1
        }
    })

    filteredServants = filteredServants.filter(a => {
        if (a.alignment.filter(b => alignmentOptions2.includes(b)).length > 0) {
            return 1
        }
    })


    // console.log(filteredServants.filter(a => ['EX','A'].includes(a.priority)))

}

// funcion para ordenar por nombre todos los servants
// servants.sort((a, b) => a.bannerDate.localeCompare(b.bannerDate)).forEach(x => {

// funcion para imprimir en el Html los servants
const printServants = () => {
    let box = document.getElementById('box')
    box.innerHTML = ""
    let totalServant = servants.filter(a => ['EX', 'A'].includes(a.priority)).length
    document.getElementById('resultServant').innerHTML = totalServant
    document.getElementById('totalServant').innerHTML = totalServant
    let priorityColor = 'secondary'
    let rarityText = '???'

    servants.forEach(x => {
        // Determina el color y el simbolo de la prioridad
        if (x.priority == 'EX') {
            priorityColor = 'indigo'
        } else if (x.priority == 'A') {
            priorityColor = 'danger'
        } else if (x.priority == 'B') {
            priorityColor = 'warning'
        } else if (x.priority == 'C') {
            priorityColor = 'success'
        } else if (x.priority == 'D') {
            priorityColor = 'info'
        }

        // Acomoda las fechas
        let date = new Date(x.bannerDate)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        let fecha
        if (month < 10) {
            if (day < 10) {
                fecha = `0${day}-0${month}-${year}`

            } else {
                fecha = `${day}-0${month}-${year}`
            }
        } else {
            if (day < 10) {
                fecha = `0${day}-${month}-${year}`
            } else {
                fecha = `${day}-${month}-${year}`
            }
        }

        box.innerHTML +=
            `<div class="boxServant flex-fill p-1" data-id="${x.idImg}" data-priority="${x.priority}">
                <div class="card card-servants w-100 h-100">
                    <div class="card-body p-2">
                        <h6 class="card-title text-primary text-sm">${x.name}</h6>
                        <h6 class="card-subtitle text-secondary text-sm">[${x.class}]</h6>
                        <h6 class="text-${priorityColor} fw-bold text-sm">Prioridad ${x.priority}</h6>
                        <img src="./img/servants/${x.idImg}.jpg" class="w-100" alt="imagen de ${x.name}">
                        <p class="card-text m-0 text-warning">Rareza: ${x.rarity}<i class="bi-star-fill"></i></p>
                        <p class="card-text m-0 text-info text-nowrap text-sm">${fecha}</p>
                    </div>
                </div>
            </div>`
    });
}

// Funcion para filtrar los servants
const filterServant = () => {
    let servantClass = document.getElementById('filterByClass').value
    let servantName = document.getElementById('filterByName').value
    let servantGender = document.getElementById("filterByGender").value

    // obtiene las prioridades
    let priorityOptions = []
    document.getElementById("priorityEX").checked == true ? priorityOptions.push('EX') : ""
    document.getElementById("priorityA").checked == true ? priorityOptions.push('A') : ""
    document.getElementById("priorityB").checked == true ? priorityOptions.push('B') : ""
    document.getElementById("priorityC").checked == true ? priorityOptions.push('C') : ""
    document.getElementById("priorityD").checked == true ? priorityOptions.push('D') : ""
    if (priorityOptions.length == 0) {
        priorityOptions = ['EX', 'A', 'B', 'C', 'D']
    }


    let alignmentOptions1 = []
    document.getElementById('Lawful').checked ? alignmentOptions1.push('Lawful') : ''
    document.getElementById('Neutral').checked ? alignmentOptions1.push('Neutral') : ''
    document.getElementById('Chaotic').checked ? alignmentOptions1.push('Chaotic') : ''
    if (alignmentOptions1.length == 0) {
        alignmentOptions1 = ['Lawful', 'Neutral', 'Chaotic']
    }

    let alignmentOptions2 = []
    document.getElementById('Good').checked ? alignmentOptions2.push('Good') : ''
    document.getElementById('Balanced').checked ? alignmentOptions2.push('Balanced') : ''
    document.getElementById('Evil').checked ? alignmentOptions2.push('Evil') : ''
    document.getElementById('Summer').checked ? alignmentOptions2.push('Summer') : ''
    document.getElementById('Madness').checked ? alignmentOptions2.push('Madness') : ''
    document.getElementById('Bride').checked ? alignmentOptions2.push('Bride') : ''
    if (alignmentOptions2.length == 0) {
        alignmentOptions2 = ['Good', 'Balanced', 'Evil', 'Summer', 'Madness', 'Bride']
    }


    // ===== Ocultar/Mostar según los filtros ===== //

    // oculta todo
    document.querySelectorAll('.boxServant').forEach(div => {
        div.classList.add("d-none")
    })

    // Filtra los servants por genero, clase y nombre
    let filteredServants = servants.filter((a) => a.name.toLowerCase().includes(servantName.toLowerCase()) && a.class.includes(servantClass) && a.gender.includes(servantGender))

    // Filtra por alineamiento (primario) 
    filteredServants = filteredServants.filter(a => {
        if (a.alignment.filter(b => alignmentOptions1.includes(b)).length > 0) {
            return 1
        }
    })

    // Filtra por alineamiento (secundario) 
    filteredServants = filteredServants.filter(a => {
        if (a.alignment.filter(b => alignmentOptions2.includes(b)).length > 0) {
            return 1
        }
    })


    filteredServants.filter((a) => ['EX', 'A'].includes(a.priority)).forEach(i => {
        document.querySelectorAll(`div[data-id='${i.idImg}']`).forEach(div => {
            if (priorityOptions.includes(div.dataset.priority)) {
                div.classList.remove("d-none")
            }
        })
    })


    // calcular cuantos servants quedan despues del filtro
    let countServants = filteredServants.filter((a) => priorityOptions.includes(a.priority))

    let prioEx = countServants.filter(a => a.priority == 'EX').length
    let prioA = countServants.filter(a => a.priority == 'A').length
    let prioB = countServants.filter(a => a.priority == 'B').length
    let prioC = countServants.filter(a => a.priority == 'C').length
    let prioD = countServants.filter(a => a.priority == 'D').length

    let total = 0

    total = prioD > 0 ? prioD : total
    total = prioC > 0 ? prioC : total
    total = prioB > 0 ? prioB : total
    total = prioA > 0 ? prioA : total

    total += prioEx

    document.getElementById('resultServant').innerHTML = total
}