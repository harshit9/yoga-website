import logo from '/assets/Advait_Logo_removebg.png'; // Adjust path as needed

const Underline = () => {
    return (
        <div className="flex items-center justify-center w-3/5 lg:w-2/5 mx-auto">
            {/* Left Line */}
            <div className="flex-grow h-0.5 rounded-lg bg-gradient-to-l from-yellow-600 to-yellow-500"></div>

            {/* Center Logo with Floating Effect */}
            <div className="relative mx-1">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-8 w-8 animate-floating"
                />
            </div>

            {/* Right Line */}
            <div className="flex-grow h-0.5 rounded-lg bg-gradient-to-l from-yellow-600 to-yellow-500"></div>
        </div>
    );
};

export default Underline;
