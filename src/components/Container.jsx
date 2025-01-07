import Textarea from "./Textarea";
import Stats from "./Stats";
import { useState } from "react";
import { FB_MAX, INSTAGRAM_MAX } from "../lib/constants";

const Container = () => {
  const [text, setText] = useState("");

  const stats = {
    numberOfWords: text.split(" ").filter((w) => w !== "").length,
    numOfCharacters: text.length,
    instagramCharLeft: INSTAGRAM_MAX - text.length,
    facebookCharLeft: FB_MAX - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
