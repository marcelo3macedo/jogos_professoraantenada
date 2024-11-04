let audioInstance: HTMLAudioElement | null = null;

export function PlayBackgroundSound(audioUrl: string, loop: boolean = false) {
  if (audioInstance) {
    audioInstance.pause();
    audioInstance.currentTime = 0;
  }

  audioInstance = new Audio(audioUrl);
  audioInstance.loop = loop;

  audioInstance.play().catch((error) => {
    console.error("Audio playback failed:", error);
  });
}

export function StopBackgroundSound() {
  if (audioInstance) {
    audioInstance.pause();
    audioInstance.currentTime = 0;
  }
}

export function PlaySound(audioUrl: string, loop: boolean = false) {
  const audio = new Audio(audioUrl);
  audio.loop = loop;

  audio.play().catch((error) => {
    console.error("Audio playback failed:", error);
  });
}
