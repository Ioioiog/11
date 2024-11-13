// src/data/properties.js

export const propertyStatuses = {
  AVAILABLE: 'available',
  RENTED: 'rented',
  RESERVED: 'reserved'
};

export const propertyData = [
  {
    id: "a25",
    title: "Apartament A.2.5 - Yacht Kid",
    description: "Apartament spațios în complexul Yacht Kid, cu 3 camere și balcon generos de 37.1 mp. Ideal pentru familii, oferind un living confortabil și două dormitoare.",
    price: 1400,
    details: {
      rooms: 3,
      area: 71.4,
      totalArea: 108.5,
      floor: 2,
      building: "Corp A",
      year: 2023,
      balcony: 37.1,
      coordinates: [44.426912264449236, 26.11123675633533]
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
    },
    status: propertyStatuses.AVAILABLE,
    rentPeriod: "12 luni",
    availableFrom: "Imediat"
  },
  {
    id: "b110",
    title: "Apartament B.1.10 - Yacht Kid",
    description: "Apartament modern în Yacht Kid, perfect pentru cupluri sau persoane singure. Dispune de un living mare și un dormitor confortabil, cu balcon de 12.6 mp.",
    price: 1200,
    details: {
      rooms: 2,
      area: 52.4,
      totalArea: 65.0,
      floor: 1,
      building: "Corp B",
      year: 2023,
      balcony: 12.6,
      coordinates: [44.42841495259169, 26.105463339845763]
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
    },
    status: propertyStatuses.AVAILABLE,
    rentPeriod: "12 luni",
    availableFrom: "Imediat"
  },
  {
    id: "b27",
    title: "Apartament B.2.7 - Yacht Kid",
    description: "Apartament eficient în Yacht Kid, cu două camere și balcon. Oferă un spațiu de living generos și un dormitor confortabil, ideal pentru un stil de viață urban.",
    price: 1200,
    details: {
      rooms: 2,
      area: 51.1,
      totalArea: 63.8,
      floor: 2,
      building: "Corp B",
      year: 2023,
      balcony: 12.7,
      coordinates: [44.427336515998576, 26.106689630289278]
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
    },
    status: propertyStatuses.AVAILABLE,
    rentPeriod: "12 luni",
    availableFrom: "Imediat"
  },
  {
    id: "b29",
    title: "Apartament B.2.9 - Yacht Kid",
    description: "Apartament bine compartimentat în Yacht Kid, cu două camere și balcon. Dispune de un living și un dormitor spațioase, perfect pentru cei care apreciază confortul.",
    price: 1200,
    details: {
      rooms: 2,
      area: 52.2,
      totalArea: 64.5,
      floor: 2,
      building: "Corp B",
      year: 2023,
      balcony: 12.3,
      coordinates: [44.42929604108499, 26.108057494961265]
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
    },
    status: propertyStatuses.AVAILABLE,
    rentPeriod: "12 luni",
    availableFrom: "Imediat"
  },
  {
    id: "prima26",
    title: "Apartament Prima 26 - Prima Vista",
    description: "Apartament luxos în complexul Prima Vista, cu 3 camere și balcoane impresionante totalizând 58.2 mp. Oferă o vedere panoramică și spații generoase de locuit.",
    price: 1200,
    details: {
      rooms: 3,
      area: 68.0,
      totalArea: 126.2,
      floor: 5,
      building: "Corp 4B",
      year: 2023,
      balcony: 58.2,
      coordinates: [44.42763169599856, 26.105758692854238]
    },
    amenities: [
      "Aer condiționat",
      "Încălzire în pardoseală",
      "Parcare subterană",
      "Pază 24/7",
      "Lift",
      "Sistem smart home",
      "Vedere panoramică"
    ],
    location: {
      address: "Str. Fabrica de Glucoză, București",
      complex: "Prima Vista"
    },
    status: propertyStatuses.AVAILABLE,
    rentPeriod: "12 luni",
    availableFrom: "Imediat"
  },
  {
    id: "prima21",
    title: "Apartament Prima 21 - Prima Vista",
    description: "Apartament elegant în Prima Vista, cu 3 camere și multiple balcoane (46.9 mp în total). Perfect pentru cei care doresc spațiu extra și posibilități de relaxare în aer liber.",
    price: 1200,
    details: {
      rooms: 3,
      area: 68.5,
      totalArea: 115.4,
      floor: 4,
      building: "Corp 4B",
      year: 2023,
      balcony: 46.9,
      coordinates: [44.43555871126546, 26.103366204191687]
    },
    amenities: [
      "Aer condiționat",
      "Încălzire în pardoseală",
      "Parcare subterană",
      "Pază 24/7",
      "Lift",
      "Sistem smart home",
      "Vedere panoramică"
    ],
    location: {
      address: "Str. Fabrica de Glucoză, București",
      complex: "Prima Vista"
    },
    status: propertyStatuses.AVAILABLE,
    rentPeriod: "12 luni",
    availableFrom: "Imediat"
  },
  {
    id:"prima51",
    title: "Apartament Prima 51 - Prima Vista",
    description: "Penthouse spectaculos pe două niveluri în Prima Vista. Cu 4 camere și o suprafață generoasă, oferă un living impresionant și dormitoare spațioase. Ideal pentru cei care caută lux și exclusivitate.",
    price: 1800,
    details: {
      rooms: 4,
      area: 149.9,
      totalArea: 149.9,
      floor: "10-11",
      building: "Corp 4B",
      year: 2023,
      balcony: 70,
      coordinates: [44.42838350522629, 26.103564375902668]
    },
    amenities: [
      "Aer condiționat",
      "Încălzire în pardoseală",
      "Parcare subterană",
      "Pază 24/7",
      "Lift",
      "Sistem smart home",
      "Vedere panoramică",
      "Terasă privată",
      "Două niveluri"
    ],
    location: {
      address: "Str. Fabrica de Glucoză, București",
      complex: "Prima Vista"
    },
    status: propertyStatuses.AVAILABLE,
    rentPeriod: "12 luni",
    availableFrom: "Imediat"
  }
];

export const filterOptions = {
  status: [
    { value: 'all', label: 'Toate' },
    { value: propertyStatuses.AVAILABLE, label: 'Disponibil' },
    { value: propertyStatuses.RENTED, label: 'Închiriat' },
    { value: propertyStatuses.RESERVED, label: 'Rezervat' }
  ],
  rooms: [
    { value: 'all', label: 'Toate' },
    { value: '2', label: '2 camere' },
    { value: '3', label: '3 camere' },
    { value: '4', label: '4 camere' }
  ],
  complex: [
    { value: 'all', label: 'Toate' },
    { value: 'Yacht Kid', label: 'Yacht Kid' },
    { value: 'Prima Vista', label: 'Prima Vista' }
  ],
  priceRange: [
    { value: 'all', label: 'Toate' },
    { value: '0-1000', label: 'Sub 1000€' },
    { value: '1000-1500', label: '1000€ - 1500€' },
    { value: '1500-2000', label: 'Peste 1500€' }
  ]
};