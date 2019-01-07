//Pro jiný sensor stačí změnit číslo pinu
int analogPin = 0;                          
int val = 0;          
void setup()
{
  Serial.begin(9600);              //  setup serial
}

void loop()
{
  val = analogRead(analogPin);     // čte hodnoty z určeného pinu
  Serial.println(val);             // vypíše do console v Arduino IDE
  delay(1000);
}
