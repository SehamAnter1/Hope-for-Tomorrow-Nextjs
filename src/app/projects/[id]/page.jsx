// "use client";

import dynamic from "next/dynamic";
const Project_Page = dynamic(() => import("./Project_Page"), {
  suspense: true,
});
export default async function page({ params }) {
  const { id } = await params;
  return <Project_Page id={id} />;
}
