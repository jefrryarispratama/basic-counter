import { useEffect, useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./title";
import CountButton from "./CountButton";

const Card = () => {
  const [count, setCount] = useState(0);

  const locked = count == 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "Space") {
        if (count >= 5) {
          setCount(5);
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
