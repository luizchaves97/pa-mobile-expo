import { Clother, Order } from '../types';

export const mockClotherData: Clother[] = [
  {
    id: 1,
    image:
      'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-evase-com-estampa-poa-vermelho_308981_600_1.jpg',
    name: 'Vestido Avase com estampa',
    price: 80.0,
    color: 'Colorido',
    description: 'Vestido muito bonito',
    discout_price: 60.0,
    size: 'P',
  },
  {
    id: 2,
    image:
      'https://ae01.alicdn.com/kf/HTB1Yf70aUCF3KVjSZJnq6znHFXat/Hirigin-roupa-feminina-de-ver-o-top-cropped-rosa-cal-as-trajes-esportivos-2-pe-as.jpg_q50.jpg',
    name: 'Hirigin roupa feminina de verão',
    price: 50.0,
    color: 'Roza',
    description: 'Top e calça muito bonito',
    discout_price: 30.0,
    size: 'P',
  },
  {
    id: 3,
    image: 'https://www.todamulher.com.br/wp-content/uploads/2020/02/saia.jpg',
    name: 'Saia Bengaline Feminina',
    price: 30.0,
    color: 'Colorido',
    description: 'Vestido muito bonito',
    discout_price: 20.0,
    size: 'GG',
  },
  {
    id: 4,
    image:
      'https://img.elo7.com.br/product/zoom/272CFD9/saia-longa-roupas-feminina-roupa-feminina.jpg',
    name: 'Saia Longa Roupas Feminina',
    price: 15.0,
    color: 'Preto',
    description: 'Vestido muito bonito',
    discout_price: 10.0,
    size: 'P',
  },
  {
    id: 5,
    image:
      'https://d26lpennugtm8s.cloudfront.net/stores/490/018/products/img-20200502-wa00511-4ad060aa69626389d615884737578942-640-0.jpg',
    name: 'Kit C/10 Blusinha the muscle',
    price: 20.0,
    color: 'Verde',
    description: 'Blusinha muito bonito',
    discout_price: 15.0,
    size: 'M',
  },
  {
    id: 5,
    image:
      'https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/vestido-curto/vestido-celina-floral_311777_1000_1.jpg',
    name: 'Moda Pop - Vestido Celina Floral',
    price: 30.0,
    color: 'Floral',
    description:
      'Vestido em helanca. Modelo com decote redondo, com mangas curtas, recorte com elástico na cintura, recorte no centro traseiro da saia e barra assimétrica. Comprimento: Curto.',
    discout_price: 20.0,
    size: 'M',
  },
];

export const mockOrderData: Order[] = [
  {
    id: 1,
    order: {
      clother: mockClotherData[0],
      date: '22/02/2020',
    },
  },
  {
    id: 2,
    order: {
      clother: mockClotherData[1],
      date: '22/02/2020',
    },
  },
  {
    id: 3,
    order: {
      clother: mockClotherData[2],
      date: '22/02/2020',
    },
  },
  {
    id: 4,
    order: {
      clother: mockClotherData[3],
      date: '22/02/2020',
    },
  },
];
