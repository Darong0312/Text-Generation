const fillers = {
  player: ["My friend", "The greatest adventurer", "Guardian", "Traveller", "Mortal", "Lucky player", "Slug", "$player and $player", "Doctor", "Fishman"],
  monster: ["Ghost", "Jocker", "Dragon", "Giant", "Walking shark", "Zombies", "Husk", "Drowned", "Creeper", "Fallen"],
  time: ["three hour", "twenty minutes", "two days", "30 seconds", "half year", "one month"],
  room: ["bloody room", "dining hall", "main lobby", "your room"],
  skill: ["run", "fire ball", "shooting", "dig", "hide", "sabotage", "aiming", "sing", "spot", "control the mech", "driving the tank"],
  food: ["chicken", "steak", "fish", "fruit", "curry rice", "beef noodles", "cookies", "McDonald's", "pizza", "bread", "duck", "roast pork"],
  drink: ["milk tea", "coca cola", "water", "soy milk", "power drink", "juice","ice water"],
  weapon: ["gun","tank","iron sword", "stone sword", "map", "guitar", "mic"],
  
};

const template = `$Player, welcome back to the battlefield.

Hope you are have great skill on $skill because that's how you defeat the enemies.

Before entering into the battle field, you will have $time to get yourself prepared.

If you feel hungry before join the battle, you can always go to $room to order some $food, and grab a $drink on your way out.

Remember, even if you are $player, you still need to be careful on the battle field because there are many unknow monsters such as $monster.

Make sure your $weapon is ready, and you are up!

Good luck.

`;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
