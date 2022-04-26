import React from "react";

const CreateInput = ({ value, label, name, placeholder, type, onChange }) => {
  return (
      <div className="container-input-create">
        {label && <label htmlFor="input-field">{label}</label>}
        <input
          className="input-info"
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
    </div>
  );
};

export default CreateInput;
