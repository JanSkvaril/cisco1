//led setup
#include <FastLED.h>
#define NUM_LEDS 15
#define DATA_PIN 16
#define LED_TYPE    WS2812B
CRGB leds[NUM_LEDS];

//sensor setup
int potePin = 0;
int fotoPin = 1;
int termiPin = 2;

//rotary setup
int outputA = 15;
int outputB = 14;
 
int counter = 0; 
int aState;
int aLastState; 
 
void setup() {
  Serial.begin(9600); 
  
  //led setup
  FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS);

  //rotary stetup
  pinMode (outputA,INPUT);
  pinMode (outputB,INPUT);
  aLastState = digitalRead(outputA);
}

//"vypíše" poslanou analogovou hodnotu na LED
void showOnLed(int value){
  int displayVal = map(value,0,1023,0,NUM_LEDS-1); //počet rozsvícených led
  int displayColor = map(value,0,1023,0,255); //barva led
  
  for(int i = 0;i < NUM_LEDS;i++){   
  leds[i].r = 0;
  leds[i].g = 0;
  leds[i].b = 0; 
  } 
  //nastaví hodnoty na led
  for(int i = 0;i < displayVal;i++){   
  leds[i].setHue(displayColor);  
  }  
  FastLED.show(); 
}

void loop() {
  //změna stavu
  aState = digitalRead(outputA);   
   if (aState != aLastState){     
     if (digitalRead(outputB) != aState) { 
       counter ++;
     } else {
       counter --;
     }
  
   } 
   aLastState = aState; 
   if (counter >= 3){
    counter = 0; 
   }
    if (counter < 0){
      counter = 2;
    }
   Serial.print("Stav: ");
     Serial.println(counter);

  //Čtení hodnot ze sensorů
  int poteVal =  analogRead(potePin);
  int fotoVal = analogRead(fotoPin);
  int termiVal = analogRead(termiPin);

  //zobrazení momentálního stavu v Arduino IDE consoli
  if (counter == 0){
      showOnLed(poteVal);
        Serial.print("potenciometr: ");
     Serial.println(poteVal);
  }
   if (counter == 1){
      showOnLed(fotoVal);
        Serial.print("fotorezistor: ");
     Serial.println(fotoVal);
  }

   if (counter == 2){
      showOnLed(termiVal);
        Serial.print("termimetr: ");
     Serial.println(termiVal);
  }
delay(1000);
}
