export const Error = (props: { className: string; message: string }) => {
  return (
    <div className={props.className}>
      <span>{props.message}</span>
    </div>
  );
};
