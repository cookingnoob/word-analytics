import Stat from "./Stat";

const Stats = ({ stats }) => {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label={"Words"} />
      <Stat number={stats.numOfCharacters} label={"Characters"} />
      <Stat number={stats.instagramCharLeft} label={"Instagram"} />
      <Stat number={stats.facebookCharLeft} label={"Facebook"} />
    </section>
  );
};

export default Stats;
