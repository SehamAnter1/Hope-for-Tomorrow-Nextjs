"use client"
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Index() {
  redirect('/home');
}
