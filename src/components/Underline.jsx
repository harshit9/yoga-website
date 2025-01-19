import logo from '/assets/Advait_Logo_removebg_resize.png'; // Adjust path as needed

const Underline = () => {
    return (
        <div className="flex items-center justify-center w-3/5 lg:w-2/5 mx-auto">
            {/* Left Line */}
            <div className="flex-grow h-0.5 rounded-lg bg-green-600"></div>

            {/* Center Logo with Floating Effect */}
            <div className="relative mx-1">
                <img
                    src={logo}
                    alt="Logo"
                    className="h-8 w-8 animate-floating"
                    style={{
                        filter: "invert(25%) sepia(83%) saturate(353%) hue-rotate(85deg) brightness(93%) contrast(85%)",
                    }}
                    
                />
            </div>

            {/* Right Line */}
            <div className="flex-grow h-0.5 rounded-lg bg-green-600"></div>
        </div>
    );
};

export default Underline;
