import axios from "axios";
const axiosSecurePublic = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
const useAxiosPublic = () => {
  return axiosSecurePublic;
};

export default useAxiosPublic;
