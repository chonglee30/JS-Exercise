// Leetcode: 1108. Defanging an IP Address
// https://leetcode.com/problems/defanging-an-ip-address/description/
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// defanged IP address replaces every period "." with "[.]".
/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
  const defangingIpaddress = address.replaceAll(".","[.]")    
  return defangingIpaddress
};

function defangIPaddress(address) {
  const defangingIpaddress = address.replace(/\./g,"[.]")   
  return defangingIpaddress
};


const ipaddress1 = "1.1.1.1"
console.log(defangIPaddr(ipaddress1))
console.log(defangIPaddress(ipaddress1))

const ipaddress2 = "255.100.50.0"
console.log(defangIPaddr(ipaddress2))
console.log(defangIPaddress(ipaddress2))