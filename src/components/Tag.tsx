import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "inline-flex border border-[#00ef8b] text-[#00ef8b] px-3 py-1 rounded-full ",
        className,
      )}
      {...otherProps}
    >
      <span>&#10038;</span>
      <span>{children}</span>
    </div>
  );
}
