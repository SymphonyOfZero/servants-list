const servants = [
    { idImg: 1, class: "Berserk", name: 'Morgan', bannerDate: '2023/8/18', priority: 'C' },
    { idImg: 1, class: "Berserk", name: 'Morgan', bannerDate: '2024/4/13', priority: 'B' },
    { idImg: 1, class: "Berserk", name: 'Morgan', bannerDate: '2024/11/3', priority: 'A' },

    { idImg: 2, class: "Assasin", name: 'Koyanskaya of Darkness', bannerDate: '2024/1/1', priority: 'B' },
    { idImg: 2, class: "Assasin", name: 'Koyanskaya of Darkness', bannerDate: '2025/1/1', priority: 'A' },

    { idImg: 3, class: "Berserk", name: 'Ibuki-Douji (Berserker)', bannerDate: '2024/8/14', priority: 'EX' },

    { idImg: 4, class: "Pretender", name: 'Lady Avalon', bannerDate: '2024/8/10', priority: 'B' },
    { idImg: 4, class: "Pretender", name: 'Lady Avalon', bannerDate: '2025/4/29', priority: 'A' },

    { idImg: 5, class: "Pretender", name: 'Oberon', bannerDate: '2024/12/1', priority: 'EX' },

    { idImg: 6, class: "Caster", name: 'Altria Caster', bannerDate: '2024/5/11', priority: 'B' },
    { idImg: 6, class: "Caster", name: 'Altria Caster', bannerDate: '2024/11/23', priority: 'A' },

    { idImg: 7, class: "Moon Cancer", name: 'Sessyoin Kiara (Moon Cancer)', bannerDate: '2024/7/21', priority: 'EX' },

    { idImg: 8, class: "Alter Ego", name: 'Sessyoin Kiara', bannerDate: '2024/7/13', priority: 'EX' },

    { idImg: 9, class: "Alter Ego", name: 'Kingprotea', bannerDate: '2024/2/23', priority: 'B' },
    { idImg: 9, class: "Alter Ego", name: 'Kingprotea', bannerDate: '2025/1/1', priority: 'A' },

    { idImg: 10, class: "Avenger", name: 'Kama (Avenger)', bannerDate: '2023/9/15', priority: 'B' },
    { idImg: 10, class: "Avenger", name: 'Kama (Avenger)', bannerDate: '2024/8/21', priority: 'A' },

    { idImg: 11, class: "Moon Cancer", name: 'BB (Summer)', bannerDate: '2024/6/19', priority: 'EX' },

    { idImg: 12, class: "Alter Ego", name: 'Larva / Tiamat', bannerDate: '2025/4/19', priority: 'EX' },

    { idImg: 13, class: "Assasin", name: 'First Hassan', bannerDate: '2024/1/1', priority: 'B' },
    { idImg: 13, class: "Assasin", name: 'First Hassan', bannerDate: '2025/4/19', priority: 'A' },

    { idImg: 14, class: "Foreigner", name: 'Van Gogh', bannerDate: '2023/9/29', priority: 'B' },
    { idImg: 14, class: "Foreigner", name: 'Van Gogh', bannerDate: '2024/10/26', priority: 'A' },

    { idImg: 15, class: "Beast", name: "Sodom's Beast / Draco", bannerDate: '2025/4/26', priority: 'EX' },

    { idImg: 16, class: "Alter Ego", name: 'Okita Souji (Alter)', bannerDate: '2023/9/29', priority: 'B' },
    { idImg: 16, class: "Alter Ego", name: 'Okita Souji (Alter)', bannerDate: '2024/9/17', priority: 'A' },

    { idImg: 17, class: "Saber", name: 'Okita Souji (Saber Alter)', bannerDate: '2023/9/8', priority: 'B' },
    { idImg: 17, class: "Saber", name: 'Okita Souji (Saber Alter)', bannerDate: '2024/8/21', priority: 'A' },

    { idImg: 18, class: "Assasin", name: 'Kama', bannerDate: '2024/7/13', priority: 'B' },
    { idImg: 18, class: "Assasin", name: 'Kama', bannerDate: '2025/6/21', priority: 'A' },

    { idImg: 19, class: "Avenger", name: 'Space Ishtar', bannerDate: '2024/8/31', priority: 'EX' },

    { idImg: 20, class: "Avenger", name: 'Demon King Nobunaga (Oda Nobunaga)', bannerDate: '2023/11/22', priority: 'C' },
    { idImg: 20, class: "Avenger", name: 'Demon King Nobunaga (Oda Nobunaga)', bannerDate: '2024/9/17', priority: 'B' },
    { idImg: 20, class: "Avenger", name: 'Demon King Nobunaga (Oda Nobunaga)', bannerDate: '2025/3/22', priority: 'A' },

    { idImg: 21, class: "Avenger", name: 'Nitocris (Alter)', bannerDate: '2025/1/18', priority: 'C' },
    { idImg: 21, class: "Avenger", name: 'Nitocris (Alter)', bannerDate: '2025/2/17', priority: 'B' },
    { idImg: 21, class: "Avenger", name: 'Nitocris (Alter)', bannerDate: '2025/6/7', priority: 'A' },

    { idImg: 22, class: "Ruler", name: 'Himiko', bannerDate: '2023/11/3', priority: 'B' },
    { idImg: 22, class: "Ruler", name: 'Himiko', bannerDate: '2024/9/17', priority: 'A' },

    { idImg: 23, class: "Ruler", name: 'Scathach-Skadi (Ruler)', bannerDate: '2024/8/17', priority: 'EX' },

    { idImg: 24, class: "Caster", name: 'Scathach-Skadi', bannerDate: '2023/12/8', priority: 'C' },
    { idImg: 24, class: "Caster", name: 'Scathach-Skadi', bannerDate: '2024/3/30', priority: 'B' },
    { idImg: 24, class: "Caster", name: 'Scathach-Skadi', bannerDate: '2025/7/3', priority: 'A' },

    { idImg: 25, class: "Archer", name: 'Durga', bannerDate: '2025/6/25', priority: 'EX' },

    { idImg: 26, class: "Saber", name: 'Ibuki-Douji', bannerDate: '2023-11-10', priority: 'C' },
    { idImg: 26, class: "Saber", name: 'Ibuki-Douji', bannerDate: '2024-08-31', priority: 'B' },
    { idImg: 26, class: "Saber", name: 'Ibuki-Douji', bannerDate: '2025-04-10', priority: 'A' },

    { idImg: 27, class: "Alter Ego", name: 'Manannan mac Lir (Bazett)', bannerDate: '2024-02-09', priority: 'B' },
    { idImg: 27, class: "Alter Ego", name: 'Manannan mac Lir (Bazett)', bannerDate: '2025-02-19', priority: 'A' },

    { idImg: 28, class: "Ruler", name: 'Altria Pendragon (Ruler)', bannerDate: '2024-07-21', priority: 'B' },
    { idImg: 28, class: "Ruler", name: 'Altria Pendragon (Ruler)', bannerDate: '2025-06-28', priority: 'A' },

    { idImg: 29, class: "Berserk", name: 'Arjuna (Alter)', bannerDate: '2024-03-02', priority: 'C' },
    { idImg: 29, class: "Berserk", name: 'Arjuna (Alter)', bannerDate: '2024-09-07', priority: 'B' },
    { idImg: 29, class: "Berserk", name: 'Arjuna (Alter)', bannerDate: '2025-03-08', priority: 'A' },

    { idImg: 30, class: "Saber", name: 'Trung Sisters', bannerDate: '2024-04-06', priority: 'EX' },

    { idImg: 31, class: "Berserk", name: 'Minamoto-no-Raikou', bannerDate: '2024-08-31', priority: 'B' },
    { idImg: 31, class: "Berserk", name: 'Minamoto-no-Raikou', bannerDate: '2025-04-10', priority: 'A' },

    { idImg: 32, class: "Rider", name: 'Leonardo da Vinci (Rider)', bannerDate: '2024-04-20', priority: 'B' },
    { idImg: 32, class: "Rider", name: 'Leonardo da Vinci (Rider)', bannerDate: '2024-11-23', priority: 'A' },

    { idImg: 33, class: "Moon Cancer", name: 'Archetype Earth', bannerDate: '2024-07-31', priority: 'EX' },

    { idImg: 34, class: "Lancer", name: 'Ereshkigal', bannerDate: '2023-10-12', priority: 'D' },
    { idImg: 34, class: "Lancer", name: 'Ereshkigal', bannerDate: '2024-01-26', priority: 'C' },
    { idImg: 34, class: "Lancer", name: 'Ereshkigal', bannerDate: '2024-08-31', priority: 'B' },
    { idImg: 34, class: "Lancer", name: 'Ereshkigal', bannerDate: '2025-02-13', priority: 'A' },

    { idImg: 35, class: "Archer", name: 'Ishtar', bannerDate: '2024-01-26', priority: 'B' },
    { idImg: 35, class: "Archer", name: 'Ishtar', bannerDate: '2024-08-31', priority: 'A' },

    { idImg: 36, class: "Foreigner", name: 'Kukulkan', bannerDate: '2025-02-07', priority: 'B' },
    { idImg: 36, class: "Foreigner", name: 'Kukulkan', bannerDate: '2025-06-07', priority: 'A' },

    { idImg: 37, class: "Assasin", name: 'Kashin Koji', bannerDate: '2025-05-24', priority: 'EX' },

    { idImg: 38, class: "Caster", name: 'Nero Claudius (Caster)', bannerDate: '2023-06-30', priority: 'C' },
    { idImg: 38, class: "Caster", name: 'Nero Claudius (Caster)', bannerDate: '2024-08-03', priority: 'B' },
    { idImg: 38, class: "Caster", name: 'Nero Claudius (Caster)', bannerDate: '2025-05-31', priority: 'A' },

    { idImg: 39, class: "Lancer", name: 'Sakamoto Ryouma (Lancer)', bannerDate: '2023-11-22', priority: 'C' },
    { idImg: 39, class: "Lancer", name: 'Sakamoto Ryouma (Lancer)', bannerDate: '2024-09-17', priority: 'B' },
    { idImg: 39, class: "Lancer", name: 'Sakamoto Ryouma (Lancer)', bannerDate: '2025-03-24', priority: 'A' },

    { idImg: 40, class: "Alter Ego", name: 'Super Bunyan', bannerDate: '2024-04-27', priority: 'EX' },

    { idImg: 41, class: "Berserk", name: 'Sen no Rikyu', bannerDate: '2024-09-14', priority: 'EX' },

    { idImg: 42, class: "Lancer", name: 'Vritra', bannerDate: '2024-02-09', priority: 'D' },
    { idImg: 42, class: "Lancer", name: 'Vritra', bannerDate: '2024-12-07', priority: 'C' },
    { idImg: 42, class: "Lancer", name: 'Vritra', bannerDate: '2025-02-17', priority: 'B' },
    { idImg: 42, class: "Lancer", name: 'Vritra', bannerDate: '2025-07-12', priority: 'A' },

    { idImg: 43, class: "Foreigner", name: 'Jacques de Molay', bannerDate: '2023-10-20', priority: 'D' },
    { idImg: 43, class: "Foreigner", name: 'Jacques de Molay', bannerDate: '2024-05-12', priority: 'C' },
    { idImg: 43, class: "Foreigner", name: 'Jacques de Molay', bannerDate: '2024-10-15', priority: 'B' },
    { idImg: 43, class: "Foreigner", name: 'Jacques de Molay', bannerDate: '2025-04-29', priority: 'A' },

    { idImg: 44, class: "Ruler", name: 'Pope Johanna', bannerDate: '2025-02-17', priority: 'EX' },
]

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

    // filterServant()
    filterServant()
}

// funcion para cargar todos los servants
const getAllServant = () => {
    // servants.sort((a, b) => a.bannerDate.localeCompare(b.bannerDate)).forEach(x => {
    printServants(servants)
}

// funcion para imprimir en el Html los servants
const printServants = (servantList) => {
    let box = document.getElementById('box')

    box.innerHTML = ""

    let totalServant = servants.filter(a => ['EX', 'A'].includes(a.priority)).length

    document.getElementById('resultServant').innerHTML = totalServant
    document.getElementById('totalServant').innerHTML = totalServant

    servantList.forEach(x => {
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

    if (prioD > 0) {
        total = prioD
    }
    if (prioC > 0) {
        total = prioC
    }
    if (prioB > 0) {
        total = prioB
    }
    if (prioA > 0) {
        total = prioA
    }

    total += prioEx

    document.getElementById('resultServant').innerHTML = total
}