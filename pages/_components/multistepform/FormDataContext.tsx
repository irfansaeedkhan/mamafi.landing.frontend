import React, { createContext, useState } from "react";
import { IForm } from "./types";

export interface IFormDataContext {
  formData: IForm;
  setFormData: (data: IForm) => void;
  updateFormData: (newData: Partial<IForm>) => void;
}

export const FormDataContext = createContext<IFormDataContext | null>(null);

export const FormDataProvider: React.FC = ({ children }: any) => {
  const [formData, setFormData] = useState<IForm>({
    formState: {
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
    },
    setFormState: () => {},
  });

  const updateFormData = (newData: Partial<IForm>) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
