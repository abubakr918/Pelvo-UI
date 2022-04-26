import React from "react";
import AuthBtn from "../components/AuthButtons";
import Stepper from "../components/Stepper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { object, string } from "zod";
import { toast } from "react-toastify";
import { useRef } from "react";

const beneficiary = ["Client", "Customer"];
const AccountUsage = () => {
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
            Who will send money into your account? (multi-select)
          </label>

          <select
            className="auth-form-select"
            defaultValue=""
            id="exampleFormControlSelect1"
          >
            <option value="" disabled>
              Clients
            </option>
            {beneficiary?.map((networkMode) => (
              <option key={networkMode} value={networkMode}>
                {networkMode}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">
            Purpose for opening account (single select)
          </label>
          <select
            className="auth-form-select"
            defaultValue=""
            id="exampleFormControlSelect1"
          >
            <option value="" disabled>
              Collecting funds from clients
            </option>
            {beneficiary?.map((networkMode) => (
              <option key={networkMode} value={networkMode}>
                {networkMode}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">
            Which countries do you expect to transact with (multi-select){" "}
          </label>
          <select
            className="auth-form-select"
            defaultValue=""
            id="exampleFormControlSelect1"
          >
            <option value="" disabled>
              United States
            </option>
            {beneficiary?.map((networkMode) => (
              <option key={networkMode} value={networkMode}>
                {networkMode}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">
            Which currencies will be sent into your account (multi-select){" "}
          </label>
          <select
            className="auth-form-select"
            defaultValue=""
            id="exampleFormControlSelect1"
          >
            <option value="" disabled>
              Finland
            </option>
            {beneficiary?.map((networkMode) => (
              <option key={networkMode} value={networkMode}>
                {networkMode}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">
            Total expected monthly spend (best guess)
          </label>
          <select
            className="auth-form-select"
            defaultValue=""
            id="exampleFormControlSelect1"
          >
            <option value="" disabled>
              €10,000 - 50,000
            </option>
            {beneficiary?.map((networkMode) => (
              <option key={networkMode} value={networkMode}>
                {networkMode}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputCountry">Number of payments per month</label>
          <select
            className="auth-form-select"
            defaultValue=""
            id="exampleFormControlSelect1"
          >
            <option value="" disabled>
              500
            </option>
            {beneficiary?.map((networkMode) => (
              <option key={networkMode} value={networkMode}>
                {networkMode}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};
export default AccountUsage;
