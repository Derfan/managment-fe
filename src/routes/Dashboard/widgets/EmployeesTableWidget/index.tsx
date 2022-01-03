import { useNavigate } from "react-router-dom";
import cns from "classnames";

import { CustomersTable } from "../../../../modules";
import { Card } from "../../../../components";
import * as cn from "./EmployeesTableWidget.module.css";

type Props = {
    source: { [key:string]: string|number }[]
    loading: boolean
    gridArea: string
    draggable?: boolean
};

export const EmployeesTableWidget = ({ source, loading, draggable, gridArea }:Props) => {
    const navigate = useNavigate();

    return (
        <Card
            title="Employees"
            className={cns({ [cn.card]: source?.length })}
            style={{ gridArea }}
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
