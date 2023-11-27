import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { getAgentProperties } from "../../Api/auth";
import useAxiosSecure from "../../Api/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AgentAddedPropertiesCard from "./AgentAddedPropertiesCard";

const AgentAddedProperties = () => {
  const { user } = useAuth();
  const [addedProperties, setAddedProperties] = useState([]);

  const axiosSecure = useAxiosSecure();
  const { refetch, data: properties = [] } = useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/addedProperty/agent/${user.email}`);
      return res.data;
    },
  });
  console.log(properties);
  return (
    <div>
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
