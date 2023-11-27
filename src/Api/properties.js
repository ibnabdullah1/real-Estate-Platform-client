import axiosPublic from "./axiosPublic";

export const addRequestProperty = async (RequestedPropertyData) => {
  const { data } = await axiosPublic.post(
    `/requestedProperties`,
    RequestedPropertyData
  );
  return data;
};
// Admin status update
export const reqPropertyUpdate = async (id, message) => {
  const statusUpdate = {
    status: message,
  };
  const { data } = await axiosPublic.put(
    `/requestedProperty/${id}`,
    statusUpdate
  );
  return data;
};
// Agent property update
export const agentPropertyUpdate = async (id, message) => {
  const statusUpdate = {
    status: message,
  };
  const { data } = await axiosPublic.put(
    `/requestedProperty/${id}`,
    statusUpdate
  );
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
