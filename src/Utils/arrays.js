import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Aero from '../Components/SVG/Brands/Aero';
import Crocs from '../Components/SVG/Brands/Crocs';
import Diesel from '../Components/SVG/Brands/Diesel';
import Lee from '../Components/SVG/Brands/Lee';
import LV from '../Components/SVG/Brands/LV';
import Versace from '../Components/SVG/Brands/Versace';
import HM from '../Components/SVG/Brands/HM';
import Visa from '../Components/SVG/CreditCards/Visa';
import MasterCard from '../Components/SVG/CreditCards/MasterCard';
import AmericanExpress from '../Components/SVG/CreditCards/AmericanExpress';
import DinersClub from '../Components/SVG/CreditCards/DinersClub';
import Discover from '../Components/SVG/CreditCards/Discover';
import JCB from '../Components/SVG/CreditCards/JCB';
import UnionPay from '../Components/SVG/CreditCards/UnionPay';
import Maestro from '../Components/SVG/CreditCards/Maestro';

export const topBrandsArray = [
  {
    img: require('../Assets/Images/Brands/1.jpg'),
    logo: <Versace width={hp(9)} height={hp(9)} viewBox="0 0 250 50" />,
  },
  {
    img: require('../Assets/Images/Brands/2.jpg'),
    logo: <Aero width={hp(10)} height={hp(8)} />,
  },
  {
    img: require('../Assets/Images/Brands/3.jpg'),
    logo: <Versace width={hp(9)} height={hp(9)} viewBox="0 0 250 50" />,
  },
  {
    img: require('../Assets/Images/Brands/4.jpg'),
    logo: <Crocs width={hp(8)} height={hp(8)} />,
  },
  {
    img: require('../Assets/Images/Brands/5.jpg'),
    logo: <Diesel width={hp(7)} height={hp(5)} viewBox="0 0 240 130" />,
  },
  {
    img: require('../Assets/Images/Brands/6.jpg'),
    logo: <Lee width={hp(6)} height={hp(6)} />,
  },
  {
    img: require('../Assets/Images/Brands/7.jpg'),
    logo: <LV width={hp(6)} height={hp(4)} />,
  },
  {
    img: require('../Assets/Images/Brands/8.jpg'),
    logo: <Versace width={hp(9)} height={hp(9)} viewBox="0 0 250 50" />,
  },
  {
    img: require('../Assets/Images/Brands/9.jpg'),
    logo: <HM width={hp(7)} height={hp(7)} />,
  },
];

export const CreditCardsLogo = [
  {
    brand: 'visa',
    logo: <Visa width={hp(5.5)} height={hp(5.5)} />,
  },
  {
    brand: 'mastercard',
    logo: <MasterCard width={hp(5.5)} height={hp(5.5)} />,
  },
  {
    brand: 'american-express',
    logo: <AmericanExpress width={hp(5.5)} height={hp(5.5)} />,
  },
  {
    brand: 'diners-club',
    logo: <DinersClub width={hp(5.5)} height={hp(5.5)} />,
  },
  {
    brand: 'discover',
    logo: <Discover width={hp(5.5)} height={hp(5.5)} />,
  },
  {
    brand: 'jcb',
    logo: <JCB width={hp(5.5)} height={hp(5.5)} />,
  },
  {
    brand: 'unionpay',
    logo: <UnionPay width={hp(5.5)} height={hp(5.5)} />,
  },
  {
    brand: 'maestro',
    logo: <Maestro width={hp(5.5)} height={hp(5.5)} />,
  },
];

