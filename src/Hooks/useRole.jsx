import { useQuery } from "@tanstack/react-query";
import { getRole } from "../Api/auth";
import useAuth from "./useAuth";
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
