const HeroSection = () => {
    return ( 
       <div className=" w-full flex justify-center items-center bg-black">
            <div className="w-full flex flex-col sm:flex-row justify-end items-center">
                <div className="w-full sm:w-2/5 flex flex-col justify-start items-center">
                    <h1 className="text-3xl sm:text-5xl font-medium text-orange-900">HI RIDER !</h1>
                    <p className="px-3 sm:p-0 text-center mt-8 sm:my-12 text-gray-100">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet omnis dolorem cum quis exercitationem. Iure excepturi, eveniet quibusdam quis, molestiae repellendus perspiciatis nulla molestias illum ipsa aliquid quae ullam?
                    </p>
                </div>
                <div className="w-full sm:w-2/5 flex justify-end items-center">
                    <img src="https://i.pinimg.com/564x/d7/17/97/d7179764c97defbac6f58316ecb5dfcc.jpg" className="h-80 md:h-screen" alt="" />
                </div>
            </div>
       </div>
     );
}
 
export default HeroSection;