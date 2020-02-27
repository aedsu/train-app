const clients = [
    {name: "q", trainerImportance: 2.6},
{name: "r", trainerImportance: 3.7},
{name: "s", trainerImportance: 8.5},
{name: "t", trainerImportance: 9.7},
{name: "u", trainerImportance: 2.6},
{name: "v", trainerImportance: 4.7},
{name: "w", trainerImportance: 5.6},
{name: "x", trainerImportance: 3.7},
{name: "y", trainerImportance: 8.1},
{name: "z", trainerImportance: 2.5}]


module.exports = class Client {
    constructor(name, trainerImportance) {
        this.name = name;
        this.trainerImportance = trainerImportance;
    }

    static fetchAll(){
        return clients;
    }

}
