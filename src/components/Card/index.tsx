import { FunctionComponent } from "react";
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

export const Card:FunctionComponent<PropsType> = ({ title, className, draggable, children, onDragStart, onDragOver, onDrop, onClick, ...rest }) => {
  return (
    <div
      className={cns(cn.card, className)}
      onClick={onClick}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      draggable={draggable}
      {...rest}
    >
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
