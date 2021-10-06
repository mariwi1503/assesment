function average(arr, int) {
    for(let i=0; i<arr.length; i++) {
        for(let j =i+1; j<arr.length; j++) {
            console.log(arr[i], arr[j])
            if((arr[i]+arr[j]) / 2 == int) return true
        }  
    }
    return false
} 

let aa = [1,2,5,8,10]
let bb = 9
let test = average(aa, bb)
console.log(test)