import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import cns from "classnames";

import { GET_DASHBOARD_INFORMATION } from "../../api";
import { CustomersTable, Layout } from "../../modules";
import { Title, EditableLayout } from "../../components";

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
                    title="Customers 5"
                    className={cns({ [cn.card]: data?.element5?.length })}
                    source={data?.element5} 
                    loading={loading} 
                    style={{ gridArea: 'el5' }}
                    onClick={() => data?.element5?.length && navigate('/customers')}
                />

                <CustomersTable
                    title="Customers 6"
                    className={cns({ [cn.card]: data?.element6?.length })}
                    source={data?.element6} 
                    loading={loading} 
                    style={{ gridArea: 'el6' }}
                    onClick={() => data?.element6?.length && navigate('/customers')}
                />

                <CustomersTable
                    title="Customers 7"
                    className={cns({ [cn.card]: data?.element7?.length })}
                    source={data?.element7} 
                    loading={loading} 
                    style={{ gridArea: 'el7' }}
                    onClick={() => data?.element7?.length && navigate('/customers')}
                />

                <CustomersTable
                    className={cns({ [cn.card]: data?.element8?.length })}
                    source={data?.element8} 
                    loading={loading} 
                    style={{ gridArea: 'el8' }}
                    onClick={() => data?.element8?.length && navigate('/customers')}
                />
            </EditableLayout>
        </Layout>
    );
});

export default DashboardRoute;
