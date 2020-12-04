//This file will hold all possible hometown and have a method for picking a random one
const Hero = {

    hometownPool: [
        'a mountain village',
        'a desert city',
        'a fishing town',
        'the big city',
        'a small farming community',
        'a coastal district'
    ],

    namePool: [
        'Peter',
        'Tina',
        'Tanya',
        'Clara',
        'Jaime',
        'Elliot'
    ],

    selectHometown(){
        let randIndex = Math.floor(Math.random()*this.hometownPool.length)
        return this.hometownPool[randIndex];
    },

    selectName(){
        let randIndex = Math.floor(Math.random()*this.namePool.length)
        return this.namePool[randIndex];
    },

};

export {Hero};