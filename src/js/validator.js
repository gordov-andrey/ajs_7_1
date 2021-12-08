class Validator {
  static validateUsername(username) {
    return /^(?![\d-_])[\w-]*(?<![\d-_])$/.test(username) && !/\d{4,}/.test(username);
  }
}

export default Validator;
