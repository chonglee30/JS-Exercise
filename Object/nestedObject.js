// Smart City Sensor Data (IoT Context)

const cityIoTSensorData = 
{
  "organization": "GlobalTech",
  "structure": {
    "ceo": {
      "name": "Alice Smith",
      "department": "Executive",
      "direct_reports": [
        {
          "vp_engineering": {
            "name": "Bob Vance",
            "teams": [
              {
                "team_name": "Cloud Infrastructure",
                "lead": "Charlie Brown",
                "members": [
                  { "name": "Dana", "role": "DevOps", "skills": ["Linux", "AWS", "Bash"] },
                  { "name": "Eli", "role": "SRE", "skills": ["Python", "Docker", "K8s"] }
                ]
              }
            ]
          }
        }
      ]
    }
  }
}

function printNestedObjectValue(nestedObject) {
    for (key in nestedObject) {
        if (typeof(nestedObject[key]) === 'object' && nestedObject[key]!== null) {
            iterateNestedObject(nestedObject[key]) // recursively call for nested objects
        } else {
            console.log("Key:"+key+ " Value:"+nestedObject[key])
        }
    }
}

printNestedObjectValue(cityIoTSensorData)
// Nested Objects: iterate each property in the object 
// Arrays are object in JS
// Nested Object in array:
// 1. Value is indeed object - recursively 
// 2. not nulll since null value return type of object
// When dealing with Array 
// Key for in refer to the array index in JS  
