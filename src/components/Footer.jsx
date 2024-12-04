import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#333] text-white px-6 py-4">
            {/* Links Section */}
            <div className="flex flex-wrap justify-center space-x-4 mb-2">
                <a href="/" className="text-lg hover:underline">Home</a>
                <span className='text-lg'>|</span>
                <a href="/pricing" className="text-lg hover:underline">Pricing</a>
                <span className='text-lg'>|</span>
                <a href="/privacy" className="text-lg hover:underline">Privacy Policy</a>
                <span className='text-lg'>|</span>
                <a href="/refund" className="text-lg hover:underline">Refund Policy</a>
                <span className='text-lg'>|</span>
                <a href="/callback" className="text-lg hover:underline">Request a Call Back</a>
                <span className='text-lg'>|</span>
                <a href="/terms" className="text-lg hover:underline">Terms of Use</a>
            </div>

            {/* Horizontal Line */}
            <hr className="border-t border-white opacity-30 my-4" />

            {/* Copyright and Social Media Section */}
            <div className="flex flex-col md:flex-row justify-between items-center text-lg">
                <span className="mb-2 md:mb-0">© {new Date().getFullYear()} Advait All rights reserved.</span>
                <div className="flex gap-4 text-xl mr-20">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaFacebookF size={24}/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaInstagram size={27}/>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <FaYoutube size={27}/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
