const initialState = {
  languages: {
    np: { short: 'np', name: 'Nepali', letters: 'क ख ग घ ङ च छ ज झ ञा ट ठ ड ढ ण त थ द ध न प फ ब भ म य र ल व श ष स ह क्ष त्र ज्ञ'.split(" ")},
    en: { short: 'en', name: 'English',  letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}
  },
  selectedLanguage: "np",
}

const  alphabets = (state = initialState, action) => {
  switch(action.type){
    case "SWITCH_LANGUAGE": {
      console.log(state);
      console.log(action);
      
      return { ...state, selectedLanguage: action.lang};
    }
    default: 
      return state;
  }
}

export default alphabets;