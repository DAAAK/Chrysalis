import { logo, body, face, makeup, nails, hair } from "../assets";
import { ICard } from "../types/card";

export const testimonialsCard: ICard[] = [
  {
    name: "John Doe",
    title: "Patient",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique scelerisque lorem, vel malesuada velit auctor sit amet. Fusce ut ipsum euismod, pretium risus vel, sollicitudin odio. Sed id elit id elit congue accumsan vel et neque.",
    image: logo,
  },
  {
    name: "Jane Smith",
    title: "Patient",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique scelerisque lorem, vel malesuada velit auctor sit amet. Fusce ut ipsum euismod, pretium risus vel, sollicitudin odio. Sed id elit id elit congue accumsan vel et neque.",
    image: logo,
  },
  {
    name: "Bob Johnson",
    title: "Patient",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique scelerisque lorem, vel malesuada velit auctor sit amet. Fusce ut ipsum euismod, pretium risus vel, sollicitudin odio. Sed id elit id elit congue accumsan vel et neque.",
    image: logo,
  },
  {
    name: "Bob Johnson",
    title: "Patient",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique scelerisque lorem, vel malesuada velit auctor sit amet. Fusce ut ipsum euismod, pretium risus vel, sollicitudin odio. Sed id elit id elit congue accumsan vel et neque.",
    image: logo,
  },
  {
    name: "Bob Johnson",
    title: "Patient",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique scelerisque lorem, vel malesuada velit auctor sit amet. Fusce ut ipsum euismod, pretium risus vel, sollicitudin odio. Sed id elit id elit congue accumsan vel et neque.",
    image: logo,
  },
  {
    name: "Bob Johnson",
    title: "Patient",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique scelerisque lorem, vel malesuada velit auctor sit amet. Fusce ut ipsum euismod, pretium risus vel, sollicitudin odio. Sed id elit id elit congue accumsan vel et neque.",
    image: logo,
  },
];

export const servicesCard: ICard[] = [
  {
    title: "Soins du visage",
    description:
      "Laissez vous guider par l'expérience et l'expertise de nos esthéticiennes pour des soins du visage adaptés à vos besoins et envies.",
    image: face,
  },
  {
    title: "Soins du corps",
    description:
      "Perdez centimètres après centimètres grâce à des soins innovants, amincissants et sculptants.",
    image: body,
  },
  {
    title: "Make-Up",
    description:
      "Laissez vous sublimer tout les jours ou pour des occasions spéciales avec un maquillage de qualité, adapté à vos envies.",
    image: makeup,
  },
  {
    title: "Onglerie",
    description:
      "Faites nous confiance pour chouchouter vos mains et vos pieds.",
    image: nails,
  },
  {
    title: "Coiffure",
    description:
      "Venez découvrir nos soins capillaires pour des cheveux plus sains et plus forts.",
    image: hair,
  },
];

export const teamMembersCard: ICard[] = [
  {
    name: "John Smith",
    title: "Lead Physician",
    description: "Dr. John Smith is a board-certified physician with over 10 years of experience in healthcare. He specializes in internal medicine and has a passion for helping patients improve their overall health and wellbeing.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Doe",
    title: "Nurse Practitioner",
    description: "Jane Doe is a licensed nurse practitioner with over 5 years of experience in healthcare. She specializes in women's health and is dedicated to providing high-quality care to her patients.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Bob Johnson",
    title: "Medical Assistant",
    description: "Bob Johnson is a certified medical assistant with a background in patient care and administration. He works closely with our team of healthcare professionals to ensure that our patients receive the best possible care.",
    image: "https://via.placeholder.com/150",
  },
];