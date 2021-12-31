import { useNavigate } from "react-router-dom";
import cns from "classnames";

import { CustomersTable } from "../../../../modules";
import { Card } from "../../../../components";
import * as cn from "./CustomersTableWidget.module.css";

type Props = {
    idx: number
    source: { [key:string]: string|number }[]
    loading: boolean
    draggable?: boolean
};

export const CustomersTableWidget = ({ idx, source, loading, draggable }:Props) => {
    const navigate = useNavigate();

    return (
        <Card
            title={`Customers ${idx}`}
            className={cns({ [cn.card]: source?.length })}
            style={{ gridArea: `el${idx}` }}
            onClick={() => source?.length && navigate('/customers')}
            draggable={draggable}
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
