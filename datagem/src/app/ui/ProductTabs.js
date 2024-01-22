"use client";

// imports

import { Button, Tabs } from "flowbite-react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function ProductTabs() {
  const Pluscircleicon = { icon: PlusCircleIcon };
  return (
    <>
      <Tabs aria-label="Tabs with icons" style="underline">
        <Tabs.Item active title="Concrete">
          <h1>
            <strong>Concrete</strong>
          </h1>
          <p>Supplier: Concrete4You</p>
          <p>Units bought: 50</p>
          <p>CO2 kg/m3: 1000</p>
          <p>Price: &euro; 2000,-</p>
          <Button className="bg-pink-700 px-5 py-2 my-1">Edit</Button>
        </Tabs.Item>
        <Tabs.Item title="Steel">
          <h1>
            <strong>Steel</strong>
          </h1>
          <p>Supplier: Concrete4You</p>
          <p>Units bought: 50</p>
          <p>CO2 kg/m3: 1000</p>
          <p>Price: &euro; 2000,-</p>
          <Button className="bg-pink-700 px-5 py-2 my-1">Edit</Button>
        </Tabs.Item>
        <Tabs.Item title="Machines">
          <h1>
            <strong>Machines</strong>
          </h1>
          <p>Supplier: Concrete4You</p>
          <p>Units bought: 50</p>
          <p>CO2 kg/m3: 1000</p>
          <p>Price: &euro; 2000,-</p>
          <Button className="bg-pink-700 px-5 py-2 my-1">Edit</Button>
        </Tabs.Item>
        <Tabs.Item title="Bricks">
          <h1>
            <strong>Bricks</strong>
          </h1>
          <p>Supplier: Concrete4You</p>
          <p>Units bought: 50</p>
          <p>CO2 kg/m3: 1000</p>
          <p>Price: &euro; 2000,-</p>
          <Button className="bg-pink-700 px-5 py-2 my-1">Edit</Button>
        </Tabs.Item>
      </Tabs>
      <Button>+ Add product</Button>
    </>
  );
}
