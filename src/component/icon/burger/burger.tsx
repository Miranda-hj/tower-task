export const Burger = (props: { onClick: () => void }) => {
  return (
    <svg viewBox="0 0 100 80" width="35" height="40" onClick={props.onClick}>
      <rect width="90" height="15" />
      <rect y="30" width="90" height="15" />
      <rect y="60" width="90" height="15" />
    </svg>
  );
};
