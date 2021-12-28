import { useQuery } from "@apollo/client";

import { GET_CUSTOMERS } from "../../api";
import { Title } from "../../components";
import { Controls } from "./Controls";
import { CustomersTable } from "./CustomersTable";

const search = { page: 1, pageSize: 10 };

export const CustomersRoute = () => {
    const { data, loading, error } = useQuery(GET_CUSTOMERS, { variables: { search } });

    return (
        <div>
            <Title tag="h3">Customers</Title>
            <Controls />
            <CustomersTable source={data?.clients} loading={loading} />
        </div>
    );
};

export default CustomersRoute;