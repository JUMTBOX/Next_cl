import React from "react";
import Item from "./Item";

export interface User {
  name: string;
  age: number;
}

export default function portfolio() {
  let user: User = {
    name: "yang",
    age: 28,
  };

  let projectName: Array<string> = [
    "Night in Seoul",
    "북적북적",
    "ElasticSearch project",
  ];

  return (
    <>
      <h2 style={{ color: "white" }}>포트폴리오</h2>
      {projectName?.map((item, idx) => {
        return (
          <>
            <div className="portfolio" key={idx}>
              TITLE: {item}
            </div>
            <Item user={user} />
          </>
        );
      })}
    </>
  );
}
