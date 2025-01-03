window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
  }
}


	// window.location.reload(true);    // permanentes reloading

	class constellation {
		constructor(driver,body,tire,glider) {
			this.driver=driver;
			this.body=body;
			this.tire=tire;
			this.glider=glider;
	  }
	  
	  getWeight() {
		return this.driver.weight + this.body.weight + this.tire.weight + this.glider.weight;
	  }
	  
	  getAcceleration() {
		return this.driver.acceleration + this.body.acceleration + this.tire.acceleration + this.glider.acceleration;
	  }
	  
	  getOnRoadTraction() {
		return this.driver.onRoadTraction + this.body.onRoadTraction + this.tire.onRoadTraction + this.glider.onRoadTraction;
	  }
	  
	  getOffRoadTraction() {
		return this.driver.offRoadTraction + this.body.offRoadTraction + this.tire.offRoadTraction + this.glider.offRoadTraction;
	  }
	  
	  getMiniTurbo() {
		return this.driver.miniTurbo + this.body.miniTurbo + this.tire.miniTurbo + this.glider.miniTurbo;
	  }
	  
	  getGroundSpeed() {
		return this.driver.groundSpeed + this.body.groundSpeed + this.tire.groundSpeed + this.glider.groundSpeed;
	  }
	  
	  getWaterSpeed() {
		return this.driver.waterSpeed + this.body.waterSpeed + this.tire.waterSpeed + this.glider.waterSpeed;
	  }
	  
	  getAntiGravitySpeed() {
		return this.driver.antiGravitySpeed + this.body.antiGravitySpeed + this.tire.antiGravitySpeed + this.glider.antiGravitySpeed;
	  }
	  
	  getAirSpeed() {
		return this.driver.airSpeed + this.body.airSpeed + this.tire.airSpeed + this.glider.airSpeed;
	  }
	  
	  getGroundHandling() {
		return this.driver.groundHandling + this.body.groundHandling + this.tire.groundHandling + this.glider.groundHandling;
	  }
	  
	  getWaterHandling() {
		return this.driver.waterHandling + this.body.waterHandling + this.tire.waterHandling + this.glider.waterHandling;
	  }
	  
	  getAntiGravityHandling() {
		return this.driver.antiGravityHandling + this.body.antiGravityHandling + this.tire.antiGravityHandling + this.glider.antiGravityHandling;
	  }
	  
	  getAirHandling() {
		return this.driver.airHandling + this.body.airHandling + this.tire.airHandling + this.glider.airHandling;
	  }
	  	  
	  getInvincibility() {
		return this.driver.invincibility + this.body.invincibility + this.tire.invincibility + this.glider.invincibility;
	  }
	}
	
	class component {
		constructor(name,weight,acceleration,onRoadTraction,offRoadTraction,miniTurbo,groundSpeed,waterSpeed,antiGravitySpeed,airSpeed,groundHandling,waterHandling,antiGravityHandling,airHandling,invincibility,type) {
			this.name=name;
			this.weight=weight;
			this.acceleration=acceleration;
			this.onRoadTraction=onRoadTraction;
			this.offRoadTraction=offRoadTraction;
			this.miniTurbo=miniTurbo;
			this.groundSpeed=groundSpeed;
			this.waterSpeed=waterSpeed;
			this.antiGravitySpeed=antiGravitySpeed;
			this.airSpeed=airSpeed;
			this.groundHandling=groundHandling;
			this.waterHandling=waterHandling;
			this.antiGravityHandling=antiGravityHandling;
			this.airHandling=airHandling;
			this.invincibility=invincibility;
			this.type=type;
	  }
	}
	
	class EnhancedComponent extends component {
	  constructor(name, weight, acceleration, onRoadTraction, offRoadTraction, miniTurbo, groundSpeed, waterSpeed, antiGravitySpeed, airSpeed, groundHandling, waterHandling, antiGravityHandling, airHandling, invincibility, type, equalTo) {
		super(name, weight, acceleration, onRoadTraction, offRoadTraction, miniTurbo, groundSpeed, waterSpeed, antiGravitySpeed, airSpeed, groundHandling, waterHandling, antiGravityHandling, airHandling,invincibility,type);
		this.equalTo = equalTo;
	  }
	}
		
function ComponentsEqual(component1, component2) {
  // Check if all properties of component1 are equal to corresponding properties of component2
  return component1.weight === component2.weight &&
         component1.acceleration === component2.acceleration &&
         component1.onRoadTraction === component2.onRoadTraction &&
         component1.offRoadTraction === component2.offRoadTraction &&
         component1.miniTurbo === component2.miniTurbo &&
         component1.groundSpeed === component2.groundSpeed &&
         component1.waterSpeed === component2.waterSpeed &&
         component1.antiGravitySpeed === component2.antiGravitySpeed &&
         component1.airSpeed === component2.airSpeed &&
         component1.groundHandling === component2.groundHandling &&
         component1.waterHandling === component2.waterHandling &&
         component1.antiGravityHandling === component2.antiGravityHandling &&
         component1.airHandling === component2.airHandling &&
		 component1.invincibility === component2.invincibility;
}

function createComponentFromJSONObject(jsonObj) {
	let x = new EnhancedComponent("",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"","");
	Object.assign(x, jsonObj);
	return x;
}

function createComponentArrayFromJSONobjectArray(JSONobjectArray){
	let x = [];
	for (let i = 0; i < JSONobjectArray.length; i++) {
		x.push(createComponentFromJSONObject(JSONobjectArray[i]));
	}
	return x;
}



function getSumedValue(constellation){
	let sum = 0;
	sum += constellation.getWeight();
	sum += constellation.getAcceleration();
	sum += constellation.getOnRoadTraction();
	sum += constellation.getOffRoadTraction();
	sum += constellation.getMiniTurbo();
	sum += constellation.getGroundSpeed();
	sum += constellation.getWaterSpeed();
	sum += constellation.getAntiGravitySpeed();
	sum += constellation.getAirSpeed();
	sum += constellation.getGroundHandling();
	sum += constellation.getWaterHandling();
	sum += constellation.getAntiGravityHandling();
	sum += constellation.getAirHandling();
	return sum;
}

function getWeightedSumedValue(constellation,vector){
	let sum = 0;
	sum += vector.factorWeight * constellation.getWeight();
	sum += vector.factorAcceleration * constellation.getAcceleration();
	sum += vector.factorOnRoadTraction * constellation.getOnRoadTraction();
	sum += vector.factorOffRoadTraction * constellation.getOffRoadTraction();
	sum += vector.factorMiniTurbo * constellation.getMiniTurbo();
	sum += vector.factorGroundSpeed * constellation.getGroundSpeed();
	sum += vector.factorWaterSpeed * constellation.getWaterSpeed();
	sum += vector.factorAntiGravitySpeed * constellation.getAntiGravitySpeed();
	sum += vector.factorAirSpeed * constellation.getAirSpeed();
	sum += vector.factorGroundHandling * constellation.getGroundHandling();
	sum += vector.factorWaterHandling * constellation.getWaterHandling();
	sum += vector.factorAntiGravityHandling * constellation.getAntiGravityHandling();
	sum += vector.factorAirHandling * constellation.getAirHandling();
	sum += vector.factorInvincibility * constellation.getInvincibility();
	return sum;
}

