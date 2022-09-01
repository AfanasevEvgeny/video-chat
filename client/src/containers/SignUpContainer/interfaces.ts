export interface SignUpForm {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  level: string;
  country: string;
  password: string;
  passwordConfirm: string;
}

export interface FormProps {
  onFulfilled: () => void;
}

export interface FormsControlInput {
  activeFormIndex: number;
}
