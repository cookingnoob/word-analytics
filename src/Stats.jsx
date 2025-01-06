import Stat from "./Stat";

const Stats = () => {
  return (
    <section className="stats">
      <Stat number={0} label={"Words"} />
      <Stat number={0} label={"Characters"} />
      <Stat number={280} label={"Instagram"} />
      <Stat number={2200} label={"Facebook"} />
    </section>
  );
};

export default Stats;
