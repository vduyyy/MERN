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
DrinkSake(){
    console.log(this.health +10);
    }
}



const ninja1 = new Ninja("Hyabusa", 100, 3, 3);

ninja1.SayName();
ninja1.ShowState();
ninja1.DrinkSake();







