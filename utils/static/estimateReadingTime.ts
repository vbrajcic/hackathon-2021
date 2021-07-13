export const estimateReadingTime = (readingText: string) => {
  const wordsPerMinute = 150;
  const textWords = readingText.trim().split(/\s+/).length;
  const estReadingTIme = Math.ceil(textWords / wordsPerMinute);

  return estReadingTIme;
};
