import { useEffect, useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./title";
import CountButton from "./CountButton";

const Card = () => {
  const [count, setCount] = useState(() => {
    const countNumber = localStorage.getItem("count-number");
    return countNumber ? Number(countNumber) : 0;
  });

  const locked = count == 100 ? true : false;

  useEffect(() => {
    localStorage.setItem("count-number", count);
    const handleKeydown = (e) => {
      if (e.code === "Space") {
        if (count >= 100) {
          setCount(100);
          return;
        }
        setCount(count + 1);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
};

export default Card;
