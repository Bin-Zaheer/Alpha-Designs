import logo from "../../public/logo.png";
import { Button } from "../ui/button";
import Image from "next/image";

const Headerlogo = () => {
  return (
    <div className="flex justify-center px-20 items-center z-2 w-full py-4">
      <Image
        src={logo}
        alt="Profile picture"
        className="w-55"
      />
    </div>
  );
};

export default Headerlogo;
