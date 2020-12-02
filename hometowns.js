//This file will hold all possible hometown and have a method for picking a random one
const Hometowns = {

    pool: [
        'a mountain village',
        'a desert city',
        'a fishing town',
        'the big city',
        'a small farming community',
        'a coastal district'
    ],

    select(){
        let randIndex = Math.floor(Math.random()*this.pool.length)
        return this.pool[randIndex];
    },

};

export {Hometowns};