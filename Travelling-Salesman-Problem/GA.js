class GA {

    static mutationRate = 0.015;
    static tournamentSize = 5;
    static elitism = true;

    static evolvePopulation(pop) {
        let newPopulation = new Population(pop.populationSize(), false);

        let elitismOffset = 0;
        if (this.elitism) {
            newPopulation.saveTour(0, pop.getFittest());
            elitismOffset = 1;
        }

        // Crossover
        for (let i = elitismOffset; i < newPopulation.populationSize(); i++) {
            let parent1 = this.tournamentSelection(pop);
            let parent2 = this.tournamentSelection(pop);
            // Crossover parents
            let child = this.crossover(parent1, parent2);
            // Add child to newPopulation
            newPopulation.saveTour(i, child);
        }

        // Mutation
        for (let i = elitismOffset; i < newPopulation.populationSize(); i++) {
            this.mutate(newPopulation.getTour(i));
        }

        return newPopulation;
    }

    static crossover(parent1, parent2) {
        let child = new Tour();

        let startPos = Math.floor(Math.random() * parent1.citiesLength());
        let endPos = Math.floor(Math.random() * parent1.citiesLength());

        for (let i = 0; i < child.citiesLength(); i++) {
            if (startPos < endPos && i > startPos && i < endPos) {
                child.setCity(i, parent1.getCity(i));
            } else if (startPos > endPos) {
                if (!(i < startPos && i > endPos)) {
                    child.setCity(i, parent1.getCity(i));
                }
            }
        }

        for (let i = 0; i < parent2.citiesLength(); i++) {
            if (!child.containsCity(parent2.getCity(i))) {
                for (let ii = 0; ii < child.citiesLength(); ii++) {
                    if (child.getCity(ii) == null) {
                        child.setCity(ii, parent2.getCity(i));
                        break;
                    }
                }
            }
        }
        return child;   
    }

    // mutate a tour using swap mutation
    static mutate(tour) {
        for (let tourPos1 = 0; tourPos1 < tour.citiesLength(); tourPos1++) {
            if (Math.random() < this.mutationRate) {
                let tourPos2 = Math.floor(Math.random() * tour.citiesLength());

                let city1 = tour.getCity(tourPos1);
                let city2 = tour.getCity(tourPos2);

                //Swap 
                tour.setCity(tourPos2, city1);
                tour.setCity(tourPos1, city2);
            }
        }
    }

    // Selects candidate tour for crossover
    static tournamentSelection(pop) {
        let tournament = new Population(this.tournamentSize, false);

        for (let i = 0; i < this.tournamentSize; i++) {
            let randomId = Math.floor(Math.random() * pop.populationSize());
            tournament.saveTour(i, pop.getTour(randomId));
        }
        // get the fittest tour
        let fittest = tournament.getFittest();
        return fittest;
    }
}