import { Button, Header } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <Header
      height={60}
      p="xl"
      sx={{
        display: "flex",
        gap: "1.5rem",
        alignItems: "center",
        background: "transparent",
        border: "none",
        justifyContent: "space-between",
      }}
    >
      <Link href="">
        <Image src="/images/logo.svg" width={140} height={18} alt="" />
      </Link>
      <div className="flex gap-6 items-center text-white">
        <Link href="" className="hover:underline">
          Home
        </Link>
        <Link href="" className="hover:underline">
          About
        </Link>
        <Link href="" className="hover:underline">
          Real Estate
        </Link>
        <Link href="" className="hover:underline">
          Construction
        </Link>
        <Link href="" className="hover:underline">
          Consultancy
        </Link>
        <Link href="" className="hover:underline">
          Contact Us
        </Link>
        <Button
          variant="outline"
          className="text-white bg-transparent border-white rounded-full hover:bg-white/10 hover:duration-200 duration-200"
        >
          Get Started
        </Button>
      </div>
    </Header>
  );
}
