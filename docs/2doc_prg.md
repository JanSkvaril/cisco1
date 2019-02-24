### 11. Čidla na esp
#### a) Čidlo teploty a vlhkosti
Pro čtení hodnot z čidla jsme použili knihovnu SparkFunHTU21D. Čidlo připojeno přes rozhraní i2c, takže si ho knihovna sama najde
#### b) Čidlo světla
Pro čtení hodnt z čidla jsme použili knihovnu BH1750FVI, čerpali jsme z ukázkového příklkadu u dokumentace knihovny
### 12. Bezdrátová základna
#### a) Připojení na Wifi
Použili jsme knihovnu ESP8266Wifi, museli jsme zadat ssid wifi sítě a její heslo
#### b) c) Odesíláni dat na základnu
K úloze a) jsme pouze přidali knihovnu ESP8266HTTPClient, pomocí které posíláme data metodou POST na základnu. Na základně pomocí knihovny express data přijímáme. Data vypisujeme na display stejně jako v prvním kole
### 13. MQTT
#### a) Odesálání dat přes MQTT
Data odesíláme pomocí knihovny mqtt.js. Museli jsme změnit protokol na mqtts aby byl přenos šifrovaný 
#### b) Odesílaní dat z bezdrátové stanice
Data ze stanice přijímáme metodou popsanou v úloze 12 a na server je posíláme stejným způsobem jako v úloze b
#### c) odebírní hodnot jiného týmu
Metoda subscibe nám zavolá událost pokaždé, když tým změní odebírané proměné hodnotu proměné 
