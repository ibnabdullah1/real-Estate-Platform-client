const Feature = () => {
  return (
    <div className="lg:flex items-center justify-center py-16 px-10 min-h-[60vh]  ">
      <div className="md:flex-1">
        <h2 className=" mh:w-[450px] text-3xl mt-10  text-[#1c4456] mb-5 font-bold uppercase">
          Simple & easy way to find your dream Apartment
        </h2>
        <p className="md:w-[500px]">
          Discover your ideal living space effortlessly with our intuitive
          platform. Find your dream apartment through our user-friendly
          interface, providing a hassle-free experience. Browse a diverse range
          of listings, filter by your preferences, and embark on a seamless
          journey to secure the perfect place you can call home. Simplify your
          apartment search with our straightforward tools, ensuring you
          effortlessly navigate through options that match your lifestyle and
          preferences. Your dream apartment is just a click away – experience
          the easiest way to find your ideal living space with us.
        </p>
        <button className=" transform duration-500 mt-5 px-12 py-3 text-sm font-medium text-[#1c4456] border border-[#1c4456] rounded hover:bg-[#1c4456] hover:text-white active:bg-#1c4456 focus:outline-none focus:ring-none">
          Get Started
        </button>
      </div>
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 py-10">
        <div>
          <div>
            <img
              className="rounded-lg mt-5 md:mt-0 w-full"
              src="https://i.ibb.co/mR5PMQC/feature1.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-lg mt-5 w-full"
              src="https://i.ibb.co/19zQp5H/feature2.webp"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <img
              className="rounded-lg w-full"
              src="https://i.ibb.co/JkXwHJ4/feature3.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="rounded-lg mt-5 w-full"
              src="https://i.ibb.co/0hPVQjC/feature4.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
