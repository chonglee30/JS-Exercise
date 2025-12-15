
let actorProfiles = [
  {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3, 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  },
  
  {
    "name": "Robert Downey Jr.",
    "age": 53,
    "Born At": "New York City, NY",
    "Birthdate": "April 4, 1965",
    "photo": "https://jsonformatter.org/img/Robert-Downey-Jr.jpg"
  },
  
  {
    "name": "Tom Cruise",
    "age": 56,
    "Born At": "Syracuse, NY",
    "Birthdate": "July 3, 1962",
    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"
  },
  
  {
    "name": "Dwayne Johnson",
    "age": 52,
    "Born At": "Hayward, CA",
    "Birthdate": "May 2, 1972",
    "photo": "https://jsonformatter.org/img/dwayne-johnson.jpg"
  },
  
  
  {
    "name": "Robert Downey Jr.",
    "age": 54, // Changed age
    "Born At": "London, UK", // Changed location
    "Birthdate": "April 4, 1965",
    "photo": "https://jsonformatter.org/img/Robert-Downey-Jr-V2.jpg" // Changed photo link
  },
  
  {
    "name": "Dwayne Johnson",
    "age": 52,
    "Born At": "Hayward, CA",
    "Birthdate": "May 2, 1972",
    "photo": "https://jsonformatter.org/img/dwayne-johnson.jpg"
  },

  {
    "name": "David Johnson",
    "age": '',
    "Born At": "Los Angeles, CA",
    "Birthdate": "May 2, 1992",
    "photo": null
  },
  {
    "name": "Chloe Kim",
    "age": 30,
    "Born At": "Torrance, CA",
    "Birthdate": '',
    "photo": ''
  },
  {
    "name": "David Smith",
    "age": undefined,
    "Born At": "Torrance, CA",
    "Birthdate": '',
    "photo": ''
  }
];

const sortedKeyProfiles = actorProfiles.map((profile)=> {  
  const sortedProfileKeys = Object.keys(profile).sort((a,b) => {
    const keyA = a.toLowerCase();
    const keyB = b.toLowerCase();

    if (keyA < keyB) return -1
    else if (keyA > keyB) return 1
    else return 0
  });

  return sortedProfileKeys.reduce((acc, current) => {
    acc[current] = profile[current]
      return acc
  }, {})
})

console.log('========== After Sort ====================')
console.log(sortedKeyProfiles)

const uniqueSet = new Set()
const uniqueProfileObject = []

for (profile of sortedKeyProfiles) {
  const strProfile = JSON.stringify(profile);

  if (!uniqueSet.has(strProfile)) {
    uniqueSet.add(strProfile)
    uniqueProfileObject.push(JSON.parse(strProfile))
  } 
}

console.log('Unique Profile Object')
console.log(uniqueProfileObject)

const cleanUniqueProfileObject = uniqueProfileObject.map(obj => {
    return Object.keys(obj).reduce((newObject, currentKey) => {
        let  value = obj[currentKey]

        if ((obj[currentKey]!='') && (obj[currentKey] != null) && (obj[currentKey] != undefined)) {
          newObject[currentKey] = value
        }
        return newObject
    }, {}) 
})

console.log('----- Remove empty string, undefined, and null values -----')  
console.log(cleanUniqueProfileObject)