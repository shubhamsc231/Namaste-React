import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  return <div>OOPSSSS ERROR!!{err.statusText}</div>;
};

export default Error;