export const categories = [
  {
    title: 'MEN',
    background: '',
    img: '',
    subCategory: [
      {
        title: 'Topwear',
        items: ['T-shirts', 'Casual Shirts', 'Formal Shirts', 'Jackets'],
      },
      {
        title: 'Footwear',
        items: ['Sneakers', 'Casual Shoes', 'Sports Shoes', 'Formal Shoes'],
      },
      {title: 'BottomWear', items: ['Jeans', 'Shorts', 'Chinos', 'Joggers']},
      {title: 'Watches', items: ['Watches', 'Smart Watches & Fitness Bands']},
    ],
  },
  {
    title: 'WOMEN',
    background: '',
    img: '',
    subCategory: [
      {
        title: 'Topwear',
        items: ['T-shirts', 'Casual Shirts', 'Formal Shirts', 'Jackets'],
      },
      {
        title: 'Footwear',
        items: ['Sneakers', 'Casual Shoes', 'Sports Shoes', 'Formal Shoes'],
      },
      {title: 'BottomWear', items: ['Jeans', 'Shorts', 'Chinos', 'Joggers']},
      {title: 'Watches', items: ['Watches', 'Smart Watches & Fitness Bands']},
    ],
  },
  {
    title: 'KIDS',
    background: '',
    img: '',
    subCategory: [
      {
        title: 'Topwear',
        items: ['T-shirts', 'Casual Shirts', 'Formal Shirts', 'Jackets'],
      },
      {
        title: 'Footwear',
        items: ['Sneakers', 'Casual Shoes', 'Sports Shoes', 'Formal Shoes'],
      },
      {title: 'BottomWear', items: ['Jeans', 'Shorts', 'Chinos', 'Joggers']},
      {title: 'Watches', items: ['Watches', 'Smart Watches & Fitness Bands']},
    ],
  },
  {
    title: 'BEAUTY',
    background: '',
    img: '',
    subCategory: [
      {
        title: 'Topwear',
        items: ['T-shirts', 'Casual Shirts', 'Formal Shirts', 'Jackets'],
      },
      {
        title: 'Footwear',
        items: ['Sneakers', 'Casual Shoes', 'Sports Shoes', 'Formal Shoes'],
      },
      {title: 'BottomWear', items: ['Jeans', 'Shorts', 'Chinos', 'Joggers']},
      {title: 'Watches', items: ['Watches', 'Smart Watches & Fitness Bands']},
    ],
  },
  {
    title: 'GADGETS',
    background: '',
    img: '',
    subCategory: [
      {
        title: 'Topwear',
        items: ['T-shirts', 'Casual Shirts', 'Formal Shirts', 'Jackets'],
      },
      {
        title: 'Footwear',
        items: ['Sneakers', 'Casual Shoes', 'Sports Shoes', 'Formal Shoes'],
      },
      {title: 'BottomWear', items: ['Jeans', 'Shorts', 'Chinos', 'Joggers']},
      {title: 'Watches', items: ['Watches', 'Smart Watches & Fitness Bands']},
    ],
  },
];

export const imageArray = [
  {
    img: require('../Assets/Images/men.jpg'),
    id: '1',
  },
  {
    img: require('../Assets/Images/women.jpg'),
    id: '2',
  },
  {
    img: require('../Assets/Images/kids.jpg'),
    id: '3',
  },
];

export const sortData = [
  {
    title: "What's New",
    id: 1,
  },
  {
    title: 'Price',
    id: 2,
  },
  {
    title: 'Popularity',
    id: 3,
  },
  {
    title: 'Discount',
    id: 4,
  },
  {
    title: 'Customer Rating',
    id: 5,
  },
];

export const filterCategories = [
  'Size',
  'Color',
  'Brand',
  'Discount',
  'Delivery Time',
  'Price Range',
];

export const sizes = [
  {
    first: 'S',
    second: '52841',
  },
  {
    first: 'M',
    second: '51996',
  },
  {
    first: 'L',
    second: '47135',
  },
  {
    first: 'XL',
    second: '42003',
  },
  {
    first: 'XXL',
    second: '21583',
  },
  {
    first: 'XS',
    second: '9269',
  },
  {
    first: '3XL',
    second: '2894',
  },
  {
    first: '4XL',
    second: '1268',
  },
  {
    first: '5XL',
    second: '1099',
  },
  {
    first: '6XL',
    second: '737',
  },

  {
    first: '7XL',
    second: '328',
  },
  {
    first: '8XL',
    second: '127',
  },
  {
    first: 'L/XL',
    second: '27',
  },
  {
    first: 'S/M',
    second: '27',
  },
  {
    first: '9XL',
    second: '22',
  },
  {
    first: '10XL',
    second: '9',
  },
  {
    first: 'M/L',
    second: '7',
  },
  {
    first: 'XL/XXL',
    second: '7',
  },
  {
    first: 'XS/S',
    second: '7',
  },
  {
    first: '3XS',
    second: '1',
  },
];

