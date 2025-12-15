const nestedObjects = [
  {
      id: 1,
      name: 'Alice',
      contact: {
          email: 'alice@example.com',
          phone: undefined, 
          mobile: ''        
      },
      settings: null 
  },
  {
      id: 2,
      name: 'Bob',
      contact: {
          email: '', 
          address: '777 Burrard St'
      },
      notes: undefined 
  },
  {
    id: 3,
    name: '',
    contact: {
        email: 'cindy@test.com', 
        address: '999 Broadway St'
    },
    notes: null 
},
{
  id: 4,
  name: 'David',
  contact: {
      email: 'david@test.com', 
      address: ''
  },
  notes: null 
}
];


const removedEmptyObjectArrary  = nestedObjects.map(removeObjectPropertyRecursively)
console.log(removedEmptyObjectArrary);

function removeObjectPropertyRecursively(obj) {
  return Object.keys(obj).reduce((newObj, key) => {
    const value = obj[key];

    if (value === '' || value === null || value === undefined) {
        return newObj;
    }

    if (typeof value === 'object' && !Array.isArray(value)) {
      const cleanedNestedObject = removeObjectPropertyRecursively(value);
      if (Object.keys(cleanedNestedObject).length > 0) {
           newObj[key] = cleanedNestedObject;
      }
  } else {
      newObj[key] = value;
  }

  return newObj;
}, {});
}