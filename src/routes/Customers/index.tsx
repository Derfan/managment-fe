import { useQuery } from "@apollo/client";

import { GET_CUSTOMERS } from "../../api";
import { CustomersTable, Layout } from "../../modules";
import { Title } from "../../components";
import { Controls } from "./Controls";
import * as cn from "./Customers.module.css";

const search = { page: 1, pageSize: 20 };

export const CustomersRoute = () => {
    const { data, loading, error } = useQuery(GET_CUSTOMERS, { variables: { search } });

    return (
        <Layout>
            <Title tag="h3" className={cn.title}>Customers</Title>

            <Controls />

            <CustomersTable source={data?.clients} loading={loading} className={cn.table} hovered />
        </Layout>
    );
};

export default CustomersRoute;