export const colors = [
  {
    first: 'Black',
    code: '#000000',
    second: '235',
  },
  {
    first: 'Navy Blue',
    code: '#3c4476',
    second: '2123',
  },
  {
    first: 'White',
    code: '#000000',
    second: '2351',
  },
  {
    first: 'Beige',
    code: '#f2f2f2',
    second: '13',
  },
  {
    first: 'Blue',
    code: '#0074d9',
    second: '56',
  },
  {
    first: 'Brown',
    code: '#915039',
    second: '215',
  },
  {
    first: 'Burgundy',
    code: '#a03245',
    second: '235',
  },
  {
    first: 'Charcoal',
    code: '#36454f',
    second: '1235',
  },
  {
    first: 'Coffee Brown',
    code: '#4b302f',
    second: '935',
  },
  {
    first: 'Coral',
    code: '#4b302f',
    second: '135',
  },
  {
    first: 'Cream',
    code: '#ede6b9',
    second: '935',
  },
  {
    first: 'Fluorescent Green',
    code: '#8dc049',
    second: '1235',
  },
  {
    first: 'Gold',
    code: '#e5c74a',
    second: '735',
  },
  {
    first: 'Green',
    code: '#5eb160',
    second: '235',
  },
  {
    first: 'Grey',
    code: '#9fa8ab',
    second: '825',
  },
  {
    first: 'Khaki',
    code: '#c3b091',
    second: '535',
  },
  {
    first: 'Lavender',
    code: '#d6d6e5',
    second: '135',
  },
  {
    first: 'Lime Green',
    code: '#5db653',
    second: '535',
  },
  {
    first: 'Magenta',
    code: '#b8529e',
    second: '135',
  },
  {
    first: 'Maroon',
    code: '#b02f60',
    second: '335',
  },
  {
    first: 'Mauve',
    code: '#dfb0ff',
    second: '635',
  },
  {
    first: 'Mustard',
    code: '#cc9c33',
    second: '835',
  },
  {
    first: 'Off White',
    code: '#f2f2f2',
    second: '935',
  },
  {
    first: 'Olive',
    code: '#3d9970',
    second: '535',
  },
  {
    first: 'Orange',
    code: '#f18d21',
    second: '735',
  },
  {
    first: 'Peach',
    code: '#ffe5b4',
    second: '135',
  },
  {
    first: 'Pink',
    code: '#f0a9c4',
    second: '235',
  },
  {
    first: 'Purple',
    code: '#800080',
    second: '135',
  },
  {
    first: 'Red',
    code: '#d24a55',
    second: '735',
  },
  {
    first: 'Rose',
    code: '#dc2f86',
    second: '35',
  },
  {
    first: 'Rust',
    code: '#b6410e',
    second: '2035',
  },
  {
    first: 'Sea Green',
    code: '#2e8b57',
    second: '1235',
  },
  {
    first: 'Silver',
    code: '#b3b3b3',
    second: '2035',
  },
  {
    first: 'Tan',
    code: '#d2b48c',
    second: '935',
  },
  {
    first: 'Taupe',
    code: '#483b32',
    second: '935',
  },
  {
    first: 'Teal',
    code: '#008080',
    second: '735',
  },
  {
    first: 'Turquoise Blue',
    code: '#40e0d0',
    second: '635',
  },
  {
    first: 'Yellow',
    code: '#eadb32',
    second: '335',
  },
];

