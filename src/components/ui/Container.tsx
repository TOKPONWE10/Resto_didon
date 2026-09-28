import { type ElementType, type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export function Container({ children, as: Tag = "div", className = "" }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 ${className}`}>
      {children}
    </Tag>
  );
}
