import { logo } from "../assets";
import SvgIcon from "./svgIcon";
import UsefulLinks from './usefulLinks';

const Footer = () => (
  <footer className="mt-10 bg-[#93d9f0] text-center text-black bg-primary lg:text-left">
    <div className="flex items-center justify-center p-6 border-b border-black lg:justify-between">
      <div className="mr-12 lg:block">
        <span>Rejoingnez nous sur nos réseaux:</span>
      </div>
      <div className="flex justify-center items-center mb-4 space-x-3">
        <a
          href="https://www.facebook.com/people/Chrysalis/100028843105719/"
          target="_blank"
          className="text-black hover:text-white h-6 w-6"
          rel="noreferrer"
        >
          <SvgIcon type={""} icon={""} category={""} info={""} svg={"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"} />
        </a>
        <a href="https://www.instagram.com/christelc1102/?hl=fr"
          className="text-black hover:text-white h-6 w-6"
          target="_blank"
          rel="noreferrer">
          <SvgIcon type={""} icon={"instagram"} category={""} info={""} svg={"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"} />
        </a>
        <a href="#!" className="text-black hover:text-white h-6 w-6">
          <SvgIcon type={""} icon={"linkedin-in"} category={""} info={""} svg={"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"} />
        </a>
      </div>
    </div>
    <div className="py-10 mx-6 text-center md:text-left">
      <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h6 className="flex items-center justify-center mb-4 font-semibold uppercase md:justify-start">
            <img src={logo} alt="chrysalis-logo" className="h-40 w-40" />
          </h6>
        </div>
        <div>
          <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
            Liens utiles
          </h6>
          <UsefulLinks title={"Prestations"} link={"/features"} />
          <UsefulLinks title={"Commandes"} link={"/orders"} />
          <UsefulLinks title={"Reservations"} link={"/booking"} />
          <UsefulLinks title={"Aide"} link={"/help"} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h6 className="flex justify-center mb-4 font-semibold uppercase md:justify-start">
            Contacts
          </h6>
          <div className="items-center justify-center space-y-3 md:space-y-3">
            <SvgIcon type={"contact"} icon={"phone"} category={"Phone"} info={"+225 07 77 19 58 78"} svg={"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"} />
            <SvgIcon type={"contact"} icon={"envelope"} category={"Email"} info={"chrysalislaser@gmail.com"} svg={"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"} />
            <SvgIcon type={"contact"} icon={"home"} category={"Address"} info={"Cocody Val Doyen Abidjan, Côte d'Ivoire"} svg={"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"} />
          </div>
        </div>
      </div>
    </div>
    <div className="p-6 text-center bg-primary">
      <span>© 2023 Copyright:</span>
      <a
        className="font-semibold text-black-600"
        href="https://tailwind-elements.com/"
      >
        Chrysalis
      </a>
    </div>
  </footer>
);

export default Footer;
