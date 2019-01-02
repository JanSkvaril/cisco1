 
### Programování

## 1. Příprava
###  a) Volba jazyka 
Volili jsme ze dvou jazyků – Python a javascript. Python se z počátku zdál jako lepší varianta, protože velikost komunity v oboru IoT je jednoznačně větší než u js. To je výhoda jednak v množství dostupných knihoven a kvalitě jejich dokumentace, a jednak v četnosti návodů jak s určitými součástkamy pracovat. Avšak problém byl, že python znal pouze jeden člen našeho týmu a mohli tak vzniknout problémy v případě jeho absence. Javascript jsme na druhou stranu více méně znali všichni a měli jsme tak možnost kód všichni poupravit, vyžádala-li by si to situace. Pro práci s js jsme použili Node.js a na správu jeho balíčků npm. Pro verzování a klaudové uskladnění jsme používali git s repozitářem na stránce github.com (https://github.com/JanSkvaril/cisco1).
### b) Arduino IDE
Pro programování arduina jsme použili doporučené Arduino IDE (https://www.arduino.cc/en/main/software). Po instalaci na pc jsme museli změnit v menu Nástroje vývojovou desku na Arduino/Genuino Micro.

## 2. Testování GPIO
### a) Zapnutí, vypnutí LED
Pro zapnutí a vypnutí LED jsme použili knihovnu onoff (https://www.npmjs.com/package/onoff). Do našeho projektu jsme ji přidali pomocí npm příkazem npm install onoff. Poté už jen stačilo vytvořit jednoduchý script. Nejdříve jsme si pomocí require vyžádali knihovnu a vytvořili novou instanci třídy GPIO s dvěma parametry – číslo pinu, na kterém je led připojena, a specifikovali, že se jedná o výstup. Nakonec jsme jen zavolali metodu objektu `writeSync()` s parametrem 1 – tím jsme led zapli.

### b) a c) Řízení LED pomocí PWM
Pro ovládání led pomocí PWM jsme použili knihovnu pigpio (https://www.npmjs.com/package/pigpio). Ve skutečnosti se jedná o wrapper na knihovnu pigpio v jazyce c https://github.com/joan2937/pigpio. Následný postup byl téměř totožný, s tím rozdílem, že jsme místo pouze binární hodnoty mohli nastavit hodnout od 0 do 255, která určovala sílu svitu LED.	
### d) **z nějakýho důvodu nemáme** !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	
## 3. Oled, rotační encoder a senzory tlaku a teploty
### a) Oled
Display jsme měli připojený přeš rozhraní I2C, které se museli v configuraci raspberry nejdříve povolit. Pomocí i2cdetect -y 1 jsme zjistili jakou má display adresu. Opět pomocí npm jsme nainstalovali knihovnu rpi-oled (https://www.npmjs.com/package/rpi-oled). Po vyžádání knihovny jsme vyzvořili instanci třídy oled, která jako parametr brala objekt s nastavením. Nastavili jsme použe výšku a šířku (128x64). I2C adresa se shodnovala s výchozí adresou, takže tu jsme specifikovat nemuseli. Poté jsme display vyčistili metodou clearDisplay() a přepsali černým obdelníkem pomocí metody fillRect(). Pro výpis textu na obrazovku jsme museli doinstallovat oled-font-5x7, jak bylo doporučeno v dokumentaci rpi-oled. Nakonec jsme pomocí writeString() vypsali textoví řetězec na display.
### b) Sensor tlaku a teploty Bmp180
Sensor jsme byl napojený na rozhraní i2c. Opět jsme museli zjistit adresu sensoru pomocí příkazu `i2cdetect -y 1`. Pro práci se sensorem jsme použili knihovnu RaspiSensors (https://www.npmjs.com/package/raspi-sensors), kterou jsme stáhli a nainstalovali opět pomocí npm. Ve scriptu jsme po vyžádání knihovny vytvořili instanci třídy `RaspiSensors.Sensor`. Konstructor třídy požadoval typ sensoru (což je BMP180) a jeho adresu (v našem případě to byla 0x77). Zjištění hodnot jsme provedly pomocí metody `fetch()`.
### c) Sensor teptoty DALLAS 18B20
Sensor byl připojený přes rozhraní 1-Wire, které bylo nutné v konfiguraci raspberry povolit. Použili jsme knihovnu ds18b20. Použítím metody sensors() jsme zjistili adresu našeho sensory. Získání hodnot ze senzoru jsme pak rovedli zavolání metody tempetureSync(), která jako parametr brala zjištěnou adresu senzoru.
### d) a e) Sestavení aplikace
Pro aplikaci jsme použili script z 3. a) pro vypisování dat na display. Pro vypisování dat na display jsme použili scripty z 3. b) a 3. c). Pro práci s rotační encoderem jsme použili rozšíření dříve zmíněné knihovny onoff-rotary. Při vytváření objektu rotátoru jsme museli určit piny ke, ke kterým je připojen. Poté jsme vytvořili funkci, která se s parametrem direction (směr) zavolala pokaždé, když nastala událost “rotation”.


## 4. Připojení na server
### a) Připojení na server
Pro komunikaci se serverem jsme použili knihovnu request (https://www.npmjs.com/package/request). Požadavek na server jsme poslali tak, že jsme zavolali metodu request(). Pro získání všech proměných, nebo konkrétní proměné nám stačilo jako první parametr pouze zadat url a s naším API klíčem a jako druhý parametr callback funkci. Pro odeslání hodnoty proměné na server jsme museli místo url vytvořit objekt s nastavením. Ten obsahoval url s klíčem, metodu (tedy metodu POST) a hodnotu, kterou chceme serveru poslat. 
### b) a c) Periodické odesílání dat na server
Pro odesílání dat ze senzorů na server stačilo skombinovat předešlé skripty (4a, 3bc). Stačilo jen přidat fuknci, která se zavolala jednou za určitý čas a odeslala tak hodnoty na server. 

## 5. Analogoví vstup na arduinu
### a), b) a c) Čtení hodnot z analogových sensorů
Čtení hodnot z analogovích vstupů bylo poměrně jednoduché. V Arduino IDE byli předchystané příklady jak s analogovími vstupy pracovat, z čehož jsme čerpali. Stačilo pouze použít funkci `analogRead()`, která jako argument bere číslo pinu. Vzhledem k tomu, že kód je pro všechny čidla stejný prakticky stejný (jedinou změnou je číslo pinu), jsme úlohu celou úlohu 5 shrnuli do jednoho souboru. 

## 6. Zobrazení hodnot
### a) Použití LED pásku 
Pro práci s programovatelným LED páskem jsme použili knihovnu FastLED (https://github.com/FastLED/FastLED). S knihovnou se pracuje velmi jednoduše. Nejdříve je potřebovat věci jako počet LED, číslo pinu arduina, a typ LED pásku. Poté se vytvoří pole s jednotlivými ledkami. Poté se každému prvku pole přiřadí barva, kterou má svítit. Aby se led rozsvítli danou barvou musí se použít příkaz `FastLED.show()`.
### b) Rotační encoder
Při zprovozňování rotačního encoderu jsme značně čerpali z návodu https://howtomechatronics.com/tutorials/arduino/rotary-encoder-works-use-arduino/. Nejdříve jsme museli opět definovat 2 piny, na kterých je encoder připojený. Nejdříve čteme hodnotu pinu A, pokud se změnila porovná me ji s hodnotou pinu B, pokud je jiná, znamená to, že se encoder točí po směru hodinových ručiček, pokud ne tak proti směru.
### c) a d) Zobrazení hodnot na LED a jejich výpis do konzolového výstupu
Celý kód je kombinace kódů z úloh 


           
