/**
 * CyberAudio Engine (Silenced for modern professional tech layout)
 * All audio playback disabled per minimalist design preference.
 */

export function initAudio(): void {
  // Silent in casual/professional mode
}

export function isSoundEnabled(): boolean {
  return false;
}

export function toggleSound(): boolean {
  return false;
}

export function playCyberClick(..._args: unknown[]): void {
  // Silent in casual/professional mode
}

export function playCyberHover(..._args: unknown[]): void {
  // Silent in casual/professional mode
}

export function playSuccessChime(..._args: unknown[]): void {
  // Silent in casual/professional mode
}

export class SoundController {
  enabled = false;
  initCtx(): void {}
  toggle(): boolean { return false; }
  playHover(..._args: unknown[]): void {}
  playClick(..._args: unknown[]): void {}
  playKeypress(..._args: unknown[]): void {}
  playSuccess(..._args: unknown[]): void {}
}

export const sound = new SoundController();
