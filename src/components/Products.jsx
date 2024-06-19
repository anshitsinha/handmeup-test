import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import { app } from "../firebase";
import { Product } from "./Product";


export default function Products({ data }) {

  return (
    <div className="container mx-auto p-4 flex flex-wrap justify-center">
      {data.map((product) => (
        <Product key={product.id} product={product} id={product.id} />
      ))}
    </div>
  );
}
