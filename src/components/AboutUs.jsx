const AboutUs = () => {
    return (  
        <div className="flex flex-col justify-center items-center">
            <div className="text-center w-full sm:w-2/5 p-4">
                <h1 className="text-white text-2xl sm:text-5xl font-medium mb-4">About Us</h1>
                <p className="px-3 sm:p-0 text-center mt-8 text-gray-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet omnis dolorem cum quis exercitationem. Iure excepturi, eveniet quibusdam quis, molestiae repellendus perspiciatis nulla molestias illum ipsa aliquid quae ullam?
                </p>
            </div>
            <div className="flex justify-center items-center w-full p-4">
                <img src="https://i.pinimg.com/564x/9e/c7/c7/9ec7c776630622f4f78f1d55f109fafd.jpg" alt="rider" />
            </div>
        </div>
    );
}
 
export default AboutUs;