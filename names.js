//This file will hold all names and have a method for picking a random name
const Names = {

    pool: [
        'Peter',
        'Tina',
        'Tanya',
        'Clara',
        'Jaime',
        'Elliot'
    ],

    selectName(){
        let randIndex = Math.floor(Math.random()*this.pool.length)
        return this.pool[randIndex];
    },

};

module.exports = Names;