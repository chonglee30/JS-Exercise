const addresses = [
    {
        id:1,
        name: 'burrard',
        city: 'Vancouver'
    }, {
        id:2,
        name: 'robson',
        city: 'Vancouver'
    }, {
        id:3,
        name: 'pender',
        city: 'Vancouver'
    }, {
        id:4,
        name: 'kingsway',
        city: 'burnaby'
    },{
        id:5,
        name: 'No.3',
        city: 'richmond'
    }]

const centralLoc = addresses.find(address => address.city ==='Vancouver')   
console.log(centralLoc)

const centralLoc1 = addresses.filter(address => address.city ==='richmond')   
console.log(centralLoc1)

const persons = [{
    "name": "Joe",
    "age": 17
  }, {
    "name": "Bob",
    "age": 17
  },{
    "name": "Carl",
    "age": 35
  }]
  
  const temp1 = persons.find(person => person.name === 'Carl')
  console.log(temp1)

  const temp2 = persons.filter(person => person.age === 17)
  console.log(temp2)

  const temp3 = persons.map(person => person.name)
  console.log(temp3)