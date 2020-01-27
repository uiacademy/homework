# Kayak UI Academy Užduotis

Sukurkite paieškos _autocomplete_ komponentą, kurio pagalba vartotojas galės pasirinkti kino filmą iš įvestos frazės atitikmenų. Paieškos komponentas turi bendrauti su filmų informacijos API.

## Reikalavimai
1. Dizainas turi būti kuo panašesnis į pateiktą žemiau. Pikselių nematuosime, tačiau į centravimą ir 
bendrą išdėstymą atsižvelgsime. Stilius turi būti parašytas tvarkingai, vengiant nereikalingų komandų. Galima naudoti modernius stiliaus įrankius kaip `PostCSS` ar `SASS`.
2. Komponentas turi naudoti informaciją, gaunamą dinamiškai iš filmų duomenų API:
   `GET: https://api.themoviedb.org/3/search/movie?api_key=cab2afe8b43cf5386e374c47aeef4fca&language=en-US&query=**{paieškos_tekstas}**`
3. Pasirinkus vieną iš rezultatų, komponento įvesties tekstas turi atsinaujinti pagal pasirinkimą.
4. Maksimalus rodomas dinaminės paieškos rezultatų kiekis - 8 filmų įrašai.
5. Minimalus simbolių kiekis, aktyvuojantis dinaminę paiešką - 3. Jeigu ši sąlyga tenkinama, bet koks simbolio pakeitimas panaikina buvusius rezultatus ir iš naujo aktyvuoja dinaminę paiešką. Papildomas pliusas bus jeigu naudosite `debounce` funkcija apsisaugot nuo nereikalingų užklausų į filmų bazę.
6. Naudokite modernius JS frameworkus kaip `React.js` ar `Angular.js`. Galite naudoti bibliotekų aplinkos generatorius kaip `create-react-app` ar `Angular CLI`. 
7. Papildomi taškai gali būt skiriami, jei padarysite _error handling_ ar _loadinimą_.


## Instrukcijos
1. Naudokite šią Github repozitoriją kaip pradinį užduoties tašką. Tai galite padaryti naudodami Github `Fork` funkciją.
2. Nenaudokite `NPM dependencies`, kurios padaro visą _autocomplete_ logiką už jus.
3. Iškilus klausimams dėl užduoties formuluočių, pateikite klausimą `Github Issues` skiltyje ir mes kaip galima greičiau atsakysime.
4. Pabaigus užduotį, atsiųskite savo Github repozitorijos adresą kartu su registracijos forma.

**_Norint sėkmingai atlikti užduotį, nebūtina turėti patirties su ReactJS ar Angular. Mes netikrinsime su tuo susijusių 'gerųjų praktikų'. Tiesiog stenkitės rašyti kuo paprastesnį ir aiškesnį kodą. Akademijos tikslas yra kartu išmokti geriausių programavimo praktikų, todėl nesidrovėkite atsiųsti bet kokios savo darbo versijos._**

## Dizainas

![Default state](images/default_state.png?raw=true "Default state")
![Results state](images/results_state.png?raw=true "Results state")
![Selected text](images/selected_state.png?raw=true "Selected state")