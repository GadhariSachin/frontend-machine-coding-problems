"use client";

import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { ACCORDION_DATA } from "@/app/utils/dataStore";

function Accordion() {
  const [openedAccordionIndex, setOpenedAccordionIndex] = useState<number>(0);

  const clickHandler = (index: number) => {
    console.log(index);
    if (index === openedAccordionIndex) {
      setOpenedAccordionIndex(99999);
    } else {
      setOpenedAccordionIndex(index);
    }
  };

  return (
    <div className="w-[700px] m-auto">
      <h1 className="text-center text-xl py-4 font-bold">Accordion</h1>
      {/* Accordion Item */}
      {ACCORDION_DATA.map((item, index) => (
        <AccordionItem
          key={`${item.title}-${index}`}
          title={item.title}
          body={item.body}
          isOpen={openedAccordionIndex === index}
          openClickHandler={() => clickHandler(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
