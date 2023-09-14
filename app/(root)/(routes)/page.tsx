'use client'
import { useCategoryModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";


const SetupPage = () => {
  const onOpen = useCategoryModal((state) => state.onOpen);
  const isOpen = useCategoryModal((state) => state.isOpen)

  useEffect(() => {
    if(!isOpen){
      onOpen();
    }
  },[isOpen,onOpen])

  return null;
};

export default SetupPage;
