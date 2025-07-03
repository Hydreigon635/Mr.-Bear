const gameContainer = document.getElementById("game-container");
const bgImage = document.getElementById("bg-image");
const textBox = document.getElementById("text-box");
const optionsBox = document.getElementById("options");
const heartsBox = document.getElementById("hearts");

let hearts = 3;
let maxHearts = 3;

// Change this to 5 if "easy" is selected
function setDifficulty(level) {
  maxHearts = level === "easy" ? 5 : 3;
  hearts = maxHearts;
  showScene("start");
}

const story = {
  startscreen: {
    image: "start.png",
    text: "Can you survive Mr Bear?",
    options: [
      { text: "Yes", next: "difficulty", type: "a" },
      { text: "No", next: "bye", type: "a" }
    ]
  },
  bye: {
    image: "Bye.gif", 
    text: "Okay, bye :3",
    options: []
  },
  difficulty: {
    image: "start.png",
    text: "Choose your difficulty",
    options: [
      { text: "Easy", next: "start", type: "a", difficulty: "easy" },
      { text: "Normal", next: "start", type: "a", difficulty: "normal" }
    ]
  },
  start: {
    image: "mrbear.png",
    text: "Your parents went out of town and trusted Mr. Bear to take care of you. You are standing infront of Mr. Bear's door. What do you do?",
    options: [
      { text: "Politly knock", next: "q1", type: "a" },
      { text: "Press the doorbell", next: "q2", type: "b" },
      { text: "Do nothing and wait", next: "q3", type: "b" }
    ]
  },

  q1: {
    image: "mrbear.png",
    text: "Mr. Bear opened the door, he looks friendly. After the introduction, Mr. Bear shows you the house, he asked if you are hungry.",
    options: [
      { text: "Tell him you are not hungry", next: "q4", type: "b" },
      { text: "Say yes and eat Mr. Bear's food", next: "dead", type: "c" },
      {text: "Tell him you will definitely eat later", next: "q5", type: "a"}
    ]
  },

  q2: {
    image: "mrbear.png",
    text: "Mr. Bear was angry, he hates loud sounds. After the introduction, Mr. Bear shows you the house, he asked if you are hungry. ",
    options: [
        { text: "Tell him you are not hungry", next: "q4", type: "b" },
        { text: "Say yes and eat Mr. Bear's food", next: "dead", type: "c" },
        {text: "Tell him you will definitely eat later", next: "q5", type: "a"}
      ]
  },
q3: {
    image: "mrbear.png",
    text: "Mr. Bear opened the door after a while, he looked confused. After the introduction, Mr. Bear shows you the house, he asked if you are hungry.",
    options: [
        { text: "Tell him you are not hungry", next: "q4", type: "b" },
        { text: "Say yes and eat Mr. Bear's food", next: "dead", type: "c" },
        {text: "Tell him you will definitely eat later", next: "q5", type: "a"}
      ]
},
 
q4: {
    image: "mrbear.png",
    text: "Mr. Bear didn't like that answer but he accpted it. It's getting late and you are sleepy, what do you do?",
    options: [
      { text: "Watch TV with Mr. Bear", next: "q6", type: "a" },
      { text: "Go to your room and sleep", next: "dead2", type: "c" },
      {text: "Search the house", next: "q7", type: "b"}
    ]
  },
q5: {
    image: "mrbear.png",
    text: "Mr. Bear nodded understandingly. It's getting late and you are sleepy, what do you do?",
    options: [
      { text: "Watch TV with Mr. Bear", next: "q6", type: "a" },
      { text: "Go to your room and sleep", next: "dead2", type: "c" },
      {text: "Search the house", next: "q7", type: "b"}
    ]
  },

  q6: {
    image: "mrbear.png",
    text: "Mr. Bear enjoyed your company. After a while Mr. Bear tells you about his past, he tells you had a brother, he misses him  a lot.",
    options: [
        {text: "Laugh at him", next: "dead3", type:"c"},
        {text: "Try to find out more", next: "q9", type: "b"},
        {text: "Try to symathize with him", next: "q8", type:"a"}
    ],
  },
  q7:{
image: "mrbear.png",
text: "Mr. Bear catched you, you play it off and watch TV with him. After a while Mr. Bear tells you about his past, he tells you had a brother, he misses him  a lot.",
options: [
    {text: "Try to symathize with him", next: "q8", type:"a"},
    {text: "Laugh at him", next: "dead3", type:"c"},
    {text: "Try to find out more", next: "q9", type: "b"}]
  },
  q8:{
    image: "mrbear.png",
    text: "Mr. Bear appreciates it, you both go to sleep. You survived the first day. Congratulations!",
    options: [
        {text: "Continue", next: "q10", type:"a"}]
      },
      q9:{
        image: "mrbear.png",
        text: "Mr. Bear wasn't happy about your curiosity, you both go to sleep. You survived the first day. Congratulations!",
        options: [
            {text: "Continue", next: "q10", type:"a"}]
          },
q10: {
    image: "mrbear.png",
    text: "You wake up, you hear Mr.Bear's loud steps coming towrds your room.",
    options: [
        {text: "Pretend to sleep", next: "q11", type:"b"},
        {text: "Greet him", next: "q12", type:"a"},
    {text: "Do nothing", next: "q13", type: "b"}    ],
},
q11: {image: "mrbear.png",
    text: "Mr. Bear looks at you sleep and begins to laugh. After this strange enciunter you feel uneasy, you need breakfast.",
    options: [{
        text: "Cook your own food", next:"q14", type: "a"},
        {text: "Ask Mr. Bear to make you breakfast", next: "dead4", type: "c"},
{text: "Eat unhealthy snacks", next:"q15", type:"b"}
    ],
},
q12: {image: "mrbear.png",
    text: "You greet Mr. Bear, he goes away without saying anything. After this strange enciunter you feel uneasy, you need breakfast.",
    options: [{
        text: "Cook your own food", next:"q14", type: "a"},
        {text: "Ask Mr. Bear to make you breakfast", next: "dead4", type: "c"},
{text: "Eat unhealthy snacks", next:"q15", type:"b"}
    ],
},
q13: {image: "mrbear.png",
    text: "You look at Mr. Bear while he stares at you. After this strange enciunter you feel uneasy, you need breakfast.",
    options: [{
        text: "Cook your own food", next:"q14", type: "a"},
        {text: "Ask Mr. Bear to make you breakfast", next: "dead4", type: "c"},
{text: "Eat unhealthy snacks", next:"q15", type:"b"}
    ],
},
q14: {
    image: "mrbear.png",
    text: "Mr.Bear understands. After a while you see that Mr. Bear went downstairs, you dont't know what he is doing there",
    options: [
        {text: "Search the house", next: "q16", type: "b"},
        {text: "Go downstairs", next: "q17", type: "a"},
        {text: "Wait for him", next: "dead5", type: "c"}
    ],
},
q15: {
    image: "mrbear.png",
    text: "Mr.Bear wasn't happy about it. After a while you see that Mr. Bear went downstairs, you dont't know what he is doing there",
    options: [
        {text: "Search the house", next: "q16", type: "b"},
        {text: "Go downstairs", next: "q17", type: "a"},
        {text: "Wait for him", next: "dead5", type: "c"}
    ],
},
q16: {
    image: "mrbearr.png",
    text: "You don't find anything, you decided to search downstairs. You go downstairs and hide, you see small hole and decide to look through it. You see a pentagram painted in blood.",
    options: [
        {text: "Escape and run away", next: "dead6", type: "c"},
        {text: "Try to find out more", next: "q18", type: "a"},
        {text: "Ask Mr.Bear about it", next: "dead7", type: "c"}
    ],
},
q16: {
    image: "mrbearr.png",
    text: "You don't find anything, you decided to search downstairs. You go downstairs and hide, you see small hole and decide to look through it. You see a pentagram painted in blood.",
    options: [
        {text: "Escape and run away", next: "dead6", type: "c"},
        {text: "Try to find out more", next: "q18", type: "a"},
        {text: "Ask Mr.Bear about it", next: "dead7", type: "c"}
    ],
},
q17: {
    image: "mrbearr.png",
    text: "You went downstairs. You go downstairs and hide, you see small hole and decide to look through it. You see a pentagram painted in blood.",
    options: [
        {text: "Escape and run away", next: "dead6", type: "c"},
        {text: "Try to find out more", next: "q18", type: "a"},
        {text: "Ask Mr.Bear about it", next: "dead7", type: "c"}
    ],
},
q18: {
   image: "mrbear.png",
   text: "You look around and see a body, it looks like Mr. Bear but smaller. It's his brother! You wanna escape this madness, you feel a touch on the back, it's Mr. Bear, he holds a knife.",
   options:[
    {text: "Try to defend yourself and escape", next: "q19", type: "a"},
    {text: "Attack Mr. Bear and try to kill him", next: "dead8", type: "c"},
    {text: "Try to talk your way out", next: "dead9", type: "c"}
   ],
},
q19: {
    image: "mrbear.png",
    text: "You manage to escape the house. While running, you see a police station and a hospital.",
    options: [
        {text: "Run to the hospital", next:"q20", type: "a" },
        {text: "Run to the police", next: "dead10", type: "c"}
    ],
},
q20: {
    image:"mrbear.png",
    text: "Your wounds get treated instantly, you manage to survive. The police arrive and you explain your situation, they seached Mr. Bear's house and found his missing brother. Mr. Bear managed to esacpe...",
    options: [
        {text: "continue", next: "survived", type: "a"},
    ],
},
dead10: {
    image: "died.png",
    text: "While you tried to explain your situation, you fainted from blood loss, and died",
    options: [],
    isDeath: true
},
dead8: {
    image: "died.png",
    text: "You punched Mr.Bear in the face, he stabs you in the face",
    options: [],
    isDeath: true
},
dead9: {
    image: "died.png",
    text: "Mr.Bear said, your soul is a good price for his brother's soul. He cuts you up",
    options: [],
    isDeath: true
},
dead6: {
    image: "died.png",
    text: "Mr.Bear hears you, he runs up to you and snaps your neck",
    options: [],
    isDeath: true
},
dead7: {
    image: "died.png",
    text: "Mr.Bear takes  knife and stabs you, he puts you on the pentagram",
    options: [],
    isDeath: true
},
dead5: {
    image: "died.png",
    text: "Mr.Bear comes up to you covered in blood, he kills you and drags your lifeless body downstairs",
    options: [],
    isDeath: true
},
dead4: {
    image: "died.png",
    text: "You eat Mr. Bear's food, you feel dizzy and tired, you blacked out",
    options:[],
    isDeath: true
},
  dead3: {
    image: "died.png",
    text: "Mr. Bear takes two spoons and gouged your eyes out",
    options:[],
    isDeath: true
  },
  dead: {
    image: "died.png",
    text: "Mr. Bear smiled at you while you were eating, You blacked out shortly",
    options: [],
    isDeath: true
  },
dead1: {
  image: "died.png",
  text: "Mr. Didn't like your attitude. He choked you to death",
  options: [],
  itDeath: true},
  dead2: {
    image: "died.png",
    text: "You wake up and see that Mr. Bear has been watching you sleep, he suffocates you until you die.",
    options: [],
    isDeath: true
  },

  survived: {
    image: "survived.png",
    text: "Well-done :3", next: "bye",
    options: []
  }
};

function showScene(key) {
  const node = story[key];
  if (!node) return;

  bgImage.src = node.image;
  textBox.innerText = node.text;

  // Death or end screen
  if (node.isDeath || key === "survived") {
    optionsBox.innerHTML = "";
    if (node.isDeath) {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerText = "Restart";
      btn.onclick = () => location.reload();
      optionsBox.appendChild(btn);
    }
    renderHearts();
    return;
  }

  optionsBox.innerHTML = "";
  node.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = option.text;
    btn.onclick = () => {
      if (option.difficulty) setDifficulty(option.difficulty);
      else handleAnswer(option);
    };
    optionsBox.appendChild(btn);
  });

  renderHearts();
}

function handleAnswer(option) {
  if (option.type === "b") {
    hearts--;
    if (hearts <= 0) {
      showScene("dead1");
      return;
    }
  } else if (option.type === "c") {
    showScene(option.next);
    return;
  }

  showScene(option.next);
}

function renderHearts() {
  heartsBox.innerHTML = "";
  for (let i = 0; i < maxHearts; i++) {
    const img = document.createElement("img");
    img.src = i < hearts ? "heart.png" : "heart2.png";
    heartsBox.appendChild(img);
  }
}

// Start the game
showScene("startscreen");
