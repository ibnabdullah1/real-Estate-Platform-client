import axiosPublic from "./axiosPublic";
// save user data in database
export const saveUser = async (user) => {
  const currentUser = {
    name: user.displayName,
    email: user.email,
    role: "user",
  };
  const { data } = await axiosPublic.put(`/users/${user?.email}`, currentUser);
  return data;
};

// get all Properties
export const getAllProperties = async () => {
  const { data } = await axiosPublic("/requestedProperty");
  return data;
};

// Specific agent added properties

// get all properties for a agent by email
export const getAgentProperties = async (email) => {
  const { data } = await axiosPublic(`/addedProperty/agent/${email}`);
  return data;
};
// get all requestedProperties
export const getAllRequestedProperties = async () => {
  const { data } = await axiosPublic("/requestedProperties");
  return data;
};

export const getReqProperty = async (id) => {
  const { data } = await axiosPublic(`/requestedProperty/${id}`);
  return data;
};

// Get CurrentUser role
export const getRole = async (email) => {
  const { data } = await axiosPublic(`/user/${email}`);
  return data?.role;
};
// Get CurrentUser
export const getUser = async (email) => {
  const { data } = await axiosPublic(`/user/${email}`);
  return data;
};

// get all reviews
// get all Properties
export const getAllReviews = async () => {
  const { data } = await axiosPublic("/reviews");
  return data;
};

// fraud agent get all
export const getFraudAgentProperties = async (email) => {
  const { data } = await axiosPublic(`/fraudAgent/${email}`);
  return data;
};
