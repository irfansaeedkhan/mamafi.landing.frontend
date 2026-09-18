export type FormType = {
  name: string;
  email: string;
  nationality: string;
  receiverAddress: string;
  referralSource: string;
  referralSourceOther: string;
  network: string;
  token: string;
  tokensToBuy: string;
  telegram?: string;
};

export const initialForm: FormType = {
  name: "",
  email: "",
  nationality: "",
  receiverAddress: "",
  referralSource: "",
  referralSourceOther: "",
  network: "",
  token: "",
  tokensToBuy: "",
  telegram: "",
};

export interface IForm {
  formState: FormType;
  setFormState: React.Dispatch<React.SetStateAction<FormType>>;
}
