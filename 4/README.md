### 4. Připojení na server
#### a) Připojení na server
Pro komunikaci se serverem jsme použili knihovnu [request](https://www.npmjs.com/package/request "request"). Požadavek na server jsme poslali tak, že jsme zavolali metodu `request()`. Pro získání všech proměnných, nebo konkrétní proměnné nám stačilo jako první parametr pouze zadat url a s naším API klíčem a jako druhý parametr callback funkci. Pro odeslání hodnoty proměnné na server jsme museli místo url vytvořit objekt s nastavením. Ten obsahoval url s klíčem, metodu (tedy metodu POST) a hodnotu, kterou chceme serveru poslat.

#### b) a c) Periodické odesílání dat na server
Pro odesílání dat ze senzorů na server stačilo skombinovat předešlé skripty (4a, 3bc). Stačilo jen přidat funkci, která se zavolala jednou za určitý čas a odeslala tak hodnoty na server.
