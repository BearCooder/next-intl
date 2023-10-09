import Product from "../interface/Gallery";
import Nature from "../images/nature.jpg";
import Nature2 from "../images/nature2.jpg";
import Nature3 from "../images/nature3.jpg";
import Cat from "../images/cat.jpg";
import Cat2 from "../images/cat2.jpg";
import Cat3 from "../images/cat3.jpg";
import Dog from "../images/dog.jpg";
import Dog2 from "../images/dog2.jpg";
import Dog3 from "../images/dog3.jpg";
import Architecture from "../images/architecture.jpg";
import Architecture2 from "../images/architecture2.jpg";
import Architecture3 from "../images/architecture3.jpg";
import { useTranslations } from "next-intl";

let nextArtworkId = 1;

const products: Product[] = [
  {
    id: nextArtworkId++,
    coverImage: Nature,
    title: "Nature",
    description: GetNatureDescription(),
    category: "Nature",
    year: "2023",
    images: [Nature2, Nature3],
  },
  {
    id: nextArtworkId++,
    coverImage: Cat,
    title: "Cat",
    description: GetCatDescription(),
    category: "Animal",
    year: "2020",
    images: [Cat2, Cat3],
  },
  {
    id: nextArtworkId++,
    coverImage: Dog,
    title: "Dog",
    description: GetDogDescription(),
    category: "Animal",
    year: "2019",
    images: [Dog2, Dog3],
  },
  {
    id: nextArtworkId++,
    coverImage: Architecture,
    title: "Architecture",
    description: GetArchitectureDescription(),
    category: "Architecture",
    year: "2021",
    images: [Architecture2, Architecture3],
  },
];

export default products;

function GetNatureDescription() {
  const t = useTranslations("Products");
  return `{t('descriptionNature')}`;
}

function GetCatDescription() {
  const t = useTranslations("Products");
  return `{t('descriptionCat')}`;
}

function GetDogDescription() {
  const t = useTranslations("Products");
  return `{t('descriptionDog')}`;
}

function GetArchitectureDescription() {
  const t = useTranslations("Products");
  return `{t('descriptionArchitecture')}`;
}
