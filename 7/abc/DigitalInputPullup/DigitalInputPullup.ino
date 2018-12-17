
void setup() {
  //start serial connection
  Serial.begin(9600);
  //configure pin 2 as an input and enable the internal pull-up resistor
  pinMode(6, INPUT_PULLUP);

}

void loop() {
  //read the pushbutton value into a variable
  int sensorVal = digitalRead(6);
  //print out the value of the pushbutton
  Serial.println(sensorVal);

}
