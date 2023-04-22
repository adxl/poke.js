import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { getBases, getProteins, getSizes, getToppings } from "../api/commons";
import FoodMenuCard from "../components/FoodMenuCard";

export default function Home() {
  const [_bases, setBases] = useState([]);
  const [_sizes, setSizes] = useState([]);
  const [_proteins, setProteins] = useState([]);
  const [_toppings, setToppings] = useState([]);

  useEffect(() => {
    Promise.all([getBases(), getSizes(), getProteins(), getToppings()]).then(
      ([bases, sizes, proteins, toppings]) => {
        setBases(bases.data);
        setSizes(sizes.data),
          setProteins(proteins.data),
          setToppings(toppings.data);
      }
    );
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <Card className="max-w-sm w-full py-4 text-white">
        <h1 className="text-3xl">Carte</h1>
      </Card>

      <div className="p-60 pt-10">
      <FoodMenuCard  title="Taille"  items={_sizes} itemKey='label' />
        <hr className="my-6"/>
      <FoodMenuCard  title="base"  items={_bases} itemKey='name' />
        <hr className="my-6"/>
      <FoodMenuCard  title="protéines"  items={_proteins} itemKey='name' />
        <hr className="my-6"/>
      <FoodMenuCard  title="toppings"  items={_toppings} itemKey='name' />
      </div>

    </div>
  );
}

