"use client";

import { useState } from "react";

export function getColor() {
  const media = window.matchMedia("(prefers-color-scheme: light)");
  const set = () => (media.matches ? "#000000" : "#ffffff");
  const [color, setColor] = useState(set());
  media.addEventListener("change", () => setColor(set()));
  return color;
}
