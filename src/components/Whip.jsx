const Whip = () => {
    return (  
        <div className="w-full flex flex-col sm:flex-row justify-center items-center my-12 transition-all ease-linear">
        <div className="w-full sm:w-2/5 flex flex-col justify-start items-start text-white p-8">
          <h1 className=" font-medium text-2xl sm:text-5xl mb-4">THE WHIP</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem temporibus recusandae quasi eveniet aliquid fuga eius facere. A esse nisi voluptate, quaerat animi expedita doloribus iusto mollitia consequatur! Sed, ex?</p>
        </div>
        <div className="w-full sm:w-2/5 flex justify-center items-center">
          <img src="https://i.pinimg.com/564x/f1/b3/ee/f1b3ee1247b6ce9b8a98dd475aaa3276.jpg" className="w-60 rounded" alt="" />
        </div>
    </div>
    );
}
 
export default Whip;