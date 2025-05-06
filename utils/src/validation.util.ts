export const UKR_REGEX = 'ҐЄІЇЬА-ЩЮЯґєіїьа-щюя';
export const UKRSPEC_REGEX = '\\-\' ';
export const ENG_REGEX = 'a-zA-Z';
export const NUM_REGEX = '0-9';
export const PUNCTUAL_REGEX = '\\-\' )(/+.,"';

export function createRegex (...regexes: string[]) {
  return new RegExp('^[' + regexes.join('') + ']+$');
}

export const message = {
  custom (message: string, each = false) {
    return { message, each };
  },

  notEmpty (name: string, each = false) {
    return {
      message: `${name} cannot be empty`,
      each,
    };
  },

  ofType (name: string, type: string, each = false) {
    return {
      message: `${name} must be ${type}`,
      each,
    };
  },
};