function printStatsFrom(constellation){
	console.log( "Weight: " + constellation.getWeight() );
	console.log( "acceleration: " + constellation.getAcceleration() );
	console.log( "onRoadTraction: " + constellation.getOnRoadTraction() );
	console.log( "offRoadTraction: " + constellation.getOffRoadTraction() );
	console.log( "miniTurbo: " + constellation.getMiniTurbo() );
	console.log( "groundSpeed: " + constellation.getGroundSpeed() );
	console.log( "waterSpeed: " + constellation.getWaterSpeed() );
	console.log( "antiGravitySpeed: " + constellation.getAntiGravitySpeed() );
	console.log( "airSpeed: " + constellation.getAirSpeed() );
	console.log( "groundHandling: " + constellation.getGroundHandling() );
	console.log( "waterHandling: " + constellation.getWaterHandling() );
	console.log( "antiGravityHandling: " + constellation.getAntiGravityHandling() );
	console.log( "airHandling: " + constellation.getAirHandling() );
	console.log( "Invincibility: " + constellation.getInvincibility() );
}

function constellationToString(constellation){
	let stats = "<p align='left'>";
	stats += constellation.driver.name + " this is qual to: " + constellation.driver.equalTo + "<br>";
	stats += constellation.body.name + "(" + constellation.body.type + ")" + " this is qual to: " + constellation.body.equalTo + "<br>";
	stats += constellation.tire.name + " this is qual to: " + constellation.tire.equalTo + "<br>";
	stats += constellation.glider.name + " this is qual to: " + constellation.glider.equalTo + "<p p align='left'>";
	stats += "Weight: " + (constellation.getWeight() * 0.25) + "<br>";
	stats += "acceleration: " + (constellation.getAcceleration() * 0.25) + "<br>";
	stats += "onRoadTraction: " + (constellation.getOnRoadTraction() * 0.25) + "<br>";
	stats += "offRoadTraction: " + (constellation.getOffRoadTraction() * 0.25) + "<br>";
	stats += "miniTurbo: " + (constellation.getMiniTurbo() * 0.25) + "<br>";
	stats += "groundSpeed: " + (constellation.getGroundSpeed() * 0.25) + "<br>";
	stats += "waterSpeed: " + (constellation.getWaterSpeed() * 0.25) + "<br>";
	stats += "antiGravitySpeed: " + (constellation.getAntiGravitySpeed() * 0.25) + "<br>";
	stats += "airSpeed: " + (constellation.getAirSpeed() * 0.25) + "<br>";
	stats += "groundHandling: " + (constellation.getGroundHandling() * 0.25) + "<br>";
	stats += "waterHandling: " + (constellation.getWaterHandling() * 0.25) + "<br>";
	stats += "antiGravityHandling: " + (constellation.getAntiGravityHandling() * 0.25) + "<br>";
	stats += "airHandling: " + (constellation.getAirHandling() * 0.25) + "<br>";
	stats += "Invincibility: " + (constellation.getInvincibility() * 0.25) + "<br>";
	stats += "</p>";
	stats += "Sum: " + getSumedValue(constellation);
	
	return stats;
}


