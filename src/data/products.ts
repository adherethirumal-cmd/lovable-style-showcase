export interface Product {
  id: string;
  title: string;
  brand: string;
  price: number;
  originalPrice: number;
  rating: number;
  category: string;
  color: string;
  image: string;
}

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "Classic Cotton T-Shirt",
    brand: "Lovable",
    price: 599,
    originalPrice: 999,
    rating: 4.3,
    category: "Tops",
    color: "Blue",
    image: "/images/tshirt.jpg",
  },
  {
    id: "p2",
    title: "Slim Fit Jeans",
    brand: "Lovable",
    price: 1299,
    originalPrice: 1799,
    rating: 4.5,
    category: "Bottoms",
    color: "Indigo",
    image: "/images/jeans.jpg",
  },
  {
    id: "p3",
    title: "Casual Linen Shirt",
    brand: "Lovable",
    price: 799,
    originalPrice: 1199,
    rating: 4.1,
    category: "Shirts",
    color: "White",
    image: "/images/shirt.jpg",
  },
  {
    id: "p4",
    title: "Comfort Leggings",
    brand: "Lovable",
    price: 499,
    originalPrice: 699,
    rating: 4.6,
    category: "Bottoms",
    color: "Black",
    image: "/images/leggings.jpg",
  },
  {
    id: "p5",
    title: "Sporty Hoodie",
    brand: "Lovable",
    price: 1399,
    originalPrice: 1999,
    rating: 4.4,
    category: "Outerwear",
    color: "Grey",
    image: "/images/hoodie.jpg",
  },
  {
    id: "p6",
    title: "Summer Midi Dress",
    brand: "Lovable",
    price: 1599,
    originalPrice: 2199,
    rating: 4.7,
    category: "Dresses",
    color: "Floral",
    image: "/images/dress.jpg",
  },
  {
    id: "p7",
    title: "Wool Blend Blazer",
    brand: "Lovable",
    price: 2499,
    originalPrice: 3499,
    rating: 4.8,
    category: "Outerwear",
    color: "Navy",
    image: "/images/blazer.jpg",
  },
  {
    id: "p8",
    title: "Ribbed Knit Sweater",
    brand: "Lovable",
    price: 1199,
    originalPrice: 1699,
    rating: 4.5,
    category: "Tops",
    color: "Cream",
    image: "/images/sweater.jpg",
  },
];

export function formatPrice(n: number): string {
  return `₹${n.toFixed(0)}`;
}
