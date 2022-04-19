/*

Officer: 2816450
CaseNum: 702-2-38119322-2816450

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a blue car with a licence_plate of LHVO1I. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of detective_vehicleObject and the cars in
carObject_array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function DriveCar()
{
	/*
	This function should do the following: 
	 - increment detective_vehicleObject's kms_driven property by its gas_amt property 
	 - add a random amount between -0.07 and 0.07 to detective_vehicleObject's engineShudder_amt property
	 - use the constrain function to constrain detective_vehicleObject's engineShudder_amt property to values between 0.01 and 1.04
	 - call the RunCarEngine function passing detective_vehicleObject as an argument
	*/
	detective_vehicleObject.kms_driven += detective_vehicleObject.gas_amt;
	detective_vehicleObject.engineShudder_amt += random(-0.07, 0.07);
	detective_vehicleObject.engineShudder_amt = constrain(detective_vehicleObject.engineShudder_amt, 0.01, 1.04);
	RunCarEngine(detective_vehicleObject);
}


function SwitchLanes(car)
{
	/*
	This function should do the following: 
	 - move car from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LaneCoord_a and LaneCoord_b to effect the change.
	 hint: You will need to modify the x_coordinate property of car.
	*/
	if(car.x_coordinate == LaneCoord_a)
	{
		car.x_coordinate = LaneCoord_b
	} else {
		car.x_coordinate = LaneCoord_a
	}
	return car;
}


function SearchInfront( target_car )
{
	/*
	This function should do the following: 
	 - determine if target_car is in the same lane and less than 200px behind any of the cars in carObject_array.
	 - do this by traversing carObject_array and comparing each car's kms_driven property to that of target_car.
	 - use the licence_plate property of each car to ignore cars that match target_car.
	 - if you find a car that matches these requirements then return the licence_plate property for the car. Otherwise return false.
	*/
	for(var i = 0; i <  carObject_array.length; i++)
	{
		if(target_car.x_coordinate == carObject_array[i].x_coordinate && carObject_array[i].kms_driven - target_car.kms_driven > 0 && 
			carObject_array[i].kms_driven - target_car.kms_driven < 200 && carObject_array[i].licence_plate != target_car.licence_plate)
		{
			return carObject_array[i].licence_plate; 
			
		} 
	}
	return false; 
}


function CheckVehicleIsAtSide()
{
	/*
	This function should do the following: 
	 - traverse carObject_array and determine if any of the cars are parallel with detective_vehicleObject.
	 - if a car is found to be parallel to detective_vehicleObject then return the index of that car object.
	 - cars are considered parallel if the absolute difference between their kms_driven properties is less
	  than 25 px and they have non-matching x_coordinate properties
	*/

	for(var i = 0; i < carObject_array.length; i++)
	{
		if(carObject_array[i].x_coordinate != detective_vehicleObject.x_coordinate )
			if(abs(carObject_array[i].kms_driven - detective_vehicleObject.kms_driven) < 25 )
			
			{
				return carObject_array[i];
			}
	}
}

function IdentifyAssailant()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to detective_vehicleObject to see if they match
	  the licence_plate property in the assailant description.
	 - it does this by calling CheckVehicleIsAtSide.
	 - if a positive result is returned then the licence_plate property of the found car 
	 is then checked against the assailant description.
	 - if a match is found then the index of the car in question is returned.
	 - otherwise return false.
	*/
	var emptyArr = CheckVehicleIsAtSide()
	if(CheckVehicleIsAtSide())
	{
		if(emptyArr.licence_plate == "5L3UTH")
		{
			return emptyArr;
		}
	}
	return false;
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var detective_vehicleObject;

var roadWidth;
var roadLeftEdge;
var LaneCoord_a;
var LaneCoord_b;
var carImages = {};
var assailant;

