import { useQuery } from "@apollo/client";

import { GET_CUSTOMERS } from "../../api";
import { CustomersTable, Layout } from "../../modules";
import { Title } from "../../components";
import { Controls } from "./Controls";
import * as cn from "./Customers.module.css";

export const CustomersRoute = () => {
    const { data, loading, error } = useQuery(
        GET_CUSTOMERS,
        { variables: { search: { seed: "fd07089cb237e72c", pageSize: 20, page: 1 } } },
    );

    return (
        <Layout>
            <Title tag="h3" className={cn.title}>Customers</Title>

            <Controls />

            <CustomersTable source={data?.clients} loading={loading} className={cn.table} hovered />
        </Layout>
    );
};

export default CustomersRoute;