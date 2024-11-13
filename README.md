# ApartamentDeLux.ro

## Structură proiect
```
src/
├── assets/
│   └── images/
│       └── properties/
│           ├── a25/
│           │   ├── living/
│           │   ├── bedroom/
│           │   └── ...
│           └── ...
├── components/
├── data/
└── ...
```

## Adăugare imagini
1. Adaugă imaginile în directorul corespunzător apartamentului și categoriei:
   ```
   src/assets/images/properties/[id-apartament]/[categorie]/
   ```
2. Imaginile vor fi automat importate și categorizate

## Adăugare apartament nou
1. Adaugă datele apartamentului în `src/data/properties.js`
2. Creează directorul pentru imagini:
   ```
   mkdir -p src/assets/images/properties/[id-apartament]/{living,bedroom,kitchen,bathroom,balcony,view,other}
   ```
3. Adaugă imaginile în directoarele corespunzătoare

## Dezvoltare
```bash
npm run dev
```
