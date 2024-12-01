import Underline from "./Underline"

const Introduction = () => {
  return (
    <div className="bg-white py-2 ">

            <div className='container w-[85%] lg:w-[70%] mx-auto pt-4 sm:p-6 lg:p-8'>
            <h2 className="text-center text-4xl font-bold text-[#454545]">Welcome to Advait<span className="text-xl font-extralight"> Path of Unity</span></h2>
            <Underline />
            <div className="flex flex-col justify-center p-4 text-[#666666] text-lg lg:text-xl font-semibold mx-auto mb-2 mt-1">
                    <p> Welcome to Advait, your sanctuary for physical, mental, and spiritual growth. Our expert instructors guide you through transformative yoga practices to cultivate inner peace, strength, and flexibility.</p>
                </div>
            </div>
        </div>
  )
}

export default Introduction
