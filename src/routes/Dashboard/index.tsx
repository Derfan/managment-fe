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
            <div className={cn.header}>
                <Title tag="h3">Dashboard</Title>

                <ToggleSwitch value={draggable} onChange={({ target }) => setDraggable(target.value)} />
            </div>

            <EditableLayout
                className={cn.content}
                template={['el1 el2 el3', 'el4 el4 el5', 'el6 el7 el7', 'el8 el8 el8']}
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
