import { useQuery } from "@apollo/client";

import { GET_CUSTOMERS } from "../../api";
import { Title } from "../../components";
import { Controls } from "./Controls";
import { CustomersTable } from "./CustomersTable";
import * as cn from "./Customers.module.css"

const search = { page: 1, pageSize: 5 };

export const CustomersRoute = () => {
    const { data, loading, error } = useQuery(GET_CUSTOMERS, { variables: { search } });

    return (
        <div className={cn.root}>
            <Title tag="h3" className={cn.title}>Customers</Title>

            <Controls />
            
            <div className={cn.content}>
                <CustomersTable source={data?.clients} loading={loading} />

                <CustomersTable source={data?.clients} loading={loading} />
            </div>
        </div>
    );
};

export default CustomersRoute;