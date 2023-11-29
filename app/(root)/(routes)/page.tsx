"use client";

import { useModalStore } from "@/hooks/use-modal";
import { useEffect } from "react";


export default function Home() {
  const onOpen = useModalStore((state) => state.onOpen)

  const isOpen = useModalStore((state) => state.isOpen)

useEffect(()=> {
  if(!isOpen){
    onOpen()
  }
}, [isOpen, onOpen])

  return null
}
