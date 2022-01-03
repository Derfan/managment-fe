import { memo } from "react";
import { useQuery } from "@apollo/client";

import { GET_DASHBOARD_INFORMATION } from "../../api";
import { Layout } from "../../modules";
import { Title, EditableLayout } from "../../components";
import { AverageScoreWidget, EmployeesTableWidget } from "./widgets";

import * as cn from './DashboardRoute.module.css';

export const DashboardRoute = memo(() => {
    const { data, loading, error } = useQuery(
        GET_DASHBOARD_INFORMATION,
        { variables: { page: 1, pageSize: 5 }, errorPolicy: 'all' },
    );

    return (
        <Layout>
            <Title tag="h3" className={cn.title}>Dashboard</Title>

            <EditableLayout
                className={cn.content}
                template={[['score', 'employees', 'employees']]}
                draggable={false}
            >
                <AverageScoreWidget score={7.4} gridArea="score" />

                <EmployeesTableWidget
                    source={data?.employees}
                    loading={loading}
                     gridArea="employees"
                />
            </EditableLayout>
        </Layout>
    );
});

export default DashboardRoute;
