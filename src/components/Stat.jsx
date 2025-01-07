import React from "react";

const Stat = ({ number, label }) => {
  return (
    <section className="stat">
      <span
        className={`stat_number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
};

export default Stat;