const driversJSON = [{"name":"Baby Peach","weight":0,"acceleration":4,"onRoadTraction":3,"offRoadTraction":5,"miniTurbo":5,"groundSpeed":1,"waterSpeed":1,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":10,"waterHandling":10,"antiGravityHandling":10,"airHandling":10,"invincibility":6},{"name":"Baby Daisy","weight":0,"acceleration":4,"onRoadTraction":3,"offRoadTraction":5,"miniTurbo":5,"groundSpeed":1,"waterSpeed":1,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":10,"waterHandling":10,"antiGravityHandling":10,"airHandling":10,"invincibility":6},{"name":"Baby Rosalina","weight":0,"acceleration":5,"onRoadTraction":4,"offRoadTraction":3,"miniTurbo":5,"groundSpeed":1,"waterSpeed":1,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":9,"waterHandling":9,"antiGravityHandling":9,"airHandling":9,"invincibility":6},{"name":"Lemmy Koopa","weight":0,"acceleration":5,"onRoadTraction":4,"offRoadTraction":3,"miniTurbo":5,"groundSpeed":1,"waterSpeed":1,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":9,"waterHandling":9,"antiGravityHandling":9,"airHandling":9,"invincibility":6},{"name":"Baby Mario","weight":1,"acceleration":5,"onRoadTraction":2,"offRoadTraction":4,"miniTurbo":5,"groundSpeed":2,"waterSpeed":2,"antiGravitySpeed":2,"airSpeed":2,"groundHandling":8,"waterHandling":8,"antiGravityHandling":8,"airHandling":8,"invincibility":5},{"name":"Baby Luigi","weight":1,"acceleration":5,"onRoadTraction":2,"offRoadTraction":4,"miniTurbo":5,"groundSpeed":2,"waterSpeed":2,"antiGravitySpeed":2,"airSpeed":2,"groundHandling":8,"waterHandling":8,"antiGravityHandling":8,"airHandling":8,"invincibility":5},{"name":"Knochentrocken","weight":1,"acceleration":5,"onRoadTraction":2,"offRoadTraction":4,"miniTurbo":5,"groundSpeed":2,"waterSpeed":2,"antiGravitySpeed":2,"airSpeed":2,"groundHandling":8,"waterHandling":8,"antiGravityHandling":8,"airHandling":8,"invincibility":5},{"name":"Bowser Jr","weight":2,"acceleration":4,"onRoadTraction":1,"offRoadTraction":5,"miniTurbo":4,"groundSpeed":3,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":8,"waterHandling":8,"antiGravityHandling":8,"airHandling":8,"invincibility":4},{"name":"Koopa","weight":2,"acceleration":4,"onRoadTraction":1,"offRoadTraction":5,"miniTurbo":4,"groundSpeed":3,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":8,"waterHandling":8,"antiGravityHandling":8,"airHandling":8,"invincibility":4},{"name":"Lakitu","weight":2,"acceleration":4,"onRoadTraction":1,"offRoadTraction":5,"miniTurbo":4,"groundSpeed":3,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":8,"waterHandling":8,"antiGravityHandling":8,"airHandling":8,"invincibility":4},{"name":"Toadette","weight":2,"acceleration":5,"onRoadTraction":4,"offRoadTraction":2,"miniTurbo":4,"groundSpeed":3,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":7,"waterHandling":7,"antiGravityHandling":7,"airHandling":7,"invincibility":3},{"name":"Wendy","weight":2,"acceleration":5,"onRoadTraction":4,"offRoadTraction":2,"miniTurbo":4,"groundSpeed":3,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":7,"waterHandling":7,"antiGravityHandling":7,"airHandling":7,"invincibility":3},{"name":"Melinda","weight":2,"acceleration":5,"onRoadTraction":4,"offRoadTraction":2,"miniTurbo":4,"groundSpeed":3,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":7,"waterHandling":7,"antiGravityHandling":7,"airHandling":7,"invincibility":3},{"name":"Toad","weight":3,"acceleration":4,"onRoadTraction":3,"offRoadTraction":4,"miniTurbo":4,"groundSpeed":4,"waterSpeed":4,"antiGravitySpeed":4,"airSpeed":4,"groundHandling":7,"waterHandling":7,"antiGravityHandling":7,"airHandling":7,"invincibility":3},{"name":"Shy Guy","weight":3,"acceleration":4,"onRoadTraction":3,"offRoadTraction":4,"miniTurbo":4,"groundSpeed":4,"waterSpeed":4,"antiGravitySpeed":4,"airSpeed":4,"groundHandling":7,"waterHandling":7,"antiGravityHandling":7,"airHandling":7,"invincibility":3},{"name":"Larry Koopa","weight":3,"acceleration":4,"onRoadTraction":3,"offRoadTraction":4,"miniTurbo":4,"groundSpeed":4,"waterSpeed":4,"antiGravitySpeed":4,"airSpeed":4,"groundHandling":7,"waterHandling":7,"antiGravityHandling":7,"airHandling":7,"invincibility":3},{"name":"Katzen-Peach","weight":3,"acceleration":4,"onRoadTraction":2,"offRoadTraction":3,"miniTurbo":4,"groundSpeed":5,"waterSpeed":5,"antiGravitySpeed":5,"airSpeed":5,"groundHandling":6,"waterHandling":6,"antiGravityHandling":6,"airHandling":6,"invincibility":3},{"name":"Inkling-Mädchen","weight":3,"acceleration":4,"onRoadTraction":2,"offRoadTraction":3,"miniTurbo":4,"groundSpeed":5,"waterSpeed":5,"antiGravitySpeed":5,"airSpeed":5,"groundHandling":6,"waterHandling":6,"antiGravityHandling":6,"airHandling":6,"invincibility":3},{"name":"Bewohnerin","weight":3,"acceleration":4,"onRoadTraction":2,"offRoadTraction":3,"miniTurbo":4,"groundSpeed":5,"waterSpeed":5,"antiGravitySpeed":5,"airSpeed":5,"groundHandling":6,"waterHandling":6,"antiGravityHandling":6,"airHandling":6,"invincibility":3},{"name":"Diddy Kong","weight":3,"acceleration":4,"onRoadTraction":2,"offRoadTraction":3,"miniTurbo":4,"groundSpeed":5,"waterSpeed":5,"antiGravitySpeed":5,"airSpeed":5,"groundHandling":6,"waterHandling":6,"antiGravityHandling":6,"airHandling":6,"invincibility":3},{"name":"Princess Peach","weight":4,"acceleration":3,"onRoadTraction":3,"offRoadTraction":3,"miniTurbo":4,"groundSpeed":6,"waterSpeed":6,"antiGravitySpeed":6,"airSpeed":6,"groundHandling":5,"waterHandling":5,"antiGravityHandling":5,"airHandling":5,"invincibility":1},{"name":"Princess Daisy","weight":4,"acceleration":3,"onRoadTraction":3,"offRoadTraction":3,"miniTurbo":4,"groundSpeed":6,"waterSpeed":6,"antiGravitySpeed":6,"airSpeed":6,"groundHandling":5,"waterHandling":5,"antiGravityHandling":5,"airHandling":5,"invincibility":1},{"name":"Yoshi","weight":4,"acceleration":3,"onRoadTraction":3,"offRoadTraction":3,"miniTurbo":4,"groundSpeed":6,"waterSpeed":6,"antiGravitySpeed":6,"airSpeed":6,"groundHandling":5,"waterHandling":5,"antiGravityHandling":5,"airHandling":5,"invincibility":1},{"name":"Birdo","weight":4,"acceleration":3,"onRoadTraction":3,"offRoadTraction":3,"miniTurbo":4,"groundSpeed":6,"waterSpeed":6,"antiGravitySpeed":6,"airSpeed":6,"groundHandling":5,"waterHandling":5,"antiGravityHandling":5,"airHandling":5,"invincibility":1},{"name":"Peachette","weight":4,"acceleration":3,"onRoadTraction":3,"offRoadTraction":3,"miniTurbo":4,"groundSpeed":6,"waterSpeed":6,"antiGravitySpeed":6,"airSpeed":6,"groundHandling":5,"waterHandling":5,"antiGravityHandling":5,"airHandling":5,"invincibility":1},{"name":"Tanuki-Mario","weight":5,"acceleration":3,"onRoadTraction":7,"offRoadTraction":1,"miniTurbo":4,"groundSpeed":6,"waterSpeed":6,"antiGravitySpeed":6,"airSpeed":6,"groundHandling":5,"waterHandling":5,"antiGravityHandling":5,"airHandling":4,"invincibility":1},{"name":"Inkling-Junge","weight":5,"acceleration":3,"onRoadTraction":7,"offRoadTraction":1,"miniTurbo":4,"groundSpeed":6,"waterSpeed":6,"antiGravitySpeed":6,"airSpeed":6,"groundHandling":5,"waterHandling":5,"antiGravityHandling":5,"airHandling":4,"invincibility":1},{"name":"Bewohner","weight":5,"acceleration":3,"onRoadTraction":7,"offRoadTraction":1,"miniTurbo":4,"groundSpeed":6,"waterSpeed":6,"antiGravitySpeed":6,"airSpeed":6,"groundHandling":5,"waterHandling":5,"antiGravityHandling":5,"airHandling":4,"invincibility":1},{"name":"Mario","weight":6,"acceleration":2,"onRoadTraction":4,"offRoadTraction":2,"miniTurbo":3,"groundSpeed":7,"waterSpeed":7,"antiGravitySpeed":7,"airSpeed":7,"groundHandling":4,"waterHandling":4,"antiGravityHandling":4,"airHandling":4,"invincibility":3},{"name":"Ludwig von Koopa","weight":6,"acceleration":2,"onRoadTraction":4,"offRoadTraction":2,"miniTurbo":3,"groundSpeed":7,"waterSpeed":7,"antiGravitySpeed":7,"airSpeed":7,"groundHandling":4,"waterHandling":4,"antiGravityHandling":4,"airHandling":4,"invincibility":3},{"name":"Luigi","weight":6,"acceleration":2,"onRoadTraction":5,"offRoadTraction":1,"miniTurbo":3,"groundSpeed":7,"waterSpeed":7,"antiGravitySpeed":7,"airSpeed":7,"groundHandling":5,"waterHandling":5,"antiGravityHandling":5,"airHandling":5,"invincibility":3},{"name":"Iggy Koopa","weight":6,"acceleration":2,"onRoadTraction":5,"offRoadTraction":1,"miniTurbo":3,"groundSpeed":7,"waterSpeed":7,"antiGravitySpeed":7,"airSpeed":7,"groundHandling":5,"waterHandling":5,"antiGravityHandling":5,"airHandling":5,"invincibility":3},{"name":"Karnek","weight":6,"acceleration":2,"onRoadTraction":5,"offRoadTraction":1,"miniTurbo":3,"groundSpeed":7,"waterSpeed":7,"antiGravitySpeed":7,"airSpeed":7,"groundHandling":5,"waterHandling":5,"antiGravityHandling":5,"airHandling":5,"invincibility":3},{"name":"Metall-Mario","weight":10,"acceleration":1,"onRoadTraction":8,"offRoadTraction":1,"miniTurbo":1,"groundSpeed":8,"waterSpeed":8,"antiGravitySpeed":8,"airSpeed":8,"groundHandling":3,"waterHandling":3,"antiGravityHandling":3,"airHandling":3,"invincibility":3},{"name":"Rosagold-Peach","weight":10,"acceleration":1,"onRoadTraction":8,"offRoadTraction":1,"miniTurbo":1,"groundSpeed":8,"waterSpeed":8,"antiGravitySpeed":8,"airSpeed":8,"groundHandling":3,"waterHandling":3,"antiGravityHandling":3,"airHandling":3,"invincibility":3},{"name":"Wiggler","weight":8,"acceleration":1,"onRoadTraction":10,"offRoadTraction":0,"miniTurbo":1,"groundSpeed":9,"waterSpeed":9,"antiGravitySpeed":9,"airSpeed":9,"groundHandling":2,"waterHandling":2,"antiGravityHandling":2,"airHandling":2,"invincibility":4},{"name":"Rosalina","weight":7,"acceleration":1,"onRoadTraction":9,"offRoadTraction":3,"miniTurbo":2,"groundSpeed":8,"waterSpeed":8,"antiGravitySpeed":8,"airSpeed":8,"groundHandling":3,"waterHandling":3,"antiGravityHandling":3,"airHandling":3,"invincibility":4},{"name":"König Buu Huu","weight":7,"acceleration":1,"onRoadTraction":9,"offRoadTraction":3,"miniTurbo":2,"groundSpeed":8,"waterSpeed":8,"antiGravitySpeed":8,"airSpeed":8,"groundHandling":3,"waterHandling":3,"antiGravityHandling":3,"airHandling":3,"invincibility":4},{"name":"Link","weight":7,"acceleration":1,"onRoadTraction":9,"offRoadTraction":3,"miniTurbo":2,"groundSpeed":8,"waterSpeed":8,"antiGravitySpeed":8,"airSpeed":8,"groundHandling":3,"waterHandling":3,"antiGravityHandling":3,"airHandling":3,"invincibility":4},{"name":"Pauline","weight":7,"acceleration":1,"onRoadTraction":9,"offRoadTraction":3,"miniTurbo":2,"groundSpeed":8,"waterSpeed":8,"antiGravitySpeed":8,"airSpeed":8,"groundHandling":3,"waterHandling":3,"antiGravityHandling":3,"airHandling":3,"invincibility":4},{"name":"Petey Piranha","weight":10,"acceleration":1,"onRoadTraction":8,"offRoadTraction":1,"miniTurbo":1,"groundSpeed":8,"waterSpeed":8,"antiGravitySpeed":8,"airSpeed":8,"groundHandling":3,"waterHandling":3,"antiGravityHandling":3,"airHandling":3,"invincibility":6},{"name":"Waluigi","weight":8,"acceleration":1,"onRoadTraction":10,"offRoadTraction":0,"miniTurbo":1,"groundSpeed":9,"waterSpeed":9,"antiGravitySpeed":9,"airSpeed":9,"groundHandling":2,"waterHandling":2,"antiGravityHandling":2,"airHandling":2,"invincibility":4},{"name":"Donkey Kong","weight":8,"acceleration":1,"onRoadTraction":10,"offRoadTraction":0,"miniTurbo":1,"groundSpeed":9,"waterSpeed":9,"antiGravitySpeed":9,"airSpeed":9,"groundHandling":2,"waterHandling":2,"antiGravityHandling":2,"airHandling":2,"invincibility":4},{"name":"Roy","weight":8,"acceleration":1,"onRoadTraction":10,"offRoadTraction":0,"miniTurbo":1,"groundSpeed":9,"waterSpeed":9,"antiGravitySpeed":9,"airSpeed":9,"groundHandling":2,"waterHandling":2,"antiGravityHandling":2,"airHandling":2,"invincibility":4},{"name":"Wario","weight":9,"acceleration":0,"onRoadTraction":5,"offRoadTraction":1,"miniTurbo":0,"groundSpeed":10,"waterSpeed":10,"antiGravitySpeed":10,"airSpeed":10,"groundHandling":1,"waterHandling":1,"antiGravityHandling":1,"airHandling":1,"invincibility":5},{"name":"Knochen-Bowser","weight":9,"acceleration":0,"onRoadTraction":5,"offRoadTraction":1,"miniTurbo":0,"groundSpeed":10,"waterSpeed":10,"antiGravitySpeed":10,"airSpeed":10,"groundHandling":1,"waterHandling":1,"antiGravityHandling":1,"airHandling":1,"invincibility":5},{"name":"FunkyKong","weight":9,"acceleration":0,"onRoadTraction":5,"offRoadTraction":1,"miniTurbo":0,"groundSpeed":10,"waterSpeed":10,"antiGravitySpeed":10,"airSpeed":10,"groundHandling":1,"waterHandling":1,"antiGravityHandling":1,"airHandling":1,"invincibility":5},{"name":"Bowser","weight":10,"acceleration":0,"onRoadTraction":6,"offRoadTraction":0,"miniTurbo":0,"groundSpeed":10,"waterSpeed":10,"antiGravitySpeed":10,"airSpeed":10,"groundHandling":0,"waterHandling":0,"antiGravityHandling":0,"airHandling":0,"invincibility":6},{"name":"Morton Koopa","weight":10,"acceleration":0,"onRoadTraction":6,"offRoadTraction":0,"miniTurbo":0,"groundSpeed":10,"waterSpeed":10,"antiGravitySpeed":10,"airSpeed":10,"groundHandling":0,"waterHandling":0,"antiGravityHandling":0,"airHandling":0,"invincibility":6}];

