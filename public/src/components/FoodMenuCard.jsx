import { Card } from "flowbite-react";
import React from "react";

const MenuCard = ({ title, items, itemKey }) => (
  <div className="mb-10 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-5">{title.toUpperCase()}</h1>
    <div className="grid grid-cols-4 gap-4">
      {items.map((item) => (
        <div className="h-full" key={item.id}>
          <Card imgSrc={item.image_url} className="food-card">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 text-white">
              {item[itemKey]}
            </h5>
          </Card>
        </div>
      ))}
    </div>
  </div>
);

export default MenuCard;
