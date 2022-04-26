import React, { useState } from "react";
import Select from "react-select";

const AuthSelect = ({
  register,
  name,
  error,
  label,
  wrapperClass,
  companyTypes,
  onChange,
  ...rest
}) => {
  const [value, setValue] = useState("");
  const onSelectChange = (value) => {
    setValue(value);
    onChange(value);
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      border: 0,
      // This line disable the blue border
      boxShadow: "none",
    }),
  };
  return (
    <div className="form-group receive-box mt_20">
      {label && <label htmlFor={name}>{label}</label>}
      <Select
        styles={customStyles}
        defaultValue=""
        value={value}
        onChange={onSelectChange}
        // {...register(name)}
        options={companyTypes}
      />
      {/* <select
        className="custom-select form-select"
        id="inputCountry"
        defaultValue=""
        {...register(name)}
        {...rest}
      >
        <option value="" disabled>
          Select Receiving Method
        </option>
        {companyTypes?.map((networkMode) => (
          <option key={networkMode} value={networkMode}>
            {networkMode}
          </option>
        ))}
      </select> */}
      {error && <span role="alert">{error}</span>}
    </div>
  );
};

export default AuthSelect;
