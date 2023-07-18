import { FaExclamation } from "react-icons/fa";

const Page404 = () => (
  <p className="text-white text-center py-4 min-h-[200px] flex flex-col items-center justify-center">
    <FaExclamation className="text-2xl mr-2 text-[#C8A82F]" />
    <span>Opps!</span>
    <span>Sorry, the content you are looking for doesn't exist.</span>
  </p>
);

export default Page404;
