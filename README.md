# Kayak UI Academy Užduotis.

Sukurkite paieškos _autocomplete_ komponentą, naudodami `ReactJS` biblioteką, kurio pagalba vartotojas galės pasirinkti kino filmą iš įvestos frazės atitikmenų. Paieškos komponentas turi bendrauti su filmų informacijos API.

## Reikalavimai
1. Dizainas turi būti kuo panašesnis į pateiktą žemiau.
2. Komponentas turi būti prisitaikančio dizaino, kad veiktų ant įvairaus dydžio įrenginių. (responsive)
3. Komponentas turi naudoti informaciją, gaunamą dinamiškai iš filmų duomenų API:
   `GET: https://api.themoviedb.org/3/search/movie?api_key=cab2afe8b43cf5386e374c47aeef4fca&language=en-US&query=`**{paieškos_tekstas}**`&page=1&include_adult=false`
4. Pasirinkus vieną iš rezultatų, komponento įvesties tekstas turi atsinaujinti pagal pasirinkimą.
5. Maksimalus rodomas dinaminės paieškos rezultatų kiekis - 8 įrašai.
6. Minimalus simbolių kiekis, aktyvuojantis dinaminę paiešką - 3. Jeigu ši sąlyga tenkinama, bet koks simbolio pakeitimas panaikina buvusius rezultatus ir iš naujo aktyvuoja dinaminę paiešką.

## Instrukcijos
1. Naudokite šią Github repozitoriją kaip pradinį užduoties tašką. Tai galite padaryti naudodami Github `Fork` funkciją.
2. Nenaudokite kitų `NPM dependencies`, kurių nėra šioje repozitorijoje.
3. Iškilus klausimams dėl užduoties formuluočių, pateikite klausimą `Github Issues` skiltyje ir mes kaip galima greičiau atsakysime.
4. Pabaigus užduotį, atsiųskite savo Github repozitorijos adresą kartu su registracijos forma.

**_Norint sėkmingai atlikti užduotį, nebūtina turėti patirties su ReactJS library, nes mes netikrinsime su tuo susijusių 'gerųjų praktikų'. Stenkitės rašyti kuo paprastesnį kodą, naudodami React dokumentaciją: https://reactjs.org/_**

## Dizainas

![Default state](images/default_state.png?raw=true "Default state")
![Results state](images/results_state.png?raw=true "Results state")
![Selected text](images/selected_state.png?raw=true "Selected state")