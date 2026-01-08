// 468. Validate IP Address
// Given a string queryIP, return "IPv4" if IP is a valid IPv4 address
// A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros.
// For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses
// while "192.168.01.1", "192.168.1.00", and "192.168@1.1" are invalid IPv4 addresses.
// https://leetcode.com/problems/validate-ip-address/description/

/**
 * @param {string} queryIP
 * @return {string}
 */

// Validate IPV4 Address type
const validIPAddressV4 = function(queryIP) {
  let ipStatus = true  
  const integerRegex = /^\d+$/;
  const arrayIp = queryIP.split('.')

  if (arrayIp.length !==4) {
    ipStatus = false
  } else {
  for (let i=0; i<arrayIp.length; i++) {  
    //if (isNaN(arrayIp[i])) {
    //if (typeof (arrayIp[i]) !== 'number') {  
    if (!integerRegex.test(arrayIp[i])) {
      ipStatus = false
      break;
    }

    if ((arrayIp[i].length >1) && (arrayIp[i].charAt(0) == '0')) {
      //console.log(arrayIp[i])
      //console.log(arrayIp[i].length)
      //if (arrayIp[i].charAt(0) == '0') {
        //console.log('address num:'+arrayIp[i])
        ipStatus = false
        break;
     // }
    }
    let ipNum = Number(arrayIp[i])
    if ((ipNum >=0) && (ipNum <=255)) {
      ipStatus = true
    } else {
      ipStatus = false
      break;
    }
  }
}
  if (ipStatus) return "IPv4" 
  else return "Neither"
};

// valid IPv4 addresses
const v4Address1 = "172.16.254.1"
const v4Address2 ="192.168.1.0" 

const v4Address3 = "192.168.01.1"
const v4Address4 = "192.168.1.00"
const v4Address5 = "256.256.256.256"
const v4Address6 = "128.0.0.1";
const v4Address7 = "125.16.100.1";
const v4Address8 = "125.512.100.1"
const v4Address9 = "125.112.100.abc"
const v4Address10 ="192.168@1.1"
const v4Address11 = "1e1.4.5.6"

console.log("IpV4 Test:")
console.log(validIPAddressV4(v4Address11))
console.log(validIPAddressV4(v4Address1)) // "172.16.254.1"
console.log(validIPAddressV4(v4Address2))
console.log(validIPAddressV4(v4Address3))

// console.log(validIPAddressV4(v4Address4))
// console.log(validIPAddressV4(v4Address5))
// console.log(validIPAddressV4(v4Address6))
// console.log(validIPAddressV4(v4Address7))
// console.log(validIPAddressV4(v4Address8))
// console.log(validIPAddressV4(v4Address9))
// console.log(validIPAddressV4(v4Address10))

// Validate IPV6 Address type
// decide between IpV4 and iPv6
const validIPAddress = function(queryIP) {
  let ipStatus = true 
  let ipV6Status = false;
  // IPV6 Format
  // 1. Must separate by :
  // 2. Must have 8 sections
  // 3. Each Section has 1-4
  if (queryIP.includes(':')) {
    const arrayIpV6 = queryIP.split(':')
    if (arrayIpV6.length !==8) return "Neither" 

    for (let i=0; i<arrayIpV6.length; i++) {
      //console.log('length of section:'+arrayIpV6[i].length)
      if ((arrayIpV6[i].length >0) && 
          (arrayIpV6[i].length <=4)) {

            const hexRegex = /^[0-9a-fA-F]+$/;
            if (hexRegex.test(arrayIpV6[i]))  ipV6Status = true   
            else return "Neither" 
       } else {
        return "Neither" 
       }
    }

    if (ipV6Status) return "IPv6"
    else return "Neither" 
  } else if (queryIP.includes('.')) {  // IPV4
    // 1. Must separate by .
  const integerRegex = /^\d+$/;  
  const arrayIp = queryIP.split('.')
  if (arrayIp.length !==4) {
    ipStatus = false
  } else {
  for (let i=0; i<arrayIp.length; i++) {  
    if (!integerRegex.test(arrayIp[i])) {  
      ipStatus = false
      break;
    }
    if ((arrayIp[i].length >1) && (arrayIp[i].charAt(0) == '0')) {
        ipStatus = false
        break;
    }
    let ipNum = Number(arrayIp[i])
    if ((ipNum >=0) && (ipNum <=255)) {
      ipStatus = true
    } else {
      ipStatus = false
      break;
    }
  }
}
  if (ipStatus) return "IPv4" 
  else return "Neither"
  } 
  else {
    return "Neither"
  }
}

console.log('Complete Test Results:')
// const v4Address1 = "172.16.254.1"
// const v4Address2 ="192.168.1.0" 
// const v4Address3 = "192.168.01.1"
// const v4Address4 = "192.168.1.00"
// const v4Address5 = "256.256.256.256"
// const v4Address6 = "128.0.0.1";
// const v4Address7 = "125.16.100.1";
// const v4Address8 = "125.512.100.1"
// const v4Address9 = "125.112.100.abc"
// const v4Address10 ="192.168@1.1"
console.log(validIPAddress(""))
console.log(validIPAddress(v4Address1))
console.log(validIPAddress(v4Address2))
console.log(validIPAddress(v4Address3))
console.log(validIPAddress(v4Address4))
console.log(validIPAddress(v4Address5))

