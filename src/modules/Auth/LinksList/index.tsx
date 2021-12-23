import { Link } from "react-router-dom";

import * as cn from "./LinksList.module.css";

type PropsType =  {
    properties: string[]
};

const messages = {
    'sign-in': 'Already have an account? Please sign in.',
    'sign-up': 'New here? Please create an account.',
    'reset': 'Forget your password? Please reset.',
};

export const LinksList = ({ properties }:PropsType) => {
    return (
        <div className={cn.list}>
            {properties.map(key => <Link key={key} to={`/${key}`} className={cn.item}>{messages[key]}</Link>)}
        </div>
    )
};
