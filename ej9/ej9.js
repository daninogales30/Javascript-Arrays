let turnos = [
    ['lunes', 'María'],
    ['martes', 'Luis'],
    ['miércoles', 'Antonia'],
    ['jueves', 'Pedro'],
    ['viernes', 'Marisa']
];

let dia = prompt("Dime un dia de la semana")

function servicio(dia) {
    for (let i = 0; i < turnos.length; i++) {
        if (turnos[i][0] == dia) {
            return "Este dia se encarga " + turnos[i][1] + "";
        }
    }

    return "No hay servicio ese dia"
}

alert(servicio(dia))