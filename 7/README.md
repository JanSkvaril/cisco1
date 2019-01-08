### 7. Zabezpečení centrály
#### Digitální sensory
Digitální sensory jsou oproti těm analogovým ještě o něco stručnější. Jejich hodnoty jsou buď 0 nebo 1, ale jsou to většinou sensory, kde to nevadí (např. detektor pohybu) a u některých se dá i hardwarově nastavit citlivost.   

#### a) b) Otřesové & polohové čidlo
Čidla jsou zapojeny naprosto stejně, jako všechny ostatní a jejich výstupy připojeny do řady kam směřují nožičky Arduina v nepájivém poli. Je zde také použit dělič napětí.

#### c) PIR čidlo
Senzor pohybu má již předem zadané piny, tudíž se opět opakovalo zapojení VCC A GND a zbývající pin byl připojen k vývodu pinu Arduina.

#### a), b) a c) Čtení dat z digitálních sensorů
Opět jsme použili kód z příkladů na čtení digitálního vstupu obsažených v Arduino IDE (viz. úvod úlohy 5). Jedná se o velmi jednoduchou záležitost, pomocí metody `digitalRead()` (která bere číslo pinu, z kterého chceme číst) přečteme hodnotu na zvoleném pinu.

#### d) Bezpečnostní centrála
Pro tuto úlohy jsme zkombinovali úlohy 6 a) (kontrola LED pásku) a 7 a), b) a c) (pro čtení hodnot ze sensorů). Nejdříve přečteme hodnoty ze všech čidel a potom je porovnáme s jejich výchozími hodnotami. Pokud se liší, zavolá se funkce `warning()`, která zabliká s LED páskem.  
