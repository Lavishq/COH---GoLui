import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div class="flex justify-between">
        <h1 className="text-xl px-16">
          <Link href="/">
            <a>Game of Life</a>
          </Link>
        </h1>

        <div class="hidden md:flex space-x-6">
          <Link href="/getStarted">
            <a class="hover:text-[#9095a7]">Get Started</a>
          </Link>
          <Link href="/">
            <a class="hover:text-[#9095a7]">About Us</a>
          </Link>
          <Link href="/community">
            <a class="hover:text-[#9095a7]">Community</a>
          </Link>
          <Link href="/">
            <a class="hover:text-[#9095a7]">Profile</a>
          </Link>
        </div>
          <a>
            <ConnectButton />
          </a>
      </div>
    </>
  );
}

export default Navbar;
