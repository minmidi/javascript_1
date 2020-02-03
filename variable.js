/** 
Data type
Primitive types
  - Number
  - String
  - Boolean
Specical types
  - undifined
  - null
Reference types
  - array
  - object
*/
// Number
var x = 100;
var y = -0.5;

// String
console.log('--string--');
var str = 'Hello world "Giang"';
console.log(str);
var str2 = 'Hello world, I\'m Giang'; // escape a character 
console.log(str2);

// Boolean (true/false): sử dụng kiểm tra đúng sai 
console.log('--Boolean--');
var isHidden = true;
console.log(isHidden);

// undifined 
var a;
a = 100;

// null
console.log('--null--');
a = null;
console.log(a);


// object

/**
 var a = {
   key: value,
   key: value,
   key: value,
   ...
};
-- cách 1--
console.log(a);
console.log(a.key);

-- cách 2--
console.log(a);
console.log(a['key']);
*/
console.log('--Object--');
var myDog = {
    name: 'Lợn',
    weight: 20,
    isAlife: false
};
// cách 1 
myDog.weight = 10; // thay đồi thuộc tính phần từ trong object

// cách 2 
myDog['isAlife'] = true; // thay đồi thuộc tính phần từ trong object nhưng sử dụng phần tử mảng

var myGirlFriend = {
    nickName: "chipi",
    age: 20,
    genderMale: false
};

// cách 1
console.log(myDog.weight); // trích xuất thông tin từng phần từ trong object
console.log(myDog); // trích xuất thông tin trong object

// cách 2
console.log(myDog);
console.log(myDog['name']);

console.log('--array--');
// Array (terms: array, element, index, length)
var dog1 = {
    type: 'chó ta'
};
var dog2 = {
    type: 'cậu vàng'
};
var dog3 = {
    name: 'Đần',
    type: 'chó cỏ'
};

var bunchOfDog = [dog1, dog2, dog3];
console.log(bunchOfDog);
console.log(bunchOfDog[2].name);
// console.log(bunchOfDog[2]['name']);

// thay thế trong mảng
console.log('-- thay thế trong mảng --');
var dog4 = {
    type: 'shiba'
};
bunchOfDog[0] = dog4;
console.log(bunchOfDog);
// var contacts = [
//   {name:'Giang', số: '0968411721'},
//   {name:'Giang', số: '0968411721'}
// ];

// console.log(contacts);

// Function
console.log('-- Function --');
/**
function FunctionName(input1, input 2, ...) {
  code
  return FunctionName;
}
 */

function Dientich(a, h) {
    return a * h / 2;
}

// tính diện tích tam giác với h = 5, a = 10
Dientich(10, 5);

// Object methods
console.log('-- Object methods --');
var mydog = {
    name: 'Đần',
    weight: 5,
    age: 1,
    brak: function() {
        console.log('Hello, My name is', this.name);
        //undifined
    },
    eat: function(bone) {
        this.weight = this.weight + bone.weight;
        return this;
    }
};
var bone = { weight: 0.5 }
console.log('cân nặng trước là: ', mydog.weight);

mydog.eat(bone);
console.log('cân nặng sau ăn là: ', mydog.weight);



// mydog.brak();

// function brak(){
//     console.log('Hello, My name is', this.name);
//     //undifined
//   };
// brak();