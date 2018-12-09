#include <FastLED.h>
#define NUM_LEDS 15
#define DATA_PIN 16
#define LED_TYPE    WS2812B
CRGB leds[NUM_LEDS];
void setup() {
FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS);
}
int color = 0;
int led = 0;
int s = 1;
void loop() {
  for(int i = 0;i < NUM_LEDS;i++){
  color = color + 1;
  if (color >= 254)
  {
  color = 0;  
  }
    
  leds[i].setHue(color);

  FastLED.show(); 
  delay(50);   
  }
}
