import { Optional } from "./types";

export function accessContext(): Optional<typeof AudioContext> {
  return window.AudioContext || null;
}
