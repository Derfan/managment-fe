import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import cns from "classnames";

import { GET_DASHBOARD_INFORMATION } from "../../api";
import { CustomersTable, Layout } from "../../modules";
import { Title, EditableLayout } from "../../components";
import { CustomersTableWidget } from "./widgets";

import * as cn from './DashboardRoute.module.css';

export const DashboardRoute = memo(() => {
    const navigate = useNavigate();
    const { data, loading, error } = useQuery(
        GET_DASHBOARD_INFORMATION,
        { variables: { page: 1, pageSize: 5 }, errorPolicy: 'all' },
    );

    console.log('error', error?.graphQLErrors);

    return (
        <Layout>
            <Title tag="h3" className={cn.title}>Dashboard</Title>

            <EditableLayout
                className={cn.content}
                template={['el1 el2 el3', 'el4 el4 el5', 'el6 el7 el7', 'el8 el8 el8']}
            >
                <CustomersTableWidget
                    idx={1}
                    source={data?.element1}
                    loading={loading}
                />

                <CustomersTableWidget
                    idx={2}
                    source={data?.element2}
                    loading={loading}
                />

                <CustomersTableWidget
                    idx={3}
                    source={data?.element3}
                    loading={loading}
                />

                <CustomersTableWidget
                    idx={4}
                    source={data?.element4}
                    loading={loading}
                />

                <CustomersTableWidget
                    idx={5}
                    source={data?.element5}
                    loading={loading}
                />

                <CustomersTableWidget
                    idx={6}
                    source={data?.element6}
                    loading={loading}
                />

                <CustomersTableWidget
                    idx={7}
                    source={data?.element7}
                    loading={loading}
                />

                <CustomersTableWidget
                    idx={8}
                    source={data?.element8}
                    loading={loading}
                />
            </EditableLayout>
        </Layout>
    );
});

export default DashboardRoute;
