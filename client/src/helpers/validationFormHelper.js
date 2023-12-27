export const validateDifficulty = (difficulty) => {
  if (difficulty < 1 || difficulty > 5) {
    return "Difficulty should be between 1 and 5.";
  }
  return undefined; // No error
};

export const validateDuration = (duration) => {
  if (!duration || isNaN(duration) || duration <= 0 || duration > 24) {
    return "Duration should be a positive number less than 24 hours.";
  }
  return undefined; // No error
};

export const validateName = (value) => {
  if (/[\d]/.test(value)) {
    return "Name should not contain numbers.";
  }

  if (value.length <= 3) {
    return "Name should be more than 3 characters.";
  }

  if (/[.,@$]/.test(value)) {
    return "Special characters like '.', ',', '@', '$' are not allowed.";
  }
  
  if (/(.)\1\1/.test(value)) {
    return "Three identical letters in a row are not allowed.";
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
