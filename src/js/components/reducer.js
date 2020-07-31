import languages from "./languages";

const initialState = {
  languages,
  selectedLanguage: "np",
};

const alphabets = (state = initialState, action) => {
  switch (action.type) {
    case "SWITCH_LANGUAGE": {
      console.log(state);
      console.log(action);

      return { ...state, selectedLanguage: action.lang };
    }
    default:
      return state;
  }
};

export default alphabets;
