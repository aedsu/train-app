const assignment = [];

module.exports = class Assignment {
    constructor(clientName, trainerName, satisfaction) {
        this.clientName = clientName;
        this.trainerName = trainerName;
        this.satisfaction = satisfaction;
    }

    static fetchAll(){
        return assignment;
    }

}
