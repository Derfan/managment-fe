import { useNavigate } from "react-router-dom";
import cns from "classnames";

import { CustomersTable } from "../../../../modules";
import { Card } from "../../../../components";
import * as cn from "./CustomersTableWidget.module.css";

export const CustomersTableWidget = ({ idx, source, loading }) => {
    const navigate = useNavigate();

    return (
        <Card
            title={`Customers ${idx}`}
            className={cns({ [cn.card]: source?.length })}
            style={{ gridArea: `el${idx}` }}
            onClick={() => source?.length && navigate('/customers')}
        >
            <div className={cn.scroll}>
                <CustomersTable
                    source={source}
                    loading={loading}
                />
            </div>
        </Card>
    )
};
