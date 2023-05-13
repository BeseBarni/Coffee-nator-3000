import { Injectable } from '@angular/core';
import { CoffeeBean } from '../models/coffeebean';
import { BrewingMethod } from '../models/brewingmethod';
import { Observable, delay } from 'rxjs';
import { from, of } from 'rxjs';

const brewingMethods: BrewingMethod[] = [
  {
    name: "Pour Over",
    acidity: 1,
    body: 1,
    strength: 2,
    picture : "v60.png"
  },
  {
    name: "French Press",
    acidity: 2,
    body: 4,
    strength: 2,
    picture : "frenchpress.png"

  },
  {
    name: "Espresso",
    acidity: 5,
    body: 5,
    strength: 5,
    picture : "espresso.png"

  },
  {
    name: "Aeropress",
    acidity: 3,
    body: 3,
    strength: 3,
    picture : "aeropress.png"

  },
  {
    name: "Moka Pot",
    acidity: 4,
    body: 4,
    strength: 4,
    picture : "mokapot.png"

  }
];

const coffeeBeans: CoffeeBean[] = [
  {
    name: 'Colombian Supremo',
    roastLevel: 'Medium',
    farmName: 'Hacienda La Victoria',
    type: 'Single-Origin',
    acidity: 6,
    sweetness: 3,
    aroma: 7,
    flavourProfile: ['Chocolate', 'Nutty'],
    price: 2500
  },
  {
    name: 'Ethiopian Yirgacheffe',
    roastLevel: 'Light',
    farmName: 'Kochere',
    type: 'Single-Origin',
    acidity: 9,
    sweetness: 4,
    aroma: 8,
    flavourProfile: ['Floral', 'Fruity'],
    price: 2800
  },
  {
    name: 'Sumatra Mandheling',
    roastLevel: 'Dark',
    farmName: 'Lintong Nihota',
    type: 'Single-Origin',
    acidity: 2,
    sweetness: 8,
    aroma: 5,
    flavourProfile: ['Nutty', 'Spicy'],
    price: 2200
  },
  {
    name: 'Guatemalan Antigua',
    roastLevel: 'Medium-Dark',
    farmName: 'La Folie',
    type: 'Single-Origin',
    acidity: 4,
    sweetness: 7,
    aroma: 6,
    flavourProfile: ['Chocolate', 'Fruity'],
    price: 2600
  },
  {
    name: 'Kenyan AA',
    roastLevel: 'Medium',
    farmName: 'Kangunu Estate',
    type: 'Single-Origin',
    acidity: 8,
    sweetness: 9,
    aroma: 2,
    flavourProfile: ['Fruity', 'Floral'],
    price: 3000
  },
  {
    name: 'Costa Rican Tarrazu',
    roastLevel: 'Light',
    farmName: 'Montecielo Estate',
    type: 'Single-Origin',
    acidity: 5,
    sweetness: 6,
    aroma: 9,
    flavourProfile: ['Chocolate', 'Nutty'],
    price: 2700
  },
  {
    name: 'Panama Geisha',
    roastLevel: 'Light',
    farmName: 'Hacienda La Esmeralda',
    type: 'Single-Origin',
    acidity: 10,
    sweetness: 1,
    aroma: 10,
    flavourProfile: ['Fruity', 'Floral'],
    price: 3500
  },
  {
    name: 'Brazilian Santos',
    roastLevel: 'Medium-Dark',
    farmName: 'Fazenda Santa Ines',
    type: 'Single-Origin',
    acidity: 3,
    sweetness: 5,
    aroma: 4,
    flavourProfile: ['Chocolate', 'Nutty'],
    price: 2400
  },
  {
    name: 'Hawaiian Kona',
    roastLevel: 'Medium',
    farmName: 'Greenwell Farms',
    type: 'Single-Origin',
    acidity: 7,
    sweetness: 10,
    aroma: 6,
    flavourProfile: ['Nutty', 'Fruity'],
    price: 3200
  },
  {
    name: 'Rwanda Abakundakawa',
    roastLevel: 'Medium-Dark',
    farmName: 'Kivu Lake',
    type: 'Single-Origin',
    acidity: 1,
    sweetness: 2,
    aroma : 10,
    flavourProfile: ['Nutty', 'Fruity', 'Floral'],
    price: 4300
  },
  {
    name: 'Peruvian Chanchamayo',
    roastLevel: 'Medium',
    farmName: 'Coopchebi',
    type: 'Single-Origin',
    acidity: 4,
    sweetness: 5,
    aroma: 3,
    flavourProfile: ['Fruity', 'Chocolate'],
    price: 2600
    },
    {
    name: 'Indonesian Sulawesi',
    roastLevel: 'Dark',
    farmName: 'Tana Toraja',
    type: 'Single-Origin',
    acidity: 2,
    sweetness: 7,
    aroma: 3,
    flavourProfile: ['Spicy', 'Earthy'],
    price: 2200
    },
    {
    name: 'Mexican Chiapas',
    roastLevel: 'Medium-Dark',
    farmName: 'Unión de Ejidos la Selva',
    type: 'Single-Origin',
    acidity: 3,
    sweetness: 4,
    aroma: 2,
    flavourProfile: ['Nutty', 'Caramel'],
    price: 2400
    },
    {
    name: 'Nicaraguan Jinotega',
    roastLevel: 'Medium',
    farmName: 'La Bastilla',
    type: 'Single-Origin',
    acidity: 2,
    sweetness: 6,
    aroma: 4,
    flavourProfile: ['Fruity', 'Cocoa'],
    price: 2700
    },
    {
    name: 'Tanzanian Peaberry',
    roastLevel: 'Medium-Dark',
    farmName: 'Mondul Estate',
    type: 'Single-Origin',
    acidity: 7,
    sweetness: 8,
    aroma: 8,
    flavourProfile: ['Fruity', 'Nutty'],
    price: 3000
    },
    {
    name: 'Colombian Supremo',
    roastLevel: 'Medium',
    farmName: 'Hacienda La Victoria',
    type: 'Single-Origin',
    acidity: 6,
    sweetness: 3,
    aroma: 7,
    flavourProfile: ['Chocolate', 'Nutty'],
    price: 2500
    },
    {
    name: 'Ethiopian Yirgacheffe',
    roastLevel: 'Light',
    farmName: 'Kochere',
    type: 'Single-Origin',
    acidity: 9,
    sweetness: 4,
    aroma: 8,
    flavourProfile: ['Floral', 'Fruity'],
    price: 2800
    },
    {
    name: 'Sumatra Mandheling',
    roastLevel: 'Dark',
    farmName: 'Lintong Nihota',
    type: 'Single-Origin',
    acidity: 2,
    sweetness: 8,
    aroma: 5,
    flavourProfile: ['Nutty', 'Spicy'],
    price: 2200
    },
    {
    name: 'Guatemalan Antigua',
    roastLevel: 'Medium-Dark',
    farmName: 'La Folie',
    type: 'Single-Origin',
    acidity: 4,
    sweetness: 7,
    aroma: 6,
    flavourProfile: ['Chocolate', 'Fruity'],
    price: 2600
    }
];

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor() { }


  calculateBestCup(acidity : number, sweetness : number, body: number, strength : number, aroma : number, profiles:string[]) : Observable<{brew : BrewingMethod, coffee: CoffeeBean}>{

    let winner = 0;
    let best = Infinity;
    for(let i = 0; i < brewingMethods.length; i++){
      let method = brewingMethods[i];
      const distance = Math.sqrt(
        Math.pow(body / 2 - method.body,2) +
        Math.pow(strength / 2 - method.strength,2)

      )

      if (distance < best) {
        winner = i;
        best = distance;
      }

    }

    let winnerBrew = brewingMethods[winner];



    const normalizedAcidity = (winnerBrew.acidity - 1) * (1.4 - 0.6) / (5 - 1) + 0.7;


    acidity /= normalizedAcidity;

    let closestIndex = 0;
    let closestDistance = Infinity;
  
    for (let i = 0; i < coffeeBeans.length; i++) {
      const coffee = coffeeBeans[i];
      let flavourProfileScore = coffee.flavourProfile.filter(p => profiles.includes(p)).length;
      const distance = Math.sqrt(
        Math.pow(acidity - coffee.acidity, 2) +
        Math.pow(sweetness - coffee.sweetness, 2) +
        Math.pow(aroma - coffee.aroma, 2) +
        Math.pow(flavourProfileScore - coffee.flavourProfile.length,2)
      );
  
      if (distance < closestDistance) {
        closestIndex = i;
        closestDistance = distance;
      }
    }

    let winnerCoffee = coffeeBeans[closestIndex];

    return of({brew: winnerBrew,coffee :winnerCoffee}).pipe(delay(4000));
  }

}
