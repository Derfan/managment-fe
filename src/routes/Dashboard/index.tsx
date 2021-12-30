import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import cns from "classnames";

import { GET_DASHBOARD_INFORMATION } from "../../api";
import { CustomersTable } from "../../modules";
import { Title, EditableLayout } from "../../components";

import * as cn from './DashboardRoute.module.css';

export const DashboardRoute = memo(() => {
    const navigate = useNavigate();
    const { data, loading, error } = useQuery(
        GET_DASHBOARD_INFORMATION,
        { variables: { pageSize: 5 }, errorPolicy: 'all' },
    );

    console.log('error', error?.graphQLErrors);

    return (
        <div className={cn.root}>
            <Title tag="h3" className={cn.title}>Dashboard</Title>

            <EditableLayout
                className={cn.content}
                template={['el1 el2 el2', 'el3 el3 el4', 'el5 el5 el5']}
            >
                <CustomersTable
                    title="Customers 1"
                    className={cns({ [cn.card]: data?.element1?.length })}
                    source={data?.element1}
                    loading={loading}
                    style={{ gridArea: 'el1' }}
                    onClick={() => data?.element1?.length && navigate('/customers')}
                />

                <CustomersTable
                    title="Customers 2"
                    className={cns({ [cn.card]: data?.element2?.length })}
                    source={data?.element2}
                    loading={loading}
                    style={{ gridArea: 'el2' }}
                    onClick={() => data?.element2?.length && navigate('/customers')}
                />

                <CustomersTable 
                    title="Customers 3"
                    className={cns({ [cn.card]: data?.element3?.length })}
                    source={data?.element3} 
                    loading={loading} 
                    style={{ gridArea: 'el3' }}
                    onClick={() => data?.element3?.length && navigate('/customers')}
                />

                <CustomersTable 
                    title="Customers 4"
                    className={cns({ [cn.card]: data?.element4?.length })}
                    source={data?.element4} 
                    loading={loading} 
                    style={{ gridArea: 'el4' }}
                    onClick={() => data?.element4?.length && navigate('/customers')}
                />

                <CustomersTable
                    className={cns({ [cn.card]: data?.element5?.length })}
                    source={data?.element5} 
                    loading={loading} 
                    style={{ gridArea: 'el5' }}
                    onClick={() => data?.element5?.length && navigate('/customers')}
                />
            </EditableLayout>
        </div>
    );
});

export default DashboardRoute;
