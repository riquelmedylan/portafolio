'use client';
import Link from "next/link";
import style from "./header.module.css";
import { ReactElement } from "react";
import { usePathname } from "next/navigation";

export default function Navbar(): ReactElement {
  const pathname = usePathname();
  return (
    <ol className={style.list}>
      <li>
        <Link href="/">{pathname === "/" ? "●" : "Inicio"}</Link>
      </li>
      <li>
        <Link href="/proyectos">
          {pathname === "/proyectos" ? "●" : "Proyectos"}
        </Link>
      </li>
      <li>
        <Link href="/informacion">
          {pathname === "/informacion" ? "●" : "Info"}
        </Link>
      </li>
      <li>
        <Link href="/contacto">{pathname === "/contacto" ? "●" : "Contacto"}</Link>
      </li>
    </ol>
  );
}
