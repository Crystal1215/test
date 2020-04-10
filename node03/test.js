
// setTimeout(() => console.log('a'));
// Promise.resolve().then(
//    () => console.log('b’);
//  ).then(
//    () => Promise.resolve('c').then(
//      (data) => {
//        setTimeout(() => console.log('d'));
//        console.log('f');
//        return data;
//      }
//    )
//  ).then(data => console.log(data));

class Person {
    constructor (name) {
         this.name = name;
    }
    greet () {
         console.log(`Hi, my name is ${this.name}`);
    }
    greetDelay (time) {
         setTimeout(() => {
              console.log(`Hi, my name is ${this.name}`);
         }, time);
    }
}