const enhancedDriversJSON = compareComponents(driversJSON);
const drivers = createComponentArrayFromJSONobjectArray(enhancedDriversJSON);
	
const bodysJSON = [{"name":"Pünktchen-Kart","weight":0,"acceleration":7,"onRoadTraction":1,"offRoadTraction":4,"miniTurbo":7,"groundSpeed":0,"waterSpeed":1,"antiGravitySpeed":1,"airSpeed":2,"groundHandling":5,"waterHandling":4,"antiGravityHandling":4,"airHandling":5,"invincibility":0,"type":"Kart"},{"name":"Roller","weight":0,"acceleration":7,"onRoadTraction":1,"offRoadTraction":4,"miniTurbo":7,"groundSpeed":0,"waterSpeed":1,"antiGravitySpeed":1,"airSpeed":2,"groundHandling":5,"waterHandling":4,"antiGravityHandling":4,"airHandling":5,"invincibility":0,"type":"Outward-Bike"},{"name":"Fichtenbock","weight":0,"acceleration":6,"onRoadTraction":0,"offRoadTraction":6,"miniTurbo":6,"groundSpeed":2,"waterSpeed":5,"antiGravitySpeed":2,"airSpeed":0,"groundHandling":4,"waterHandling":5,"antiGravityHandling":3,"airHandling":2,"invincibility":3,"type":"Kart"},{"name":"PS-Galeere","weight":0,"acceleration":6,"onRoadTraction":0,"offRoadTraction":6,"miniTurbo":6,"groundSpeed":2,"waterSpeed":5,"antiGravitySpeed":2,"airSpeed":0,"groundHandling":4,"waterHandling":5,"antiGravityHandling":3,"airHandling":2,"invincibility":2,"type":"Kart"},{"name":"Go-Kart","weight":1,"acceleration":6,"onRoadTraction":3,"offRoadTraction":4,"miniTurbo":6,"groundSpeed":2,"waterSpeed":3,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":5,"waterHandling":4,"antiGravityHandling":2,"airHandling":4,"invincibility":3,"type":"Kart"},{"name":"Cross-Bike","weight":1,"acceleration":6,"onRoadTraction":3,"offRoadTraction":4,"miniTurbo":6,"groundSpeed":2,"waterSpeed":3,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":5,"waterHandling":4,"antiGravityHandling":2,"airHandling":4,"invincibility":2,"type":"Outward-Bike"},{"name":"Fashion-Scooter","weight":1,"acceleration":6,"onRoadTraction":3,"offRoadTraction":4,"miniTurbo":6,"groundSpeed":2,"waterSpeed":3,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":5,"waterHandling":4,"antiGravityHandling":2,"airHandling":4,"invincibility":2,"type":"Outward-Bike"},{"name":"Katzen-Cabrio","weight":2,"acceleration":5,"onRoadTraction":4,"offRoadTraction":3,"miniTurbo":6,"groundSpeed":2,"waterSpeed":2,"antiGravitySpeed":4,"airSpeed":3,"groundHandling":4,"waterHandling":2,"antiGravityHandling":4,"airHandling":3,"invincibility":3,"type":"Kart"},{"name":"Turbo-Bike","weight":2,"acceleration":5,"onRoadTraction":4,"offRoadTraction":3,"miniTurbo":6,"groundSpeed":2,"waterSpeed":2,"antiGravitySpeed":4,"airSpeed":3,"groundHandling":4,"waterHandling":2,"antiGravityHandling":4,"airHandling":3,"invincibility":3,"type":"Inward-Bike"},{"name":"Yoshi-Bike","weight":2,"acceleration":5,"onRoadTraction":4,"offRoadTraction":3,"miniTurbo":6,"groundSpeed":2,"waterSpeed":2,"antiGravitySpeed":4,"airSpeed":3,"groundHandling":4,"waterHandling":2,"antiGravityHandling":4,"airHandling":3,"invincibility":2,"type":"Inward-Bike"},{"name":"Bärchen-Bolide","weight":2,"acceleration":5,"onRoadTraction":4,"offRoadTraction":3,"miniTurbo":6,"groundSpeed":2,"waterSpeed":2,"antiGravitySpeed":4,"airSpeed":3,"groundHandling":4,"waterHandling":2,"antiGravityHandling":4,"airHandling":3,"invincibility":1,"type":"ATV"},{"name":"W 25 Silberpfeil","weight":1,"acceleration":5,"onRoadTraction":3,"offRoadTraction":5,"miniTurbo":5,"groundSpeed":2,"waterSpeed":2,"antiGravitySpeed":3,"airSpeed":4,"groundHandling":4,"waterHandling":3,"antiGravityHandling":3,"airHandling":4,"invincibility":4,"type":"Kart"},{"name":"Wilder Wiggler","weight":1,"acceleration":5,"onRoadTraction":3,"offRoadTraction":5,"miniTurbo":5,"groundSpeed":2,"waterSpeed":2,"antiGravitySpeed":3,"airSpeed":4,"groundHandling":4,"waterHandling":3,"antiGravityHandling":3,"airHandling":4,"invincibility":4,"type":"ATV"},{"name":"Standard-Bike","weight":1,"acceleration":5,"onRoadTraction":3,"offRoadTraction":5,"miniTurbo":5,"groundSpeed":2,"waterSpeed":2,"antiGravitySpeed":3,"airSpeed":4,"groundHandling":4,"waterHandling":3,"antiGravityHandling":3,"airHandling":4,"invincibility":4,"type":"Outward-Bike"},{"name":"Flammen-Bike","weight":1,"acceleration":5,"onRoadTraction":3,"offRoadTraction":5,"miniTurbo":5,"groundSpeed":2,"waterSpeed":2,"antiGravitySpeed":3,"airSpeed":4,"groundHandling":4,"waterHandling":3,"antiGravityHandling":3,"airHandling":4,"invincibility":4,"type":"Outward-Bike"},{"name":"Turboflitzer","weight":3,"acceleration":3,"onRoadTraction":2,"offRoadTraction":4,"miniTurbo":5,"groundSpeed":3,"waterSpeed":3,"antiGravitySpeed":4,"airSpeed":5,"groundHandling":2,"waterHandling":2,"antiGravityHandling":2,"airHandling":4,"invincibility":3,"type":"Kart"},{"name":"Sportcoupé","weight":3,"acceleration":3,"onRoadTraction":2,"offRoadTraction":4,"miniTurbo":5,"groundSpeed":3,"waterSpeed":3,"antiGravitySpeed":4,"airSpeed":5,"groundHandling":2,"waterHandling":2,"antiGravityHandling":2,"airHandling":4,"invincibility":3,"type":"Kart"},{"name":"Inkstriker","weight":3,"acceleration":3,"onRoadTraction":2,"offRoadTraction":4,"miniTurbo":5,"groundSpeed":3,"waterSpeed":3,"antiGravitySpeed":4,"airSpeed":5,"groundHandling":2,"waterHandling":2,"antiGravityHandling":2,"airHandling":4,"invincibility":1,"type":"ATV"},{"name":"Tanuki-Buggy","weight":3,"acceleration":2,"onRoadTraction":4,"offRoadTraction":7,"miniTurbo":5,"groundSpeed":3,"waterSpeed":4,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":4,"waterHandling":4,"antiGravityHandling":3,"airHandling":3,"invincibility":4,"type":"Kart"},{"name":"Clown-Kutsche","weight":3,"acceleration":2,"onRoadTraction":4,"offRoadTraction":7,"miniTurbo":5,"groundSpeed":3,"waterSpeed":4,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":4,"waterHandling":4,"antiGravityHandling":3,"airHandling":3,"invincibility":3,"type":"Kart"},{"name":"Eponator Zero","weight":3,"acceleration":2,"onRoadTraction":4,"offRoadTraction":7,"miniTurbo":5,"groundSpeed":3,"waterSpeed":4,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":4,"waterHandling":4,"antiGravityHandling":3,"airHandling":3,"invincibility":3,"type":"Outward-Bike"},{"name":"300 SL Roadster","weight":2,"acceleration":4,"onRoadTraction":3,"offRoadTraction":3,"miniTurbo":5,"groundSpeed":3,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":3,"waterHandling":2,"antiGravityHandling":3,"airHandling":3,"invincibility":4,"type":"Kart"},{"name":"Standard-Kart","weight":2,"acceleration":4,"onRoadTraction":3,"offRoadTraction":3,"miniTurbo":5,"groundSpeed":3,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":3,"waterHandling":2,"antiGravityHandling":3,"airHandling":3,"invincibility":3,"type":"Kart"},{"name":"Hyper-Bike","weight":2,"acceleration":4,"onRoadTraction":3,"offRoadTraction":3,"miniTurbo":5,"groundSpeed":3,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":3,"waterHandling":2,"antiGravityHandling":3,"airHandling":3,"invincibility":3,"type":"Outward-Bike"},{"name":"Blue Falcon","weight":0,"acceleration":3,"onRoadTraction":1,"offRoadTraction":3,"miniTurbo":4,"groundSpeed":4,"waterSpeed":2,"antiGravitySpeed":3,"airSpeed":4,"groundHandling":2,"waterHandling":3,"antiGravityHandling":1,"airHandling":5,"invincibility":4,"type":"Kart"},{"name":"Splat-Quad","weight":0,"acceleration":3,"onRoadTraction":1,"offRoadTraction":3,"miniTurbo":4,"groundSpeed":4,"waterSpeed":2,"antiGravitySpeed":3,"airSpeed":4,"groundHandling":2,"waterHandling":3,"antiGravityHandling":1,"airHandling":5,"invincibility":3,"type":"ATV"},{"name":"Kirmes-Droschke","weight":1,"acceleration":2,"onRoadTraction":1,"offRoadTraction":2,"miniTurbo":4,"groundSpeed":4,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":3,"waterHandling":3,"antiGravityHandling":3,"airHandling":2,"invincibility":5,"type":"Kart"},{"name":"Renn-Bike","weight":1,"acceleration":2,"onRoadTraction":1,"offRoadTraction":2,"miniTurbo":4,"groundSpeed":4,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":3,"waterHandling":3,"antiGravityHandling":3,"airHandling":2,"invincibility":3,"type":"Inward-Bike"},{"name":"Jet Bike","weight":1,"acceleration":2,"onRoadTraction":1,"offRoadTraction":2,"miniTurbo":4,"groundSpeed":4,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":3,"waterHandling":3,"antiGravityHandling":3,"airHandling":2,"invincibility":3,"type":"Inward-Bike"},{"name":"Sauseschuh","weight":2,"acceleration":2,"onRoadTraction":1,"offRoadTraction":0,"miniTurbo":4,"groundSpeed":4,"waterSpeed":2,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":3,"waterHandling":2,"antiGravityHandling":2,"airHandling":3,"invincibility":5,"type":"Kart"},{"name":"Gold-Standard","weight":2,"acceleration":2,"onRoadTraction":1,"offRoadTraction":0,"miniTurbo":4,"groundSpeed":4,"waterSpeed":2,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":3,"waterHandling":2,"antiGravityHandling":2,"airHandling":3,"invincibility":4,"type":"Kart"},{"name":"Eponator","weight":2,"acceleration":2,"onRoadTraction":1,"offRoadTraction":0,"miniTurbo":4,"groundSpeed":4,"waterSpeed":2,"antiGravitySpeed":3,"airSpeed":3,"groundHandling":3,"waterHandling":2,"antiGravityHandling":2,"airHandling":3,"invincibility":3,"type":"Inward-Bike"},{"name":"U-Kart","weight":4,"acceleration":1,"onRoadTraction":1,"offRoadTraction":3,"miniTurbo":3,"groundSpeed":4,"waterSpeed":5,"antiGravitySpeed":0,"airSpeed":2,"groundHandling":1,"waterHandling":5,"antiGravityHandling":1,"airHandling":1,"invincibility":6,"type":"Kart"},{"name":"Dreirad-Bolide","weight":4,"acceleration":1,"onRoadTraction":1,"offRoadTraction":3,"miniTurbo":3,"groundSpeed":4,"waterSpeed":5,"antiGravitySpeed":0,"airSpeed":2,"groundHandling":1,"waterHandling":5,"antiGravityHandling":1,"airHandling":1,"invincibility":6,"type":"Kart"},{"name":"Knochenmühle","weight":4,"acceleration":1,"onRoadTraction":1,"offRoadTraction":3,"miniTurbo":3,"groundSpeed":4,"waterSpeed":5,"antiGravitySpeed":0,"airSpeed":2,"groundHandling":1,"waterHandling":5,"antiGravityHandling":1,"airHandling":1,"invincibility":5,"type":"ATV"},{"name":"Rennwagen","weight":3,"acceleration":1,"onRoadTraction":3,"offRoadTraction":1,"miniTurbo":3,"groundSpeed":5,"waterSpeed":1,"antiGravitySpeed":2,"airSpeed":4,"groundHandling":1,"waterHandling":1,"antiGravityHandling":0,"airHandling":2,"invincibility":6,"type":"Kart"},{"name":"Bolide","weight":3,"acceleration":1,"onRoadTraction":3,"offRoadTraction":1,"miniTurbo":3,"groundSpeed":5,"waterSpeed":1,"antiGravitySpeed":2,"airSpeed":4,"groundHandling":1,"waterHandling":1,"antiGravityHandling":0,"airHandling":2,"invincibility":6,"type":"Kart"},{"name":"Flügel-Raser","weight":3,"acceleration":1,"onRoadTraction":3,"offRoadTraction":1,"miniTurbo":3,"groundSpeed":5,"waterSpeed":1,"antiGravitySpeed":2,"airSpeed":4,"groundHandling":1,"waterHandling":1,"antiGravityHandling":0,"airHandling":2,"invincibility":6,"type":"Kart"},{"name":"Cool-Cabrio","weight":4,"acceleration":0,"onRoadTraction":2,"offRoadTraction":5,"miniTurbo":3,"groundSpeed":5,"waterSpeed":2,"antiGravitySpeed":1,"airSpeed":3,"groundHandling":0,"waterHandling":1,"antiGravityHandling":0,"airHandling":1,"invincibility":7,"type":"Kart"},{"name":"Mercedes Benz GLA","weight":4,"acceleration":0,"onRoadTraction":2,"offRoadTraction":5,"miniTurbo":3,"groundSpeed":5,"waterSpeed":2,"antiGravitySpeed":1,"airSpeed":3,"groundHandling":0,"waterHandling":1,"antiGravityHandling":0,"airHandling":1,"invincibility":7,"type":"Kart"},{"name":"Standard-Quad","weight":4,"acceleration":0,"onRoadTraction":2,"offRoadTraction":5,"miniTurbo":3,"groundSpeed":5,"waterSpeed":2,"antiGravitySpeed":1,"airSpeed":3,"groundHandling":0,"waterHandling":1,"antiGravityHandling":0,"airHandling":1,"invincibility":6,"type":"ATV"}];
const enhancedBodysJSON = compareComponents(bodysJSON);
const bodys = createComponentArrayFromJSONobjectArray(enhancedBodysJSON);

