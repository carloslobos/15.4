function Car(brand, model, color, price, power) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.power = power;
}

Car.prototype.printInfo = function() {
    console.log("This is " + this.brand + ' ' + this.model + ', it is ' + this.color + ' and you have to pay ' + this.price + '$ for ' + this.power + 'HP :)')
}

var Ferrari = new Car('Ferrari', '488', 'red', 250000, 660);
Ferrari.printInfo();

var Lamborghini = new Car('Lamborghini', 'Huracan', 'green', 238000, 610);
Lamborghini.printInfo();

var Porsche = new Car('Porsche', '911 GT3', 'white', 180000, 580);
Porsche.printInfo();