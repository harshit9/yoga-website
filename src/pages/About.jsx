import Footer from '../components/Footer'; // Assuming you've created a footer component

const AboutPage = () => {
  return (
    <div className="about-page bg-gray-50 pt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to our Yoga Studio, where we believe in fostering a community of wellness, mindfulness, and inner peace. Our mission is to provide a space where individuals can connect with their bodies and minds through the practice of yoga.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Our team of experienced instructors is dedicated to guiding you on your yoga journey, regardless of your experience level. We offer a variety of classes, workshops, and retreats designed to cater to your unique needs and preferences.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At our studio, you will find a welcoming atmosphere, supportive community, and a commitment to helping you achieve your personal wellness goals. Join us in our journey towards self-discovery, empowerment, and transformation.
        </p>
        <h2 className="text-3xl font-semibold mt-6 mb-4">Our Values</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Community: We foster a supportive environment for all.</li>
          <li>Wellness: We prioritize the physical and mental well-being of our members.</li>
          <li>Inclusivity: We welcome everyone, regardless of their background or experience.</li>
          <li>Growth: We believe in the continuous journey of self-improvement.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
