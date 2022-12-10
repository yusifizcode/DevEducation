interface IAnimalTypes {
    id: number;
    animal: string;
    biome: string;
    reservoir: boolean;
    requiredSpace: number;
    diet: string;
    typeofAnimal:Type;
}

interface IAnimal extends IAnimalTypes {
    id: number;
    name: string;
    age: number;
    food: number;
}

interface ICages {
    id: number;
    name: string;
    biome: string;
    reservoir: boolean;
    area: number;
    animals:IAnimal[]
}
type Type= 'predator' | 'herbivore';


//Animals

let lynx:IAnimal = {
    id: 1,
    name: 'lynx',
    age: 2,
    food: 300,
    animal: "lynx",
    biome: "Taiga",
    reservoir: true,
    requiredSpace: 50,
    diet: "mammals",
    typeofAnimal:"predator",
}

let lynx1: IAnimal = {
    id: 2,
    name: 'lynx1',
    age: 4,
    food: 500,
    animal: "lynx1",
    biome: "Taiga",
    reservoir: true,
    requiredSpace: 50,
    diet: "mammals",
    typeofAnimal:"predator",
}

let lynx2: IAnimal = {
    id: 3,
    name: 'lynx2',
    age: 3,
    food: 400,
    animal: "lynx",
    biome: "Taiga",
    reservoir: true,
    requiredSpace: 50,
    diet: "mammals",
    typeofAnimal:"predator",
}

let clownFish: IAnimal = {
    id: 4,
    name: 'nemo',
    age: 0,
    food: 20,
    animal: "clownFish",
    biome: "ocean",
    reservoir: true,
    requiredSpace: 10,
    diet: "fishFood",
    typeofAnimal:"herbivore",
}

let clownFish2: IAnimal = {
    id: 5,
    name: 'clownFish2',
    age: 0,
    food: 20,
    animal: "clownFish2",
    biome: "ocean",
    reservoir: true,
    requiredSpace: 10,
    diet: "fishFood",
    typeofAnimal:"herbivore",
}

let tiger1: IAnimal = {
    id: 6,
    name: 'tiger1',
    age: 2,
    food: 200,
    animal: "tiger",
    biome: "tropical",
    reservoir: false,
    requiredSpace: 1000,
    diet: "carnivore",
    typeofAnimal:"predator",
}

let cage1: ICages = {
    id: 1,
    name: 'cage1',
    biome: "ocean",
    reservoir: true,
    area: 50,
    animals: [],
}

let cage2: ICages = {
    id: 2,
    name: 'cage2',
    biome: "tropical",
    reservoir: false,
    area: 1000,
    animals: [],
}

let cage3: ICages = {
    id: 3,
    name: 'cage3',
    biome: "Taiga",
    reservoir: true,
    area: 200,
    animals: [],
}

function placeAnimals(animal:IAnimal,enclosure:ICages) {
    if (animal.reservoir===enclosure.reservoir && animal.biome===enclosure.biome && animal.requiredSpace<=enclosure.area) {
                 
    console.log(`This enclosure is suitable for ${animal.name}.`); 
    checkType(animal,enclosure.animals);
   
    return  `${animal.name} added to ${enclosure.name}`;
        
    }
    else{
        console.log(`It is impossible to add "${animal.name}" to enclosure with ${enclosure.area}m area,${enclosure.biome} biome. `);
        return 'That is why adding failed.'
    }

}
function checkType(animal:IAnimal,animals:IAnimal[]) {
for (let i = 0; i < animals.length; i++) {
if ((animals[i].typeofAnimal=='predator' && animal.typeofAnimal=='herbivore') || (animals[i].typeofAnimal=='herbivore' && animal.typeofAnimal=='predator')) {
    console.log(`This enclosure is not suitable for ${animal.name},because types of animals are opposite. `);
    console.log('====================================');
}
else{
    animals.push(animal);
    
}

}
//    return animal && animals
}

console.log(placeAnimals(lynx,cage3));
console.log(placeAnimals(lynx1,cage3));
console.log(placeAnimals(lynx2,cage3));
console.log(placeAnimals(clownFish,cage1));
console.log(placeAnimals(clownFish2,cage2));
console.log(placeAnimals(tiger1,cage2));

console.log('====================================');

function showAnimals(enclosure:ICages) {
console.log(`Animals in ${enclosure.name}:`);
enclosure.animals.forEach(anm => {
console.log(anm.name)
if (enclosure.animals.length===0) {
    console.log("This enclosure is empty..");
    
}
return anm.name
})
}
showAnimals(cage1);
showAnimals(cage2);
showAnimals(cage3);


console.log(cage2.animals);
