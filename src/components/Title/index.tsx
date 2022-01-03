import { forwardRef, FunctionComponent } from "react";
import cns from "classnames";

import * as cn from "./Title.module.css";

type PropsType = {
  tag: "h1"|"h2"|"h3"|"h4"|"h5"|"h6"
  className?: string
};

export const Title:FunctionComponent<PropsType> = forwardRef(({ tag: Tag, className, children }, ref) => {
  return (
    <Tag
      ref={ref}
      className={
        cns(
          cn.title,
          className,
          {
            [cn.h1]: Tag === 'h1',
            [cn.h2]: Tag === 'h2',
            [cn.h3]: Tag === 'h3',
          }
        )
      }
    >
      {children}
    </Tag>
  )
})

Title.defaultProps = {
  tag: "h3"
}