console.log(validIPAddress(v4Address6))
console.log(validIPAddress(v4Address7))
console.log(validIPAddress(v4Address8))
console.log(validIPAddress(v4Address9))
console.log(validIPAddress(v4Address10))

// V6 Address Test:
// valid IPv4 addresses
const v6Address6 = "2001:0db8:85a3:00000:0:8A2E:0370:7334"

const v6Address1 = "2001:0db8:85a3:0:0:8A2E:0370:7334"
const v6Address2 ="2001:0db8:85a3:0000:0000:8a2e:0370:7334" 
const v6Address3 = "2001:db8:85a3:0:0:8A2E:0370:7334"

const v6Address4 = "2001:0db8:85a3::8A2E:037j:7334"
const v6Address5 = "02001:0db8:85a3:0000:0000:8a2e:0370:7334"

console.log('IpV6 Address Test Results:')
console.log(validIPAddress(v6Address6))
// console.log(validIPAddress(v6Address1))
// console.log(validIPAddress(v6Address2))
// console.log(validIPAddress(v6Address3))


console.log('address4 => 2:'+validIPAddress(v6Address4))
console.log('address5 => '+validIPAddress(v6Address5))

// return "IPv4" 
// return "IPv6"
// return "Neither"
const validateIpaddress = function(queryIP) {
  if (queryIP.includes('.')) {
    let ipV4Status = false 
    const arrayV4 = queryIP.split(".")
    if (arrayV4.length !==4) return "Neither"
    const intRegex = /^\d+$/;
    
    for (let i =0; i<arrayV4.length; i++) {

      if (!intRegex.test(arrayV4[i])) return "Neither"
      if (arrayV4[i].length>3) return "Neither"

      if ((arrayV4[i].charAt(0)==='0') && (arrayV4[i].length>1)) {
        ipV6Status = false
        return "Neither"
      }
      let v4NumSegment = Number(arrayV4[i])
      if ((v4NumSegment >=0) && (v4NumSegment <=255)) ipV4Status = true 
      else return "Neither"
    }
    if (ipV4Status) return "IPv4" 
    else return "Neither"
  } else if (queryIP.includes(':')) {
    let ipV6Status = false 
    const hexRex = /^[0-9a-fA-F]+$/;
    const arrayV6 = queryIP.split(":")

    if (arrayV6.length !== 8) { 
      console.log('not length of 8') 
    return "Neither"}

    for (let i=0; i<arrayV6.length; i++) {
      if ((arrayV6[i].length >=1) && (arrayV6[i].length <=4)) {
        if ( hexRex.test(arrayV6[i])) ipV6Status = true 
        else return "Neither"
      } else {
        console.log('incorrect Length:'+arrayV6[i])
        ipV6Status = false
        return "Neither"
      }
    }
    if (ipV6Status) return "IPv6"
  } else {
    console.log('Invalid contents') 
    return "Neither"
  }
}

//const v4Address1 = "172.16.254.1"
//const v4Address2 ="192.168.1.0" 
// const v4Address3 = "192.168.01.1"
// const v4Address4 = "192.168.1.00"
// const v4Address5 = "256.256.256.256"
console.log("Check IP V4:")
console.log('Address1:'+validateIpaddress(v4Address1)) // "172.16.254.1"
console.log('Address2:'+validateIpaddress(v4Address2)) // "192.168.1.0" 
console.log('Address3:'+validateIpaddress(v4Address3)) // "192.168.01.1"
console.log('Address4:'+validateIpaddress(v4Address4)) // "192.168.1.00"
//console.log('Address5:'+validateIpaddress(v4Address5)) //"256.256.256.256"
 
console.log("Check IP V6:")
console.log(validateIpaddress(v6Address1))

console.log("")
console.log("::1 =>"+validateIpaddress("::1"))
console.log("::8a2e:370:7334 =>"+validateIpaddress("::8a2e:370:7334"))

console.log(":: =>"+validateIpaddress("::"))

//"2001:0db8:85a3:0:0:8A2E:0370:7334"

