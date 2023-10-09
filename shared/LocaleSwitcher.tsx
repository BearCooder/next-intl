import React from "react";
import { Link } from "../navigation";
import Image from "next/image";

export default function LocaleSwitcher() {
  return (
    <>
      <div className="md:w-20 w-14">
        <Link href="/" locale="de">
          DE
        </Link>
        <br />
        <Link href="/" locale="en">
          EN
        </Link>
      </div>
    </>
  );
}
