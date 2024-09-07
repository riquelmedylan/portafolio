import { ReactElement } from "react";
import { redirect } from "next/navigation";

export default function NotFound(): ReactElement {
    redirect('/')
}