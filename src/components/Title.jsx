/* eslint-disable react/prop-types */

const Title = ({ locked }) => {
  return <h1 className="title">{locked ? "100 is the limit" : "Counter"}</h1>;
};

export default Title;