var carObject_array = [
{ x_coordinate: 500, y_coordinate: 0, kms_driven: -200, vehicle_category: 'whiteCar', licence_plate: '8WPJ7E', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 500, y_coordinate: 0, kms_driven: 200, vehicle_category: 'whiteCar', licence_plate: 'DOHP88', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 300, y_coordinate: 0, kms_driven: 600, vehicle_category: 'greenCar', licence_plate: '1HTTEA', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 500, y_coordinate: 0, kms_driven: 1000, vehicle_category: 'whiteCar', licence_plate: '8ZY7XW', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 300, y_coordinate: 0, kms_driven: 1400, vehicle_category: 'blueCar', licence_plate: '9CZ9UC', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 500, y_coordinate: 0, kms_driven: 1800, vehicle_category: 'redCar', licence_plate: 'ERW298', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 500, y_coordinate: 0, kms_driven: 2200, vehicle_category: 'greenCar', licence_plate: '1BXYA6', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 300, y_coordinate: 0, kms_driven: 2600, vehicle_category: 'blueCar', licence_plate: 'KSCMG0', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 500, y_coordinate: 0, kms_driven: 3000, vehicle_category: 'redCar', licence_plate: 'QN5YCS', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 300, y_coordinate: 0, kms_driven: 3400, vehicle_category: 'blueCar', licence_plate: 'IPA3DF', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 300, y_coordinate: 0, kms_driven: 3800, vehicle_category: 'blueCar', licence_plate: 'LHVO1I', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 300, y_coordinate: 0, kms_driven: 4200, vehicle_category: 'redCar', licence_plate: 'ZNML40', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 500, y_coordinate: 0, kms_driven: 4600, vehicle_category: 'greenCar', licence_plate: 'YNRRC5', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 300, y_coordinate: 0, kms_driven: 5000, vehicle_category: 'greenCar', licence_plate: 'PRUMEO', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 300, y_coordinate: 0, kms_driven: 5400, vehicle_category: 'redCar', licence_plate: 'VRXDUA', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 300, y_coordinate: 0, kms_driven: 5800, vehicle_category: 'redCar', licence_plate: 'ONDG2Y', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 300, y_coordinate: 0, kms_driven: 6200, vehicle_category: 'redCar', licence_plate: 'S0OEH5', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 300, y_coordinate: 0, kms_driven: 6600, vehicle_category: 'greenCar', licence_plate: 'AB8FBB', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 300, y_coordinate: 0, kms_driven: 7000, vehicle_category: 'redCar', licence_plate: '5SXXYF', gas_amt: 2, exhaust: [  ]} , { x_coordinate: 500, y_coordinate: 0, kms_driven: 7400, vehicle_category: 'greenCar', licence_plate: 'I2H59N', gas_amt: 2, exhaust: [  ]} 
];



function preload()
{

	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];


	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	LaneCoord_a = 300;
	LaneCoord_b = 500;

	detective_vehicleObject = 
	{
		x_coordinate: roadLeftEdge + roadWidth/4,
		y_coordinate: 550,
		kms_driven: 0,
		gas_amt: 3,
		engineShudder_amt: 0,
		vehicle_category: 'detective',
		licence_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	if(assailant)
	{
		fill(255);

		text("assailant found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	DriveCar();
	var b2b = SearchInfront( detective_vehicleObject );
	if(b2b)SwitchLanes(detective_vehicleObject);
	var a = IdentifyAssailant();
	if(a != false)assailant = carObject_array[a];


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < carObject_array.length; i++)
	{
		carObject_array[i].kms_driven += carObject_array[i].gas_amt;
		carObject_array[i].y_coordinate = detective_vehicleObject.y_coordinate - carObject_array[i].kms_driven + detective_vehicleObject.kms_driven;
	}

}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (detective_vehicleObject.kms_driven%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (detective_vehicleObject.kms_driven%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(detective_vehicleObject);
	image
	(
		carImages["detective"],
		detective_vehicleObject.x_coordinate - carImages["detective"].width/2 + random(-detective_vehicleObject.engineShudder_amt, detective_vehicleObject.engineShudder_amt),
		detective_vehicleObject.y_coordinate + random(-detective_vehicleObject.engineShudder_amt, detective_vehicleObject.engineShudder_amt)
	);

	//draw all other cars

	for(var i = 0; i < carObject_array.length; i ++)
	{
		if(carObject_array[i].y_coordinate < height && carObject_array[i].y_coordinate > -height/2)
		{
			image(
			carImages[carObject_array[i].vehicle_category],
			carObject_array[i].x_coordinate - carImages[carObject_array[i].vehicle_category].width/2,
			carObject_array[i].y_coordinate
			);
			RunCarEngine(carObject_array[i]);

			drawExhaust(carObject_array[i]);
		}
	}

}

function RunCarEngine(car)
{

	car.exhaust.push({size: 2, x: car.x_coordinate, y: car.y_coordinate + carImages[car.vehicle_category].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.gas_amt/3);
		if(car.vehicle_category != "detective")car.exhaust[i].y += (detective_vehicleObject.gas_amt - car.gas_amt);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
