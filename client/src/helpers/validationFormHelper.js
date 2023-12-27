export const validateDifficulty = (difficulty) => {
  if (difficulty < 1 || difficulty > 5) {
    return "Difficulty should be between 1 and 5.";
  }
  return undefined; // No error
};

export const validateDuration = (duration) => {
  if (!duration || isNaN(duration) || duration <= 0) {
    return "Duration should be a positive number.";
  }
  return undefined; // No error
};

export const validateName = (value) => {
  if (/[\d]/.test(value)) {
    return "Name should not contain numbers.";
  }
  return "";
};

export const validateDescription = (value) => {
  const forbiddenWords = ["ugly", "cry", "sad"];
  if (forbiddenWords.some((word) => value.toLowerCase().includes(word))) {
    return "Description should not contain the words 'ugly', 'cry', or 'sad'.";
  }
  return "";
};
