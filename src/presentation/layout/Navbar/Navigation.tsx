import Image from "next/image";
import Link from "next/link";
import Logo from "@/src/presentation/assets/logo/Logo.png";
import User from "@/src/presentation/assets/profile/User.png";
import Menu from "@/src/presentation/assets/menu/Menu.png";

import { navLinks } from "./constants/links";

export function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-5 py-4 lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="logo" />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
          {navLinks.map((item, index) => (
            <Link href="/" key={index} className="text-[#36485C] font-medium">
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5">
        <p className="hidden lg:block font-medium text-[#36485C]">
          Abrir uma conta
        </p>

        <div className="flex items-center gap-x-2">
          <Image src={User} alt="User Profile" />
          <span>Login</span>
        </div>

        <Image src={Menu} alt="Menu Button" className="lg:hidden" />
      </div>
    </nav>
  );
}
