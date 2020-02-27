const trainers = require('../models/trainer.model')
const clients = require('../models/client.model')
const Assignment = require('../models/assignment.model');

exports.assignment = function(){
    let orderedClients = [...orderDesc((clients.fetchAll()), 'trainerImportance')];
    let orderedTrainers = [...orderDesc(trainers.fetchAll(), 'reputation')];
    const assignment = [];
    let totalSeats = getTotalSeats(orderedTrainers);
    orderedClients.forEach((client) => {
        let assigned = false;
        if (totalSeats === 0) {
            assignment.push(new Assignment(client.name, 'No disponible', '-'))
            return;
        }
        orderedTrainers.forEach((trainer) => {
            if (assigned || totalSeats === 0) return;
            if (trainer.seats > 0){
                assignment.push(new Assignment(client.name, trainer.name, getSatisfaction(client, trainer)))
                trainer.seats--
                assigned = true;
                totalSeats--
                return;
            }

        })

    })
    return assignment;
}

function getSatisfaction(client, trainer){
    return ((+trainer.reputation * 10) / (+client.trainerImportance / 2)) > 10 ? 100 : Math.round((+trainer.reputation * 10) / (+client.trainerImportance / 2) * 10)
}

function getTotalSeats(trainers){
    let total = 0;
    trainers.forEach(trainer => {
        total += trainer.seats;
    })
    return total;
}

function orderDesc(array = [], key){
    return array.sort((a,b) => {
        let keyA = a[key];
        let keyB = b[key];
    if(keyA < keyB) return 1;
    if(keyA > keyB) return -1;
    return 0;
})

}
