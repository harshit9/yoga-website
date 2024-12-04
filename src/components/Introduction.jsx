import Underline from "./Underline"

const Introduction = () => {
  return (
    <div className="bg-white py-2 ">

            <div className='container w-[85%] lg:w-[70%] mx-auto pt-4 sm:p-6 lg:p-8'>
                <h2 className="text-center text-2xl xs:text-4xl font-bold text-[#454545]">Welcome to Advait<br /><span className="text-xl font-extralight"> Path of Unity</span></h2>
                <Underline />
                <div className="flex flex-col justify-center p-4 text-[#3c3c3c] text-lg lg:text-xl font-normal mx-auto mb-2 mt-1">
                        <p> Welcome to Advait, your sanctuary for physical, mental, and spiritual growth. Our expert instructors guide you through transformative yoga practices to cultivate inner peace, strength, and flexibility.</p>
                </div>
                <div className="flex items-center justify-center ">
                    <img src="/assets/course3.jpg" className="rounded-2xl h-48 lg:h-60 w-11/12 object-cover border-2 border-[#656565]"/>
                </div>

                <h2 className="text-center text-3xl font-bold text-[#454545] pt-8">Key Highlights</h2>
                <Underline />

                <p className="text-center">

                    /add icons and style it / <br/><br/>
                    - Expert instruction for all levels<br/> 
                    - Small class sizes for personalized attention<br/>
                    - Holistic approach to yoga and wellness<br/>
                    - Community-driven environment<br/>
                </p>

                <h2 className="text-center text-3xl font-bold text-[#454545] pt-8">Benefits of Yoga</h2>
                <Underline />

                <p className="text-center">
                /add icons and style it / <br/><br/>

                - Reduces stress and anxiety<br/>
                - Improves flexibility and balance<br/>
                - Enhances mental clarity and focus<br/>
                - Supports physical and emotional well-being<br/>
                - Fosters self-awareness and inner peace<br/>
                </p>
            </div>
        </div>
  )
}

export default Introduction
