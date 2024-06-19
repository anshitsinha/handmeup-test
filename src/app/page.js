import { collection, getDocs, getFirestore, orderBy, query } from "firebase/firestore";
import { app } from "../firebase";
import Products from "src/components/Products";

// This is a server component, it fetches data directly on the server
export default async function Home() {
  const db = getFirestore(app);
  const q = query(collection(db, "products"), orderBy("timestamp", "desc"));
  const querySnapshot = await getDocs(q);
  let data = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });

  return (
    <div className="p-8">
      <Products data={data} />
    </div>
  );
}
