//source: https://techtutorialsx.com/2016/07/21/esp8266-post-requests/
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

#include <Wire.h> // I2C Arduino library
#include <BH1750FVI.h>

#include "SparkFunHTU21D.h"
HTTPClient http;
BH1750FVI LightSensor;
HTU21D myHumidity;
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial.println();
  
  WiFi.begin("S-NET", "sasa2sasa2");
    Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println();

  Serial.print("Connected, IP address: ");
  Serial.println(WiFi.localIP());

LightSensor.begin();
  LightSensor.setMode(Continuously_High_Resolution_Mode);

    myHumidity.begin();
 
}

void loop() {
  // put your main code here, to run repeatedly:
   float lux = LightSensor.getAmbientLight();
    float humd = myHumidity.readHumidity();
  float temp = myHumidity.readTemperature();

 http.begin("http://192.168.88.16:3000/light");
    
http.addHeader("Content-Type", "text/plain");
int httpCode = http.POST(String(lux));

 String payload = http.getString();                  //Get the response payload
 
   Serial.println(httpCode);   //Print HTTP return code
   Serial.println(payload);    //Print request response payload
 
   http.end(); 

   delay(2000);
}
