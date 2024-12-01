import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
    return (
        <a
            href="https://wa.me/+919810809619"
            className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-300 z-10"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaWhatsapp size={40} />
        </a>
    );
};

export default WhatsAppIcon;
