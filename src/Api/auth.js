import axiosPublic from "./axiosPublic";
import useAxiosSecure from "./useAxiosSecure";
// save user data in database
export const saveUser = async (user) => {
  const currentUser = {
    name: user.displayName,
    email: user.email,
    role: "user",
  };
  const { data } = await useAxiosSecure.put(
    `/users/${user?.email}`,
    currentUser
  );
  return data;
};

// get all Properties
export const getAllProperties = async () => {
  const { data } = await axiosPublic("/requestedProperty");
  return data;
};

// Specific agent added properties

// get all bookings for a agent by email
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
  console.log(data);
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
  console.log(data);
  return data;
};
