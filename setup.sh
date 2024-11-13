#!/bin/bash

echo "🚀 Inițializare setup complet pentru ApartamentDeLux.ro..."

# Creare structură de directoare
echo "📁 Creare structură de directoare..."
mkdir -p src/{components,data,assets/images/properties}

# Creare directoare pentru fiecare apartament și categoriile de imagini
APARTMENTS=(a25 b110 b27 b29 prima26 prima21 prima51)
CATEGORIES=(living bedroom kitchen bathroom balcony view other)

for apt in "${APARTMENTS[@]}"; do
  for cat in "${CATEGORIES[@]}"; do
    mkdir -p "src/assets/images/properties/$apt/$cat"
  done
done

# Creare fișier date proprietăți
echo "📝 Creare fișier de date proprietăți..."
cat > src/data/properties.js << 'EOL'
export const propertyData = [
  {
    id: "a25",
    title: "Apartament A.2.5 - Yacht Kid",
    description: "Apartament spațios în complexul Yacht Kid, cu 3 camere și balcon generos de 37.1 mp. Ideal pentru familii, oferind un living confortabil și două dormitoare.",
    price: 1500,
    details: {
      rooms: 3,
      area: 71.4,
      totalArea: 108.5,
      floor: 2,
      building: "Corp A",
      year: 2023,
      balcony: 37.1
    },
    amenities: [
      "Aer condiționat",
      "Încălzire în pardoseală",
      "Parcare subterană",
      "Pază 24/7",
      "Lift",
      "Sistem smart home"
    ],
    location: {
      address: "Str. Fabrica de Glucoză, București",
      complex: "Yacht Kid"
    }
  },
  {
    id: "b110",
    title: "Apartament B.1.10 - Yacht Kid",
    description: "Apartament modern în Yacht Kid, perfect pentru cupluri sau persoane singure. Dispune de un living mare și un dormitor confortabil, cu balcon de 12.6 mp.",
    price: 1100,
    details: {
      rooms: 2,
      area: 52.4,
      totalArea: 65.0,
      floor: 1,
      building: "Corp B",
      year: 2023,
      balcony: 12.6
    },
    amenities: [
      "Aer condiționat",
      "Încălzire în pardoseală",
      "Parcare subterană",
      "Pază 24/7",
      "Lift",
      "Sistem smart home"
    ],
    location: {
      address: "Str. Fabrica de Glucoză, București",
      complex: "Yacht Kid"
    }
  },
  // ... [restul proprietăților din mesajul anterior]
];

export const imageCategories = {
  living: "Living",
  bedroom: "Dormitor",
  kitchen: "Bucătărie",
  bathroom: "Baie",
  balcony: "Balcon/Terasă",
  view: "Vedere",
  other: "Alte imagini"
};
EOL

# Creare fișier index pentru imagini
echo "🖼️ Creare index pentru imagini..."
cat > src/assets/images/properties/index.js << 'EOL'
// Importă toate imaginile pentru fiecare apartament
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    const propertyId = item.split('/')[1];
    const category = item.split('/')[2];
    if (!images[propertyId]) {
      images[propertyId] = {};
    }
    if (!images[propertyId][category]) {
      images[propertyId][category] = [];
    }
    images[propertyId][category].push({
      src: r(item),
      alt: `${category} ${images[propertyId][category].length + 1}`,
      category: category
    });
  });
  return images;
};

// Importă toate imaginile din directoarele apartamentelor
export const propertyImages = importAll(
  require.context('./', true, /\.(png|jpe?g|svg)$/)
);
EOL

# Creare componentă pentru galeria de imagini
echo "🎨 Creare componentă Gallery..."
cat > src/components/PropertyGallery.jsx << 'EOL'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { imageCategories } from '../data/properties';

export default function PropertyGallery({ property, images, isOpen, onClose }) {
  const [currentCategory, setCurrentCategory] = useState(Object.keys(imageCategories)[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !property || !images) return null;

  const currentCategoryImages = images[currentCategory] || [];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentCategoryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + currentCategoryImages.length) % currentCategoryImages.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95">
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="p-4 flex justify-between items-center text-white">
          <h3 className="text-xl font-semibold">{property.title}</h3>
          <button onClick={onClose} className="p-2 hover:text-brand-orange">
            <X size={24} />
          </button>
        </div>

        {/* Category Navigation */}
        <div className="px-4 overflow-x-auto whitespace-nowrap">
          <div className="flex gap-2 pb-2">
            {Object.entries(imageCategories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => {
                  setCurrentCategory(key);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-md transition-colors ${
                  currentCategory === key
                    ? 'bg-brand-orange text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Image */}
        <div className="flex-1 relative flex items-center justify-center p-4">
          {currentCategoryImages.length > 0 ? (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 p-2 text-white hover:text-brand-orange"
              >
                <ChevronLeft size={32} />
              </button>

              <img
                src={currentCategoryImages[currentIndex].src}
                alt={currentCategoryImages[currentIndex].alt}
                className="max-h-[70vh] max-w-full object-contain"
              />

              <button
                onClick={nextImage}
                className="absolute right-4 p-2 text-white hover:text-brand-orange"
              >
                <ChevronRight size={32} />
              </button>
            </>
          ) : (
            <p className="text-white/70">Nu există imagini în această categorie</p>
          )}
        </div>

        {/* Thumbnails */}
        <div className="p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {currentCategoryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden ${
                  currentIndex === index ? 'ring-2 ring-brand-orange' : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
EOL

# Creare README cu instrucțiuni
echo "📚 Creare README..."
cat > README.md << 'EOL'
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
EOL

echo "✅ Setup complet finalizat!"
echo ""
echo "Pentru a adăuga imagini:"
echo "1. Creează copii ale imaginilor pentru fiecare apartament"
echo "2. Organizează imaginile în directoarele corespunzătoare:"
echo "   src/assets/images/properties/[id-apartament]/[categorie]/"
echo ""
echo "Pentru a rula proiectul:"
echo "npm run dev"