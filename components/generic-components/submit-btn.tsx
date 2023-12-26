import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group bg-black text-white px-7 py-3 h-[3rem] w-[8rem]
      flex items-center gap-2 rounded-full outline-none 
      focus:scale-110 hover:scale-110 hover:bg-black/95
      active:scale-105 transition font-xl dark:bg-white dark:bg-opacity-80
      dark:focus:bg-opacity-100 dark:text-black"
      disabled={pending}
    >
      {pending ? (
        <div
          className="h-5 w-5 animate-spin rounded-full 
        border-b-2 border-white"
        ></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
