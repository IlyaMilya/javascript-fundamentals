
let apt1 = {
    bedrooms: 2, 
    sqft: 50, 
    bedrooms: 3, 
    windows: 0, 
    rent: 4500, 
    unit: '1A',
    tenants: []
}

let apt2 = {
    bedrooms: 1,
    sqft: 500, 
    bathrooms: 1,
    windows: 2,
    rent: 1500, 
    unit: '1B',
    tenants: []
}

let apt3 = {
    bedrooms: 2,
    sqft: 51,
    bathrooms: 3, 
    windows: 2,
    rent: 2400, 
    unit: '1C',
    tenants: []
}

let apt4 = {
    bedrooms: 2,
    sqft: 11,
    bathrooms: 3, 
    windows: 0,
    rent: 900, 
    unit: '1D',
    tenants: []
}

let tenant1 = {
    name: 'John Doe',
    creditScore: 400,
    salary: 15000,
    age: 30,
    pet: 'Snarky'
}

let tenant2 = {
    name: 'Jane Doe',
    creditScore: 800,
    salary: 80000,
    age: 24
}

let building = {
    streetAddress: '74 N 7th Street, Brooklyn NY 11234',
    laundry: false,
    allowsPets: false,
    lease: function(apt, tenant) {
        if(apt.tenants.length === this.bedrooms) {return `${this.unit} is already full!`}{
        apt.tenants.push(tenant)
        console.log(tenant.name,'has rented out', apt.unit);
    }
    if (this.allowsPets === false && tenant1.pet) {
        return `${apt.unit} is available, but you must give up ${tenant.pet} up for adoption!`
    }},
    occupiedApts : function (){ //returns only the apts which have tenants inside them
        //condition to test: apt.tenants.length
          return this.apartments.filter((el) => {
              return el.tenants.length > 0
          })
     },
     fullApts: function() {
         //returns only the apts which are completely full
         //condition to test: apt.tenants.length === apt.bedrooms
         return this.apartments.filter((el) => {
             return el.tenants.length === el.bedrooms
         })
        },
         apartments: [apt1, apt2, apt3, apt4]
}

const div = document.getElementById('building')

const render = () => {
    let h2 = document.createElement('h2')
    h2.innerText = building.streetAddress
    div.append(h2)
    let ul = document.createElement('ul')
    building.apartments.forEach((element) => {
        let li = document.createElement('li')
        let button = document.createElement('button')
        button.innerText = ` RENT + ${element.bedrooms}`
        li.innerText = `UNIT ${element.unit} `
        
        button.addEventListener('click', () => {
        if (element.bedrooms <= 0 ) return alert( "SORRY, NEW YORK IS DEAD")
            let vacancies = element.bedrooms -1
        button.innerText = `${element.unit} vacancies: ${vacancies}`
        element.bedrooms -= 1
        })
        li.append(button)
        ul.append(li)

    })
        div.append( h2 ,ul) //run this outside of the function to avoid looping the apartments over and ove 
}
render()
//building.apartments.forEach()

/* FUNCTIONALITY******
1.Buildings
2. Apartments
3. Tenants 
*/

/*Name of the Acting Object].[action it is taking](TARGET)*/

//apt1.lease(tenant1)

//this pattern tells us the name of the function we need to define and what kind of parameter the function needs to accept.
/*lease in this case is a function that you need to build, in order to lease apt to tenant 1 */


//Write a basic JavaScript object that represents a user that has no fewer than 3 keys/properties about that user
const user = {
    name : 'brian',
    age: 13,
    favHobby: 'basketball'
}

//Write a function called greet that takes no arguments and prints the string "Hello World"

const greet = () => {
    console.log('Hello World')
}

greet()

const fruits = ['bananas', 'apples', 'justin bieber', 'cherries', 'miley cyrus']

console.log(fruits[1])
console.log(fruits[fruits.length-1])

const aptbuilding = {
streetAdd: "2 west end ave 112",
apartments: 55,
tenants: 22,
laundry: true,
petsAllowed: true,
avgRent: 1200
}

