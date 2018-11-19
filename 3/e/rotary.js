   const rotaryEncoder = require('onoff-rotary');
    const myEncoder = rotaryEncoder(10, 9); // Using BCM 5 & BCM 6 on the PI
 console.log("zatoc s tim");
    myEncoder.on('rotation', direction => {
        if (direction > 0) {
            console.log('Encoder rotated right');
        } else {
            console.log('Encoder rotated left');
        }
    });
