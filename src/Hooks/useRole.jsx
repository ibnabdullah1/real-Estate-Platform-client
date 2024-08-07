import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axiosPublic from "../Api/axiosPublic";

const getRole = async (email) => {
  const { data } = await axiosPublic(`/user/${email}`);
  return data?.role;
};

const useRole = () => {
  const { user, loading } = useAuth();
  const { data: role, isLoading: isRoleLoading } = useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async () => await getRole(user?.email),
    queryKey: ["role"],
  });
  return [role, isRoleLoading];
};

export default useRole;
