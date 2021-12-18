import { Title } from "../Title";

export const Card = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      <hr />
      {children}
    </div>
  )
}
