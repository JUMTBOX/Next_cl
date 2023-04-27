import React from "react";

export default function portfolio() {
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
          <div className="portfolio" key={idx}>
            {item}
          </div>
        );
      })}
    </>
  );
}
