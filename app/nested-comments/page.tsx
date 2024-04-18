import React from "react";
import Comments from "../components/NestedComments";
import { COMMENTS_DATA } from "../utils/dataStore";

export default function NestedCommentsPage() {
  return (
    <div className="w-[700px] m-auto">
      <h1 className="text-center text-xl py-4 font-bold">Nested Comments</h1>
      <Comments comments={COMMENTS_DATA} />
    </div>
  );
}
