// imports

import RequestCard from "@/app/ui/RequestCard";
import { Button } from "flowbite-react";

export default function Page() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 px-4 gap-4 max-w-7xl mx-auto h-full w-ful text-gray-200">
      <div className="col col-span-3">
        <p className="text-gray-600 p-3 my-3 bg-gray-100 rounded-md border-gray-50">
          This is the approval center. You can provide approval to other
          companies that requested to query your data for them to use in their
          reporting. You can revert authorizations at any time.
        </p>
      </div>
      <div className="col col-span-4">
        <hr />
      </div>
      <div className="col col-span-2">
        <div className="grid grid-cols-subgrid gap-1 col-span-1">
          <h1 className="p-5 bg-teal-900 rounded-md">
            Companies requiring your approval
          </h1>
          <RequestCard>
            <h2 className="font-bold">Concrete4You</h2>
            <p>
              When agreeing to this message by pressing &apos;Approve&apos;, the
              user consents to sharing the necessary data with the party that
              requested authorization &apos;Concrete4You&apos;. The user has a
              right to withdraw this consent at any time. DataGem can not be
              held accountable for leakage of data if the user did consent to
              sharing.
            </p>
            <Button className=" w-32">Approve</Button>
          </RequestCard>
          <RequestCard>
            <h2 className="font-bold">BuildersBest</h2>
            <p>
              When agreeing to this message by pressing &apos;Approve&apos;, the
              user consents to sharing the necessary data with the party that
              requested authorization &apos;BuildersBest&apos;. The user has a
              right to withdraw this consent at any time. DataGem can not be
              held accountable for leakage of data if the user did consent to
              sharing.
            </p>
            <Button className=" w-32">Approve</Button>
          </RequestCard>
          <RequestCard>
            <h2 className="font-bold">CAT - Caterpillar Inc.</h2>
            <p>
              When agreeing to this message by pressing &apos;Approve&apos;, the
              user consents to sharing the necessary data with the party that
              requested authorization &apos;CAT - Caterpillar Inc.&apos;. The
              user has a right to withdraw this consent at any time. DataGem can
              not be held accountable for leakage of data if the user did
              consent to sharing.
            </p>
            <Button className=" w-32">Approve</Button>
          </RequestCard>
        </div>
      </div>
      <div className="col col-span-2">
        <div className="grid grid-cols-subgrid gap-1 col-span-1">
          <h1 className="p-5 bg-teal-900 rounded-md">
            Authorized Associates &#40;These linked companies can view your data
            &#41;
          </h1>
          <RequestCard>
            <h2 className="font-bold">China Construction</h2>
            <p>
              You have agreed to the sharing of the data of your company with
              China Construction. If this decision has to be reverted, press
              &apos;Deny&apos;.
            </p>
            <Button className=" w-32 bg-pink-700">Withdraw</Button>
          </RequestCard>
        </div>
      </div>
    </section>
  );
}
