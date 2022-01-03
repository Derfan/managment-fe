import { Card } from "../../../../components";

import * as cn from "./AverageScoreWidget.module.css";

type Props = {
    score: number
    gridArea: string
};

export const AverageScoreWidget = ({ score, gridArea }:Props) => {
    return (
        <Card style={{ gridArea }} className={cn.card}>
            <div className={cn.circle}>{score || "N/A"}</div>
        </Card>
    )
}