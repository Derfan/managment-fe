import { memo, useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_DASHBOARD_INFORMATION } from "../../api";
import { Layout } from "../../modules";
import { Title, EditableLayout, ToggleSwitch } from "../../components";
import { CustomersTableWidget } from "./widgets";

import * as cn from './DashboardRoute.module.css';

export const DashboardRoute = memo(() => {
    const [draggable, setDraggable] = useState(true);
    const { data, loading, error } = useQuery(
        GET_DASHBOARD_INFORMATION,
        { variables: { page: 1, pageSize: 5 }, errorPolicy: 'all' },
    );

    return (
        <Layout>
            <Title tag="h3" className={cn.title}>Dashboard</Title>

            <EditableLayout
                className={cn.content}
                template={['el1 el2 el2', 'el3 el3 el3']}
                draggable={draggable}
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
            </EditableLayout>
        </Layout>
    );
});

export default DashboardRoute;