// return "IPv4" 
// return "IPv6"
// return "Neither"
// validate IPV6 Compression Rules as well 
const validateCompleteIpaddress = function(queryIP) {
  
  // IPV4
  if (queryIP.includes('.')) {
    let ipV4Status = false 
    let ipV4Parts = queryIP.split('.')
    const intRegex = /^\d+$/;

    if (ipV4Parts.length !== 4) { 
       //console.log('Length not 4')
      return "Neither"}

    for (let i=0; i<ipV4Parts.length; i++) {
      let segment = ipV4Parts[i]
      if (segment.length >1 && segment.charAt(0)==='0') {
        //console.log('Leading 0')
        return "Neither"
      }

      if (!intRegex.test(segment))  return "Neither" 
      if (Number(segment) >255 || Number(segment) <0 || segment.length>3 ) return "Neither"
      let numSegment = Number(segment)
      if ((numSegment >=0) && (numSegment <=255)) {
        //console.log('Valid V4')
        ipV4Status = true      
      }
    }

    if (ipV4Status) return "IPv4" 
    else return "Neither"

  // IPV6  
  } else if (queryIP.includes(':')) {
    let ipV6Status = false;
    const hexRex = /^[0-9a-fA-F]{1,4}$/;
    const doubleColonLength = (queryIP.match(/::/g) || []).length
    let segments =[]

    if (doubleColonLength>1) return "Neither"

    if (doubleColonLength === 1) {  // IPV6 Compression Rule
        let parts = queryIP.split('::')
        if ((parts[0].length ===0) && (parts[1].length ===0)) {
          ipV6Status = true
        }

        if (parts[0].length >0) {
          segments = segments.concat(parts[0].split(':'))
        }

        if (parts[1].length >0) {
          segments = segments.concat(parts[1].split(':'))
        }

        if (segments.length >= 8) return "Neither"

    } else {  // No IPV6 Compression Rule
       segments =queryIP.split(':')
       if (segments.length !== 8) return "Neither"
    }

    for (segment of segments) {
      if (hexRex.test(segment)) ipV6Status = true 
      else {
         ipV6Status = false 
         return "Neither"
      }
    }

    if (ipV6Status) return "IPv6"
    else return "Neither"

  } else {
    return "Neither"
  }
}

// Test V4 Address:
console.log("Check Complete IPV4:")
console.log('Address1:'+validateCompleteIpaddress(v4Address1)) // "172.16.254.1"
console.log('Address2:'+validateCompleteIpaddress(v4Address2)) // "192.168.1.0" 
console.log('Address3:'+validateCompleteIpaddress(v4Address3)) // "192.168.01.1"
console.log('Address4:'+validateCompleteIpaddress(v4Address4)) // "192.168.1.00"
console.log('Address5:'+validateCompleteIpaddress(v4Address5)) //"256.256.256.256"
console.log('Address9:'+validateCompleteIpaddress(v4Address9)) // const v4Address9 = "125.112.100.abc"
console.log('Address10:'+validateCompleteIpaddress(v4Address10)) // const v4Address10 ="192.168@1.1"

const v4Address12 = "125.112.100.-8"
const v4Address13 = "1.2.3.4.5"
const v4Address14 = "1.2.3"
const v4Address15 = "125.112..1"
const v4Address16 = "01.112.100.8"
const v4Address17 = "256.112.100.8"
const v4Address18 = "125.112.100.256"

console.log('Address12:'+validateCompleteIpaddress(v4Address12))
console.log('Address13:'+validateCompleteIpaddress(v4Address13))
console.log('Address14:'+validateCompleteIpaddress(v4Address14))
console.log('Address15:'+validateCompleteIpaddress(v4Address15))
console.log('Address16:'+validateCompleteIpaddress(v4Address16))
console.log('Address17:'+validateCompleteIpaddress(v4Address17))
console.log('Address18:'+validateCompleteIpaddress(v4Address18))


console.log("Check Complete IPV6:")
console.log('v6Address1: '+validateCompleteIpaddress(v6Address1))
const v6Address11 = "::8a2e:370:7334"
const v6Address12 = "2001:db8::"
const v6Address13 = "2001:db8::8a2e:0:7334"
const v6Address14 = "2001:Db8:85A3::7334"
const v6Address15 = "::"
const v6Address16 = "::1"
const v6Address17 = "a::"
const v6Address18 ="FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF"
const v6Address19 = "2001:0db8:00000::1"
const v6Address20 = "2001:db8::8a2e::7334" // 2 ::
const v6Address21 = "2001:db8:85a3"  // missing segment
const v6Address22 = "2001-db8::1"
const v6Address23 = "2001::db8:" // empty segment

console.log('v6Address11: '+validateCompleteIpaddress(v6Address11))
console.log('v6Address12: '+validateCompleteIpaddress(v6Address12))
console.log('v6Address13: '+validateCompleteIpaddress(v6Address13))
console.log('v6Address14: '+validateCompleteIpaddress(v6Address14))
console.log('v6Address15: '+validateCompleteIpaddress(v6Address15))
console.log('v6Address16: '+validateCompleteIpaddress(v6Address16))
console.log('v6Address17: '+validateCompleteIpaddress(v6Address17))
console.log('v6Address18: '+validateCompleteIpaddress(v6Address18))
console.log('v6Address19: '+validateCompleteIpaddress(v6Address19))
console.log('v6Address20: '+validateCompleteIpaddress(v6Address20))
console.log('v6Address21: '+validateCompleteIpaddress(v6Address21))
console.log('v6Address22: '+validateCompleteIpaddress(v6Address22))
console.log('v6Address23: '+validateCompleteIpaddress(v6Address23))

//Leading Compression ::8a2e:370:7334
//Trailing Compression  2001:db8::
//Middle Compression  2001:db8::8a2e:0:7334
//Case Insensitivity 2001:Db8:85A3::7334
//Unspecified           ::
//Loopback              ::1