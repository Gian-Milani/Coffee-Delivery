import tradicional from '../assets/coffee/tradicional.svg'
import americano from '../assets/coffee/americano.svg'
import cremoso from '../assets/coffee/cremoso.svg'
import gelado from '../assets/coffee/gelado.svg'
import cafeLeite from '../assets/coffee/cafe-leite.svg'
import latte from '../assets/coffee/latte.svg'
import capuccino from '../assets/coffee/capuccino.svg'
import macchiato from '../assets/coffee/macchiato.svg'
import mocaccino from '../assets/coffee/mocaccino.svg'
import chocolateQuente from '../assets/coffee/chocolate-quente.svg'
import cubano from '../assets/coffee/cubano.svg'
import havaiano from '../assets/coffee/havaiano.svg'
import arabe from '../assets/coffee/arabe.svg'
import irlandes from '../assets/coffee/irlandes.svg'

export const ListCoffee = [
  {
    id: 1,
    image: tradicional,
    type: [{ text: 'TRADICIONAL' }],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: '5,00',
  },
  {
    id: 2,
    image: americano,
    type: [{ text: 'TRADICIONAL' }],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: '4,00',
  },
  {
    id: 3,
    image: cremoso,
    type: [{ text: 'TRADICIONAL' }],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: '7,00',
  },
  {
    id: 4,
    image: gelado,
    type: [{ text: 'TRADICIONAL' }, { text: 'GELADO' }],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: '5,00',
  },
  {
    id: 5,
    image: cafeLeite,
    type: [{ text: 'TRADICIONAL' }, { text: 'COM LEITE' }],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: '5,50',
  },
  {
    id: 6,
    image: latte,
    type: [{ text: 'TRADICIONAL' }, { text: 'COM LEITE' }],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: '9,00',
  },
  {
    id: 7,
    image: capuccino,
    type: [{ text: 'TRADICIONAL' }, { text: 'COM LEITE' }],
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: '11,00',
  },
  {
    id: 8,
    image: macchiato,
    type: [{ text: 'TRADICIONAL' }, { text: 'COM LEITE' }],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: '11,00',
  },
  {
    id: 9,
    image: mocaccino,
    type: [{ text: 'TRADICIONAL' }, { text: 'COM LEITE' }],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: '11,00',
  },
  {
    id: 10,
    image: chocolateQuente,
    type: [{ text: 'ESPECIAL' }, { text: 'COM LEITE' }],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: '12,00',
  },
  {
    id: 11,
    image: cubano,
    type: [{ text: 'ESPECIAL' }, { text: 'ALCOÓLICO' }, { text: 'GELADO' }],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: '15,00',
  },
  {
    id: 12,
    image: havaiano,
    type: [{ text: 'ESPECIAL' }],
    title: 'Havaino',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: '10,00',
  },
  {
    id: 13,
    image: arabe,
    type: [{ text: 'ESPECIAL' }],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: '11,00',
  },
  {
    id: 14,
    image: irlandes,
    type: [{ text: 'ESPECIAL' }, { text: 'ALCOÓLICO' }],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açucar e chantilly',
    value: '17,00',
  },
]
