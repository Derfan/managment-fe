export const Title = ({ tag: Tag, children }) => {
  return <Tag>{children}</Tag>
}

Title.defaultProps = {
  tag: "h3"
}