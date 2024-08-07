import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AgentPropertyUpdate } from "../../Api/properties";
import { imageUpload } from "../../Api/utilis";

const UpdateForm = () => {
  const { name, location, agent, _id, price } = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const location = form.location.value;
    const image = form.image.files[0];
    const price = form.price.value;

    const image_url = await imageUpload(image);

    const updateData = {
      location,
      title,
      price,
      agent,
      image: image_url?.data?.display_url,
    };

    try {
      const updateProperty = await AgentPropertyUpdate(_id, updateData);
      if (updateProperty.modifiedCount > 0) {
        toast.success("Property updated successfully");
        navigate("/dashboard/added-properties");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  // Handle Image button text
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  return (
    <div className="w-full px-6 md:max-w-3xl mx-auto py-10  flex flex-col justify-center items-center text-gray-800 rounded-xl bg-white">
      <Helmet>
        <title>Real Estate Community/Dashboard/update form</title>
      </Helmet>
      <h2 className="text-3xl text-[#1c4456] mb-5 font-semibold">
        Update Properties
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block text-gray-400">
              Property Title
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
              name="title"
              id="title"
              type="text"
              placeholder="Property Name"
              defaultValue={name}
              required
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="location" className="block text-gray-400">
              Property Location
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
              name="location"
              id="location"
              type="text"
              placeholder="Property Location"
              defaultValue={location}
              required
            />
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
              defaultValue={price}
              required
            />
          </div>
          <div className="flex justify-between gap-2">
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-400">
                Agent name
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400 bg-gray-100  rounded-md "
                defaultValue={agent?.name}
                disabled
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-400">
                Agent Email
              </label>
              <input
                className="w-full px-4 py-3 text-gray-400 bg-gray-100  rounded-md "
                defaultValue={agent?.email}
                disabled
              />
            </div>
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
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
