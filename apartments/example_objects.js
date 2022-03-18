const laptop = {
    price: 1000, 
    brand: 'HP',
    memory: '2GB',
    color: 'green',
}

const car = {
    engine: 'v8', 
    doors: 2,
    model: 'BMW',
    price: 200000, 
    make: 'm4'
}
const company= {
    name: 'vittles',
    ceo: 'michael law',
    isTheBest: true, 
    publiclyTraded: false, 
}

const room = {
    windows: 0,
    dimensions: '200x200',
    closet: false,
    isLegal: false, 
    pets: false 
}

const item = {
weapon: 'excalibur',
attackpower: 130
}

 ally = {
    name: 'geralt',
    power: {name: 'kamehaha', attackPower: 9000}
}
    
const character = {
    hairColor: 'blue',
    height: "6'7",
    race: 'Elf',
    gender: null, 
    strength: Infinity,
    dlc: false, 
    class: 'Mage', 
    cohort: '031422',
    ally : {
        name: 'geralt',
        power: {name: 'kamehaha', attackPower: 9000}
    }
}

console.log(laptop)
console.log(car)
console.log(company)
console.log(room)
console.log(character)
console.log(item)
console.log(ally)
console.log(character.ally.power.attackPower)