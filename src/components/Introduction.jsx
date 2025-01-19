import Underline from "./Underline"
import WhyChooseUs from "./WhyChooseUs"
import BenefitsOfYoga from "./BenefitsOfYoga"

const Introduction = () => {
  return (
    <div className="bg-white py-2">

            <div className='container w-[85%] lg:w-[70%] mx-auto pt-4 sm:p-6 lg:p-8'>
                <h2 className="text-center text-2xl xs:text-4xl font-bold text-[#454545]">Welcome to Advait <span className="text-xl font-light text-green-700"> Path of Unity</span></h2>
                <Underline />
                <div className="flex flex-col justify-center p-4 text-[#3c3c3c] text-md lg:text-lg font-normal mx-auto mb-2 mt-1">
                        <p> Welcome to Advait, your sanctuary for physical, mental, and spiritual growth. Our expert instructors guide you through transformative yoga practices to cultivate inner peace, strength, and flexibility.</p>
                </div>
                {/* <div className="flex items-center justify-center ">
                    <img src="/assets/course3.jpg" className="rounded-2xl h-48 lg:h-60 w-11/12 object-cover border-2 border-[#656565]"/>
                </div> */}

                <WhyChooseUs />

                <BenefitsOfYoga />

            </div>
        </div>
  )
}

export default Introduction
