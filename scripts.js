// Ordena los servants por fecha
servants.sort((a, b) => {
    if (new Date(a.bannerDate).getTime() < new Date(b.bannerDate).getTime()) {
        return -1
    }
})

// Cambia los valores de los data-value asi como el simbolo +/-
const changeValue = (selected) => {
    let elementHtml = document.getElementById(selected.id)
    if (selected.dataset.value == "true") {
        elementHtml.dataset.value = "false"
        elementHtml.innerHTML = "-"
    } else {
        elementHtml.dataset.value = "true"
        elementHtml.innerHTML = "+"
    }
    filterServant()
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
        } else {
            priorityColor = 'secondary'
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
            `<div class="col-6 col-sm-4 col-md-3 col-lg-2 mt-3 boxServant" data-id="${x.idImg}" data-priority="${x.priority}">
                <div class="card card-servants w-100 h-100">
                    <div class="card-body p-2">
                        <h6 class="card-title text-primary">${x.name}</h6>
                        <h6 class="card-subtitle text-secondary">[${x.class}]</h6>
                        <h6 class="text-${priorityColor} fw-bold">[ Prioridad ${x.priority} ]</h6>
                        <img src="img/${x.idImg}.jpg" class="card-img-top" alt="imagen de ${x.name}">
                        <p class="card-text text-info">${fecha}</p>
                    </div>
                </div>
            </div>`
    });
}

// Funcion para filtrar los servants
const filterServant = () => {
    let servantClass = document.getElementById('filterByClass').value
    let servantName = document.getElementById('filterByName').value
    let filterOptions = []

    document.getElementById("btnEx").dataset.value == "true" ? filterOptions.push('EX') : ""
    document.getElementById("btnA").dataset.value == "true" ? filterOptions.push('A') : ""
    document.getElementById("btnB").dataset.value == "true" ? filterOptions.push('B') : ""
    document.getElementById("btnC").dataset.value == "true" ? filterOptions.push('C') : ""
    document.getElementById("btnD").dataset.value == "true" ? filterOptions.push('D') : ""

    document.querySelectorAll('.boxServant').forEach(div => {
        div.classList.add("d-none")
    })

    let newServants = servants.filter((a) => a.name.toLowerCase().includes(servantName.toLowerCase()) && ['EX', 'A'].includes(a.priority) && a.class.includes(servantClass))
    newServants.forEach(i => {
        document.querySelectorAll(`div[data-id='${i.idImg}']`).forEach(div => {
            if (filterOptions.includes(div.dataset.priority)) {
                div.classList.remove("d-none")
            }
        })
    })

    let countServants = servants.filter((a) => a.name.toLowerCase().includes(servantName.toLowerCase()) && filterOptions.includes(a.priority) && a.class.includes(servantClass))

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