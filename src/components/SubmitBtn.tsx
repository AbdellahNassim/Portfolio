import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

type Props = {};

function SubmitBtn({}: Props) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="group dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-75 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-slate-950 transition inline-flex item-center bg-slate-900 text-white w-min px-6 py-2 text-center justify-center rounded-full gap-2"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="mt-1 group-hover:-translate-y-1 group-hover:translate-x-1 transition opacity-70 group-hover:opacity-100" />
        </>
      )}
    </button>
  );
}

export default SubmitBtn;
