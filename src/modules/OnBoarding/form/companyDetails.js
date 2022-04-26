import React from "react";
import AuthBtn from "../components/AuthButtons";
import Stepper from "../components/Stepper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string } from "zod";
import { toast } from "react-toastify";
import { useRef } from "react";

const UserDetails = () => {
  const getResolver = () => {
    let beneficiaryId;

    return zodResolver(
      object({
        name: string({
          required_error: "Network mode is required",
          invalid_type_error: "Network mode must be a string",
        }).min(1, {
          message: "Network mode is required",
        }),
      })
    );
  };
  // eslint-disable-next-line no-unused-vars
  const { handleSubmit, register, watch, setValue } = useForm({
    resolver: getResolver(),
  });
  const form = useRef();

  const onSubmit = async (values) => {};

  const onError = (errors) => {
    Object.values(errors).forEach((error) => {
      if (error.message) {
        toast.error(error.message);
      }
    });
  };
  return (
    <div>
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit, onError)}
        className="home-right-box mx-auto"
      >
        <div className="form-group form-group mt-2">
          <label htmlFor="inputCountry">Company name</label>
          <input
            className="auth-input-info"
            placeholder="First name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">VAT Number/ EIN</label>
          <input
            className="auth-input-info"
            placeholder="First name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">Company Address</label>
          <input
            className="auth-input-info"
            placeholder="First name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">Postal code & city </label>
          <input
            className="auth-input-info"
            placeholder="First name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">Incorporation date</label>
          <input
            className="auth-input-info"
            placeholder="First name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">Website URL (Optional)</label>
          <input
            className="auth-input-info"
            placeholder="First name"
            {...register("name", { required: true })}
          />
        </div>
      </form>
    </div>
  );
};
export default UserDetails;
