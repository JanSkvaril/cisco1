#include "SparkFunHTU21D.h"

HTU21D myHumidity;
void setup() {
  // nastavení obou LED diod jako výstupních
  Serial.begin(115200);
  myHumidity.begin();
}

void loop() {
  float humd = myHumidity.readHumidity();
  float temp = myHumidity.readTemperature();
 Serial.println(humd);
  delay(1000);
 
}
