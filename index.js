const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
console.log('    Y');
console.log('   E');
console.log('  E');
console.log(' T');


});


// knock knock fbi..

var jokes = [
    { name: 'FBI', answer: 'We are asking the questions here!' },

]

//choosing a random joke from the array

var knock = function() {
    var joke = jokes[Math.floor(Math.random() * jokes.length)]
    return formatJoke(joke)
}


function formatJoke(joke) {
    return [
        'Knock, knock.',
        'Who’s there?',
        joke.name + '.',
        'FB...',
        ' ' + joke.answer
    ].join('\n')
}
    

    client.on('message', (message) => {
        if (message.content.includes('.Knock')) {
            const msg = message.content.split(' ');


                message.reply(knock());
           
        }
    });    
    client.on('message', (message) => {
        if (message.content.includes('.knock')) {
            const msg = message.content.split(' ');


                message.channel.sendMessage(knock());
           
        }
    });    
//OPEN UP!

var doors = [
    { name: ' :gun: FBI, OPEN UP!' },
    { name: 'https://i.imgur.com/8uZgKCe.jpg'},
    { name: 'Look outside your window.'},
    { name: 'S I R'},
]

//choosing a random joke from the array


var open = function() {
    var door = doors[Math.floor(Math.random() * doors.length)]
    return formatDoor(door)
}

//Formatting the output to return in a new line and plug in the output variables

function formatDoor(door) {
    return [
        door.name
    ].join('\n')
}
    
 

    client.on('message', (message) => {
        if (message.content.includes('toddlercon'))  {
            const msg = message.content.split(' ');


                message.reply(open());
           
        }

    }); 

    client.on('message', (message) => {
        if (message.content.includes('872630092638'))  {
            const msg = message.content.split(' ');


                message.reply(open());
           
        }

    }); 

    client.on('message', (message) => {
        if (message.content.includes('loli'))  {
            const msg = message.content.split(' ');


                message.reply(open());
           
        }

    }); 
 client.on('message', (message) => {
        if (message.content.includes('LOLI'))  {
            const msg = message.content.split(' ');


                message.reply(open());
           
        }

    }); 


var gays = [
    { name: 'https://i.imgur.com/eImAtqL.png' }
   
]

//choosing a random joke from the array


var kappa = function() {
    var gay = gays[Math.floor(Math.random() * gays.length)]
    return formatGay(gay)
}

//Formatting the output to return in a new line and plug in the output variables

function formatGay(gay) {
    return [
        gay.name
    ].join('\n')
}
    

    client.on('message', (message) => {
        if (message.content.includes('pls gayp'))  {
            const msg = message.content.split(' ');


                message.reply(kappa());
           
        }

    }); 

var hellos = [
    { name: 'Hello! :-)' },
    { name: '*waves*'}
   
]

//choosing a random joke from the array


var hi = function() {
    var hello = hellos[Math.floor(Math.random() * hellos.length)]
    return formatHello(hello)
}

//Formatting the output to return in a new line and plug in the output variables

function formatHello(hello) {
    return [
        hello.name
    ].join('\n')
}
    

    client.on('message', (message) => {
        if (message.content.includes('hello FBI'))  {
            const msg = message.content.split(' ');


                message.reply(hi());
           
        }

    }); 

   client.on('message', (message) => {
        if (message.content.includes('hello fbi'))  {
            const msg = message.content.split(' ');


                message.reply(hi());
           
        }

    }); 

  //no u
var nous = [
    { name: 'no u' }
   
]


//choosing a random joke from the array


var mes = function() {
    var nou = nous[Math.floor(Math.random() * nous.length)]
    return formatNou(nou)
}

//Formatting the output to return in a new line and plug in the output variables

function formatNou(nou) {
    return [
        nou.name
    ].join('\n')
}

    client.on('message', (message) => {
        if (message.content.includes('fbi suck'))  {
            const msg = message.content.split(' ');


                message.reply(mes());
           
        }

    }); 


    client.on('message', (message) => {
        if (message.content.includes('fbi is gay'))  {
            const msg = message.content.split(' ');


                message.reply(mes());
           
        }

    }); 


// calling

var callings = [
    { name: 'https://www.fbi.gov/contact-us'  }
   
]


//choosing a random joke from the array