export const Brands = [
  {
    first: '2GO',
    second: '3',
  },
  {
    first: 'Aeropostale',
    second: '17',
  },
  {
    first: 'Alcis',
    second: '201',
  },
  {
    first: 'Allen Cooper',
    second: '56',
  },
  {
    first: 'Allen Solly',
    second: '27',
  },
  {
    first: 'Allen Solly Sport',
    second: '1',
  },
  {
    first: 'American Crew',
    second: '3',
  },
  {
    first: 'Arrow',
    second: '15',
  },
  {
    first: 'Athleto',
    second: '11',
  },
  {
    first: 'Being Human',
    second: '57',
  },
  {
    first: 'Blackberrys',
    second: '1',
  },
  {
    first: 'Cantabil',
    second: '5',
  },
  {
    first: 'Crocodile',
    second: '22',
  },
  {
    first: 'Dollar',
    second: '57',
  },
  {
    first: 'Flying Machine',
    second: '171',
  },
  {
    first: 'Fort Collins',
    second: '3',
  },
  {
    first: 'GAP',
    second: '2',
  },
  {
    first: 'H&M',
    second: '42',
  },
  {
    first: 'Harvard',
    second: '165',
  },
  {
    first: 'HIGHLANDER',
    second: '101',
  },
  {
    first: 'INVICTUS',
    second: '81',
  },
  {
    first: 'Jack & Jones',
    second: '212',
  },
];

export const Discount = [
  {
    first: '10% and above',
    second: '18653',
  },
  {
    first: '20% and above',
    second: '18259',
  },
  {
    first: '30% and above',
    second: '17253',
  },
  {
    first: '40% and above',
    second: '15603',
  },
  {
    first: '50% and above',
    second: '10531',
  },
  {
    first: '60% and above',
    second: '7753',
  },
  {
    first: '70% and above',
    second: '653',
  },
  {
    first: '80% and above',
    second: '53',
  },
];

export const DeliveryTime = [
  {
    first: 'By Tomorrow',
  },
  {
    first: 'Within 2 Days',
  },
  {
    first: 'Within 3 Days',
  },
  {
    first: 'Within 4 Days',
  },
];

export const categoryImages = [
  {
    img: require('../Assets/Images/1.png'),
    width: 15,
    height: 15,
  },
  {
    img: require('../Assets/Images/2.png'),
    width: 12,
    height: 9,
  },
  {
    img: require('../Assets/Images/3.png'),
    width: 12,
    height: 10,
  },
  {
    img: require('../Assets/Images/4.png'),
    width: 12,
    height: 8,
  },
  {
    img: require('../Assets/Images/5.png'),
    width: 12,
    height: 7,
  },
];

export const interestArray = [
  {
    brand: 'Jack & Jones',
    category: 'Jeans',
    image: require('../Assets/Images/jeans.jpg'),
  },
  {
    brand: 'Campus Sutra',
    category: 'Tshirts',
    image: require('../Assets/Images/polo.png'),
  },
  {
    brand: 'Moda Rapido',
    category: 'Tshirts',
    image: require('../Assets/Images/shirt.jpg'),
  },
  {
    brand: 'HRX',
    category: 'Tshirts',
    image: require('../Assets/Images/shirt.jpg'),
  },
];

export const offers = [
  '10% Instant Discount on Bank Of Baroda Credit Cards on a min spend of Rs 2,500. TCA',
  '10% Cashback on Slice Visa Card on a min spend of Rs 500. TCA',
  '5% Unlimited Cashback on Flipkart Axis Bank Credit Card. TCA',
  '10% Cashback upto Rs 250 on a minimum spend of Rs 1,000 with PayZapp. TCA',
  'Upto Rs 500 Cashback on Mobikwik wallet transaction of min Rs 999. Use Code MBK500 on Mobikwik. TCA',
];

export const addresses = [
  {
    id: 1,
    name: 'Alec Benjamin',
    mobile: '8978675645',
    type: 'HOME',
    address: 'A-23, Viking Street, New Delhi',
    state: 'New Delhi',
    pincode: '110045',
    city: 'South Delhi',
    default: true,
  },
  {
    id: 2,
    name: 'Natasha Romanoff',
    mobile: '8178675045',
    type: 'HOME',
    address: 'A-23, New York, USA',
    state: 'New York',
    pincode: '2637828',
    city: 'New York',
    default: false,
  },
  {
    id: 3,
    name: 'Manoj Kumar',
    type: 'OFFICE',
    mobile: '9179067451',
    address: 'A-112, Defence Colony, New Delhi',
    state: 'New Delhi',
    pincode: '110015',
    city: 'East Delhi',
    default: false,
  },
];

