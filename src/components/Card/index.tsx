import { FunctionComponent } from "react";
import cns from "classnames";

import { Title } from "../Title";
import { Separator } from "../Separator";
import * as cn from "./Card.module.css";

type PropsType = {
  title?: string
  className?: string
  onClick?: () => void
}

export const Card:FunctionComponent<PropsType> = ({ title, className, children, onClick, ...rest }) => {
  return (
    <div className={cns(cn.card, className)} onClick={onClick} {...rest}>
      {title && (
        <>
          <Title tag="h3">{title}</Title>
          <Separator />
        </>
      )}
      {children}
    </div>
  )
}
