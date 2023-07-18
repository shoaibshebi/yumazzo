import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const Page404 = () => (
  <p className="text-white text-center py-4 min-h-[200px] flex flex-col items-center justify-center">
    <ExclamationCircleIcon className="text-2xl mr-2 text-[#C8A82F] h-7 w-7" />

    <span>Opps!</span>
    <span>Sorry, the content you are looking for doesn't exist.</span>
  </p>
);

export default Page404;
