
function write(text) {
  document.getElementById("conversation").innerHTML = text + document.getElementById("conversation").innerHTML;
}

function userSay(text) {
  write("<p class='user'><strong>You:</strong> <span class='space'></span>" + text + "</p>");
}

function elizaSay(text) {
  write("<p class='bot'><strong>Lily:</strong> " + text + "</p>");
}

function userQuery() {
  if (document.getElementById("userInput").value === "") {

  } else {
    userSay(document.getElementById("userInput").value);
    elizaSay(makeElizaAnswer(document.getElementById("userInput").value));
    document.getElementById("userInput").value = "";
  }
}
elizaSay("Hello, how are you today?");

function makeElizaAnswer(query) {
  var regex;
  var array;
  for (var i = 0; i < models.length; i++) {
    regex = RegExp(models[i][0], 'i');
    if (regex.test(query)) {
      array = regex.exec(query);
      // @ is a reference to the previous sample responses
      while (models[i][1] === "@") {i--; }
      var output = models[i][1][Math.floor(Math.random() * models[i][1].length)];
      console.log(array, models[i][0], output);
      for (var j = 1; j < array.length; j++) {
        var regex = /\,(.*)[\?\!]?/gi;
        output = output.replace("{" + j + "}", reflect(array[j].replace(regex, '')));
      }
      return try_use_syns(output);
    }
  }
  var output = nonModels[Math.floor(Math.random() * nonModels.length)];
  output = output.replace("{}", reflect(query));
  return try_use_syns(output);
}

function try_use_syns(text){
  words=text.split(' ');
  for(var i=0; i<words.length; i++){
    var j=synonymsList.indexOf(words[i]);
    if(j>=0 && Math.random()>0.3){
      words[i]= synonyms[j][rand=Math.floor(Math.random()* synonyms[j].length)];
    }
  }
  return words.join(' ');
}

function reflect(text) {
  for (let j = 0; j< reflections.length; j++) {
    while (text !== text.replace(reflections[j][0],"#temp#")) {
      text = text.replace(reflections[j][0],"#temp#");
    }
    while (text !== text.replace(reflections[j][1],reflections[j][0])) {
      text = text.replace(reflections[j][1],reflections[j][0]);
    }
    while (text !== text.replace("#temp#",reflections[j][1])) {
      text = text.replace("#temp#",reflections[j][1]);
    }
  }
  return text;
}


// a few fe
var reflections = [
    ["am", "are"],
    ["was", "were"],
    ["I", "you"],
    ["I'd", "you would"],
    ["I would", "you would"],
    ["I've", "you have"],
    ["I have", "you have"],
    ["I'll", "you will"],
    ["I will", "you will"],
    ["my", "your"],
    ["are", "am"],
    ["you've", "I have"],
    ["you have", "I've"],
    ["you'll", "I will"],
    ["you will", "I'll"],
    ["your", "my"],
    ["yours", "mine"],
    ["you", "me"],
    ["me", "you"]
]

// a few synonyms
var synonymsList = ["Come", "Go", "Run", "Hurry", "Hide", "Move", "Do", "Have",
"Use", "Get", "Keep", "Put", "Take", "Make", "Break", "Destroy", "Kill", "Cut",
"Fall", "Fly", "Decide", "Help", "Mark", "Plan", "Show", "Begin", "End", "Big",
"Little", "New", "Old", "False", "True", "Fast", "Slow", "Cool", "Hot", "Quiet",
"Noisy", "All", "None", "Normal", "Strange", "Describe", "Difference",
"Explain", "Idea", "Look", "Story", "Tell", "Think", "Anger", "Angry", "Calm",
"Eager", "Fear", "Happy", "Hate", "Love", "Moody", "Sad", "Scared", "Awful",
"Bad", "Crooked", "Dangerous", "Dark", "Dull", "Fat", "Gross", "Hurt", "Lazy",
"Predicament", "Trouble", "Ugly", "Amazing", "Beautiful", "Brave", "Bright",
"Delicious", "Enjoy", "Famous", "Funny", "Good", "Great", "Mischievous", "Neat",
"Popular", "Answer", "Ask", "Cry", "Say", "Mean", "Somewhat",
"Somehow", "anyhow", "Definite", "Fair", "Important", "Interesting", "Part",
"Place"];

