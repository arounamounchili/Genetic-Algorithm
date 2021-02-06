class Tour {
    constructor (cities) {
        if (cities !== undefined) {
            this.cities = cities;
        }
        else {
            this.cities = new Array(TourManager.getCitiesNumber());
        }
        this.totalDistance = 0;
        this.fitness = 0;
    }

    generateIndividual() {
        for (let i = 0; i < TourManager.getCitiesNumber(); i++) {
            this.setCity(i, TourManager.getCity(i));
        }

        function shuffle (arr) {
            return arr.sort(() => Math.random() - 0.5);
        }

        this.cities = shuffle(this.cities);
    }

    getFitness() {
        if (this.fitness === 0) {
            this.fitness = 1 / this.getDistance();
        }
        return this.fitness;
    }

    getCities() {
        return this.cities;
    }

    getCity (index) {
        return this.cities[index];
    }

    setCity (index, city) {
        this.cities[index] = city;
        // reset distance and fitness when cities is altered
        this.fitness = 0;
        this.totalDistance = 0; 
    }

    // get the total distance
    getDistance() {
          if (this.totalDistance === 0) {
              let citiesDistance = 0;
              for (let i = 0; i < this.citiesLength(); i++) {
                let fromCity = this.getCity(i); 
                let destCity;
                
                if (i + 1 < this.citiesLength()) {
                    destCity = this.getCity(i + 1);
                } else {
                    destCity = this.getCity(0);
                }

                citiesDistance += fromCity.distanceTo(destCity);
              }
              this.totalDistance = citiesDistance;
          }
          return this.totalDistance;
    }

    citiesLength() {
        return this.cities.length;
    }
    
    containsCity(city) {
        return this.cities.includes(city);
    }

    showTour () {
        let geneString = "|"
        for (let i = 0; i < this.citiesLength(); i++) {
            geneString += this.getCity(i).showCity() + "|";
        }

        return geneString;
    }
}