import axiosPublic from "./axiosPublic";

// role status  update
export const userRoleUpdate = async (id, message) => {
  const roleUpdate = {
    role: message,
  };
  console.log(roleUpdate);
  const { data } = await axiosPublic.put(`/user/${id}`, roleUpdate);
  console.log(data);
  return data;
};

export const addRequestProperty = async (RequestedPropertyData) => {
  const { data } = await axiosPublic.post(
    `/requestedProperties`,
    RequestedPropertyData
  );
  return data;
};

// Agent property update
export const agentRequestUpdate = async (id, message) => {
  const statusUpdate = {
    status: message,
  };
  const { data } = await axiosPublic.put(`/updateStatus/${id}`, statusUpdate);
  return data;
};

// Agent status updated
export const AgentPropertyUpdate = async (id, updateData) => {
  const { data } = await axiosPublic.put(
    `/requestedProperty/${id}`,
    updateData
  );
  return data;
};

// save a wishlist data in db
export const addWishlist = async (wishlistData) => {
  const { data } = await axiosPublic.post("/wishlists", wishlistData);
  return data;
};

// Fetch all Wishlist for user
export const getUserAllWishlist = async (email) => {
  const { data } = await axiosPublic(`/wishlists/${email}`);
  return data;
};

// save a wishlist data in db
export const addReview = async (reviewData) => {
  const { data } = await axiosPublic.post("/reviews", reviewData);
  return data;
};
