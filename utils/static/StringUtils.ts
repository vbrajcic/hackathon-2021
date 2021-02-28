class StringUtils {
  public snakeCaseToSentenceCase = (word: string) => word.split('_').join(' ');

  public capitalise = (word: string) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

  public truncStringPortion = (
    text: string,
    firstCharCount?: number,
    endCharCount?: number,
    dotCount?: number
  ): string => {
    let convertedStr = '';
    convertedStr += text.substring(0, firstCharCount || text.length);
    convertedStr += '.'.repeat(dotCount || 3);
    convertedStr += text.substring(text.length - (endCharCount || 0), text.length);
    return convertedStr;
  };
}

export default new StringUtils();
