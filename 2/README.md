### 2. Testování GPIO
#### a) LED / bzučák
Začali jsme s jednoduchým testováním GPIO portů a jejich ovládáním. Jako první jsme začali s LED diodou, kterou jsme zapojili do nepájivého pole a do odpovídajících zdířek jsme z gpio portu vyvedli vodič ke katodě (GND) a k anodě přidali 330 Ohmový rezistor, od kterého jsme vedli vodič k pinu GPIO 4. To samé jsme zopakovali s bzučákem, u kterého odpadla nutnost přidávat rezistor.
##### Programování  zapnutí / vypnutí LED
Pro zapnutí a vypnutí LED jsme použili knihovnu [onoff](https://www.npmjs.com/package/onoff "onoff"). Do našeho projektu jsme ji přidali příkazem `npm install onoff`. Poté už jen stačilo vytvořit jednoduchý script. Nejdříve jsme si pomocí `require()` vyžádali knihovnu a vytvořili novou instanci třídy GPIO s dvěma parametry – číslo pinu, na kterém je led připojena, a specifikovali, že se jedná o výstup. Nakonec jsme jen zavolali metodu objektu `writeSync()` s parametrem 1 – tím jsme led zapnuli.

#### b) Řízení výkonu na GPIO portu
Jako další krok jsme pomocí stejného zapojení jak v úloze a), akorát se změnou v kódu, vyzkoušeli možnosti PWM (pulse width modulation) jak na LED diodě, tak bzučáku. Jako poslední

#### c) LED RGB
Diodu jsme zapojili tak, že nejdelší nožičku (2) jsme propojili k GND pinu na Raspberry, ostatní tři nožičky, které zprostředkovávají zelenou, červenou a modrou, jsme napojili přes rezistory 330 Ohm, do Raspberry na GPIO piny.

##### Řízení LED pomocí PWM - úloha b) a c)
Pro ovládání LED pomocí PWM jsme použili knihovnu [pigpio](https://www.npmjs.com/package/pigpio "pigpio"). Ve skutečnosti se jedná o wrapper na [knihovnu pigpio v jazyce C](https://github.com/joan2937/pigpio "knihovnu pigpio v jazyce C"). Následný postup byl téměř totožný, s tím rozdílem, že jsme místo pouze binární hodnoty mohli nastavit hodnotu od 0 do 255, která určovala sílu svitu LED.

#### d) Port – vstupní režim (push button)
Pro připojení jsme zvolili push button, u kteréhose při stlačení vypsal text v konzoli. Připojení opět bylo velice jednoduché – vyvedení z GND pinu, do switche a ze switche zpátky vodičem na GPIO pin.

##### Programování stlačení tlačítka
Použili jsme opět již zmíněnou knihovnu **onoff**. Jako parametry jsme zadávali pin tlačítka, `"in"` - že se jedná o tlačítko a `"both"` - že tlačítko reaguje i na pouhé stlačení, i na zmáčknutí.  
