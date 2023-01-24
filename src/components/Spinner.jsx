import { useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";

const Spinner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#36d7b7");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}></button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <CircleLoader
        color={color}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
 
export default Spinner;
