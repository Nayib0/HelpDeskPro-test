"use client";
import React from "react";

type BadgeProps = {
  children: React.ReactNode;
  tone?: "gray" | "red" | "green" | "yellow";
};

export default function Badge({ children, tone = "gray" }: BadgeProps) {
  const palettes: Record<"gray" | "red" | "green" | "yellow", string> = {
    gray: "bg-gray-500",
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };

  return (
    <span
      className={`px-2 py-1 text-xs rounded ${
        palettes[tone] || palettes.gray
      } text-white`}
    >
      {children}
    </span>
  );
}