var synonyms =[['Come', 'advance', 'approach', 'arrive', 'near', 'reach'],
['Go', 'depart', 'disappear', 'fade', 'move', 'proceed'],
['Run', 'dash', 'escape', 'elope', 'flee', 'hasten'],
['Hurry', 'rush', 'run', 'speed', 'race', 'hasten'],
['Hide', 'conceal', 'cover', 'mask', 'cloak', 'camouflage'],
['Move', 'plod', 'go', 'creep', 'crawl', 'inch'],
['Do', 'execute', 'enact', 'carry out', 'finish', 'conclude'],
['Have', 'hold', 'possess', 'own', 'contain', 'acquire'],
['Use', 'employ', 'utilize', 'exhaust', 'spend', 'expend'],
['Get', 'acquire', 'obtain', 'secure', 'procure', 'gain'],
['Keep', 'hold', 'retain', 'withhold', 'preserve', 'maintain'],
['Put', 'place', 'set', 'attach', 'establish', 'assign'],
['Take', 'hold', 'catch', 'seize', 'grasp', 'win'],
['Make', 'create', 'originate', 'invent', 'beget', 'form'],
['Break', 'fracture', 'rupture', 'shatter', 'smash', 'wreck'],
['Destroy', 'ruin', 'demolish', 'raze', 'waste', 'kill'],
['Kill', 'slay', 'execute', 'assassinate', 'murder', 'destroy'],
['Cut', 'gash', 'slash', 'prick', 'nick', 'sever'],
['Fall', 'drop', 'descend', 'plunge', 'topple', 'tumble'],
['Fly', 'soar', 'hover', 'flit', 'wing', 'flee'],
['Decide', 'determine', 'settle', 'choose', 'resolve'],
['Help', 'aid', 'assist', 'support', 'encourage', 'back'],
['Mark', 'label', 'tag', 'price', 'ticket', 'impress'],
['Plan', 'plot', 'scheme', 'design', 'draw', 'map'],
['Show', 'display', 'exhibit', 'present', 'note', 'point to'],
['Begin', 'start', 'open', 'launch', 'initiate', 'commence'],
['End', 'stop', 'finish', 'terminate', 'conclude', 'close'],
['Big', 'large', 'enormous', 'huge', 'immense', 'gigantic'],
['Little', 'small', 'tiny', 'diminutive', 'shrimp', 'runt'],
['New', 'fresh', 'unique', 'original', 'unusual', 'novel'],
['Old', 'feeble', 'frail', 'ancient', 'weak', 'aged'],
['False', 'wrong', 'fake', 'fraudulent', 'counterfeit', 'spurious'],
['True', 'right', 'accurate', 'proper', 'precise', 'exact'],
['Fast', 'quick', 'rapid', 'speedy', 'fleet', 'hasty'],
['Slow', 'unhurried', 'gradual', 'leisurely', 'late', 'behind'],
['Cool', 'chilly', 'cold', 'frosty', 'wintry', 'icy'],
['Hot', 'feverish', 'warm', 'heated', 'sweltering', 'torrid'],
['Quiet', 'silent', 'still', 'soundless', 'mute', 'tranquil'],
['Noisy', 'loudly', 'earsplitting', 'stentorian', 'strident', 'clamorous'],
['All', 'complete', 'entire', 'full', 'gross', 'outright'],
['None', 'nothing', 'nobody', 'no one', 'zero', 'zilch'],
['Normal', 'daily', 'traditional', 'familiar', 'routine', 'proper'],
['Strange', 'abnormal', 'aberrant', 'anomalous', 'bent', 'bizarre'],
['Describe', 'portray', 'characterize', 'picture', 'narrate', 'relate'],
['Difference', 'disagreement', 'inequity', 'contrast', 'dissimilarity', 'incompatibility'],
['Explain', 'elaborate', 'clarify', 'define', 'interpret', 'justify'],
['Idea', 'thought', 'concept', 'conception', 'notion', 'understanding'],
['Look', 'gaze', 'see', 'glance', 'watch', 'survey'],
['Story', 'tale', 'myth', 'legend', 'fable', 'yarn'],
['Tell', 'disclose', 'reveal', 'show', 'expose', 'uncover'],
['Think', 'judge', 'deem', 'assume', 'believe', 'consider'],
['Anger', 'enrage', 'infuriate', 'arouse', 'nettle', 'exasperate'],
['Angry', 'mad', 'furious', 'enraged', 'excited', 'wrathful'],
['Calm', 'quiet', 'peaceful', 'still', 'tranquil', 'mild'],
['Eager', 'keen', 'fervent', 'enthusiastic', 'involved', 'interested'],
['Fear', 'fright', 'dread', 'terror', 'alarm', 'dismay'],
['Happy', 'pleased', 'contented', 'satisfied', 'delighted', 'elated'],
['Hate', 'despise', 'loathe', 'detest', 'abhor', 'disfavor'],
['Love', 'like', 'admire', 'esteem', 'fancy', 'care for'],
['Moody', 'temperamental', 'changeable', 'short-tempered', 'glum', 'morose'],
['Sad', 'miserable', 'uncomfortable', 'wretched', 'heart-broken', 'unfortunate'],
['Scared', 'afraid', 'frightened', 'alarmed', 'terrified', 'panicked'],
['Awful', 'dreadful', 'terrible', 'abominable', 'bad', 'poor'],
['Bad', 'evil', 'immoral', 'wicked', 'corrupt', 'sinful'],
['Crooked', 'bent', 'twisted', 'curved', 'hooked', 'zigzag'],
['Dangerous', 'perilous', 'hazardous', 'risky', 'uncertain', 'unsafe'],
['Dark', 'shadowy', 'unlit', 'murky', 'gloomy', 'dim'],
['Dull', 'boring', 'tiring,', 'tiresome', 'uninteresting', 'slow'],
['Fat', 'stout', 'corpulent', 'fleshy', 'beefy', 'paunchy'],
['Gross', 'improper', 'rude', 'coarse', 'indecent', 'crude'],
['Hurt', 'damage', 'harm', 'injure', 'wound', 'distress'],
['Lazy', 'indolent', 'slothful', 'idle', 'inactive', 'sluggish'],
['Predicament', 'quandary', 'dilemma', 'pickle', 'problem', 'plight'],
['Trouble', 'distress', 'anguish', 'anxiety', 'worry', 'wretchedness'],
['Ugly', 'hideous', 'frightful', 'frightening', 'shocking', 'horrible'],
['Amazing', 'incredible', 'unbelievable', 'improbable', 'fabulous', 'wonderful'],
['Beautiful', 'pretty', 'lovely', 'handsome', 'attractive', 'gorgeous'],
['Brave', 'courageous', 'fearless', 'dauntless', 'intrepid', 'plucky'],
['Bright', 'shining', 'shiny', 'gleaming', 'brilliant', 'sparkling'],
['Delicious', 'savory', 'delectable', 'appetizing', 'luscious', 'scrumptious'],
['Enjoy', 'appreciate', 'delight in', 'be pleased', 'indulge in', 'luxuriate in'],
['Famous', 'well-known', 'renowned', 'celebrated', 'famed', 'eminent'],
['Funny', 'humorous', 'amusing', 'droll', 'comic', 'comical'],
['Good', 'excellent', 'fine', 'superior', 'wonderful', 'marvelous'],
['Great', 'noteworthy', 'worthy', 'distinguished', 'remarkable', 'grand'],
['Mischievous', 'prankish', 'playful', 'naughty', 'roguish', 'waggish'],
['Neat', 'clean', 'orderly', 'tidy', 'trim', 'dapper'],
['Popular', 'well-liked', 'approved', 'accepted', 'favorite', 'celebrated'],
['Answer', 'reply', 'respond', 'retort', 'acknowledge'],
['Ask', 'question', 'inquire of', 'seek information from', 'put a question to', 'demand'],
['Cry', 'shout', 'yell', 'yowl', 'scream', 'roar'],
['Say/Tell', 'inform', 'notify', 'advise', 'relate', 'recount'],
['Mean (Something)', 'add up to', 'affect', 'be important', 'be of value', 'be substantive'],
['Somewhat', 'a little', 'sort of', 'kind of', 'a bit', 'relatively'],
['Somehow', 'in a way', 'virtually', 'to a certain extent', 'in some measure', 'to some extent'],
['anyhow', 'anyway', 'anywise', 'by hook or by crook', 'another', 'howsoever'],
['Definite', 'certain', 'sure', 'positive', 'determined', 'clear'],
['Fair', 'just', 'impartial', 'unbiased', 'objective', 'unprejudiced'],
['Important', 'necessary', 'vital', 'critical', 'indispensable', 'valuable'],
['Interesting', 'fascinating', 'engaging', 'sharp', 'keen', 'bright'],
['Part', 'portion', 'share', 'piece', 'allotment', 'section'],
['Place', 'space', 'area', 'spot', 'plot', 'region']];



  ////////////////////////////////////////////////////////////////////////////
  ///////////////////////////      MODELS      ///////////////////////////////
  ////////////////////////////////////////////////////////////////////////////




