class Population {
    constructor(size, initialize) {
        this.tours = new Array(size);
        if (initialize) {
            for(let i = 0; i < this.populationSize(); i++) {
                let newTour = new Tour();
                newTour.generateIndividual();
                this.saveTour(i, newTour);
            }
        }
    }

    saveTour(index, tour) {
        this.tours[index] = tour;
    }

    getTour(index) {
        return this.tours[index];
    }

    getFittest() {
        let fittest = this.tours[0];
        for(let i = 1; i < this.populationSize(); i++) {
            if (fittest.getFitness() <= this.getTour(i).getFitness()) {
                fittest = this.getTour(i);
            }
        }
        return fittest;
    }

    populationSize() {
        return this.tours.length;
    }
}