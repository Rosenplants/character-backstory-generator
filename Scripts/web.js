/*
This project will come up with a character and a short backstory for them.
It should output:
a name,
a hometown,
why they're setting off on adventure.
*/
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
        'Alex',
        'Drew',
        'Taylor',
        'Jordan',
        'Jamie',
        'Avery',
        'Angel',
        'Kai',
        'Kennedy',
        'Parker',
        'Quinn',
        'Riley',
        'Rowan'
    ],

    happyPool: [
        "An aspiring fighter, after their parents gifted them the family blade,",
        "After being declared the best baker around,",
        "When a kind mystic informed them of their great destiny,",
        "When their mentor declared they could teach them no more,",
        "With an instrument in hand and a burning desire to find new stories to tell,",
        "With pockets full of gold and a lack of common sense,",
        "After all their grandchildren grew up and moved away,",
    ],

    sadPool: [
        "After their lover broke their heart,",
        "After a mysterious plague wiped out everyone in the area but them,",
        "When a mystic told them they were the victim of a terrible curse,",
        "When they were cast out of their community in disgrace,",
        "After waking up with no memories of their life,",
        "With only two pennies and the clothes on their back,",
    ],

    handwriting: [
        "'Merienda', cursive",
        "'Sacramento', cursive",
        "'Reenie Beanie', cursive",
        "'Crafty Girls', cursive",
    ],

    selectHometown(){
        let randIndex = Math.floor(Math.random()*this.hometownPool.length)
        return this.hometownPool[randIndex];
    },

    selectName(){
        let randIndex = Math.floor(Math.random()*this.namePool.length)
        return this.namePool[randIndex];
    },

    selectMotivation(){
        let fate = Math.floor(Math.random()*10);
        if (fate >= 2){
            let randIndex = Math.floor(Math.random()*this.happyPool.length)
            return this.happyPool[randIndex];
        } else {
            let randIndex = Math.floor(Math.random()*this.sadPool.length)
            return this.sadPool[randIndex];
        }
    },

    selectHandwriting(){
        return this.handwriting[Math.floor(Math.random()*this.handwriting.length)];
    }

};

function createHero(){
    let name = Hero.selectName();
    let home = Hero.selectHometown();
    let motiv = Hero.selectMotivation();
    let handwriting = Hero.selectHandwriting();
    return {
        name,
        home,
        motiv,
        handwriting,
    }
};

const button = document.getElementById('roll')

button.addEventListener('click', () => {
    let adventurer = createHero();
    let docName = document.getElementById('name');
    let docHome = document.getElementById('home');
    let docMotiv = document.getElementById('motiv');
    let story = document.getElementById('story');
    let spans = document.getElementsByTagName('span');

    docName.innerHTML = adventurer.name;
    docHome.innerHTML = adventurer.home;
    docMotiv.innerHTML = adventurer.motiv;
    story.style.display = 'flex';
    spans[0].style.fontFamily = adventurer.handwriting;
    spans[1].style.fontFamily = adventurer.handwriting;
    spans[2].style.fontFamily = adventurer.handwriting;
})