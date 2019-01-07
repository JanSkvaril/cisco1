 int outputA = 15; //jeden pin rotary
 int outputB = 14; //druhý
 
 int counter = 0;  //hodnota co se zvyšuje či snižuje podle směru rotace
 int nowStatea; //momentální stav
 int lastStatea; // poslední stav
 void setup() { 
   pinMode (outputA,INPUT);
   pinMode (outputB,INPUT);
   
   Serial.begin (9600);

   lastStatea = digitalRead(outputA);   
 } 
 void loop() { 
   nowStatea = digitalRead(outputA); //přečte momentální hodnotu na pinu A
   // pokud je hodnota jiná než minulá, bylo otořeno
   if (nowStatea != lastStatea){     
     // pokud je stav jiný než stav na B točí se jedním směrem, jinak druhým 
     if (digitalRead(outputB) != nowStatea) { 
       counter ++;
     } else {
       counter --;
     }
     Serial.print("Position: ");
     Serial.println(counter);
   } 
   lastStatea = nowStatea; //aktualizuje minulý stav
 }

