class StringUtils {
  public snakeCaseToSentenceCase = (word: string) => word.split('_').join(' ');

  public capitalise = (word: string) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

export default new StringUtils();
