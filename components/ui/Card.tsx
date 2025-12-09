"use client";
import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`border rounded-md p-4 shadow-sm bg-white hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}
