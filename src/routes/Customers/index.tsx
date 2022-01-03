import { useRef, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_CUSTOMERS } from "../../api";
import { useElementOnScreen } from "../../hooks";
import { CustomersTable, Layout } from "../../modules";
import { Title, Card, Button } from "../../components";
import { Controls } from "./Controls";
import * as cn from "./Customers.module.css";

export const CustomersRoute = () => {
    const page = useRef(1);
    const { data, loading, error, fetchMore } = useQuery(
        GET_CUSTOMERS,
        {
            variables: { search: { seed: "fd07089cb237e72c", pageSize: 20, page: page.current } },
        },
    );

    const handleLoadMoreCustomers = () => {
        page.current += 1;

        fetchMore({ variables: { search: { seed: "fd07089cb237e72c", pageSize: 20, page: page.current } } });
    };

    const { elementRef } = useElementOnScreen(null, handleLoadMoreCustomers);

    return (
        <Layout>
            <Title tag="h3" className={cn.title}>Customers</Title>

            <Controls />

            <Card className={cn.tableCard}>
                <CustomersTable source={data?.clients} loading={loading} hovered />

                <div ref={elementRef} />
            </Card>
        </Layout>
    );
};

export default CustomersRoute;
