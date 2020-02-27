const trainersCharged = [
        {name:"A", reputation: 4.5, seats: 1},
    {name:"B", reputation: 3.2, seats: 4},
    {name:"D", reputation: 3.4, seats: 2},
    {name:"C", reputation: 1.2, seats: 3}]
let trainers = []

module.exports = class Trainer {
    constructor(name, reputation, seats) {
        this.name = name;
        this.reputation = reputation;
        this.seats = seats;
    }

    static setTrainers(){
        trainers = [];
        trainersCharged.forEach(trainer => trainers.push(new Trainer(trainer.name, trainer.reputation, trainer.seats)))
    }

    static fetchAll(){
        Trainer.setTrainers();
        return trainers;
    }


}