var flat = function() {
    var calling = callings[Math.floor(Math.random() * callings.length)]
    return formatCalling(calling)
}

//Formatting the output to return in a new line and plug in the output variables

function formatCalling(calling) {
    return [
        calling.name
    ].join('\n')
}

    client.on('message', (message) => {
        if (message.content.includes('call (202) 324-3000'))  {
            const msg = message.content.split(' ');


                message.reply(flat());
           
        }

    }); 

    client.on('message', (message) => {
        if (message.content.includes('call fbi'))  {
            const msg = message.content.split(' ');


                message.reply(flat());
           
        }

    }); 
   client.on('message', (message) => {
        if (message.content.includes('Call fbi'))  {
            const msg = message.content.split(' ');


                message.reply(flat());
           
        }

    }); 

   client.on('message', (message) => {
        if (message.content.includes('Call the fbi'))  {
            const msg = message.content.split(' ');


                message.reply(flat());
           
        }

    }); 
   client.on('message', (message) => {
        if (message.content.includes('call the fbi'))  {
            const msg = message.content.split(' ');


                message.reply(flat());
           
        }

    }); 
   client.on('message', (message) => {
        if (message.content.includes('Call the fbi'))  {
            const msg = message.content.split(' ');


                message.reply(flat());
           
        }

    }); 
   client.on('message', (message) => {
        if (message.content.includes('call the FBI'))  {
            const msg = message.content.split(' ');


                message.reply(flat());
           
        }

    }); 
   client.on('message', (message) => {
        if (message.content.includes('call FBI'))  {
            const msg = message.content.split(' ');


                message.reply(flat());
           
        }

    }); 
   client.on('message', (message) => {
        if (message.content.includes('Call FBI'))  {
            const msg = message.content.split(' ');


                message.reply(flat());
           
        }

    }); 

// hang up

var hangs = [
    { name: 'no'  }
   
]


//choosing a random joke from the array


var stop = function() {
    var hang = hangs[Math.floor(Math.random() * hangs.length)]
    return formatHang(hang)
}

//Formatting the output to return in a new line and plug in the output variables

function formatHang(hang) {
    return [
        hang.name
    ].join('\n')
}

    client.on('message', (message) => {
        if (message.content.includes('please help'))  {
            const msg = message.content.split(' ');


                message.reply(stop());
           
        }

    }); 

// me too thanks


var thanks = [
    { name: 'the younger the better!   I mean me too thanks'  }
   
]


//choosing a random joke from the array


var me = function() {
    var thank = thanks[Math.floor(Math.random() * thanks.length)]
    return formatThank(thank)
}

//Formatting the output to return in a new line and plug in the output variables

function formatThank(thank) {
    return [
        thank.name
    ].join('\n')
}

    client.on('message', (message) => {
        if (message.content.includes('i like them young'))  {
            const msg = message.content.split(' ');


                message.reply(me());
           
        }

    }); 

//triggers
var triggers = [
    { name: 'https://imgur.com/e4zFQRO'  }
   
]


//choosing a random joke from the array


var com = function() {
    var trigger = triggers[Math.floor(Math.random() * triggers.length)]
    return formatTrigger(trigger)
}

//Formatting the output to return in a new line and plug in the output variables

function formatTrigger(trigger) {
    return [
        trigger.name
    ].join('\n')
}

    client.on('message', (message) => {
        if (message.content.includes('//fbi'))  {
            const msg = message.content.split(' ');


                message.reply(com());
           
        }

    }); 

//other fbi jokes


//var fbis = [
  //  { name: 'https://i.imgur.com/eImAtqL.png' }
   
//]




//var funny = function() {
  //  var fbi = fbis[Math.floor(Math.random() * fbis.length)]
  //  return formatFbi(fbi)
//}



//function formatFbi(fbi) {
//    return [
 //       fbi.name
 //   ].join('\n')
//}
    

  //  client.on('message', (message) => {
   //     if (message.content.includes('fbi joke'))  {
   //         const msg = message.content.split(' ');


    //            message.reply(funny());
           
   //     }

  //  }); 

const token = process.env.TOKEN;
client.login('NDcwMDM3MTI4NzcyODQ1NTY4.DjQwQw.bYQBKQybkVKEKoB6-Vquu_9JzV8');   

