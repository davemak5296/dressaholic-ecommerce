import { Product } from '../types';

const menActivewear: Product[] = [
  {
    sku: 'M-AC-001',
    displayName: 'Football Tights Keepdry',
    brand: 'Virx',
    price: 99,
    colors: ['black'],
    stocks: {
      black: {
        sm: 4,
        md: 5,
        lg: 6,
        xl: 9,
      },
    },
    imageUrls: {
      black: {
        thumbnail: 'https://i.ibb.co/9tRksDp/M-AC-001-black-thumb.jpg',
        one: 'https://i.ibb.co/HKMZTJ8/M-AC-001-black-one.jpg',
        two: 'https://i.ibb.co/mGHrwZJ/M-AC-001-black-two.jpg',
      },
    },
  },
  {
    sku: 'M-AC-002',
    displayName: 'Reversible Basketball Shorts',
    brand: 'Onus',
    price: 129,
    colors: ['gray', 'black'],
    stocks: {
      gray: {
        sm: 14,
        md: 2,
        lg: 5,
        xl: 10,
      },
      black: {
        sm: 20,
        md: 7,
        lg: 4,
        xl: 11,
      },
    },
    imageUrls: {
      gray: {
        thumbnail: 'https://i.ibb.co/3CRVcnF/M-AC-002-gray-thumb.jpg',
        one: null,
        two: null,
      },
      black: {
        thumbnail: 'https://i.ibb.co/PYkqN4Q/M-AC-002-black-thumb.jpg',
        one: 'https://i.ibb.co/PYkqN4Q/M-AC-002-black-one.jpg',
        two: null,
      },
    },
  },
  {
    sku: 'M-AC-003',
    displayName: 'Sport Heathered Training Tee',
    brand: 'Virx',
    price: 79,
    colors: ['red'],
    stocks: {
      red: {
        sm: 19,
        md: 0,
        lg: 4,
        xl: 9,
      },
    },
    imageUrls: {
      red: {
        thumbnail: 'https://i.ibb.co/T8SQhbk/M-AC-003-red-thumb.jpg',
        one: null,
        two: null,
      },
    },
  },
  {
    sku: 'M-AC-004',
    displayName: 'Mock Neck Sweatshirts',
    brand: 'Haggar',
    price: 229,
    colors: ['navy'],
    stocks: {
      navy: {
        sm: 0,
        md: 13,
        lg: 9,
        xl: 5,
      },
    },
    imageUrls: {
      navy: {
        thumbnail: 'https://i.ibb.co/y63drBg/M-AC-004-navy-thumb.jpg',
        one: 'https://i.ibb.co/8bhN5vK/M-AC-004-navy-one.jpg',
        two: 'https://i.ibb.co/f9F20gg/M-AC-004-navy-two.jpg',
      },
    },
  },
  {
    sku: 'M-AC-005',
    displayName: 'Fleece Hoodie',
    brand: 'Virx',
    price: 399,
    colors: ['gray'],
    stocks: {
      gray: {
        sm: 10,
        md: 4,
        lg: 9,
        xl: 0,
      },
    },
    imageUrls: {
      gray: {
        thumbnail: 'https://i.ibb.co/VC7R91Q/M-AC-005-gray-thumb.jpg',
        one: 'https://i.ibb.co/N1ZScLG/M-AC-005-gray-one.jpg',
        two: 'https://i.ibb.co/09Ffmc1/M-AC-005-gray-two.jpg',
      },
    },
  },
];
export default menActivewear;
