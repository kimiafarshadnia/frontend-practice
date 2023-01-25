
import CircleLoader from "react-spinners/CircleLoader";

const Spinner = () => {
 

  return (
    <div className="sweet-loading">
      

      <CircleLoader
      className="flex justify-center items-center"
        color="#36d7b7"
       
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
 
export default Spinner;
