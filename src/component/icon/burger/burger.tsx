import Link from "next/link";

export const Burger = (props: { className: string }) => {
  return (
    <Link href={"/menu"} passHref>
      <svg
        viewBox="0 0 100 80"
        width="24"
        height="24"
        className={props.className}>
        <rect width="90" height="15" />
        <rect y="30" width="90" height="15" />
        <rect y="60" width="90" height="15" />
      </svg>
    </Link>
  );
};
