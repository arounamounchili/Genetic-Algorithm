
const main = function () {
    // Create and add our cities
    let city1 = new City(60, 200);
    TourManager.addCity(city1);
    let city2 = new City(180, 200);
    TourManager.addCity(city2);
    let city3 = new City(80, 180);
    TourManager.addCity(city3);
    let city4 = new City(140, 180);
    TourManager.addCity(city4);
    let city5 = new City(20, 160);
    TourManager.addCity(city5);
    let city6 = new City(100, 160);
    TourManager.addCity(city6);
    let city7 = new City(200, 160);
    TourManager.addCity(city7);
    let city8 = new City(140, 140);
    TourManager.addCity(city8);
    let city9 = new City(40, 120);
    TourManager.addCity(city9);
    let city10 = new City(100, 120);
    TourManager.addCity(city10);
    let city11 = new City(180, 100);
    TourManager.addCity(city11);
    let city12 = new City(60, 80);
    TourManager.addCity(city12);
    let city13 = new City(120, 80);
    TourManager.addCity(city13);
    let city14 = new City(180, 60);
    TourManager.addCity(city14);
    let city15 = new City(20, 40);
    TourManager.addCity(city15);
    let city16 = new City(100, 40);
    TourManager.addCity(city16);
    let city17 = new City(200, 40);
    TourManager.addCity(city17);
    let city18 = new City(20, 20);
    TourManager.addCity(city18);
    let city19 = new City(60, 20);
    TourManager.addCity(city19);
    let city20 = new City(160, 20);
    TourManager.addCity(city20);
    

    // Initialize population
    let population = new Population(50, true);
    console.log('Initial distance: ' + population.getFittest().getDistance());

    // Evolve population for 100 generations
    population = GA.evolvePopulation(population);
    for (let i = 0; i < 100; i++) {
        population = GA.evolvePopulation(population);
    }

    console.log("Finished");
    console.log("Final solution distance: " + population.getFittest().getDistance());
    console.log("Solution: \n" + population.getFittest().showTour());
}

main();