const tiresJSON = [{"name":"Klein","weight":0,"acceleration":6,"onRoadTraction":0,"offRoadTraction":4,"miniTurbo":6,"groundSpeed":0,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":0,"groundHandling":4,"waterHandling":4,"antiGravityHandling":4,"airHandling":4,"invincibility":0},{"name":"Klein (Blau)","weight":0,"acceleration":6,"onRoadTraction":0,"offRoadTraction":4,"miniTurbo":6,"groundSpeed":0,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":0,"groundHandling":4,"waterHandling":4,"antiGravityHandling":4,"airHandling":4,"invincibility":0},{"name":"Knopf","weight":0,"acceleration":5,"onRoadTraction":1,"offRoadTraction":3,"miniTurbo":5,"groundSpeed":1,"waterSpeed":2,"antiGravitySpeed":2,"airSpeed":2,"groundHandling":3,"waterHandling":3,"antiGravityHandling":2,"airHandling":4,"invincibility":3},{"name":"Blatt-Reifen","weight":0,"acceleration":5,"onRoadTraction":1,"offRoadTraction":3,"miniTurbo":5,"groundSpeed":1,"waterSpeed":2,"antiGravitySpeed":2,"airSpeed":2,"groundHandling":3,"waterHandling":3,"antiGravityHandling":2,"airHandling":4,"invincibility":3},{"name":"Kissen","weight":1,"acceleration":4,"onRoadTraction":2,"offRoadTraction":6,"miniTurbo":5,"groundSpeed":1,"waterSpeed":1,"antiGravitySpeed":4,"airSpeed":1,"groundHandling":2,"waterHandling":1,"antiGravityHandling":3,"airHandling":2,"invincibility":6},{"name":"Schwamm","weight":1,"acceleration":4,"onRoadTraction":2,"offRoadTraction":6,"miniTurbo":5,"groundSpeed":1,"waterSpeed":1,"antiGravitySpeed":4,"airSpeed":1,"groundHandling":2,"waterHandling":1,"antiGravityHandling":3,"airHandling":2,"invincibility":4},{"name":"GLA","weight":2,"acceleration":4,"onRoadTraction":2,"offRoadTraction":5,"miniTurbo":4,"groundSpeed":2,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":2,"groundHandling":3,"waterHandling":3,"antiGravityHandling":3,"airHandling":3,"invincibility":5},{"name":"Standard-Reifen","weight":2,"acceleration":4,"onRoadTraction":2,"offRoadTraction":5,"miniTurbo":4,"groundSpeed":2,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":2,"groundHandling":3,"waterHandling":3,"antiGravityHandling":3,"airHandling":3,"invincibility":4},{"name":"Standard (Blau)","weight":2,"acceleration":4,"onRoadTraction":2,"offRoadTraction":5,"miniTurbo":4,"groundSpeed":2,"waterSpeed":3,"antiGravitySpeed":3,"airSpeed":2,"groundHandling":3,"waterHandling":3,"antiGravityHandling":3,"airHandling":3,"invincibility":4},{"name":"Retro","weight":2,"acceleration":2,"onRoadTraction":4,"offRoadTraction":1,"miniTurbo":3,"groundSpeed":3,"waterSpeed":2,"antiGravitySpeed":2,"airSpeed":4,"groundHandling":4,"waterHandling":4,"antiGravityHandling":4,"airHandling":3,"invincibility":5},{"name":"Retro (Rot)","weight":2,"acceleration":2,"onRoadTraction":4,"offRoadTraction":1,"miniTurbo":3,"groundSpeed":3,"waterSpeed":2,"antiGravitySpeed":2,"airSpeed":4,"groundHandling":4,"waterHandling":4,"antiGravityHandling":4,"airHandling":3,"invincibility":5},{"name":"Holz","weight":2,"acceleration":2,"onRoadTraction":4,"offRoadTraction":1,"miniTurbo":3,"groundSpeed":3,"waterSpeed":2,"antiGravitySpeed":2,"airSpeed":4,"groundHandling":4,"waterHandling":4,"antiGravityHandling":4,"airHandling":3,"invincibility":5},{"name":"Riesig","weight":4,"acceleration":2,"onRoadTraction":3,"offRoadTraction":7,"miniTurbo":3,"groundSpeed":3,"waterSpeed":2,"antiGravitySpeed":1,"airSpeed":2,"groundHandling":0,"waterHandling":1,"antiGravityHandling":1,"airHandling":0,"invincibility":6},{"name":"Riesig (Orange)","weight":4,"acceleration":2,"onRoadTraction":3,"offRoadTraction":7,"miniTurbo":3,"groundSpeed":3,"waterSpeed":2,"antiGravitySpeed":1,"airSpeed":2,"groundHandling":0,"waterHandling":1,"antiGravityHandling":1,"airHandling":0,"invincibility":6},{"name":"Antik","weight":4,"acceleration":2,"onRoadTraction":3,"offRoadTraction":7,"miniTurbo":3,"groundSpeed":3,"waterSpeed":2,"antiGravitySpeed":1,"airSpeed":2,"groundHandling":0,"waterHandling":1,"antiGravityHandling":1,"airHandling":0,"invincibility":5},{"name":"Rallye","weight":3,"acceleration":3,"onRoadTraction":3,"offRoadTraction":6,"miniTurbo":3,"groundSpeed":3,"waterSpeed":4,"antiGravitySpeed":1,"airSpeed":2,"groundHandling":1,"waterHandling":1,"antiGravityHandling":2,"airHandling":2,"invincibility":6},{"name":"Rallye (Weiß)","weight":3,"acceleration":3,"onRoadTraction":3,"offRoadTraction":6,"miniTurbo":3,"groundSpeed":3,"waterSpeed":4,"antiGravitySpeed":1,"airSpeed":2,"groundHandling":1,"waterHandling":1,"antiGravityHandling":2,"airHandling":2,"invincibility":6},{"name":"Triforce-Reifen","weight":3,"acceleration":3,"onRoadTraction":3,"offRoadTraction":6,"miniTurbo":3,"groundSpeed":3,"waterSpeed":4,"antiGravitySpeed":1,"airSpeed":2,"groundHandling":1,"waterHandling":1,"antiGravityHandling":2,"airHandling":2,"invincibility":6},{"name":"Slick","weight":3,"acceleration":1,"onRoadTraction":4,"offRoadTraction":0,"miniTurbo":2,"groundSpeed":4,"waterSpeed":0,"antiGravitySpeed":0,"airSpeed":4,"groundHandling":2,"waterHandling":0,"antiGravityHandling":1,"airHandling":2,"invincibility":5},{"name":"Slick (Violett)","weight":3,"acceleration":1,"onRoadTraction":4,"offRoadTraction":0,"miniTurbo":2,"groundSpeed":4,"waterSpeed":0,"antiGravitySpeed":0,"airSpeed":4,"groundHandling":2,"waterHandling":0,"antiGravityHandling":1,"airHandling":2,"invincibility":5},{"name":"Metall","weight":4,"acceleration":0,"onRoadTraction":1,"offRoadTraction":2,"miniTurbo":2,"groundSpeed":4,"waterSpeed":3,"antiGravitySpeed":2,"airSpeed":1,"groundHandling":2,"waterHandling":2,"antiGravityHandling":0,"airHandling":1,"invincibility":6},{"name":"Goldräder","weight":4,"acceleration":0,"onRoadTraction":1,"offRoadTraction":2,"miniTurbo":2,"groundSpeed":4,"waterSpeed":3,"antiGravitySpeed":2,"airSpeed":1,"groundHandling":2,"waterHandling":2,"antiGravityHandling":0,"airHandling":1,"invincibility":5}];
const enhancedTiresJSON = compareComponents(tiresJSON);
const tires = createComponentArrayFromJSONobjectArray(enhancedTiresJSON);

