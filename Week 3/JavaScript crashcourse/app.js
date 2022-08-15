
// for (let i = 1; i <=20; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//     console.log('Frontend Simplified')
//     }
//     else if (i % 3 === 0) {
// console.log('Frontend')
//     }
//     else if (i % 5 === 0) {
//         console.log ('Simplified')
//     }
//     else {
//         console.log(i)
//     }
// }

// PRINTING EACH LETTER OF A STRING 
// const str = 'frontend simplified'

// for (let i = 0; i < str.length; i++) {
//     console.log (str[i])
// }


// FUNCTIONS

// FUNCTION DEFINTION (WHERE YOU SET THE CODE)
// function welcomePersonToFES (name){
//     console.log(`Welcome to FES, ${name}`)
// }


// FUNCTION CALL (WHERE YOU CALL FOR THE FUNCTION)
// welcomePersonToFES (`Nadim`)
// welcomePersonToFES (`John`)
// welcomePersonToFES (`chub`)


// function fn() {
//     return 'hello'
//     console.log('hello-world')
// }

// console.log(fn());


// function celsiusToFah(celsius) {
//     return celsius * 1.8 + 32
// }

// const celsiusToFah = (celsius) => {
//     return celsius * 1.8 + 32
// }

// console.log(celsiusToFah(10))


// ARRAYS 

// let arr = [20, 30, 40, 50, 100]

// let newArr = arr.filter (element => element < 50 )

// console.log(newArr)

// let grades = [`A+`, `A`, `FAIL`]
// let newArr = grades.filter (element => element === "FAIL")

// console.log(newArr)


// let goodGrades = grades.filter ((element) => {
    //     console.log(element)
    //     if (element !== "FAIL")
    //     return true
    // })
    // console.log(goodGrades)
    
//     let grades = [`A+`, `A`, `FAIL`]
// let goodGrades = grades.filter (element => element !== "FAIL")
// console.log(goodGrades)

// let grades = [`A+`, `A`, `FAIL`]
// for (let i = 0; i < grades.length; i++) {
//     console.log(grades[i])
// }

// let grades = [`A+`, `A`, `FAIL`]
// for (let i = 0; i < grades.length - 1; i++) {
//     console.log(grades[i])
// }

// let grades = [`A+`, `A`, `FAIL`]
// let goodGrades = [] 
// for (let i = 0; i < grades.length; i++) {
//     if (grades[i] !== `FAIL`) {
//         goodGrades.push(grades[i]);
//     }
// }

// console.log(goodGrades)


// CALLBACK ARRAY (MUST MEMORISE)
// arr.filter(() => {})


// let arr = [1, 4, 9, 16]

// let newArray = arr.map( (element) => {
//     console.log(element)
//     return undefined
// })

// console.log(newArray)


// let dollars = [1, 5, 10, 3] 

// let cents = dollars.map(element => element * 100)

// console.log(cents)



// let dollars = [1, 5, 10, 3] 
// let cents = []

// for (let i = 0; i < dollars.length; i++) {
//     cents.push(dollars[i] * 100)

// }

// console.log(cents)

// let register = [
//     {
//         username: 'Nadim',
//         email: 'nadimudd73@gmail.com',
//         password: 'nadim721',
//         subscriptionStatus: 'VIP',
//         discordID: 'Nad#7084',
//         lessonsCompleted: [0, 1, 2, 3]
        
//     },
    
//     {
//         username: 'Nad',
//         email: 'nadudd73@gmail.com',
//         password: 'nad721',
//         subscriptionStatus: 'VIP',
//         discordID: 'N#7084',
//         lessonsCompleted: [0, 1, 3]
        
//     },

//     {
//         username: 'N',
//         email: 'nadim73@gmail.com',
//         password: 'nadi721',
//         subscriptionStatus: 'VIP',
//         discordID: 'Na#7084',
//         lessonsCompleted: [0, 1]
        
//     }
// ]

// function login (email, password) {
//     for (let i = 0; i < register.length; i++) {
//         if (register[i].email === email) {
//             if (register[i].password === password) {
//                 console.log('log the user in')
//             }
//         }
//         else {
//         console.log('Details are incorrect - try again')
//         return;
//     }
//     }
//     console.log('could not find an email address')
// }


// login ('nadimudd73@gmail.com', 'nadim721',)


// let user = [
//     {
//     username: 'Nadim',
//     email: 'nadimudd73@gmail.com',
//     password: 'nadim721',
//     lastName: 'Uddin',
//     lessonsCompleted: [0, 1],
// }, 
// {
//         username: 'Nadim',
//         email: 'sadas73@gmail.com',
//         password: 'nadimds721',
//         lastName: 'Uddin',
//         lessonsCompleted:[0, 1, 2],
// },
// ];

// function login (email, password) {
//     for (let i = 0; i < user.length; i++) {
//         if (user[i].email === email){
//             if (user[i].password === password) {
//     console.log('log the user in, the details are correct') }
//     else {
//         console.log('Details are incorrect')
//     }
//     return;
// }
// }
// console.log('could not find an email that matches')
// }


// login('nadimudd73@gmail.com', 'nadim721')




// function register (
//     username,
//     email, 
//     password,
//     subscriptionStatus,
//     discordID,
//     lessonsCompleted,
// ) {
//     console.log(username, email, password);
// }

// register('nad', 'nad@dasd.com', 'nad721', 'VIP', '#0000', [0, 1, 2]);

//  FIRST WAY OF ACCESSING AN Element

// console.log(document.querySelector('#title'))

// SECOND WAY OF ACCESSING AN ELEMENT 
// console.log(document.getElementById('title'))

// CHANGE HTML 
// document.querySelector('#title').innerHTML = 'Frontend Simplified'

// CHANGE CSS 
// document.querySelector('#title').style.color = 'red'

// function changeTitleToRed() {
//    console.log(document.querySelector('button').style.color = 'red')
//    console.log('Clicked')
// }
