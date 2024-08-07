const PropertyAddForm = ({
  handleSubmit,
  handleImageChange,
  uploadButtonText,
}) => {
  return (
    <div className="w-full md:max-w-4xl px-6 flex flex-col justify-center items-center text-gray-800 rounded-xl bg-white py-10">
      <h2 className="text-3xl text-[#1c4456] mb-5 font-semibold">
        Add Properties
      </h2>

      <form onSubmit={handleSubmit} className=" w-full p-4">
        <div className="space-y-6">
          <div className="flex justify-between gap-7">
            <div className="space-y-1 w-full text-sm">
              <label htmlFor="Name" className="block text-gray-600">
                Property Name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="name"
                id="name"
                type="text"
                placeholder="Property Name"
                required
              />
            </div>
            <div className="space-y-1   w-full text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md  "
              >
                <option value="">Select Category</option>
                <option value="Condors">Condors</option>
                <option value="Office Buildings">Office Buildings</option>
                <option value="Apartments">Apartments</option>
                <option value="Mansions">Mansions</option>
                <option value="Real estate">Real Estate</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Living room">Living Room</option>
              </select>
            </div>
          </div>

          <div className="flex justify-between gap-7">
            <div className="space-y-1   w-full text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Purpose
              </label>
              <select
                name="purpose"
                id="purpose"
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md  "
              >
                <option value="">Select Purpose</option>
                <option value="sale">Sale</option>
                <option value="rant">Rant</option>
              </select>
            </div>
            <div className="space-y-1 text-sm w-full">
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
          </div>
          <div className="flex justify-between gap-7">
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="price" className="block text-gray-600">
                Distance
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="distance"
                id="distance"
                type="text"
                placeholder="Distance"
                required
              />
            </div>

            <div className="space-y-1 text-sm w-full">
              <label htmlFor="guest" className="block text-gray-600">
                Dimensions
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                name="dimensions"
                id="dimensions"
                type="number"
                placeholder="Dimensions"
                required
              />
            </div>
          </div>
          <div className="flex justify-between gap-7">
            <div className="space-y-1 text-sm w-full">
              <label htmlFor="price" className="block text-gray-600">
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

            <div className="space-y-1 text-sm w-full">
              <label htmlFor="guest" className="block text-gray-600">
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
            <label htmlFor="price" className="block text-gray-600">
              Price
            </label>

            <input
              className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
              name="price"
              id="price"
              type="number"
              placeholder="Price"
              required
            />
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
          <div className="file_upload px-5 py-2 mt-4 relative border-4 border-dotted border-gray-300 rounded-lg">
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
