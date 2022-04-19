/*

Officer: 2816450
CaseNum: 702-1-41680581-2816450

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of Detective_VehicleObject and the cars in
carObjectsList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function MoveCar()
{
	/*
	This function should do the following: 
	 - increment Detective_VehicleObject's Miles_Amnt property by its Speed_Amt property 
	 - add a random amount between -0.1 and 0.1 to Detective_VehicleObject's EngineVibrate_Amt property
	 - use the constrain function to constrain Detective_VehicleObject's EngineVibrate_Amt property to values between 0.02 and 0.98
	 - call the DriveMotor function passing Detective_VehicleObject as an argument
	*/

	Detective_VehicleObject.Miles_Amnt += Detective_VehicleObject.Speed_Amt;
	Detective_VehicleObject.EngineVibrate_Amt += random(-0.1, 0.1);
	Detective_VehicleObject.EngineVibrate_Amt = constrain(Detective_VehicleObject.EngineVibrate_Amt, 0.02, 0.98);
	DriveMotor(Detective_VehicleObject);
}

 
function MoveLanes(target_vehicle)
{
	/*
	This function should do the following: 
	 - move target_vehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use laneCoordinateA and laneCoordinateB to effect the change.
	 - finally you should return target_vehicle at the end of the function.
	 hint: You will need to modify the x property of target_vehicle.
	*/
	
	if(target_vehicle.x == laneCoordinateA )
	{ 
		target_vehicle.x = laneCoordinateB;
	} else{
		target_vehicle.x = laneCoordinateA;
	}
	return target_vehicle;
}


var count = 0;
function CarIsAhead( car )
{
	/*
	This function should do the following: 
	 - determine if car is in the same lane and less than 200px behind any of the cars in carObjectsList.
	 - do this by traversing carObjectsList and comparing each car's Miles_Amnt property to that of car.
	 - if you find a car that matches these requirements then return the Number_Plate property for the car. Otherwise return false.
	*/
	for(var i = 0; i < carObjectsList.length; i++)
	{
		if(car.x == carObjectsList[i].x && carObjectsList[i].Miles_Amnt -
			 car.Miles_Amnt > 0 && carObjectsList[i].Miles_Amnt - car.Miles_Amnt < 200) 
			 {
				 return carObjectsList[i].Number_Plate;
			 }
	}
	return false;


}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Detective_VehicleObject;

var roadWidth;
var roadLeftEdge;
var laneCoordinateA;
var laneCoordinateB;
var carImages = {};

var carObjectsList = [
{ x: 500, y: 0, Miles_Amnt: -200, Car_Classification: 'blueCar', Number_Plate: '5S0Z7C', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 200, Car_Classification: 'blueCar', Number_Plate: 'OYGG7T', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 600, Car_Classification: 'greenCar', Number_Plate: 'YM8XIM', Speed_Amt: 2, exhaust: [  ]} , { x: 300, y: 0, Miles_Amnt: 1000, Car_Classification: 'redCar', Number_Plate: 'IAB0I9', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 1400, Car_Classification: 'redCar', Number_Plate: '16O81X', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 1800, Car_Classification: 'whiteCar', Number_Plate: 'LQXO41', Speed_Amt: 2, exhaust: [  ]} , { x: 300, y: 0, Miles_Amnt: 2200, Car_Classification: 'greenCar', Number_Plate: 'U0QQU7', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 2600, Car_Classification: 'redCar', Number_Plate: 'H2Y1WU', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 3000, Car_Classification: 'redCar', Number_Plate: 'PH3UVR', Speed_Amt: 2, exhaust: [  ]} , { x: 300, y: 0, Miles_Amnt: 3400, Car_Classification: 'greenCar', Number_Plate: '2A7K4R', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 3800, Car_Classification: 'greenCar', Number_Plate: 'IYAYNY', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 4200, Car_Classification: 'whiteCar', Number_Plate: 'P1T4BY', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 4600, Car_Classification: 'whiteCar', Number_Plate: 'S68DGC', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 5000, Car_Classification: 'whiteCar', Number_Plate: 'M38CV4', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 5400, Car_Classification: 'redCar', Number_Plate: 'ZOKL2B', Speed_Amt: 2, exhaust: [  ]} , { x: 300, y: 0, Miles_Amnt: 5800, Car_Classification: 'greenCar', Number_Plate: 'SJTZOQ', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 6200, Car_Classification: 'whiteCar', Number_Plate: 'SQA11K', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 6600, Car_Classification: 'whiteCar', Number_Plate: 'FAAFIK', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 7000, Car_Classification: 'blueCar', Number_Plate: 'TN662K', Speed_Amt: 2, exhaust: [  ]} , { x: 500, y: 0, Miles_Amnt: 7400, Car_Classification: 'redCar', Number_Plate: 'ZOQRXR', Speed_Amt: 2, exhaust: [  ]} 
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

	roadWidth = 400;
	roadLeftEdge = 200;
	laneCoordinateA = 300;
	laneCoordinateB = 500;

	Detective_VehicleObject = 
	{
		x: roadLeftEdge + roadWidth/4,
		y: 550,
		Miles_Amnt: 0,
		Speed_Amt: 3,
		EngineVibrate_Amt: 0,
		Car_Classification: 'detective',
		Number_Plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	MoveCar();
	var b2b = CarIsAhead( Detective_VehicleObject );
	if(b2b)MoveLanes(Detective_VehicleObject);


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < carObjectsList.length; i++)
	{
		carObjectsList[i].Miles_Amnt += carObjectsList[i].Speed_Amt;
		carObjectsList[i].y = Detective_VehicleObject.y - carObjectsList[i].Miles_Amnt + Detective_VehicleObject.Miles_Amnt;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (Detective_VehicleObject.Miles_Amnt%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (Detective_VehicleObject.Miles_Amnt%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(Detective_VehicleObject);
	image
	(
		carImages["detective"],
		Detective_VehicleObject.x - carImages["detective"].width/2 + random(-Detective_VehicleObject.EngineVibrate_Amt, Detective_VehicleObject.EngineVibrate_Amt),
		Detective_VehicleObject.y + random(-Detective_VehicleObject.EngineVibrate_Amt, Detective_VehicleObject.EngineVibrate_Amt)
	);

	//draw all other cars

	for(var i = 0; i < carObjectsList.length; i ++)
	{
		if(carObjectsList[i].y < height && carObjectsList[i].y > -height/2)
		{
			image(
			carImages[carObjectsList[i].Car_Classification],
			carObjectsList[i].x - carImages[carObjectsList[i].Car_Classification].width/2,
			carObjectsList[i].y
			);
			DriveMotor(carObjectsList[i]);

			drawExhaust(carObjectsList[i]);
		}
	}

}

function DriveMotor(car)
{

	car.exhaust.push({size: 2, x: car.x, y: car.y + carImages[car.Car_Classification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.Speed_Amt/3);
		if(car.Car_Classification != "detective")car.exhaust[i].y += (Detective_VehicleObject.Speed_Amt - car.Speed_Amt);
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
