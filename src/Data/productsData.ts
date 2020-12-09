export type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  isLiquidBased: boolean;
  discountAmount: number;
  discountQuantity: number;
  discountRule?: string;
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
      discountAmount: 1.00,
      discountQuantity: 2,
      discountRule: 'Face Masks 2 for £4',
    },
    {
      id: 2,
      name: 'toilet paper',
      price: 0.65,
      img: 'https://media.nisbets.com/asset/core/prodimage/largezoom/gd751_jantex-std.jpg',
      isLiquidBased: false,
      discountAmount: 0.65,
      discountQuantity: 6,
      discountRule: 'Toilet Paper 6 for 5',
    },
    {
      id: 3,
      name: 'hand sanitizer',
      price: 19.99,
      img: 'https://www.dorset-nursing.co.uk/images/detailed/2/purell-advanced-hygienic-hand-rub-300ml-1x12.jpg',
      isLiquidBased: true,
      discountAmount: 0,
      discountQuantity: 0,
    },
  ]
};