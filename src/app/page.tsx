/** Add your relevant code here for the issue to reproduce */

import Link from "next/link";

import "../assets/index.scss";
import { Component } from "../components/Component";

export default function Home() {
  return (
    <>
      <p>foobar</p>
      <Link href="/other">other</Link>
      <Component />
    </>
  );
}
