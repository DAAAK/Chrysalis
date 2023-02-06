import Head from "next/head";
import Image from "next/image";

import ProductsList from "../components/Products"
import Navbar from '../components/Navbar';

export default function Products(): JSX.Element {
  return (
    <div className="bg-sky-300">
        <Navbar />
        <ProductsList />
    </div>
  );
}
