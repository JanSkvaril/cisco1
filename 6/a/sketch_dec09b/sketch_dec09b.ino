#include <FastLED.h>
#define NUM_LEDS 15 //počet led na pásku
#define DATA_PIN 16 //k jakému pinu je připojený
#define LED_TYPE    WS2812B // typ LED pásku
CRGB leds[NUM_LEDS]; //vytvoří poled s jednotlivými led
void setup() {
FastLED.addLeds<NEOPIXEL, DATA_PIN>(leds, NUM_LEDS); //zinicializuje knihovnu
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
    
  leds[i].setHue(color); //nastaví octín 0 - 255

  FastLED.show(); // zobrazí na LED pásku 
  delay(50);  
  }
}
