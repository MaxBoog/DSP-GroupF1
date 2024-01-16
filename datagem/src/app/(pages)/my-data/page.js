// imports

import RequestCard from "@/app/ui/RequestCard";
import { Button } from "flowbite-react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-4 px-4 gap-4 max-w-7xl mx-auto h-full w-ful text-gray-200">
        <div className="col col-span-3">
          <p className="text-gray-600 p-3 my-3 bg-gray-100 rounded-md border-gray-50">
            Here you can view your data, edit it and publish it to all your
            approved linked associates.
          </p>
        </div>
        <div className="col-span-1">
          <Link href="/my-data/edit-data">
            <Button className=" p-1.5 justify-self-end bg-pink-700 my-3">
              Edit Data
            </Button>
          </Link>
        </div>
        <div className="col col-span-4">
          <hr />
        </div>
        <div className="col-span-4 lg:col-span-2">
          <div className="grid grid-cols-subgrid col-span-1">
            <h2 className="p-5 bg-teal-900 rounded-md">
              Waste Generation &#40;metric tons&#41;
            </h2>
            <RequestCard>
              <div className="grid grid-cols-4">
                <div className="col col-start-1 col-end-3">Recycling</div>
                <div className="col col-end-5">3782</div>
                <div className="col-span-4">
                  <hr />
                </div>
                <div className="col col-start-1 col-end-3">Reuse</div>
                <div className="col col-end-5">335</div>
                <div className="col-span-4">
                  <hr />
                </div>
                <div className="col col-start-1 col-end-3">Energy recovery</div>
                <div className="col col-end-5">2003</div>
                <div className="col-span-4">
                  <hr />
                </div>
                <div className="col col-start-1 col-end-3">Landfilling</div>
                <div className="col col-end-5">1992</div>
                <div className="col-span-4">
                  <hr />
                </div>
                <div className="col col-start-1 col-end-3">Hazardous waste</div>
                <div className="col col-end-5">88</div>
                <div className="col-span-4">
                  <hr />
                </div>
                <div className="col col-start-1">
                  <strong>Total</strong>
                </div>
                <div className="col col-end-5">
                  <strong>8130</strong>
                </div>
                <div className="col-span-4">
                  <hr />
                </div>
              </div>
            </RequestCard>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2">
          <div className="grid grid-cols-subgrid col-span-1">
            <h2 className="p-5 bg-teal-900 rounded-md">
              Energy Consumption &#40;MWh&#41;
            </h2>
            <RequestCard>
              <div className="grid grid-cols-4">
                <div className="col col-start-1 col-end-3">Fuel from oil</div>
                <div className="col col-end-5">103 692</div>
                <div className="col-span-4">
                  <hr />
                </div>
                <div className="col col-start-1 col-end-3">Fuel from gas</div>
                <div className="col col-end-5">44 772</div>
                <div className="col-span-4">
                  <hr />
                </div>
                <div className="col col-start-1 col-end-3">
                  Purchased electricity
                </div>
                <div className="col col-end-5">102 989</div>
                <div className="col-span-4">
                  <hr />
                </div>
                <div className="col col-start-1 col-end-3">Purchased heat</div>
                <div className="col col-end-5">24 188</div>
                <div className="col-span-4">
                  <hr />
                </div>
                <div className="col col-start-1 col-end-3">
                  Purchased cooling
                </div>
                <div className="col col-end-5">51 453</div>
                <div className="col-span-4">
                  <hr />
                </div>
                <div className="col col-start-1">
                  <strong>Total</strong>
                </div>
                <div className="col col-end-5">
                  <strong>327 094</strong>
                </div>
                <div className="col-span-4">
                  <hr />
                </div>
              </div>
            </RequestCard>
          </div>
        </div>
      </section>
    </>
  );
}
