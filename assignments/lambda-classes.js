// CODE here for your Lambda Classes


class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    this.gender = attrs.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(instructorAttrs) {
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
  }
  demo(subject){
      console.log(`Today we are learning about ${subject}.`);
    }
  grade(Student, subject){
      console.log(`${Student.name} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(studentAttrs){
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }
    listSubjects(){
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for subject ${subject}.`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(pmProps){
        super(pmProps);
        this.gradClassName = pmProps.gradClassName;
        this.favInstructor = pmProps.favInstructor;
    }
    standUP(channel){
        console.log(`${this.name} announces to ${channel}, @channel standby times!`);
    }
    debugsCode(Student, subject){
        console.log(`${this.name} debugs ${Student.name}'s code on ${subject}.`);
    }
}

const aliSheikh = new Person ({
    name: "Ali Sheikh",
    age: 30,
    location: "Chicago, IL",
    gender: "Male"
});

const paceEllsworth = new Instructor ({
    name: "Pace Ellsworth",
    age: 34,
    location: "Temple, AZ",
    gender: "Male",
    specialty: "HTML, CSS, JS",
    favLanguage: "CSS",
    catchPhrase: "Get Ready!"
});

const daBatman = new Student ({
    name: "Java Batman",
    age: 30,
    location: "Batcave",
    gender: "Male",
    previousBackground: "Crime Fighter",
    className: "WebPT9",
    favSubjects: ['algo', 'HTML', 'JAVASCRIPT']
});

const jaredParrish = new ProjectManager ({
    name: "Jared Parrish",
    age: 29,
    location: "Orgeon",
    gender: "Male",
    specialty: "React",
    favLanguage: "java",
    catchPhrase: "Yippy-skip-skippy!",
    gradClassName: "web3",
    favInstructor: "Josh Knell"
});


console.log(aliSheikh);
console.log(aliSheikh.speak());
console.log(paceEllsworth);
console.log(paceEllsworth.demo('CSS'));
console.log(daBatman.listSubjects());
console.log(jaredParrish.standUP('WebPT9'));
console.log(jaredParrish.debugsCode(daBatman, "Python"));
console.log(paceEllsworth.grade(daBatman, "Ruby"));





// Constructor syntax with prototypes

// function Banana(bananaAttrs) {
//   Fruit.call(this, bananaAttrs);
//   this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
// }

// Banana.prototype = Object.create(Fruit.prototype);

// Banana.prototype.checkIfMonkeysLikeIt = function() {
//   if(this.doMonkeysLikeIt) {
//     return true;
//   } else {
//     return false;
//   }
// };

// Class syntax
//
// class Banana extends Fruit {
//   constructor(bananaAttrs) {
//     super(bananaAttrs);
//     this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
//   }
//   checkIfMonkeysLikeIt = function() {
//     if(this.doMonkeysLikeIt) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
//
//
// // Constructor syntax with prototypes
//
// // function Kiwi(kiwiAttrs) {
// //   Fruit.call(this, kiwiAttrs);
// //   this.isFuzzy = kiwiAttrs.isFuzzy;
// // }
//
// // Kiwi.prototype = Object.create(Fruit.prototype);
//
// // Kiwi.prototype.checkIfFuzzy = function() {
// //    if(this.isFuzzy) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }
//
// // Class Syntax
//
// class Kiwi extends Fruit {
//   constructor(kiwiAttrs) {
//     super(kiwiAttrs);
//     this.isFuzzy = kiwiAttrs.isFuzzy;
//   }
//   checkIfFuzzy = function() {
//     if(this.isFuzzy) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
//
// // Create your objects:
//
// const newBanana = new Banana({
//   doMonkeysLikeIt: true,
//   type: 'Tree',
//   name: 'Banana',
//   isRipe: false,
//   calories: 0.525
// });
//
// const newKiwi = new Kiwi({
//   isFuzzy: true,
//   type: 'Tree',
//   name: 'Kiwi',
//   isRipe: false,
//   calories: 0.21
// });
//
// console.log(newBanana.shipped('Alaska'));
// console.log(newKiwi.shipped('Colorado'));
// console.log(newBanana.checkIfMonkeysLikeIt());
// console.log(newKiwi.checkIfFuzzy());
// console.log(newBanana.calculateCals());
// console.log(newKiwi.calculateCals());
