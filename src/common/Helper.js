import kitchen from '../assets/images/webp/kitchen.webp'
import fire from '../assets/images/webp/fireplace.webp'
import shower from '../assets/images/webp/shower.webp'
import floor from '../assets/images/webp/floor.webp'
import tiling from '../assets/images/webp/tiling.webp'
import format from '../assets/images/webp/format.webp'
import ada from '../assets/images/webp/ADA.webp'

export const Card = [
    {
        img: kitchen,
        head: "Kitchen Backsplash",
        para: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga"
    },
    {
        img: shower,
        head: "Custom Showers",
        para: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga"

    },
    {
        img: floor,
        head: "Custom Flooring",
        para: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga"

    },
    {
        img: format,
        head: "Large Format Tiling",
        para: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga"

    },
    {
        img: tiling,
        head: "Wall Tiling",
        para: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga"

    },
    {
        img: ada,
        head: "ADA Compliant Showers",
        para: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga"

    },
    {
        img: fire,
        head: "Fireplace Tiling",
        para: "Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga"

    },
]

const uniqueLocations = [
  { name: 'Knoxville' },
  { name: 'Sevierville' },
  { name: 'Maynardville' },
];

const repeatTimes = 7 ; 
const locations = Array(repeatTimes).fill(uniqueLocations).flat().slice(0, -1);

export { locations };

export const accordionData = [
    {
      id: 'panel1',
      summary: 'Lörem ipsum koda astrobel: sutaveligen.',
      details: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.'
    },
    {
      id: 'panel2',
      summary: 'Rodod bänera viliga',
      details: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.'
    },
    {
      id: 'panel3',
      summary: 'Pregigt primasofi dede facebooka: förutom',
      details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.'
    },
    {
      id: 'panel4',
      summary: 'Ipsum koda astrobel: sutaveligen. Rodod bänera viliga.',
      details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.'
    },
    {
      id: 'panel5',
      summary: 'Rodod bänera viliga. Pregigt primasofi dede facebooka',
      details: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.'
    }
  ];