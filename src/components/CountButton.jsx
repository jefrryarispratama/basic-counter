/* eslint-disable react/prop-types */
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

function CountButton({ setCount, type, locked }) {
  function handleClick(event) {
    setCount((count) => {
      if (type == "plus") {
        const newCount = count + 1;
        if (newCount > 100) {
          return 100;
        }
        return newCount;
      } else {
        const newCount = count - 1;
        if (newCount < 0) {
          return 0;
        }
        return newCount;
      }
    });

    event.currentTarget.blur();
  }

  return (
    <button className="count-btn" onClick={handleClick} disabled={locked}>
      {type == "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}

export default CountButton;
