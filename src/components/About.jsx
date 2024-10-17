import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-2xl font-semibold mb-4">
              Your One-Stop Shop for Everything!
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At Shopzy, we are passionate about providing you with the best
              online shopping experience. From fashion and beauty to electronics
              and home goods, we offer a wide range of high-quality products to
              meet your every need.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our mission is to make shopping easy, convenient, and enjoyable
              for our customers. With a user-friendly platform and exceptional
              customer service, we strive to deliver top-notch service every
              time you shop with us.
            </p>
            <p className="text-lg text-gray-700">
              Founded in 2024, Shopzy has grown to become one of the leading
              online marketplaces. We are committed to continuously improving
              and expanding our services to better serve our customers.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-700">
                We prioritize our customers and aim to provide the best service
                possible.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-700">
                We offer only the best products that meet our high standards of
                quality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-700">
                We continuously strive to innovate and improve your shopping
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
