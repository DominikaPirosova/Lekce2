//divadlo

const Prijem = (12 * 174 * 15)*30
const Student = 0.35
const Mesiac = 0.40

const cenaStudenta = Math.floor((Prijem * Student) * Mesiac)

document.body.innerHTML += "<p>Prijem" + "je" + Prijem " kc</p>"

document.body.innerHTML += "<p>Cena" + " studenta" + " je" + cenaStudenta " kc</p>"

