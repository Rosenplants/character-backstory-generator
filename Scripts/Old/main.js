/*
This project will come up with a character and a short backstory for them.
It should output:
a name,
a hometown,
why they're setting off on adventure.
It also returns a Hero object with all the randomly assigned properties
and a printAdventStart method to log the same original statement.
*/
import { Hero } from "./hero.js";
import { Motivation } from "./motivation.js";

function createHero(){
    let name = Hero.selectName();
    let home = Hero.selectHometown();
    let motiv = Motivation.select();
    console.log(`Meet ${name}, an adventurer from ${home}. ${motiv} they set off in search of adventure!`);
    return {
        name: name,
        home: home,
        motiv: motiv,
        printAdventStart(){
            console.log(`Meet ${name}, an adventurer from ${home}. ${motiv} they set off in search of adventure!`);
        }
    }
};

//const hero1 = createHero();