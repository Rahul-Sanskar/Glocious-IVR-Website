"use client";

import React from "react";
import { useTransition } from "@/context/TransitionContext";
import { cn } from "@/lib/utils";

interface TransitionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TransitionLink({ href, children, className, ...props }: TransitionLinkProps) {
  const { navigate } = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} className={cn(className)} {...props}>
      {children}
    </a>
  );
}
