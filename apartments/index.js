
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
    age: 30
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
    apartments: [apt1, apt2, apt3, apt4]
}

//building.apartments.forEach()