

const url = "https://gist.githubusercontent.com/Oskar-Dam/62e7175dc542af53a9d18cb292422425/raw/a6cce2b68ea13a77ec5ea7bdfb4df8f23f9ae95f/donuts.json";

fetch(url)
  .then(data => {
	console.log("success");
	return data.json();
  }).then(data => {
 		
function separate()
{
	console.log("//////////////////////////////////////////////////////////////////////////////////////////////////////////////");
	
}

/* 
1.- Nuestro grupo se encuentra totalmente debilitado. Necesitamos tomar azúcares, hierro, proteínas y poca fibra. Para ello debemos preparar un conjuro que nos muestre:

donut con más azúcar (+ 50 exp)

donut con más hierro (+ 50 exp)

donut con más proteína (+ 50 exp)

donut con menos fibra (+ 50 exp)

*/

showDonutsUpdated();

separate();

//this function does not contemplate multiple cases
function showHighestDonuts()
{
	let highestProtein = 0;
	let highestSugar = 0;
	let leatFibre = parseInt(data.items.item[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre) // convertimos el string a un numero
	let highestIron = 0;
	
	let donutNameProtein;
	let donutNameSugar;
	let donutNameIron;
	let donutNamefibre;
	
	
	
	for (const key in data.items.item) {
		
			
		let proteinNum = parseInt(data.items.item[key].nutrition_facts.nutrition.proteine) // convertimos el string a un numero
		let sugarNum = parseInt(data.items.item[key].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) // convertimos el string a un numero
		let fibreNum = parseInt(data.items.item[key].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre) // convertimos el string a un numero
		let ironNum = parseInt(data.items.item[key].nutrition_facts.nutrition.vitamines[3].percent) // convertimos el string a un numero
	

		let drawFibre = []; // array por si se dan varios casos
		
		if (highestProtein < proteinNum) //hacemos comprobacion con el numero mas grande conseguido y el actual.
		{					
			donutNameProtein = data.items.item[key].name	// si entramos en la condicion conseguimos los datos
			highestProtein = proteinNum;	
		}
		if (highestSugar < sugarNum) 
		{	
			donutNameSugar = data.items.item[key].name
			highestSugar = sugarNum;	
		}
		if (leatFibre > fibreNum) // relaxing alchemy and hell tienen el mismo amount
		{	
			donutNamefibre = data.items.item[key].name
			leatFibre = fibreNum;	
			
		}
		if (highestIron < ironNum) 
		{	
			donutNameIron = data.items.item[key].name
			highestIron = ironNum;	
		}
	}
	
	console.log("the highest protein donut is " + donutNameProtein + " with : " + highestProtein + "g");	// imprimimos enunciado
	console.log("the highest sugar donut is " + donutNameSugar + " with : " + highestSugar + "g");
	console.log("the Least fibre donut is " + donutNamefibre + " with : " + leatFibre + "g");
	console.log("the highest iron percentage donut is " + donutNameIron + " with : " + highestIron + "%");
	
}

function showDonutsUpdated()
{
	let highestProtein = 0;
	let highestSugar = 0;
	let leastFibre = parseInt(data.items.item[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre) || Number.MAX_SAFE_INTEGER;
	let highestIron = 0;

	let donutNamesProtein = [];
	let donutNamesSugar = [];
	let donutNamesIron = [];
	let donutNamesFibre = [];

	for (const key in data.items.item) {

		let proteinNum = parseInt(data.items.item[key].nutrition_facts.nutrition.proteine) || 0; // convertimos el string a un numero
		let sugarNum = parseInt(data.items.item[key].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) || 0;
		let fibreNum = parseInt(data.items.item[key].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre) || Number.MAX_SAFE_INTEGER;
		let ironNum = parseInt(data.items.item[key].nutrition_facts.nutrition.vitamines[3].percent) || 0; 
		//comparaciones
		if (proteinNum > highestProtein) {
			highestProtein = proteinNum;
			donutNamesProtein = [data.items.item[key].name];
		} else if (proteinNum === highestProtein) {
			donutNamesProtein.push(data.items.item[key].name); // agregamos si es un empate
		}

		if (sugarNum > highestSugar) {
			highestSugar = sugarNum;
			donutNamesSugar = [data.items.item[key].name]; 
		} else if (sugarNum === highestSugar) {
			donutNamesSugar.push(data.items.item[key].name);
		}

		if (fibreNum < leastFibre) {
			leastFibre = fibreNum;
			donutNamesFibre = [data.items.item[key].name];
		} else if (fibreNum === leastFibre) {
			donutNamesFibre.push(data.items.item[key].name);
		}

		if (ironNum > highestIron) {
			highestIron = ironNum;
			donutNamesIron = [data.items.item[key].name]; 
		} else if (ironNum === highestIron) {
			donutNamesIron.push(data.items.item[key].name);
		}
	}

	console.log("The highest protein donuts are: " + donutNamesProtein.join(", ") + " with: " + highestProtein + "g");
	console.log("The highest sugar donuts are: " + donutNamesSugar.join(", ") + " with: " + highestSugar + "g");
	console.log("The least fibre donuts are: " + donutNamesFibre.join(", ") + " with: " + leastFibre + "g");
	console.log("The highest iron percentage donuts are: " + donutNamesIron.join(", ") + " with: " + highestIron + "%");

}
/* 
2.- Necesitamos saber si la ingesta de calorías, grasas y carbohidratos puede mellar nuestra agilidad por lo que necesitamos:

	Listar todos los donuts y sus calorías (+ 50 exp)

	Listar todos los donuts y sus carbohidratos (+ 50 exp)

	Mostrar la media de calorías de todos los donuts (+ 50 exp)

	Mostrar la suma de las grasas saturadas de todos los donuts (+ 50 exp)

	Mostrar el porcentaje medio de cada vitamina (+ 50 exp)

*/

listDonuts();
separate();

function listDonuts()
{

	for (const key in data.items.item) {
		
		let calories = data.items.item[key].nutrition_facts.nutrition.calories;
		console.log(data.items.item[key].name + " has " + calories +" calories");
		
	}

	for (const key in data.items.item) {
		
		let carbohydrates = data.items.item[key].nutrition_facts.nutrition.carbohydrate.carbs_detail;
		console.log(data.items.item[key].name + " has the following carbohydrates:");
		console.log(carbohydrates);
		
		
	}

	donutMedia();
	showVitamines();
}

function donutMedia()
{
	let totalCal = 0;
	let totalDonuts = 0;
	let grasas = 0;
	for (const key in data.items.item) {
		
		totalCal += data.items.item[key].nutrition_facts.nutrition.calories
		grasas += parseFloat(data.items.item[key].nutrition_facts.nutrition.fat.fat_type.saturated)
		totalDonuts++;
	}
	let media = totalCal / totalDonuts;
	
	console.log("la media de calorias entre todos los donuts (" + totalDonuts + ") es de " + media + " calorias");
	console.log("la cantidad total de grasas saturadas en " + totalDonuts + " donuts es de " + grasas + "g");	

}

function showVitamines()
{
	let vitamineCtotal = 0;		// todo en porcentajes
	let vitamineAtotal = 0;
	let calciumtotal = 0;
	let ironTotal = 0;

	let donutsTotal = 0;

	for (const key in data.items.item) {
		
		// console.log("Las vitaminas de el donut " + data.items.item[key].name + " son las siguientes:");
		// console.log(data.items.item[key].nutrition_facts.nutrition.vitamines);
		// let vitamineTotal = 0;
	
		// for (let i = 0; i < data.items.item.nutrition_facts.nutrition.vitamines.length; i++) 
		// {
		// 	vitamineTotal +=  parseFloat(data.items.item[key].nutrition_facts.nutrition.vitamines[i].percent)
		// }
		// for (const vit in data.items.item.nutrition_facts.nutrition.vitamines) {
		// }

		// console.log("la media de '" + data.items.item[key].nutrition_facts.nutrition.vitamines[donutsTotal].type + "' es de " );
		

		vitamineAtotal 	+= parseFloat(data.items.item[key].nutrition_facts.nutrition.vitamines[0].percent)
		vitamineCtotal 	+= parseFloat(data.items.item[key].nutrition_facts.nutrition.vitamines[1].percent)
		calciumtotal	+= parseFloat(data.items.item[key].nutrition_facts.nutrition.vitamines[2].percent)
		ironTotal	 	+= parseFloat(data.items.item[key].nutrition_facts.nutrition.vitamines[3].percent)

		donutsTotal++;
	}

	let mediaVitC = vitamineCtotal / donutsTotal;
	let mediaVitA = vitamineAtotal / donutsTotal;
	let mediaCal = calciumtotal / donutsTotal;
	let mediaIron = ironTotal / donutsTotal;

	console.log("La media de vitamina C es de: " + mediaVitC + "%");
	console.log("La media de vitamina A es de: " + mediaVitA + "%");
	console.log("La media de Calcio es de: " + mediaCal + "%");
	console.log("La media de hierro es de: " + mediaIron + "%");
	
}

/* 
3.- El horno a la leña de esta posada es de alta calidad, debemos lanzar un hechizo para saber qué tipo de masa utilizan

	Listar cada donut con sus posibles masas, batter (+ 50 exp)

	Listar cada donut con sus posibles extras topping (+ 50 exp)


*/

posibleMasses();
posibleToppings();
separate();

function posibleMasses()
{
	for (const key in data.items.item) {
		
		let batter = data.items.item[key].batters.batter;
		console.log(data.items.item[key].name + " has the following batter");
		console.log(batter);
	
	}
}
function posibleToppings()
{
	for (const key in data.items.item) {
		
		let toppings = data.items.item[key].topping;
		console.log(data.items.item[key].name + " has the following toppings ");
		console.log(toppings);
	
	}
}

/* 
4.- Nuestro grupo sólo dispone de 4 monedas de plata.

	Mostrar cuántos donuts de cada tipo podemos comprar y las monedas sobrantes. (+ 50 exp)

*/

donutPurchase();
separate();

function donutPurchase()
{
	for (const key in data.items.item) { //a loop for each donut
		let wallet = 4;
		let units = 0;
		
		while(wallet > data.items.item[key].ppu) //if we have more than it costs he donut
			{
				units++;
				wallet -= data.items.item[key].ppu; 
			}
		
		console.log("With 4 coins you can buy " + units + " " + data.items.item[key].name + " donuts (ppu: " + data.items.item[key].ppu + ")");

	}
}


/*
5.- Para nuestro horror y preocupación hemos detectado grandes errores sintácticos en el conjuro original, es momento de poner nuestros conocimientos arcanos al servicio de toda la posada.

Los donuts con el colesterol > 12 modificar las grasas trans a 3,2 gr (+ 50 exp)

Donuts con azúcar > 50  modificar el amount de los detalles de carbohidratos a 42gr (+ 50 exp)

Añadir una vitamina llamada "Nitacina" al donut con el nombre "Magic Fusion" (+ 50 exp)

El daily value de los carbohidratos de todos los donuts va a ser de 53% (+ 50 exp)

Crearle un nuevo atributo "Alergen" al donut llamado "Relaxing Alchemy" y que dentro de el ponga "Gluten Free" (+ 50 exp)

*/

modifyDonuts();

function modifyDonuts()
{
	for (const key in data.items.item) {
		//modify fat depending on cholesterol
		if (parseInt(data.items.item[key].nutrition_facts.nutrition.cholesterol.amount) > 12) {
			data.items.item[key].nutrition_facts.nutrition.fat.fat_type.trans = "3,2gr"
		}
		console.log("Cholesterol of " + data.items.item[key].name + ": " + data.items.item[key].nutrition_facts.nutrition.cholesterol.amount );
		console.log("Trans Fat of " + data.items.item[key].name + ": " + data.items.item[key].nutrition_facts.nutrition.fat.fat_type.trans );
	
		//modify carbs depending on sugar
		if (parseInt(data.items.item[key].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars) > 50) {
			data.items.item[key].nutrition_facts.nutrition.carbohydrate.carbs_detail.amount = "42gr"
		}
		console.log("Sugars in " + data.items.item[key].name + ": " + data.items.item[key].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars );
		console.log("Amount of carbohydrates in " + data.items.item[key].name + ": " + data.items.item[key].nutrition_facts.nutrition.carbohydrate.carbs_detail.amount );
		
		//add nitacina viamin into magic fusion

		if (data.items.item[key].name === "Magic Fusion") 
		{
			let nitacina = {
				type: "Nitacina",
				percent: "4%"
			}

			data.items.item[key].nutrition_facts.nutrition.vitamines.push(nitacina);

			console.log("Added Nitacina into " + data.items.item[key].name);
			console.log(data.items.item[key].nutrition_facts.nutrition.vitamines);			
		}

		//modify carbs dayly value into 53% in all donuts
		data.items.item[key].nutrition_facts.nutrition.carbohydrate.daily_value = "53%";
		console.log("The carbohydrates daily values of " +data.items.item[key].name + " are " + data.items.item[key].nutrition_facts.nutrition.carbohydrate.daily_value);
		

		//add gluten free attribute into relaxing alchemy

		if (data.items.item[key].name === "Relaxing Alchemy") 
			{
				let attr = {
					alergen: "Gluten Free",
				}
	
				data.items.item[key] = {...data.items.item[key], ...attr}
				console.log("Added Gluten Free into " + data.items.item[key].name);
				console.log(data.items.item[key]);			
			}
	}
}
 
  })
  .catch(error => {
    // error
    console.error("Error: "+ error);
  });
