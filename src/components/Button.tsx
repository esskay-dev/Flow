import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border h-12 rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-[#00ef8b] text-neutral-950 border-[#00ef8b]",
      secondary: "border-[#00ef8b] text-[#ccfce8] bg-transparent",
    },
  },
});

export default function Button(
  props: {
    variant: "primary" | "secondary";
  } & HTMLAttributes<HTMLButtonElement>,
) {
  const { variant, className, ...otherProps } = props;
  return (
    <button
      className={classes({
        variant,
        className,
      })}
      {...otherProps}
    />
  );
}
