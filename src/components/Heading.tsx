import { useMemo } from "react";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadingProps = {
  level: HeadingLevel;
} & React.HTMLProps<HTMLHeadingElement>;

export function Heading({ level, children, ...rest }: HeadingProps) {
  const Component = useMemo(() => level, [level]);

  return (
    <Component {...rest}>
      {rest.id ? <a href={`#${rest.id}`}>{children}</a> : children}
    </Component>
  );
}

export function createHeading(level: HeadingLevel) {
  return (props: Omit<HeadingProps, "level">) => (
    <Heading level={level} {...props} />
  );
}
