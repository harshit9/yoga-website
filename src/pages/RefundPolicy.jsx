const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-8">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Refund Policy</h2>
        <p className="text-gray-700 mb-4">
          Our refund policy allows for a full refund if the request is made within 30 days of your purchase. Please read the terms carefully.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">1. Refund Eligibility</h3>
        <p className="text-gray-700 mb-4">
          To be eligible for a refund, the purchase must be made within 30 days, and you must provide proof of purchase. The refund will be processed within 7-10 business days.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">2. Non-Refundable Items</h3>
        <p className="text-gray-700 mb-4">
          Some items such as digital content, services that have already been rendered, and subscriptions may not be eligible for a refund.
        </p>
        <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">3. How to Request a Refund</h3>
        <p className="text-gray-700 mb-4">
          To request a refund, please contact us via the provided contact details with your order information and the reason for the request.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
