const myArr = [0,1,2,3,4,5]
const myHeros = ['shakitman', 'ironman']


const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0])

// myArr2.push(7)       //it add element after last index postion
// myArr2.push(7)

// myArr2.pop()        // remove element from last index

// myArr2.unshift(9)   // it add element from zeroth index and oter elemet position would be change
// myArr2.shift()         // it remove element from zeroth position

// console.log(myArr2)
// console.log(myArr2.includes(4))
// console.log(myArr2.indexOf(4))

const newArr = myArr.join()


// console.log(myArr)
// console.log(newArr)


console.log("**************** Slice  *******************")



console.log('Original Array', myArr)


const m1 = myArr.slice(1, 3)

console.log('slice -',m1)
console.log('B', myArr)


const m2 = myArr.splice(1, 3)
console.log('C', myArr)
console.log('splice -', m2)