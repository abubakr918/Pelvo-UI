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
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">
            First & Last Name First & last name (For all directors / managing
            partners or members / trustees of the business:
          </label>
          <input
            className="auth-input-info"
            placeholder="First name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">Birthday</label>
          <input
            className="auth-input-info"
            placeholder="First name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">Home Address</label>
          <input
            className="auth-input-info"
            placeholder="First name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">Postal code </label>
          <input
            className="auth-input-info"
            placeholder="First name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">City</label>
          <input
            className="auth-input-info"
            placeholder="First name"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">Email</label>
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
