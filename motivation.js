const Motivation = {

    happyPool: [
        "An aspiring fighter, after their parents gifted them the family blade,",
        "After being declared the best baker around,",
        "When a kind mystic informed them of their great destiny,",
        "When their mentor declared they could teach them no more,",
        "With an instrument in hand and a burning desire to find new stories to tell,",
        "With pockets full of gold and a lack of common sense,",
    ],

    sadPool: [
        "After their lover broke their heart,",
        "After a mysterious plague wiped out everyone in the area but them,",
        "When a mystic told them they were the victim of a terrible curse,",
        "When they were cast out of their community in disgrace,",
        "After waking up with no memories of their life,",
        "With only two pennies and the clothes on their back,",
    ],

    select(){
        let fate = Math.floor(Math.random()*10);
        if (fate >= 2){
            let randIndex = Math.floor(Math.random()*this.happyPool.length)
            return this.happyPool[randIndex];
        } else {
            let randIndex = Math.floor(Math.random()*this.sadPool.length)
            return this.sadPool[randIndex];
        }
    }

};

export {Motivation};