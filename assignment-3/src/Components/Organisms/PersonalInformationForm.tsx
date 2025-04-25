import React, { ChangeEvent } from "react";
import FormRow from "../Molecules/FormRow";
import FormField from "../Molecules/FormField";
import DateField from "../Molecules/DateField";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

interface FormErrors {
  [key: string]: string;
}

interface PersonalInformationFormProps {
  formData: FormData;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: FormErrors;
}

const PersonalInformationForm: React.FC<PersonalInformationFormProps> = ({
  formData,
  onChange,
  errors,
}) => {
  //   console.log(label);
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">Personal Information</h1>
      <p className="text-[#64748B] mt-3">
        Tell us a bit about yourself. All fields are required.
      </p>
      <FormRow>
        <FormField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
          error={errors.firstName}
          placeholder="Enter your name"
        />
        <FormField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
          error={errors.firstName}
          placeholder="Enter your name"
        />
      </FormRow>
      <FormField
        label="Email Address"
        name="email"
        value={formData.firstName}
        onChange={onChange}
        error={errors.firstName}
        placeholder="Enter your email address"
      />
      <DateField />
    </div>
  );
};

export default PersonalInformationForm;
