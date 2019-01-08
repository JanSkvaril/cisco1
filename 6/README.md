### 6. Zobrazení hodnot

#### a) Použití LED pásku
RGB led pásek má napájení přímo od přídavného napájení v nepájivém poli. Vede zde + i – a prostřední vodič LED pásku vede k pinu arduina, přes který je řízen.

Pro práci s programovatelným LED páskem jsme použili knihovnu [FastLED](https://github.com/FastLED/FastLED "FastLED"). S knihovnou se pracuje velmi jednoduše. Nejdříve je potřebovat věci jako počet LED, číslo pinu arduina, a typ LED pásku. Poté se vytvoří pole s jednotlivými letkami. Poté se každému prvku pole přiřadí barva, kterou má svítit. Aby se led rozsvítila danou barvou musí se použít příkaz `FastLED.show()`.

#### b) Rotační encoder
Rotační enkodér, je připojen velice jednoduše. VCC A GND jsou opět vyvedeny z řady přídavného napájení a piny pro informace o otočení doprava, doleva jsou napojeny na vývody na Arduinu.

Při zprovozňování rotačního encoderu jsme značně čerpali z [návodu](https://howtomechatronics.com/tutorials/arduino/rotary-encoder-works-use-arduino/ "návodu"). Nejdříve jsme museli opět definovat 2 piny, na kterých je encoder připojený. Nejdříve čteme hodnotu pinu A, pokud se změnila porovnáme ji s hodnotou pinu B, pokud je jiná, znamená to, že se encoder točí po směru hodinových ručiček, pokud ne tak proti směru.

#### c) a d) Zobrazení hodnot na LED a jejich výpis do konzolového výstupu
Celý kód je kombinace kódů z úloh 5 a 6. Úlohu řešíme podobně jako  4 b) c) - pomocí rotačního encoderu se přepíná proměnná stav, poté se podle její hodnoty jednak vypisuje do console hodnota daného sensoru a jednak se tato hodnota ukazuje na LED pásku: pomocí funkce `map()` změníme hodnotu ze senzoru (která je v rozsahu 0 a 1023, viz. úloha 5) na počet LED (v rozsahu 0 až 15) a na barvu (rozsah 0 až 255). Takže podle výšky hodnoty z analogového sensoru se rozsvítí počet LED a navíc se ještě mění barva (barvu nastavujeme pomocí metody `setHue()`, která bere hodnotu 0-255 odstín).
