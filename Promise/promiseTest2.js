async function t() {
    return new Promise((resolve, reject) => {
      resolve(1)
    });
  }
  
//  console.log(t());
//t().then(data => console.log(data))

async function z() {
    return new Promise((resolve, reject) => {
      reject(2)
    });
  }
  
//  console.log(z());
z().then(data => console.log("Success: "+data))
   .catch(error => console.log("Error: "+error))