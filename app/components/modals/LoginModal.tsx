"use client";
import Modal from "./Modal";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const content = (
    <>
      <form className="space-y-4" action="">
        <input
          placeholder="Email address"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <div
          className="p-5 bg-airbnb text-white rounded-xl opacity-80
        "
        >
          The error message
        </div>

        <CustomButton
          label="Log in"
          onClick={() => console.log("Login submit")}
        />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Login"
      content={content}
    />
  );
};

export default LoginModal;
