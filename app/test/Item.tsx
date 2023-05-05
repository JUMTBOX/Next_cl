import React from "react";
import { User } from "./Page";

export default function Item({ user }: { user: User }) {
  return (
    <>
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "dodgerblue",
        }}
      >
        userdata: {Object.values(user)}
      </div>
    </>
  );
}
