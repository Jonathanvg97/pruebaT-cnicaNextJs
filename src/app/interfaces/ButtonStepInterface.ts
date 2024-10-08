
export interface ButtonStepProps {
    onClick: () => void;
    label: string;
    isNext?: boolean; // Para distinguir entre el botón "Next" y "Back"
  }
  