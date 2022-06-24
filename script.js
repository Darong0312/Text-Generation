const fillers = {
    friend: ["Leo", "Cirno", "Rukul", "Shakou", "Ryu", "Chinese_Cheese", "B.A.", "Old Wang", "Sassy", "J.H.", "$friend and $friend", "$friend, $friend, and $friend"],
    place: ["my place", "internet cafe", "your place", "Old Wang's house"],
    drink: ["cola", "ice water", "sprite", "orange juice", "tea", "bottled water"],
    item: ["axe", "staff", "book", "cloak", "shield", "club", "sword", "magic gloves", "galvel", "fists", "mace", "potato"],
    num: ["two", "three", "eleven"],
    enemy: ["orcs", "glubs", "fishmen", "cordungles", "mountain trolls", "college professors", "dragon", "evil $adventurer", "agents of chaos"],
    looty: ["gleaming", "valuable", "esteemed", "rare", "exalted", "scintillating", "kinda gross but still usefull", "complete garbage"],
    loots: ["coins", "chalices", "ingots", "hides", "victory points", "gems","scrolls", "bananas", "noodles", "goblins", "CS Majors", "college credits"],
    game: ["League of Legend", "Apex Legend", "BDO", "L4D2", "The Forest", "Elder Ring", "Sekiro", "Monster Hunter"],
    
  };
  
  const template = `$friend!
  
  I have just arrive at $place, and we have $num people here waiting for you. We got some $drink and $drink here. 
  
  Before you come, make sure to bring your VR equipment because we are entering $game world, where we can hunt down the $enemy to get $looty $loots with $item.
  
  Come as soon as possible, because the game is about to begin, and there are only a few $drink left!
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
