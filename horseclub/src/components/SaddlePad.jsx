const SaddlePad = () => {
    return ( 
        <div className="w-full flex flex-col sm:flex-row justify-center items-center my-12 transition-all ease-linear">
            <div className="w-full sm:w-2/5 flex flex-col justify-start items-start text-white p-8">
            <h1 className=" font-medium text-2xl sm:text-5xl mb-4">SADDLE PAD</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem temporibus recusandae quasi eveniet aliquid fuga eius facere. A esse nisi voluptate, quaerat animi expedita doloribus iusto mollitia consequatur! Sed, ex?</p>
            </div>
            <div className="w-full sm:w-2/5 flex justify-center items-center pb-5">
            <img src="https://i.pinimg.com/564x/ed/1f/39/ed1f3968d71428361c70e83f5db0551c.jpg" className="w-60 rounded" alt="" />
            </div>
        </div>
     );
}
 
export default SaddlePad;