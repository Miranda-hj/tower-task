import Link from "next/link";

export const Arrow = (props: { className: string }) => {
  return (
    <Link href={"/"} passHref>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        x="0px"
        y="0px"
        viewBox="0 0 1000 1000"
        enableBackground="new 0 0 1000 1000"
        xmlSpace="preserve"
        className={props.className}>
        <g>
          <path d="M943.1,451.9H176.5l254.4-254.4c18.3-18.3,18.3-48.1,0-66.4l-2.9-2.9c-18.3-18.3-48.1-18.3-66.4,0L27.7,462.2C16.9,470.8,10,484,10,498.8v4.6c0,17.8,9.9,33.2,24.4,41.2l327.2,327.2c18.3,18.3,48.1,18.3,66.4,0l2.9-2.9c18.3-18.3,18.3-48.1,0-66.4L178.7,550.3h764.3c25.9,0,46.9-21,46.9-46.9v-4.6C990,472.9,969,451.9,943.1,451.9z" />
        </g>
      </svg>
    </Link>
  );
};
