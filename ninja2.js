class Ninja {
    constructor(name, health, speed, strength){
    this.name = name; 
    this.health = health;
    this.speed = speed; 
    this.strength = strength;

}
SayName(){
    console.log(this.name);  
    }

ShowState(){
    console.log(this.name, this.health, this.speed, this.strength);
}
drinkSake(){
    this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super("Master Duy", 200, 10, 10);
        this.wisdom = 10; 
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}



const ninja1 = new Ninja("Hyabusa", 100, 3, 3);
const sensei1 = new Sensei("Master Duy");

ninja1.SayName();
ninja1.ShowState();
ninja1.drinkSake();
sensei1.ShowState();
sensei1.speakWisdom();
sensei1.ShowState();









