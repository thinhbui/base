const switchLanguageCode = (code) => {
  switch (code) {
    case 'en': {
      return 'English';
    }
    case 'th': {
      return 'Thai';
    }
    //   case '': {
    //     return 'English';
    //   }
    //   case 'en': {
    //     return 'English';
    //   }
    default:
      return 'Viet';
  }
};

export default switchLanguageCode;
