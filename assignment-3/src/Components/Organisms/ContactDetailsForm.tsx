import React from "react";
import FormField from "../Molecules/FormField";
import FormRow from "../Molecules/FormRow";

// Define the shape of the form data
interface ContactDetailsFormData {
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

// Define the shape of the errors object
interface ContactDetailsFormErrors {
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
}

// Define the props interface
interface ContactDetailsFormProps {
  formData: ContactDetailsFormData;
  errors: ContactDetailsFormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactDetailsForm: React.FC<ContactDetailsFormProps> = ({
  formData,
  onChange,
  //   errors,
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Contact Details</h1>
      <p className="text-[#64748B] mt-3">
        Your contact information will be kept private
      </p>
      <FormField
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={onChange}
        // error={errors.phone}
        helperText="We'll use this to contact you if needed"
        placeholder="1234567891"
        type="number"
      />

      <FormField
        label="Address"
        name="address"
        value={formData.address}
        onChange={onChange}
        // error={errors.address}
        placeholder="New york streets"
        type="text"
      />

      <FormRow>
        <FormField
          label="City"
          name="city"
          value={formData.city}
          onChange={onChange}
          //   error={errors.city}
          placeholder="e.g. Rajkot"
          type="text"
        />
        <FormField
          label="State"
          name="state"
          value={formData.state}
          onChange={onChange}
          //   error={errors.state}
          placeholder="e.g. Gujarat"
          type="text"
        />
      </FormRow>

      <FormField
        label="Zip Code"
        name="zip"
        value={formData.zip}
        onChange={onChange}
        // error={errors.zip}
        helperText="Format: 12345 or 12345-6789"
        type="number"
        placeholder=""
      />
    </div>
  );
};

export default ContactDetailsForm;
