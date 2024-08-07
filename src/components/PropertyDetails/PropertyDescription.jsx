const PropertyDescription = ({ description }) => {
  return (
    <div className="p-6 bg-slate-100  h-min  rounded">
      <p className="text-xl font-semibold my-2">Property Description</p>
      <p className="mb-4 text-gray-400">{description.slice(0, 500)}.</p>
      <p className="mb-4 text-gray-400">{description?.slice(500, 900)}.</p>
    </div>
  );
};

export default PropertyDescription;
