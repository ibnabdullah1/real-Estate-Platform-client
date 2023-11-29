const PropertyAddForm = ({
  handleSubmit,
  handleImageChange,
  uploadButtonText,
}) => {
  return (
    <div className="w-full md:max-w-2xl py-20 mt-32 flex flex-col justify-center items-center text-gray-800 rounded-xl bg-white">
      <h2 className="text-3xl text-[#1c4456] mb-5 font-bold uppercase">
        Add Properties
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block text-gray-600">
              Property Title
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
              name="title"
              id="title"
              type="text"
              placeholder="Property Title"
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="location" className="block text-gray-600">
              Property Location
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
              name="location"
              id="location"
              type="text"
              placeholder="Property Location"
              required
            />
          </div>

          <div className=" p-4 bg-white w-full  m-auto rounded-lg">
            <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
              <div className="flex flex-col w-max mx-auto text-center">
                <label>
                  <input
                    onChange={(e) => handleImageChange(e.target.files[0])}
                    className="text-sm cursor-pointer w-36 hidden"
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    hidden
                  />
                  <div className="bg-[#1c4456] text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-[#1c4456]">
                    {uploadButtonText}
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Year Built
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="year_built"
                id=" year_built"
                type="number"
                placeholder=" Year Built "
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="guest" className="block text-gray-600">
                Square Footage
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="square_footage"
                id="square_footage"
                type="number"
                placeholder="Square Footage"
                required
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="price" className="block text-gray-600">
              Price Range
            </label>
            <div className="flex justify-between items-center gap-2">
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="price1"
                id="price1"
                type="number"
                placeholder="Price"
                required
              />{" "}
              to
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="price2"
                id="price2"
                type="number"
                placeholder="Price"
                required
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="guest" className="block text-gray-600">
              Total room
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
              name="room"
              id="room"
              type="number"
              placeholder="Total Room"
              required
            />
          </div>

          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="bedrooms" className="block text-gray-600">
                Bedrooms
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="bedrooms"
                id="bedrooms"
                type="number"
                placeholder="Bedrooms"
                required
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="bathrooms" className="block text-gray-600">
                Bathrooms
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="bathrooms"
                id="bathrooms"
                type="number"
                placeholder="Bathrooms"
                required
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="description" className="block text-gray-600">
              Description
            </label>

            <textarea
              id="description"
              className="block rounded-md focus:[#1c4456] w-full h-32 px-4 py-3 text-gray-800  border border-[#1c4456] focus:outline-[#1c4456] "
              name="description"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-[#1c4456]"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default PropertyAddForm;
