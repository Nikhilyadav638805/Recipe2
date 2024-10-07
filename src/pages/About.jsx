import React from 'react';

const About = () => {
  return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-200 to-pink-200 p-6 ">
      <h1 className="text-5xl font-bold mt-20 text-gray-800 text-center ">
        About Us
      </h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl text-center">
        Welcome to our recipe website, where we celebrate the joy of cooking! Our passion for food brings together a diverse
        community of home cooks and culinary enthusiasts. Whether you're looking for quick weeknight dinners or gourmet
        recipes for special occasions, we have something for everyone.
      </p>
      
      <div className="bg-white rounded-tl-[120px] rounded-br-[120px] shadow-lg p-8 max-w-2xl mb-8">
        <h2 className="text-3xl font-semibold mb-4  text-center text-green-600">Our Mission</h2>
        <p className="text-lg text-gray-600">
          Our mission is to inspire creativity in the kitchen and make cooking accessible to everyone. We believe that
          cooking should be fun, educational, and fulfilling, and our recipes are designed to help you create
          delicious meals for yourself and your loved ones.
        </p>
      </div>
      
      <div className="bg-white rounded-full shadow-lg  p-10 max-w-2xl mb-8">
        <h2 className="text-3xl font-semibold mb-4 ml-8 text-green-600">Our Values</h2>
        <ul className="list-disc list-inside text-lg ml-8 text-gray-600">
          <li>Passion for Food</li>
          <li>Community Engagement</li>
          <li>Sustainability</li>
          <li>Creativity in Cooking</li>
          <li>Healthy Living</li>
        </ul>
      </div>

      <h2 className="text-3xl font-semibold mb-4 text-gray-800 text-center">
        Join Us!
      </h2>
      <p className="text-lg text-gray-700 text-center max-w-3xl">
        Explore our collection of recipes, share your culinary creations, and become a part of our growing community
        of food lovers. We can’t wait to see what you create!
      </p>
    </div>
  );
};

export default About;
