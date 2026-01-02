/* eslint-disable react/prop-types */
import { ResetIcon } from "@radix-ui/react-icons";

const ResetButton = ({ setCount }) => {
  const handleClick = (e) => {
    setCount(0);

    e.currentTarget.blur();
  };

  return (
    <button className="reset-btn" onClick={handleClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
};

export default ResetButton;
