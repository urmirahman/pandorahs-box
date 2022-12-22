import { css } from "@emotion/react";
import styled from "@emotion/styled";

import {
  BreakpointSpecific,
  getBreakpointStyles,
} from "../../foundations/breakpoints";
import { SpacingFactor } from "../../foundations/spacing";
import type { Theme } from "../../foundations/theming";
import type { ThemedContainerProps } from "./ThemedContainer";

type StyledContainerProps = Pick<
  ThemedContainerProps,
  "borderRadius" | "fullHeight" | "withBackground"
> & {
  padding: BreakpointSpecific<SpacingFactor> | undefined;
};

function getPaddingStyles(
  theme: Theme,
  padding: BreakpointSpecific<SpacingFactor>
) {
  return getBreakpointStyles(theme, (breakpoint) => {
    const value = padding[breakpoint];

    if (!value) return null;

    return css`
      padding: ${theme.spacing(value)};
    `;
  });
}

const Container = styled.div<StyledContainerProps>`
  background: ${({ theme, withBackground }) =>
    withBackground && theme.body.background.color};
  border-radius: ${({ theme, borderRadius }) =>
    borderRadius ? theme.borders.radii[borderRadius] : "inherit"};
  color: ${({ theme }) => theme.body.text.color};
  height: ${({ fullHeight }) => fullHeight && "100%"};
  ${({ theme, padding }) => padding && getPaddingStyles(theme, padding)};
`;

export const Styled = {
  Container,
};
