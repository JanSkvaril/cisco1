//led setup
#include <FastLED.h>
#define NUM_LEDS 15
#define DATA_PIN 16
#define LED_TYPE    WS2812B
CRGB leds[NUM_LEDS];


//sensors
int positionPin = 4;
int vibrationPin = 5;
int pirPin = 6;

//default values for sensors
int posDef = 0;
int vibDef = 1;
int pirDef = 0;

void setup() {
 //led setup
  FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS);

  //sensor setup
   pinMode(positionPin, INPUT_PULLUP);
   pinMode(vibrationPin, INPUT_PULLUP);
   pinMode(pirPin, INPUT_PULLUP);

   Serial.begin(9600); 
}
void warning(){
   for(int i = 0;i < NUM_LEDS;i++){
    leds[i].r = 250;
  }
  FastLED.show(); 
  delay(1000); 

   for(int i = 0;i < NUM_LEDS;i++){
    leds[i].r = 0;
  }
  FastLED.show();
    delay(200); 
}
void loop() {
 int posVal = digitalRead(positionPin);
 int vibVal = digitalRead(vibrationPin);
 int pirVal = digitalRead(pirPin);

  if (pirVal != pirDef){
    warning();
    }
  
 if(vibVal != vibDef){
   warning();
   } 

if (posVal != posDef){
  warning();
  }

delay(100);
}
