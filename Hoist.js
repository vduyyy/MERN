var hello = 'world';
console.log(hello);  // world 

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    
    console.log(needle); // magnet 
}


var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); // super cool 


var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone'; // chicken & half-chicken 
}

// it cannot run because it will break in the beginning 
console.log(food);
var mean = function() {
    food = "chicken";
    console.logcopy(food);
    var food = "fish";
    mean();
    console.log(food);
}
console.log(food);


console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); // undefined, rock, r&b, disc

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo); // San Jose, Seattle, burbank, San Jose 

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
} // it will break because you cannot assign a value 




