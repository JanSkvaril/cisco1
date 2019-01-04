
# NAG-IoT

## Cisco Zahradnící

### Programování
#### 1. Příprava
##### 	a)	Volba jazyka 
Volili jsme ze dvou jazyků – Python a JavaScript. Python se z počátku zdál jako lepší varianta, protože velikost komunity v oboru LOT je jednoznačně větší než u JS. To je výhoda jednak v množství dostupných knihoven a kvalitě jejich dokumentace, a jednak v četnosti návodů, jak s určitými součástkami pracovat. Avšak problém byl, že python znal pouze jeden člen našeho týmu a mohli tak vzniknout problémy v případě jeho absence. Javascript jsme na druhou stranu více méně znali všichni a měli jsme tak možnost kód všichni poupravit, vyžádala-li by si to situace. Pro práci s JS jsme použili Node.js a na správu jeho balíčků NPM. Pro verzování a cloudové uskladnění jsme používali GIT s repositářem na stránce [GitHub.com](http://GitHub.com "GitHub.com") (https://github.com/JanSkvaril/cisco1).

#### 1. Testování GPIO
##### 	a)	Zapnutí, vypnutí LED
Pro zapnutí a vypnutí LED jsme použili knihovnu ONOFF (https://www.npmjs.com/package/onoff). Do našeho projektu jsme ji přidali pomocí NPM příkazem npm install onoff. Poté už jen stačilo vytvořit jednoduchý script. Nejdříve jsme si pomocí require vyžádali knihovnu a vytvořili novou instanci třídy GPIO s dvěma parametry – číslo pinu, na kterém je led připojena, a specifikovali, že se jedná o výstup. Nakonec jsme jen zavolali metodu objektu `writeSync()` s parametrem 1 – tím jsme LED zapnuli.
b)	a   c) Řízení LED pomocí PWM
Pro ovládání led pomocí PWM jsme použili knihovnu PIGPIO (https://www.npmjs.com/package/pigpio). Ve skutečnosti se jedná o wrapper na knihovnu PIGPIO v jazyce C https://github.com/joan2937/pigpio. Následný postup byl téměř totožný, s tím rozdílem, že jsme místo pouze binární hodnoty mohli nastavit hodnotu od 0 do 255, která určovala sílu svitu LED.	
##### c)	z nějakého důvodu nemáme 
	
#### 3.	OLED, rotační enkodér a senzory tlaku a teploty
##### a)	OLED
Display jsme měli připojený přeš rozhraní I2C, které se museli v konfiguraci Raspberry nejdříve povolit. Pomocí `I2CDETECT -y` 1 jsme zjistili jakou má display adresu. Opět pomocí NPM jsme nainstalovali knihovnu RPI-OLED (https://www.npmjs.com/package/rpi-oled). Po vyžádání knihovny jsme vytvořili instanci třídy OLED, která jako parametr brala objekt s nastavením. Nastavili jsme pouze výšku a šířku (128x64). I2C adresa se shodovala s výchozí adresou, takže tu jsme specifikovat nemuseli. Poté jsme display vyčistili metodou` clearDisplay()` a přepsali černým obdélníkem pomocí metody `fillRect()`. Pro výpis textu na obrazovku jsme museli doinstalovat OLED-FONT-5x7, jak bylo doporučeno v dokumentaci RPI-OLED. Nakonec jsme pomocí writeString() vypsali textoví řetězec na display.
##### b)	BMP180 nemáme
##### c)	Sensor teploty DALLAS 18B20
Sensor byl připojený přes rozhraní 1-WIRE, které bylo nutné v konfiguraci Raspberry povolit. Použili jsme knihovnu 
. Použitím metody `sensors()` jsme zjistili adresu našeho sensory. Získání hodnot ze senzoru jsme pak dovedli zavolání metody `tempetureSync()`, která jako parametr brala zjištěnou adresu senzoru.

##### d)	a   e) Sestavení aplikace
Pro aplikaci jsme použili script z 3. a) pro vypisování dat na display. Pro vypisování dat na display jsme použili scripty z 3. b) a 3. c). Pro práci s rotační enkodérem jsme použili rozšíření dříve zmíněné knihovny ONOFF-ROTARY. Při vytváření objektu rotátoru jsme museli určit piny ke, ke kterým je připojen. Poté jsme vytvořili funkci, která se s parametrem direction (směr) zavolala pokaždé, když nastala událost “rotation”.

#### 4.	Připojení na server
##### a)	Připojení na server
Pro komunikaci se serverem jsme použili knihovnu REQUEST (https://www.npmjs.com/package/request). Požadavek na server jsme poslali tak, že jsme zavolali metodu `request()`. Pro získání všech proměnných, nebo konkrétní proměnné nám stačilo jako první parametr pouze zadat URL a s naším API klíčem a jako druhý parametr callback funkci. Pro odeslání hodnoty proměnné na server jsme museli místo URL vytvořit objekt s nastavením. Ten obsahoval URL s klíčem, metodu (tedy metodu POST) a hodnotu, kterou chceme serveru poslat. 
##### b)	a   c) Periodické odesílání dat na server
Pro odesílání dat ze senzorů na server stačilo skombinovat předešlé skripty (4a, 3bc). Stačilo jen přidat funkci, která se zavolala jednou za určitý čas a odeslala tak hodnoty na server.


|  Úloha |  Splněno  |
| ------------ | ------------ |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |
| 1. a.	  |  ANO |

Úloha	Splněno
1. a.	NE
1. b.	NE
2. a.	NE
2. b.	NE
2. c.	NE
2. d.	NE
3. a.	NE
3. b.	NE
3. c.	NE
3. d.	NE
3. e.	NE
4. a.	NE
4. b.	NE
4. c.	NE
5. a.	NE
5. b.	NE
5. c.	NE
6. a.	NE
6. b.	NE
6. c.	NE
6. d.	NE
7. a.	NE
7. b.	NE
7. c.	NE
7. d.	NE
8.	NE
9.	NE

Video týmu je na adrese: 
