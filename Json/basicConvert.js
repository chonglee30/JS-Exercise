//JSON.parse()
//takes a JSON string and transforms it into a JavaScript object.

//JSON.stringify()
//takes a JavaScript object and transforms it into a JSON string.
 
//JSON.stringify() Example:
console.log(JSON.stringify({ x: 5, y: 6 }));  // Output: {"x":5,"y":6}

//JSON.parse() Example:
let userStr = '{"name":"Sammy","email":"sammy@example.com","plan":"Pro", "Age": 23}';
console.log(JSON.parse(userStr)) // Output: {name: 'Sammy', email: 'sammy@example.com', plan: 'Pro'}
