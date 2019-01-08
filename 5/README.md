### 5. Analogové vstupy na arduinu
##### Programování
Jak je zmíněno v úloze 1 b), pro programování arduina jsme použili Arduino IDE. Každý kód obsahuje 2 základní funkce `setup()` a `loop()`. Setup se zavolá na začátku programu. Loop se poprvé volá hned jak skončí setup, a poté se volá neustále dokola vždy jak skončí.

##### Arduino
U úloh 5 a 7 jsou zmíněny jako zdroj příklady kódy, které jsou obsaženy v Arduino IDE, [zde je odkaz na jejich online verzi](https://www.arduino.cc/en/Tutorial/BuiltInExamples "zde je odkaz ne jejich online verzi").

Všechny senzory jsou připojeny na nepájivém poli (obr.1), + a – jsou zprostředkovány přes samotné přídavné USB napájení, které je v nepájivém poli a z dalších zdířek následně vede napájení samostatně do LED pásku a zbytek do řady pro napájení ostatních senzorů, napojených v řadě.
U všech senzorů jsou taky děličky napětí na + větvi.

#### a) Potenciometr 10K
Potenciometr jsme připojili na předem určených portech, + a – jsou vyvedeny z řady od přídavného napájení. Prostřední vývod je veden vodičem na řadu, kde je pin u arduina.

#### b) Fotorezistor
Senzor je připojen jednou nožičkou v řadě, kudy vede GND z přídavného napájení a vedle je vyveden rezistor, který vede k vodiči, který vede do analogového portu Arduina.

#### c) Čidlo teploty
Termistor je připojen stejně jako Fotorezistor.

#### Problém s analogovými sensory
Hlavní nevýhodou analogových sensorů je, že jejich výstup je ([dle dokumentace arduino](https://www.arduino.cc/en/tutorial/AnalogInput "dle dokumentace arduino")) v rozmezí 0 a 1023. To znamená, že například výstup z teplotního čidla je nic neříkající hodnota, která není v žádné reálné jednotce a je třeba sensor softwarově zkalibrovat pomocí jiného, přesného čidla. My hodnoty v našich úlohách na reálné jednotky nepřevádíme, jen je pomocí funkce `map()` (která bere argumenty: hodnota, minimální rozsah hodnoty, maximální, nový minimální rozsah, nový max rozsah) převedeme na potřebný rozsah (třeba 0 až 255 - rozsah barvy).

#### a), b) a c) Čtení hodnot z analogových sensorů
Čtení hodnot z analogových vstupů bylo poměrně jednoduché. V Arduino IDE byli předchystané příklady (viz. úvod úlohy 5) jak s analogovými vstupy pracovat, z čehož jsme čerpali. Stačilo pouze použít funkci `analogRead()`, která jako argument bere číslo pinu. Vzhledem k tomu, že kód je pro všechny čidla stejný prakticky stejný (jedinou změnou je číslo pinu), jsme úlohu celou úlohu 5 shrnuli do jednoho souboru.
