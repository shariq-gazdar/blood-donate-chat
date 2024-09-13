import React from "react";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-red-600 mb-4">
            Donate Blood, Save Lives
          </h2>
          <p className="text-gray-700 mb-6">
            Every donation can help save up to three lives. Become a donor today
            and make a difference in your community.
          </p>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg text-lg hover:bg-red-700">
            Become a Donor
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="bg-gray-100 py-20 px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-red-600">Why Donate Blood?</h2>
          <p className="text-gray-700 mt-4">
            Donating blood is not only beneficial to the recipients but also to
            the donors.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              Help Save Lives
            </h3>
            <p className="text-gray-700">
              Your donation can save people in critical conditions, from
              accidents to surgeries.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              Health Benefits
            </h3>
            <p className="text-gray-700">
              Regular blood donation can reduce harmful iron stores in your
              body, promoting overall health.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-xl font-bold text-red-600 mb-2">
              Community Impact
            </h3>
            <p className="text-gray-700">
              Donating blood brings the community together and promotes
              awareness of blood shortages.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-600 py-20 px-6 md:px-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="mb-6">
          Join our network of donors and help us save lives today.
        </p>
        <button className="bg-white text-red-600 px-6 py-2 rounded-lg text-lg hover:bg-gray-100">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p>&copy; 2024 Blood Donation App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
