import { useRef, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_CUSTOMERS } from "../../api";
import { CustomersTable, Layout } from "../../modules";
import { Title, Card, Button } from "../../components";
import { Controls } from "./Controls";
import * as cn from "./Customers.module.css";

const defaultOptions = { root: null, rootMargin: "0px", threshold: 1 };

const useElementOnScreen = (options = defaultOptions, cb) => {
    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [element] = entries;

            setIsVisible(element.isIntersecting);

            if (cb) cb();
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [elementRef, options]);

    return { elementRef, isVisible };
};

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