const glidersJSON = [{"name":"Wolkenballons","weight":0,"acceleration":2,"onRoadTraction":1,"offRoadTraction":1,"miniTurbo":2,"groundSpeed":0,"waterSpeed":1,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":1,"waterHandling":0,"antiGravityHandling":2,"airHandling":1,"invincibility":0},{"name":"Fallschirm","weight":0,"acceleration":2,"onRoadTraction":1,"offRoadTraction":1,"miniTurbo":2,"groundSpeed":0,"waterSpeed":1,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":1,"waterHandling":0,"antiGravityHandling":2,"airHandling":1,"invincibility":0},{"name":"Blumengleiter","weight":0,"acceleration":2,"onRoadTraction":1,"offRoadTraction":1,"miniTurbo":2,"groundSpeed":0,"waterSpeed":1,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":1,"waterHandling":0,"antiGravityHandling":2,"airHandling":1,"invincibility":0},{"name":"Papierflieger","weight":0,"acceleration":2,"onRoadTraction":1,"offRoadTraction":1,"miniTurbo":2,"groundSpeed":0,"waterSpeed":1,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":1,"waterHandling":0,"antiGravityHandling":2,"airHandling":1,"invincibility":0},{"name":"Sonnenschirm","weight":1,"acceleration":2,"onRoadTraction":2,"offRoadTraction":0,"miniTurbo":2,"groundSpeed":0,"waterSpeed":0,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":1,"waterHandling":1,"antiGravityHandling":2,"airHandling":0,"invincibility":0},{"name":"Gleitschirm","weight":1,"acceleration":2,"onRoadTraction":2,"offRoadTraction":0,"miniTurbo":2,"groundSpeed":0,"waterSpeed":0,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":1,"waterHandling":1,"antiGravityHandling":2,"airHandling":0,"invincibility":0},{"name":"Bowser-Gleiter","weight":1,"acceleration":2,"onRoadTraction":2,"offRoadTraction":0,"miniTurbo":2,"groundSpeed":0,"waterSpeed":0,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":1,"waterHandling":1,"antiGravityHandling":2,"airHandling":0,"invincibility":0},{"name":"MKTV-Gleiter","weight":1,"acceleration":2,"onRoadTraction":2,"offRoadTraction":0,"miniTurbo":2,"groundSpeed":0,"waterSpeed":0,"antiGravitySpeed":1,"airSpeed":1,"groundHandling":1,"waterHandling":1,"antiGravityHandling":2,"airHandling":0,"invincibility":0},{"name":"Wario-Gleiter","weight":2,"acceleration":1,"onRoadTraction":2,"offRoadTraction":0,"miniTurbo":1,"groundSpeed":1,"waterSpeed":0,"antiGravitySpeed":2,"airSpeed":1,"groundHandling":1,"waterHandling":1,"antiGravityHandling":1,"airHandling":0,"invincibility":1},{"name":"Segelflieger","weight":2,"acceleration":1,"onRoadTraction":2,"offRoadTraction":0,"miniTurbo":1,"groundSpeed":1,"waterSpeed":0,"antiGravitySpeed":2,"airSpeed":1,"groundHandling":1,"waterHandling":1,"antiGravityHandling":1,"airHandling":0,"invincibility":1},{"name":"Goldgleiter","weight":2,"acceleration":1,"onRoadTraction":2,"offRoadTraction":0,"miniTurbo":1,"groundSpeed":1,"waterSpeed":0,"antiGravitySpeed":2,"airSpeed":1,"groundHandling":1,"waterHandling":1,"antiGravityHandling":1,"airHandling":0,"invincibility":1},{"name":"Parasegel","weight":2,"acceleration":1,"onRoadTraction":2,"offRoadTraction":0,"miniTurbo":1,"groundSpeed":1,"waterSpeed":0,"antiGravitySpeed":2,"airSpeed":1,"groundHandling":1,"waterHandling":1,"antiGravityHandling":1,"airHandling":0,"invincibility":1},{"name":"Standard ","weight":1,"acceleration":1,"onRoadTraction":1,"offRoadTraction":1,"miniTurbo":1,"groundSpeed":1,"waterSpeed":1,"antiGravitySpeed":2,"airSpeed":0,"groundHandling":1,"waterHandling":0,"antiGravityHandling":1,"airHandling":1,"invincibility":1},{"name":"Feisthörnchen","weight":1,"acceleration":1,"onRoadTraction":1,"offRoadTraction":1,"miniTurbo":1,"groundSpeed":1,"waterSpeed":1,"antiGravitySpeed":2,"airSpeed":0,"groundHandling":1,"waterHandling":0,"antiGravityHandling":1,"airHandling":1,"invincibility":1},{"name":"Hyrule-Gleiter","weight":1,"acceleration":1,"onRoadTraction":1,"offRoadTraction":1,"miniTurbo":1,"groundSpeed":1,"waterSpeed":1,"antiGravitySpeed":2,"airSpeed":0,"groundHandling":1,"waterHandling":0,"antiGravityHandling":1,"airHandling":1,"invincibility":1}];
const enhancedGlidersJSON = compareComponents(glidersJSON);
const gliders = createComponentArrayFromJSONobjectArray(enhancedGlidersJSON);


function compareComponents(components) {
  const componentsWithEqualTo = [];
  for (let i = 0; i < components.length; i++) {
    const currentComponent = components[i];
    let equalTo = "";
    for (let j = 0; j < components.length; j++) {
      if (i !== j && ComponentsEqual(currentComponent, components[j])) {
        if (equalTo.length > 0) equalTo += ", "; // if not the first finding
        equalTo += components[j].name;
      }
    }
    componentsWithEqualTo.push(
      new EnhancedComponent(
        currentComponent.name,
        currentComponent.weight,
        currentComponent.acceleration,
        currentComponent.onRoadTraction,
        currentComponent.offRoadTraction,
        currentComponent.miniTurbo,
        currentComponent.groundSpeed,
        currentComponent.waterSpeed,
        currentComponent.antiGravitySpeed,
        currentComponent.airSpeed,
        currentComponent.groundHandling,
        currentComponent.waterHandling,
        currentComponent.antiGravityHandling,
        currentComponent.airHandling,
		currentComponent.invincibility,
		currentComponent.type,
        equalTo
      )
    );
  }
  return componentsWithEqualTo;
}

function searchBestSumedWeightedValue(vector){
	let SumedValue = 0;
	let bestResult = undefined;
	
	for (let i = 0; i < drivers.length; i++) {
		for (let j = 0; j < bodys.length; j++) {
			for (let k = 0; k < tires.length; k++) {
				for (let l = 0; l < gliders.length; l++) {
					let temp = new constellation(drivers[i],bodys[j],tires[k],gliders[l]);
					if( getWeightedSumedValue(temp,vector) > SumedValue ){
						SumedValue = getWeightedSumedValue(temp,vector);
						bestResult = temp;
					}
				}
			}
		}
	}
	console.log(SumedValue);
	return bestResult;
}

function startSearch(){
	let vector = {
		factorWeight:document.getElementById("factorWeight").value,
		factorAcceleration:document.getElementById("factorAcceleration").value,
		factorOnRoadTraction:document.getElementById("factorOnRoadTraction").value,
		factorOffRoadTraction:document.getElementById("factorOffRoadTraction").value,
		factorMiniTurbo:document.getElementById("factorMiniTurbo").value,
		factorGroundSpeed:document.getElementById("factorGroundSpeed").value,
		factorWaterSpeed:document.getElementById("factorWaterSpeed").value,
		factorAntiGravitySpeed:document.getElementById("factorAntiGravitySpeed").value,
		factorAirSpeed:document.getElementById("factorAirSpeed").value,
		factorGroundHandling:document.getElementById("factorGroundHandling").value,
		factorWaterHandling:document.getElementById("factorWaterHandling").value,
		factorAntiGravityHandling:document.getElementById("factorAntiGravityHandling").value,
		factorAirHandling:document.getElementById("factorAirHandling").value,
		factorInvincibility:document.getElementById("factorInvincibility").value
		}
		
	console.log(vector);
	let bestConstellation = searchBestSumedWeightedValue( vector );
	console.log(bestConstellation);
	console.log(getSumedValue(bestConstellation));
	printStatsFrom(bestConstellation);
	document.getElementById("result").innerHTML = constellationToString(bestConstellation);
	//JSON.stringify(bestConstellation);
	}

// Funktion, die den Text des Absatzes ändert
function aktualisiereText() {
	// Objekt mit den Texten für jede Option
	const texte = {
		option0: "Bei der Suche werden alle Fahrzeugtypen berücksichtigt.",
		option1: "Karts are the main vehicles in the Mario Kart series.",
		option2: "Outward drifting bikes are a class of bikes in the Mario Kart series that are able to drift normally.",
		option3: "Inward drifting bikes are a class of bikes in the Mario Kart series that drift in a unique way, committing to the turn instead of actually 'drifting'. When the player attempts to manually drift or autodrift, they handle in a significantly different way from every other vehicle class ",
		option4: "All-Terrain Vehicles, abbreviated as ATVs (known as Quad Bikes or just Quads in the British English version)."
	};

	// Hole die ausgewählte Option
	const dropdown = document.getElementById("auswahl");
	const ausgewählterWert = dropdown.value;

	// Hole den Text basierend auf dem Wert der Option
	const anzuzeigenderText = texte[ausgewählterWert] || "Bitte wähle eine gültige Option aus.";

	// Setze den Text im Absatz
	document.getElementById("ausgabe").innerText = anzuzeigenderText;
}