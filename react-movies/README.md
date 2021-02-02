# WCC Academy Užduotis

Sukurkite paieškos _autocomplete_ web komponentą, kurio pagalba vartotojas galės pasirinkti kino filmą iš įvestos frazės atitikmenų. Paieškos komponentas turi bendrauti su filmų informacijos API.

**_Norint sėkmingai atlikti užduotį, nebūtina turėti patirties su moderniais JavaScript karkasais. Stenkitės rašyti kuo paprastesnį ir aiškesnį kodą. Akademijos tikslas yra kartu išmokti geriausių programavimo praktikų, todėl nesidrovėkite atsiųsti bet kokios savo darbo versijos._**


## Pradiniai reikalavimai
1. Dizainą įgyvendinti kuo panašesnį į pateiktą žemiau. Pikselių nematuosime, tačiau į centravimą ir bendrą išdėstymą atsižvelgsime. 
2. Stiliaus aprašus stenkitės išlaikyti tvarkingus, vengiant nereikalingų komandų. 
3. Paieškos langas turi leisti įvesti paieškos tekstą ir pateikti galimus variantus ( gali būti ir be API pajungimo, tiesiog statiniai duomenys)


## Papildomi reikalavimai
1. Stilių aprašams naudoti modernius stiliaus įrankius kaip `PostCSS` ar `SASS`.
2. Komponentas turi naudoti informaciją, gaunamą dinamiškai iš filmų duomenų API:
   `GET: https://api.themoviedb.org/3/search/movie?api_key=**{api_raktas}**&language=en-US&query=**{paieškos_tekstas}**`
3. Pasirinkus vieną iš rezultatų, komponento įvesties tekstas turi atsinaujinti pagal pasirinkimą.
4. Maksimalus rodomas dinaminės paieškos rezultatų kiekis - 8 filmų įrašai.
5. Minimalus simbolių kiekis, aktyvuojantis dinaminę paiešką - 3. Jeigu ši sąlyga tenkinama, bet koks simbolio pakeitimas panaikina buvusius rezultatus ir iš naujo aktyvuoja dinaminę paiešką.
6. Papildomas pliusas bus jeigu naudosite _debounce_ funkciją apsisaugot nuo nereikalingų užklausų į filmų bazę. Taip pat papildomi taškai gali būt skiriami, jei padarysite _error handling_ ar _loadinimą_.


## Instrukcijos
1. Naudokite šią Github repozitoriją kaip pradinį užduoties tašką. Tai galite padaryti naudodami Github `Fork` funkciją.
2. KAYAK WCC academy paskaitų projekte naudosime `React.js`, todėl rekomenduojame užduotį atlikti naudojant šią technologiją, tačiau šiam namų darbui technologijos nėra ribojamos ir galima pasirinkti savo nuožiūra. Galite naudoti `create-react-app` ar `Angular CLI` ir kitus bibliotekų aplinkos generatorius.
3. Nenaudokite `NPM dependencies`, kurios padaro visą _autocomplete_ logiką už jus.
4. Iškilus klausimams dėl užduoties formuluočių, pateikite klausimą `Github Issues` skiltyje ir mes kaip galima greičiau atsakysime.
5. Pabaigus užduotį, atsiųskite savo Github repozitorijos adresą kartu su registracijos forma.

### Kaip gauti `api_key` skirtą themoviedb api
1. Einame į `https://www.themoviedb.org/`
2. Užsiregistruojame
3. Patvirtiname email'ą
4. Prisijungiame
5. Spaudžiame ant avataro, einame į `settings`
6. Pasirenkame `API` sekciją
7. Susikuriame `API key`, spaudžiame create ir užpildome reikiamą informaciją sekdami vedlį
8. Gauname `api_key`



## Dizainas

![Default state](images/default_state.png?raw=true "Default state")
![Results state](images/results_state.png?raw=true "Results state")
![Selected text](images/selected_state.png?raw=true "Selected state")
