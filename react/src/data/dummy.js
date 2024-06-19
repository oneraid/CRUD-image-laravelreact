import {
  miniOne,
  miniThree,
  miniTwo,
  portraitPhotography,
  foodPhotography,
  naturePhotography,
  architecturePhotography,
  macroPhotography,
  peoplePhotography,
} from "../asset";

export const navLink = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "feature",
    name: "Feature",
  },
  {
    id: "object",
    name: "Object",
  },
  {
    id: "contact",
    name: "Contact",
  },
  {
    id: "about",
    name: "About",
  },
];

export const features = [
  {
    image: miniOne,
    title: "Explore and Discover",
    desc: "Explore and discover a variety of stunning images.",
  },
  {
    image: miniTwo,
    title: "Organize Your Favorites",
    desc: "Effortlessly organize and manage your favorite images.",
  },
  {
    image: miniThree,
    title: "Share Your Moments",
    desc: "Share your cherished moments with friends and family.",
  },
];

export const object = [
  {
    image: portraitPhotography,
    title: "Portrait Photography",
    desc: "Captivating portraits showcasing the beauty of individuals and their expressions.",
  },
  {
    image: foodPhotography,
    title: "Food Photography",
    desc: "Delicious and visually appealing food images that celebrate the art of culinary photography.",
  },
  {
    image: naturePhotography,
    title: "Nature Photography",
    desc: "Stunning landscapes and close-ups that capture the essence and beauty of the natural world.",
  },
  {
    image: architecturePhotography,
    title: "Architecture Photography",
    desc: "Architectural marvels captured in a visually striking and artistic manner.",
  },
  {
    image: macroPhotography,
    title: "Macro Photography",
    desc: "Intricate and detailed shots that explore the beauty of small subjects up close.",
  },
  {
    image: peoplePhotography,
    title: "People Photography",
    desc: "Heartwarming moments and expressive shots that showcase the diversity of human emotions.",
  },
];

export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};