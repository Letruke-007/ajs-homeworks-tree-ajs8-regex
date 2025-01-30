export default class Validator {
  constructor(value) {
    this.value = value;
  }

  validateUsername() {
    const validSymbols = /^[a-z-_\d]+$/i;
    const noMoreThanThreeDigitsInRow = /^(?:(?!\d{4}).)*$/;
    const mustNotStartWithNumbersAndSymbols = /^[^-_\d]/;
    const mustNotEndWithNumbersAndSymbols = /[^-_\d]$/;

    return validSymbols.test(this.value)
        && noMoreThanThreeDigitsInRow.test(this.value)
        && mustNotStartWithNumbersAndSymbols.test(this.value)
        && mustNotEndWithNumbersAndSymbols.test(this.value);
  }
}
