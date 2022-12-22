import { ButtonUnstyled, ButtonUnstyledProps } from "@mui/base";
import type { ReactNode } from "react";

import type { BreakpointSpecific } from "../../foundations/breakpoints";
import type { WithSpacing } from "../../foundations/spacing";

export type ButtonProps = Pick<
  ButtonUnstyledProps,
  "children" | "disabled" | "href" | "onClick" | "type"
> &
  WithSpacing<{
    variant: "primary" | "secondary" | "design-your-own";
    size: "small" | "large";
    nofollow?: boolean;
    /**
     * Sets the button width behavior ("contentWidth", "fullWidth" or { "minWidth" }) always or at specific breakpoints.
     */
    width?: ButtonWidth | BreakpointSpecific<ButtonWidth>;
    /**
     * If true, allows text to wrap rather than truncate with an ellipsis.
     */
    wrap?: boolean;
    /**
     * If true, changes the display of the button to include a price and add additional spacing.
     */
    price?: ReactNode;
  }>;

type ButtonWidth = "contentWidth" | "fullWidth" | { minWidth: `${number}px` };

export function Button({
  disabled,
  variant,
  size: buttonSize,
  nofollow = false,
  width = "contentWidth",
  wrap = false,
  children,
  price,
  ...props
}: ButtonProps) {
  const render = <ButtonUnstyled {...props}>{children}</ButtonUnstyled>;

  return render;
}
