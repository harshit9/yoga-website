const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          Your privacy is important to us. This privacy policy outlines the types of personal information we collect and how it is used and protected.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">1. Information We Collect</h3>
        <p className="text-gray-700 mb-4">
          We collect information such as your name, email address, phone number, and other relevant data to provide you with our services.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">2. How We Use Your Information</h3>
        <p className="text-gray-700 mb-4">
          We use your information to respond to your inquiries, provide services, and improve user experience.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">3. Data Security</h3>
        <p className="text-gray-700 mb-4">
          We take appropriate measures to ensure your personal data is secure. However, no method of transmission over the internet is 100% secure.
        </p>
        <p className="text-gray-700 mt-6">
          For more information, please contact us via the provided contact details.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
