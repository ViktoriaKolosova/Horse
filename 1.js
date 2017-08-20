function Horse() {

	var maxMale = 10;
	this.fed = 0;
	this.run = function(distance) {
		for (var i = 1; i <= distance; i++) {
			this.fed++;
			console.log(this.fed);

			if (distance > this.maxMale) {
				distance = distance - this.maxMale;

				setTimeout(this.run(), 100000);


			}
		}
	}
}

var lush = new Horse();


lush.run(15);