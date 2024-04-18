import React from "react";
import UpArrow from "./UpArrow";
import DownArrow from "./DownArrow";

interface AccordionItemProps {
  title: string;
  body: string;
  isOpen: boolean;
  openClickHandler: React.MouseEventHandler;
}

function AccordionItem({
  title = "",
  body = "",
  isOpen = false,
  openClickHandler,
}: AccordionItemProps) {
  return (
    <div className="accordion">
      <div
        className="flex justify-between bg-slate-100 p-5 font-bold cursor-pointer"
        onClick={openClickHandler}
      >
        <span>{title}</span>
        <span>{isOpen ? <UpArrow /> : <DownArrow />}</span>
      </div>
      {isOpen && <div className="p-3">{body}</div>}
    </div>
  );
}

export default AccordionItem;