export const size = {
  type1: ['26', '28', '30', '32', '34', '36', '38', '40', '42', '44', '46'],
  type2: ['S', 'M', 'L', 'XL', 'XXL'],
};

export const quantity = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export const cardData = [
  {
    name: 'Harsh Kumar',
    number: '5555 5555 5555 4444',
    expiry: '02/25',
    type: 'mastercard',
  },
  {
    name: 'Akash Bhatia',
    number: '4111 1111 1111 1111',
    expiry: '04/28',
    type: 'visa',
  },
  {
    name: 'Ajay Nagar',
    number: '5577 0000 5577 0004',
    expiry: '04/22',
    type: 'mastercard',
  },
];

export const shoppingBagItems = [
  {
    company: 'Jack & Jones',
    title: 'Men Blue Skinny Fit',
    size: '26',
    qty: '1',
    price: 20,
    image: require('../Assets/Images/jeans.jpg'),
    type: 'type1',
    quantity: 1,
  },
  {
    company: 'WROGN',
    title: 'Black Printed Slim Fit T-Shirt',
    size: 'XL',
    qty: '1',
    price: 24,
    image: require('../Assets/Images/tshirts.jpg'),
    type: 'type2',
    quantity: 1,
  },
  {
    company: 'Roadster',
    title: 'Solid V-Neck T-shirts',
    size: 'M',
    qty: '1',
    price: 21,
    image: require('../Assets/Images/polo.png'),
    type: 'type2',
    quantity: 1,
  },
];

export const wishlistItems = [
  {
    brand: 'Roadster',
    price: 50,
    discount: 20,
    image: require('../Assets/Images/tshirts.jpg'),
  },
  {
    brand: 'HERE&NOW',
    price: 20,
    discount: 10,
    image: require('../Assets/Images/polo.png'),
  },
  {
    brand: 'WROGN',
    price: 25,
    discount: 10,
    image: require('../Assets/Images/shirt.jpg'),
  },
  {
    brand: 'ether',
    price: 20,
    discount: 10,
    image: require('../Assets/Images/trousers.jpg'),
  },
];

export const outOfStockItems = [
  {
    brand: 'ether',
    price: 23,
    image: require('../Assets/Images/trousers.jpg'),
  },
  {
    brand: 'Nike',
    price: 17,
    image: require('../Assets/Images/footwear.jpg'),
  },
  {
    brand: 'Adidas',
    price: 28,
    image: require('../Assets/Images/polo.png'),
  },
];

export const ordersData = [
  {
    type: 'Delivered',
    date: 'On Tue, 15 Jan 2021',
    iconImage: require('../Assets/Images/delivery.png'),
    productTitle: 'HRX by Hrithik Roshan',
    productSubtitle: 'Ultralyte Men Red Polo',
    productImage: require('../Assets/Images/polo.png'),
    size: 'M',
  },
  {
    type: 'Cancelled',
    date: 'On Thu, 19 Feb 2021 as per your request',
    iconImage: require('../Assets/Images/cancel.png'),
    productTitle: 'US Polo Assn.',
    productSubtitle: 'Men Navy Blue Shirt',
    refund: 'Rs 1379 on Sat, 20 Feb',
    productImage: require('../Assets/Images/shirt.jpg'),
    size: 'M',
  },
  {
    type: 'Returned',
    date: 'On Thu, 19 Feb 2021 as per your request',
    iconImage: require('../Assets/Images/back.png'),
    refund: 'Rs 600 on Sat, 23 Feb',
    productTitle: 'WROGN',
    productSubtitle: 'Men Navy Blue Shirt',
    productImage: require('../Assets/Images/shirt.jpg'),
    size: 'M',
  },
];

export const carouselImages = [
  {
    img: require('../Assets/carousel3.png'),
    id: 1,
  },
  {
    img: require('../Assets/carousel1.png'),
    id: 2,
  },
  {
    img: require('../Assets/carousel4.png'),
    id: 3,
  },
  {
    img: require('../Assets/carousel2.png'),
    id: 4,
  },
];
