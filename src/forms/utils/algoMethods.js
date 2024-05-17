export const makeFirstLetterCapital = (text) => {
  const term = text.toLowerCase().trim();
  return term[0].toUpperCase() + term.slice(1);
};

// "  hello   world  ".trim() => "hello world"