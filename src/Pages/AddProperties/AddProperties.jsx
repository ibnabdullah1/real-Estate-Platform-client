import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { imageUpload } from "../../Api/utilis";
import toast from "react-hot-toast";
import PropertyAddForm from "../../components/Form/PropertyAddForm";
import { addRequestProperty } from "../../Api/properties";

const AddProperties = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const location = form.location.value;
    const image = form.image.files[0];
    const year_built = parseInt(form.year_built.value);
    const square_footage = parseInt(form.square_footage.value);
    const price = parseInt(form.price.value);
    const rooms = parseInt(form.room.value);
    const bedrooms = parseInt(form.bedrooms.value);
    const bathrooms = parseInt(form.bathrooms.value);
    const description = form.description.value;
    const agent = {
      name: user?.displayName,
      agentImage: user?.photoURL,
      email: user?.email,
    };
    const image_url = await imageUpload(image);

    const RequestedPropertyData = {
      location,
      title,
      price,
      year_built,
      square_footage,
      rooms,
      bathrooms,
      bedrooms,
      agent,
      description,
      image: image_url?.data?.display_url,
      status: "verify",
    };

    try {
      const data = await addRequestProperty(RequestedPropertyData);
      console.log(data);
      if (data.insertedId) {
        toast.success("Property Requested successfully!");
        setUploadButtonText("Uploaded!");
      }
      //   navigate("/dashboard/my-listings");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }

    // console.table(PropertyData);
  };

  // Handle Image button text
  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <PropertyAddForm
        handleSubmit={handleSubmit}
        handleImageChange={handleImageChange}
        loading={loading}
        uploadButtonText={uploadButtonText}
      />
    </div>
  );
};
export default AddProperties;
