import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPhone } from '@fortawesome/free-solid-svg-icons';
import Underline from './Underline';

const QuestionsComponent = () => {
    return (
        <div className="bg-white py-2 ">

            <div className='container w-4/5 mx-auto  p-4 sm:p-6 lg:p-8'>
            <h2 className="text-center text-3xl font-bold text-[#454545]">Do you still have questions?</h2>
            <Underline />
            <div className="flex flex-col justify-center p-6 bg-gray-50 shadow-md rounded-lg mx-auto my-4">
                
                <div className="flex flex-col space-y-3 w-full">
                    <a
                        href="https://wa.me/+919810809619" // Replace with your chat link or functionality
                        className="bg-[#535353] hover:bg-[#424242] hover:text-white text-white font-bold py-3 px-4 rounded whitespace-nowrap mb-2 text-center shadow-md"
                    >
                        <FontAwesomeIcon icon={faComment} className="mr-2" />
                        Chat with Us
                    </a>
                    <a
                        href="tel:+919810809619" // Replace with your phone number
                        className="bg-yellow-200 hover:bg-yellow-300 text-black font-bold py-3 px-4 rounded whitespace-nowrap text-center"
                    >
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        Call Us
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionsComponent;