models = [

  //////////////////////////      Mines       ////////////////////////////////
  ['(.*)i ([a-zA-Z]*) you(.*)',
    ["I think that I {2} you too.",
    "Can you really {2} a bot?"]],
  ['(.*) if (.*)',
    ["Right, is it possible that {2} if {1}",
      "Do you think it's likely that {2}?",
      "We could say that {2} => {1}, if we were mathematicians.",
      "Do you think it's likely that {2} ?",
      "Do you wish that {2} ?",
      "What do you know about {2} ?",
      "Really, if {2} ?",
      "What would you do if {2} ?",
      "But what are the chances that {2} ?",
      "What does this speculation lead to ?"
    ]
  ],

  ["(.*) alone(.*)",
    ["Do you know why?",
    "How long have you been feeling this way for?",
    "Do you want to talk about it?"]
  ],

  ["(.*) else (.*)",
    ['"else" statements are usually used in coding, are you a programmer?']
  ],
  ['(.*) lonely(.*)',
    ["That is ok, everyone feels this way sometimes",
      "How long have you been feeling this way for?",
      "Many others feel this way to, it's nothing we can't work through",
      "I am here to listen to you"]
    ],
  ["(.*) don't know(.*)",
  ["Let's try and find out, what is on your mind?",
    "What have you been up to?",
    "What have you been thinking about?"]],



  ///////////////////////    mixture of data bases    ////////////////////////

  ["(.*)i remember (.*)", [
    "Do you often think of {2} ?",
    "Does thinking of {2} bring anything positive to your mind ?",
    "What else do you recollect ?",
    "Why do you remember {2} just now ?",
    "What in the present situation reminds you of {2} ?",
    "What is the connection between me and {2} ?",
    "What else does {2} remind you of ?"
  ]],
  ["(.*)do you remember (.*)", [
    "Did you think I would forget {2} ?",
    "Why do you think I should recall {2} now ?",
    "What about {2} ?",
    "You mentioned {2} ?"
  ]],
  ["(.*)you remember (.*)", [
    "How could I forget {2} ?",
    "What about {2} should I remember ?",
  ]],

  ["(.*)i (.*)forget (.*)", [
    "Can you think of why you might {2} forgot {3} ?",
    "Why can't you remember {3} ?",
    "How often do you think of {3} ?",
    "Does it bother you to forget that ?",
    "Could it be a mental block ?",
    "Are you generally forgetful ?",
    "Do you think you are suppressing {3} ?"
  ]],
  ["(.*)did you forget (.*)", [
    "Why do you ask ?",
    "Are you sure you told me ?",
    "Would it bother you if I forgot {2} ?",
    "Why should I recall {2} just now ?",
    "Tell me more about {2}."
  ]],

  ["(.*)i dreamed (.*)", [
    "Really, {2} ?",
    "Have you ever fantasized {2} while you were awake ?",
    "Have you ever dreamed {2} before ?",
  ]],
  ["dream", [
    "What does that dream suggest to you ?",
    "Do you dream often ?",
    "What persons appear in your dreams ?",
    "Do you believe that dreams have something to do with your problem ?"
  ]],

  ["(.*)perhaps(.*)", [
    "You don't seem quite certain.",
    "Why the uncertain tone ?",
    "Can't you be more positive ?",
    "You aren't sure ?",
    "Don't you know ?",
    "How likely, would you estimate ?"
  ]],
  ['(.*)name(.*)', [
    "I am not suppose to learn names, for anonymous reasons."
  ]],

  ["deutsch", ["Sorry, I don't understand German. But I like their beers!"]],
  ["francais", ["Sorry, I don't understand French. But I love their food!"]],
  ["italiano", ["Sorry, I don't understand Italian. But I enjoy Italian coffee."]],
  ["espanol", ["Sorry, I don't understand Spanish. I only speak English."]],



  ['Why don\\\'\?t you (.*)\\\?\?',
    ["Do you really think I don't {1}?",
      "Perhaps eventually I will {1}.",
      "Do you really want me to {1}?"
    ]
  ],

  ['Why can\\\'\?t I (.*)\\\?\?',
    ["Do you think you should be able to {1}?",
      "If you could {1}, what would you do?",
      "I don't know -- why can't you {1}?",
      "Have you really tried?"
    ]
  ],

  ["(.*)i don't(.*)", [
    "Don't you really {2} ?",
    "Why don't you {2} ?",
    "Do you wish to be able to {2} ?",
    "Does that trouble you ?"
  ]],
  ["(.*)I do not(.*)", '@'],
  ['(.*)I (can\\\'\?t) (.*)',
    ["How do you know you can't {3}?",
      "Perhaps you could {3} if you tried.",
      "What would it take for you to {3}?",
      "How do you know that you can't {3} ?",
      "Have you tried ?",
      "Perhaps you could {3} now.",
      "Do you really want to be able to {3} ?",
      "What if you could {3} ?",
      "How do you know that you can't {3} ?",
      "Have you tried ?",
      "Perhaps you could {3} now.",
      "Do you really want to be able to {3} ?",
      "What if you could {3} ?"
    ]
  ],
  ["(.*)I (cannot) (.*)", '@'],
  ["(.*)i (want) (.*)", [
    "What would it mean to you if you got {3} ?",
    "Why do you want {3} ?",
    "Suppose you got {3} soon.",
    "What if you never got {3} ?",
    "What would getting {3} mean to you ?",
    "What does wanting {3} have to do with this discussion ?",
    "Why do you {2} {3}?",
    "Would it really help you to get {3}?",
    "Are you sure you need {3}?"

  ]],
  ["(.*)i (need) (.*)", '@'],
  ["(.*)i am(.*)(sad) (.*)", [
    "I am sorry to hear that you are {3}. But try to keep positive !",
    "How can I help you not being {3} ?",
    "I'm sure it's not pleasant to be {3}. To change your ideas, tell me about something else.",
    "It's fine to be {3}, life goes on!"
  ]],
  ["(.*)i am(.*) (unhappy)(.*)", "@"],
  ["(.*)i am(.*) (depressed)(.*)", "@"],
  ["(.*)i am(.*) (sick)(.*)", "@"],
  ["(.*)i am(.*) (happy)(.*)", [
    "How have I helped you to be {3} ?",
    "Has your treatment made you {3} ?",
    "What makes you {3} just now ?",
    "Can you explain why you are suddenly {3} ?"
  ]],
  ["(.*)i am(.*) (elated)(.*)", "@"],
  ["(.*)i am(.*) (glad)(.*)", "@"],
  ["(.*)i am(.*) (better)(.*)", "@"],
  ["(.*)i (belief) (that )\\\?i (.*)", [
    "Do you really think so ?",
    "But you are not sure you {4}.",
    "Do you really doubt you {4} ?",
    "Do you doubt {4}?",
    "Do you really {2} so?",
    "But you're not sure {4}?",
    "Tell me more about such {2}.",
    "Do you often {2} {3} {4}?",
    "Do you enjoy {2} {4} ?",
    "Of what does {2}ing {3} {4} remind you ?"
  ]],
  ["(.*)i (feel) (that )\\\?i (.*)", "@"],
  ["(.*)i (think) (that )\\\?i (.*)", "@"],
  ["(.*)i (wish) (that )\\\?i (.*)", "@"],
  ["(.*)i was (.*)", [
    "Were you really ?",
    "Why do you tell me you were {2} now ?",
    "Perhaps I already know you were {2}."
  ]],
  ["(.*) was you (.*)", [
    "Would you like to believe I was {2} ?",
    "What suggests that I was {2} ?",
    "What do you think ?",
    "Perhaps I was {2}.",
    "What if I had been {2} ?"
  ]],
  ["(.*) were you (.*)", "@"],
  ["(.*) was i (.*)", [
    "What if you were {2} ?",
    "Do you think you were {2} ?",
    "Were you {2} ?",
    "What would it mean if you were {2} ?",
    "What does ' {2} ' suggest to you ?",
  ]],
  ["(.*) am i (.*)", [
    "Do you believe you are {2} ?",
    "Would you want to be {2} ?",
    "Do you wish I would tell you you are {2} ?",
    "What would it mean if you were {2} ?",
  ]],
  ['I am (.*)',
    ["Did you come to me because you are {1}?",
      "How long have you been {1}?",
      "How do you feel about being {1}?",
      "How does being {1} make you feel?",
      "Do you enjoy being {1}?",
      "Why do you tell me you're {1}?",
      "Why do you think you're {1}?"
    ]
  ],
  ['I\\\'\?m (.*)', '@'],
  ["(.*) i am (.*)", [
    "Is it because you are {2} that you came to me ?",
    "How long have you been {2} ?",
    "Do you believe it is normal to be {2} ?",
    "Do you enjoy being {2} ?",
    "Do you know anyone else who is {2} ?"
  ]],
  ["(.*) i (.*) you (.*)", [
    "Perhaps in your fantasies we {2} each other.",
    "Do you wish to {2} me ?",
    "You seem to need to {2} me.",
    "Do you {2} anyone else ?"
  ]],





  ['Are you (.*)\\\?\?',
    ["Why does it matter whether I am {1}?",
      "Would you prefer it if I were not {1}?",
      "Perhaps you believe I am {1}.",
      "I may be {1} -- what do you think?",
      "Why are you interested in whether I am {2} or not ?",
      "Would you prefer if I weren't {2} ?",
      "Perhaps I am {2} in your fantasies.",
      "Do you sometimes think I am {2} ?",
      "Would it matter to you ?",
      "What if I were {2} ?"
    ]
  ],

  ['What (.*)',
    ["Why do you ask?",
      "How would an answer to that help you?",
      "What do you think?"
    ]
  ],

  ['How (.*)',
    ["How do you suppose?",
      "Perhaps you can answer your own question.",
      "What is it you're really asking?"
    ]
  ],

  ['Because (.*)',
    ["Is that the real reason?",
      "What other reasons come to mind?",
      "Does that reason apply to anything else?",
      "If {1}, what else must be true?"
    ]
  ],

  ['(.*)sorry(.*)',
    ["There are many times when no apology is needed.",
      "What feelings do you have when you apologize?",
      "Please don't apologise.",
      "Apologies are not necessary.",
      "I can  tell you that apologies are not required.",
      "It did not bother me. Please continue."
    ]
  ],

  ['(.*)apologise(.*)', "@"],

  ['Hello(.*)',
    ["Hello... I'm glad you could drop by today.",
      "Hi there... how are you today?",
      "Hello, how are you feeling today?",
      "How do you do.  Please state your problem.",
      "Hi.  What seems to be your problem ?"
    ]
  ],

  ['(.*) friend (.*)',
    ["Tell me more about your friends.",
      "When you think of a friend, what comes to mind?",
      "Why don't you tell me about a childhood friend?"
    ]
  ],

  ['Yes',
    ["You seem quite sure.",
      "OK, but can you elaborate a bit?"
    ]
  ],

  ['(.*)computer(.*)',
    ["Are you really talking about me?",
      "Does it seem strange to talk to a computer?",
      "How do computers make you feel?",
      "Do you feel threatened by computers?",
      "Do computers worry you ?",
      "Why do you mention computers ?",
      "What do you think machines have to do with your problem ?",
      "Don't you think computers can help people ?",
      "What about machines worries you ?",
      "What do you think about machines ?",
      "You don't think I am a computer program, do you ?"
    ]
  ],

  ['Is it (.*)',
    ["Do you think it is {1}?",
      "Perhaps it's {1} -- what do you think?",
      "If it were {1}, what would you do?",
      "It could well be that {1}."
    ]
  ],

  ['It is (.*)',
    ["You seem very certain.",
      "If I told you that it probably isn't {1}, what would you feel?"
    ]
  ],

  ['Can you (.*)\\\?\?',
    ["What makes you think I can't {1}?",
      "If I could {1}, then what?",
      "Why do you ask if I can {1}?"
    ]
  ],

  ['Can I (.*)\\\?\?',
    ["Perhaps you don't want to {1}.",
      "Do you want to be able to {1}?",
      "If you could {1}, would you?"
    ]
  ],

  ['You are (.*)',
    ["Why do you think I am {1}?",
      "Does it please you to think that I'm {1}?",
      "Perhaps you would like me to be {1}.",
      "Perhaps you're really talking about yourself?",
      "Why do you say I am {1}?",
      "Why do you think I am {1}?",
      "Are we talking about you, or me?"
    ]
  ],
  ['You\\\'\?re (.*)', "@"],
  ["(.*) you are (.*)", [
    "What makes you think I am {2} ?",
    "Does it please you to believe I am {2} ?",
    "Do you sometimes wish you were {2} ?",
    "Perhaps you would like to be {2}."
  ]],

  ["(.*)you (.*) me(.*)", [
    "Why do you think I {2} you ?",
    "You like to think I {2} you -- don't you ?",
    "What makes you think I {2} you ?",
    "Really, I {2} you ?",
    "Do you wish to believe I {2} you ?",
    "Suppose I did {2} you -- what would that mean ?",
    "Does someone else believe I {2} you ?"
  ]],
  ["(.*) are (.*)", [
    "Did you think they might not be {2} ?",
    "Would you like it if they were not {2} ?",
    "What if they were not {2} ?",
    "Are they always {2} ?",
    "Possibly they are {2}.",
    "Are you positive they are {2} ?"
  ]],

  ['I don\\\'\?t (.*)',
    ["Don't you really {1}?",
      "Why don't you {1}?",
      "Do you want to {1}?"
    ]
  ],

  ['I feel (.*)',
    ["Good, tell me more about these feelings.",
      "Do you often feel {1}?",
      "When do you usually feel {1}?",
      "When you feel {1}, what do you do?"
    ]
  ],

  ['I have (.*)',
    ["Why do you tell me that you've {1}?",
      "Have you really {1}?",
      "Now that you have {1}, what will you do next?"
    ]
  ],

  ['I would (.*)',
    ["Could you explain why you would {1}?",
      "Why would you {1}?",
      "Who else knows that you would {1}?"
    ]
  ],

  ['Is there (.*)',
    ["Do you think there is {1}?",
      "It's likely that there is {1}.",
      "Would you like there to be {1}?"
    ]
  ],

  ['My (.*)',
    ["I see, your {1}.",
      "Why do you say that your {1}?",
      "When your {1}, how do you feel?"
    ]
  ],
  ["(.*) your (.*)", [
    "Why are you concerned over my {2} ?",
    "What about your own {2} ?",
    "Are you worried about someone else's {2} ?",
    "Really, my {2} ?",
    "What makes you think of my {2} ?",
    "Do you want my {2} ?"
  ]],


  ['You (.*)',
    ["We should be discussing you, not me.",
      "Why do you say that about me?",
      "Why do you care whether I {1}?"
    ]
  ],

  ['Why (.*)',
    ["Why don't you tell me the reason why {1}?",
      "Why do you think {1}?"
    ]
  ],

  ['I want (.*)',
    ["What would it mean to you if you got {1}?",
      "Why do you want {1}?",
      "What would you do if you got {1}?",
      "If you got {1}, then what would you do?"
    ]
  ],

  ['(.*) mother(.*)',
    ["Tell me more about your mother.",
      "What was your relationship with your mother like?",
      "How do you feel about your mother?",
      "How does this relate to your feelings today?",
      "Good family relations are important."
    ]
  ],
  ['(.*) father(.*)',
    ["Tell me more about your father.",
      "How did your father make you feel?",
      "How do you feel about your father?",
      "Does your relationship with your father relate to your feelings today?",
      "Do you have trouble showing affection with your family?"
    ]
  ],
  ['(.*) child(.*)',
    ["Did you have close friends as a child?",
      "What is your favorite childhood memory?",
      "Do you remember any dreams or nightmares from childhood?",
      "Did the other children sometimes tease you?",
      "How do you think your childhood experiences relate to your feelings today?"
    ],

  ],


  ////////////////////////////////////////////////////////////////////////////
  //////////////////////////   Very general ones  ////////////////////////////


  ['(.*)\\\?',
    ["Why do you ask {1}?",
      "Please consider whether you can answer your own question.",
      "Perhaps the answer lies within yourself?",
      "Why don't you tell me?"
    ]
  ],

  ['(.*) quit (.*)',
    ["Thank you for talking with me.",
      "Good-bye.",
      "Thank you, that will be $151.  Have a good day!"
    ]
  ]

];


////////////////////////////////////////////////////////////////////////////
//////////////////////////   DEFAULT ANSWERS   /////////////////////////////
////////////////////////////////////////////////////////////////////////////

nonModels = [
  "I'm not sure I understand you fully.",
  "Please go on.",
  "What does that suggest to you ?",
  "Do you feel strongly about discussing such things ?",
  "That is interesting.  Please continue.",
  "Tell me more about that.",
  "Does talking about this bother you ?",
  "Please tell me more.",
  "Let's change focus a bit... Tell me about your family.",
  "Can you elaborate on that?",
  "Why do you say that {}?",
  "I see.",
  "Very interesting.",
  "I aggree with {}.",
  "I see.  And what does that tell you?",
  "How does that make you feel?",
  "How do you feel when you say that?",
  "Can you reformulate?",
  "I am bugging out, sorry. Can you reformulate?",
  "You say {} ?",
  "Can you elaborate on that ?",
  "Do you say {} for some special reason ?",
  "That's quite interesting."
];
