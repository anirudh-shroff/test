// things covered in c++:
// 4 types: 1. inheritance 2. encapsulation 3. polymorphism 4. data abstraction
// in encapsulation : public, private, global, setter, getter
// in polymorphism : method overloading, method overriding and operator overloading
// in inheritance : 5 types: 1. single 2. multiple 3.multi-level 4. heirarchical 5. hybrid
// in data abstraction : 2 types: 1. static binding 2. dynamic binding


// Now in JS :

class Student {
    // name;
    // grid;
    // course;
    
    constructor (name, grid, course){
         this.name = name;
         this.grid = grid;
         this.course = course;
    }
    getStudentDetails(){
        console.log(this.name,this.grid,this.course);
    }
}
// to create an object in js 'new' keyword is used
let stu = new Student("john doe", 123, "fsd");
console.log(stu)

// in JS 2 types of objects, 1. the ones created using new keyword, which is related to a class[has rules], 2. which is directly created in global area which does not need any class[no rules]

let per = {
    name : "Jess",
    age : 30,
    isDev : true,
    marks : [10,20,30]
}
let per2 = {
    name : "Mess",
    age : 20,
    isDev : false,
}

// Object.freeze - update and delete can be done
// Object.seal - no changes can be done,
let stu1 = new Student ("John Wick", 2121, "UI/UX");
let stu2 = new Student ("Johnny Walker", 1234, "DS");
console.log(stu1);
console.log(stu2);

// console.table(stu1); this is another way to show objects in a form of a table. 
// console.table(stu2); this is another way to show objects in a form of a table.
