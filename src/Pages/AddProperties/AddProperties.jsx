import { useState } from "react";
import { Helmet } from "react-helmet-async";
// import toast from "react-hot-toast";
// import { addRequestProperty } from "../../Api/properties";
import toast from "react-hot-toast";
import { addRequestProperty } from "../../Api/properties";
import { imageUpload } from "../../Api/utilis";
import PropertyAddForm from "../../components/Form/PropertyAddForm";
import useAuth from "../../Hooks/useAuth";

const AddProperties = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const purpose = form.purpose.value;
    const location = form.location.value;
    const distance = form.distance.value;
    const dimensions = form.dimensions.value;
    const number_of_beds = parseInt(form.bedrooms.value);
    const number_of_bathrooms = parseInt(form.bathrooms.value);
    const price = parseInt(form.price.value);
    const description = form.description.value;
    const image = form.image.files[0];
    const agent = {
      name: user?.displayName,
      agentImage: user?.photoURL,
      email: user?.email,
    };
    const image_url = await imageUpload(image);

    const RequestedPropertyData = {
      name,
      category,
      purpose,
      location,
      distance: `${distance}km`,
      dimensions: `${dimensions} sq ft`,
      number_of_beds,
      number_of_bathrooms,
      price,
      agent,
      description,
      contact: "+256 775 358738",
      image: image_url?.data?.display_url,
      status: "verify",
    };

    try {
      const data = await addRequestProperty(RequestedPropertyData);
      if (data.insertedId) {
        toast.success("Property Requested successfully!");
        setUploadButtonText("Uploaded!");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl ">
      <Helmet>
        <title>Real Estate/agent/dashboard/add property</title>
      </Helmet>
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
