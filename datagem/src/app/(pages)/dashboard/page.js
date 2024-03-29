import Image from "next/image";
import DashboardCard from "@/app/ui/DashboardCard";
import { Button } from "flowbite-react";
import Link from "next/link";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession();

  return (
    <section className="bg-indigo-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 px-4 gap-0.5 max-w-7xl mx-auto h-full w-ful text-gray-200">
        <div className="col-span-6">
          <h1 className="my-2 text-xl ">
            You are logged in as{" "}
            <span className="text-pink-600">{session.user.name}</span>
          </h1>
          <Image src="/graph.png" height={500} width={500} alt="Your network" />
        </div>

        <div className="col-span-6">
          <h1 className="my-2 text-xl">Action Center</h1>
          <DashboardCard className={`w-full`}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Semmtech wants to add <strong>Acme Inc.</strong> to their network.
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Do you want to authorize Semmtech to view your data?
            </p>
            <div className="grid grid-cold-1 gap-y-5 lg:grid-cols-3">
              <div className="col-span-1">
                <Button className="min-w-32">Accept</Button>
              </div>
              <div className="col-span-1">
                <Button className="min-w-32">Deny</Button>
              </div>
              <div className="col-span-1">
                <Link href="/my-requests">
                  <Button className="min-w-32">My Requests</Button>
                </Link>
              </div>
            </div>
          </DashboardCard>
          <DashboardCard>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage my network
            </h5>
            <Link href="/signup/1">
              <Button>Manage My Network</Button>
            </Link>
          </DashboardCard>
          <DashboardCard className={`w-full`}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Reminder! Update your data.
            </h5>
            <Button className="w-32">My Data</Button>
          </DashboardCard>
          <DashboardCard className={`w-full`}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Invite companies in your network
            </h5>
            <Button className="w-40">Copy Invite Link</Button>
          </DashboardCard>
          <DashboardCard className={`w-full`}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Companies in your network are updating their data. See what has
              changed for you.
            </h5>
            <Button className="w-40">My Network</Button>
          </DashboardCard>
        </div>
      </div>
    </section>
  );
}
