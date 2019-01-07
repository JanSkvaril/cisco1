
void setup() {
  Serial.begin(9600);
  //pro jiný sensor stačí změnit číslo pinu
  pinMode(6, INPUT_PULLUP);

}

void loop() {
  int sensorVal = digitalRead(6); //čte hodnotu z pinu
  Serial.println(sensorVal); //vypíše

}
