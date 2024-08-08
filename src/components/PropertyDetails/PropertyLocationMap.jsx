const PropertyLocationMap = ({ location }) => {
  return (
    <div className="p-6 bg-slate-100 h-min rounded space-y-3">
      <div className="flex justify-between items-start">
        <p className="text-xl font-semibold my-2">Location</p>
        <p>{location}</p>
      </div>
      <div className="relative w-full h-96">
        <iframe
          className="absolute inset-0"
          // src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=${location}+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
};

export default PropertyLocationMap;
