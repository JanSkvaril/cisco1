### 3. Oled, rotační encoder a senzory tlaku a teploty
#### a) Oled b) Senzor tlaku BMP180
![Alt text](oled_bmp_wiring.png "Zapojení oled a bmp")

#### a) Oled

##### Přepnutí do režimu I2C
Protože se nám nedařilo zprovoznit display ve výchozím režimu SPI, rozhodli jsme se přepnout display do režimu I2C. Pro přepnutí do tohoto režimu jsme provedli následující úpravy dle [zdroje](https://www.rhydolabz.com/displays-c-88/096-oled-display-module-spii2c-128x64-7-pin-blue-p-2079.html?fbclid=IwAR01Fl2575Qw3-an4vIVhHeEFRPm8UsqNTAZQd_Q1_9cJOnv2dR0KdUk6Wo "zdroje"): Odpájeli jsme rezistor z pozice R3 a připájeli do pozice R1, pozici rezistoru R8 jsme propojili. 

##### Programování OLED displaye

Display jsme měli připojený přes rozhraní **I2C**, které se museli v konfiguraci Raspberry nejdříve povolit. Pomocí `i2cdetect -y 1` jsme zjistili jakou má display adresu. Opět pomocí npm jsme nainstalovali knihovnu [rpi-oled](https://www.npmjs.com/package/rpi-oled "rpi-oled"). Po vyžádání knihovny jsme vytvořili instanci třídy oled, která jako parametr brala objekt s nastavením. Nastavili jsme pouze výšku a šířku (128x64). I2C adresa se shodovala s výchozí adresou, takže tu jsme specifikovat nemuseli. Poté jsme display vyčistili metodou `clearDisplay()` a přepsali černým obdélníkem pomocí metody `fillRect()`. Pro výpis textu na obrazovku jsme museli doinstalovat oled-font-5x7, jak bylo doporučeno v dokumentaci rpi-oled. Nakonec jsme pomocí `writeString()` vypsali textoví řetězec na display.

#### b) Sensor tlaku a teploty Bmp180
Sensor jsme napojily na rozhraní i2c. Opět jsme museli zjistit adresu sensoru pomocí příkazu `i2cdetect -y 1`. Pro práci se sensorem jsme použili knihovnu [RaspiSensors](https://www.npmjs.com/package/raspi-sensors "RaspiSensors"), kterou jsme stáhli a nainstalovali opět pomocí npm. Ve scriptu jsme po vyžádání knihovny vytvořili instanci třídy `RaspiSensors.Sensor`. Konstruktor třídy požadoval typ sensoru (což je BMP180) a jeho adresu (v našem případě to byla 0x77). Zjištění hodnot jsme provedly pomocí metody `fetch()`.

#### c) Senzor teploty DALLAS 18B20
Teplotní senzor je připojen dle rozdělení pinů. Vcc (+) se dělí o 3v3 napájecí port na Rpi s rotary encoderem, kousek za napájecím portem je také zapojen rezistor 330 Ohm, který vede k portu na data a vše je to zakončeno vývodem GND, který je zapojen do jednoho z GND portů na Rpi.

Sensor byl připojený přes rozhraní **1-Wire**, které bylo nutné v konfiguraci raspberry povolit. Použili jsme knihovnu [ds18b20](https://www.npmjs.com/package/ds18b20 "ds18b20") . Použitím metody `sensors()` jsme zjistili adresu našeho sensory. Získání hodnot ze senzoru jsme pak provedli zavolání metody `tempetureSync()`, která jako parametr brala zjištěnou adresu senzoru.

#### d) a e) Sestavení aplikace
Rotary encoder jsme připojili tak jak jsou udány porty na něm samotném. Všechny piny co z něj vedou končí v Raspberry, až na napájecí port, který je vyveden z nepájivého pole a dělí se o napájení s teplotním senzorem DALLAS.
CLK a DT určují strany a SW by měl indikovat zmáčknutí.

Pro aplikaci jsme použili script z 3. a) pro vypisování dat na display. Pro vypisování dat na display jsme použili scripty z 3. b) a 3. c). Pro práci s rotační encoderem jsme použili rozšíření dříve zmíněné knihovny [onoff-rotary](https://www.npmjs.com/package/onoff-rotary "onoff-rotary"). Při vytváření objektu rotátoru jsme museli určit piny ke, ke kterým je připojen. Poté jsme vytvořili funkci, která se s parametrem *direction* (směr) zavolala pokaždé, když nastala událost *rotation*.
