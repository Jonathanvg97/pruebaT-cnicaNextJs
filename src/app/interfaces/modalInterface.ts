/**
 * ${1:Description placeholder}
 *
 * @export
 * @interface ModalProps
 * @typedef {ModalProps}
 */
export interface ModalProps {
    /**
 * ${1:Description placeholder}
 *
 * @type {boolean}
 */
isOpen: boolean;
    /**
 * ${1:Description placeholder}
 *
 * @type {() => void}
 */
onClose: () => void;
    /**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
message: string;
  }