export type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  isLiquidBased: boolean;
};

interface ProductsData {
  products: Product[];
}

export const productsData: ProductsData = {
  products: [
    {
      id: 1,
      name: 'face mask',
      price: 2.50,
      img: 'https://www.maxpack.co.uk/wp-content/uploads/2020/04/Z7349.jpg',
      isLiquidBased: false,
    },
    {
      id: 2,
      name: 'toilet paper',
      price: 0.65,
      img: 'https://media.nisbets.com/asset/core/prodimage/largezoom/gd751_jantex-std.jpg',
      isLiquidBased: false,
    },
    {
      id: 3,
      name: 'hand sanitizer',
      price: 19.99,
      img: 'https://www.dorset-nursing.co.uk/images/detailed/2/purell-advanced-hygienic-hand-rub-300ml-1x12.jpg',
      isLiquidBased: true,
    },
  ]
};