class City {
    constructor(x, y) {
        // Check if there is no argument
        if (x !== undefined || y !== undefined) {
            // Return random integer from min to max
            const min = 10;
            const max = 500;
            this.x = this.getRandomInteger(min, max); 
            this.y = this.getRandomInteger(min, max);   
        }else {
            this.x = x;
            this.y = y;
        } 
    }

    getRandomInteger(min, max){
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    distanceTo (anotherCity) {
        let distance = Math.sqrt(
            Math.abs(this.x - anotherCity.x)**2 + 
            Math.abs(this.y - anotherCity.y)**2
        );
        return distance;
    }

    showCity() {
        return `City (${this.x}, ${this.y})`;
    }
}