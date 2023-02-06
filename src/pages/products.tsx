import Head from "next/head";
import Image from "next/image";

import ProductsList from "../components/productsList"
import Navbar from '../components/navBar';

export default function Products(): JSX.Element {
  return (
    <div className="bg-sky-300">
        <Navbar />
        <ProductsList />
    </div>
  );
}
