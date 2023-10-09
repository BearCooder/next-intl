import { StaticImageData } from "next/image";

export default interface Product {
  id: number;
  coverImage: StaticImageData;
  title: string;
  description: string;
  category: string;
  year: string;
  images: StaticImageData[];
}
