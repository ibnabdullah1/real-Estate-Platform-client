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

export const addedAdvertisedStatus = (id, adsStatus) => {
  const addAdsStatus = {
    adsStatus: adsStatus,
  };
  const { data } = axiosPublic.put(`/addAdsStatus/${id}`, addAdsStatus);
  return data;
};

export const addRequestProperty = async (RequestedPropertyData) => {
  const { data } = await axiosPublic.post(
    `/requestedProperties`,
    RequestedPropertyData
  );
  console.log(data);
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

export const RemoveWishlist = async (id) => {
  const { data } = await axiosPublic.delete(`/wishlist/${id}`);
  return data;
};
export const RemoveReview = async (id) => {
  const { data } = await axiosPublic.delete(`/review/${id}`);
  return data;
};
export const ReportPropertyDelete = async (id) => {
  const { data } = await axiosPublic.delete(`/reportProperty/${id}`);
  return data;
};
// // Fetch all Wishlist for user
// export const getUserAllWishlist = async (email) => {
//   const { data } = await axiosPublic(`/wishlists/${email}`);
//   return data;
// };

// save a wishlist data in db
export const addReview = async (reviewData) => {
  const { data } = await axiosPublic.post("/reviews", reviewData);
  return data;
};
export const addReport = async (reportData) => {
  const { data } = await axiosPublic.post("/reports", reportData);
  return data;
};

// offer a wishlist for user
// export const addOfferRequest = async (offerData) => {
//   const { data } = await axiosPublic.post("/addedOffers", offerData);
//   return data;
// };

// Agent property update
export const offerRequestStatusUpdate = async (id, message) => {
  const statusUpdate = {
    status: message,
  };
  const { data } = await axiosPublic.put(`/requestOffer/${id}`, statusUpdate);
  return data;
};

// add  advertisement properties
export const AddAdvertiseProperty = async (item) => {
  const { data } = await axiosPublic.post(`/advertisement`, item);
  return data;
};

// remove  advertisement properties
export const removeAdvertiseProperty = async (item, id) => {
  const { data } = await axiosPublic.delete(`/removeAds/${id}`, item);
  return data;
};

// fraud user related api
// add  advertisement properties
export const FindUserData = async (item) => {
  const { data } = await axiosPublic.post(`/fraudUserData`, item);
  console.log(data);
  return data;
};
