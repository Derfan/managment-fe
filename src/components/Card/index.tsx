import { forwardRef, FunctionComponent } from "react";
import cns from "classnames";

import { Title } from "../Title";
import { Separator } from "../Separator";
import * as cn from "./Card.module.css";

type PropsType = {
  title?: string
  className?: string
  style?: object
  draggable?: boolean
  onDragStart?: () => void
  onDragOver?: () => void
  onDrop?: () => {}
  onClick?: () => void
}

export const Card:FunctionComponent<PropsType> = forwardRef(({ title, className, children, ...rest }, ref:any) => {
  return (
    <div ref={ref} className={cns(cn.card, className)} {...rest}>
      {title && (
        <>
          <Title tag="h3">{title}</Title>
          <Separator />
        </>
      )}
      {children}
    </div>
  )
});
