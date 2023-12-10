import foto from "./assets/photo.png";
import tech from "./assets/tech.png";
import ai from "./assets/ai.jpg";
import design from "./assets/design.jpg";

let interest = [
  {
    id: 1,
    name: "photographer",
    logo: foto,
  },
  {
    id: 2,
    name: "Design Graphic",
    logo: design,
  },
  {
    id: 3,
    name: "Technology",
    logo: tech,
  },
  {
    id: 4,
    name: "Artifical Intellegence",
    logo: ai,
  },
];

export function getInterest() {
  return interest;
}
