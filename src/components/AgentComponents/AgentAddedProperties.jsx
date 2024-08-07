import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Api/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import AgentAddedPropertiesCard from "./AgentAddedPropertiesCard";

const AgentAddedProperties = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { refetch, data: properties = [] } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/addedProperty/agent/${user.email}`);
      return res.data;
    },
  });
  // console.log(properties);
  return (
    <div>
      <Helmet>
        <title>Real Estate/agent/dashboard/added properties</title>
      </Helmet>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-4xl mx-auto">
        {properties &&
          properties.map((property, i) => (
            <AgentAddedPropertiesCard
              key={i}
              property={property}
              refetch={refetch}
            />
          ))}
      </div>
    </div>
  );
};

export default AgentAddedProperties;
