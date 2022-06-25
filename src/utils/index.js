const toTitleCase = (text = "", allWords = false) => {
  if (allWords) {
    return text
      .split(" ")
      .map((item) => item[0].toUpperCase() + item.substring(1, item.length))
      .join(" ");
  }

  return text[0].toUpperCase() + text.substring(1, text.length);
};
