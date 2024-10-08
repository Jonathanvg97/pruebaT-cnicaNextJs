
/**
 * ${1:Description placeholder}
 *
 * @export
 * @interface ButtonStepProps
 * @typedef {ButtonStepProps}
 */
export interface ButtonStepProps {
    /**
 * ${1:Description placeholder}
 *
 * @type {() => void}
 */
onClick: () => void;
    /**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
label: string;
    /**
 * ${1:Description placeholder}
 *
 * @type {?boolean}
 */
isNext?: boolean; // Para distinguir entre el botón "Next" y "Back"
  }
  