import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link"; // Import Link

const Login: NextPage = () => {
  const router = useRouter();

  const handleForgotPasswordClick = () => {
    router.push("pages/auth/resetpassword.tsx"); // Use router.push to navigate to the resetpassword page
  };

  const handleRegisterClick = () => {
    router.push("pages/auth/register.tsx"); // Use router.push to navigate to the register page
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <div
        className="w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/bg/background-cowboy-bebop(1).jpg")' }}
      >
        <div className="bg-gray-700 rounded-lg p-5 w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
          <div className="flex justify-center mb-5">
            <Image src="/assets/logo/Qowiy Rofi Logo.png" width={30} height={30} alt="Logo" />
            <div className="ml-3 flex flex-col">
              <span className="text-2xl text-center font-mono font-semibold text-white">QOWBOY STICKER</span>
              <span className="font-light text-white">Ayo Register dan login untuk menkoleksi qowboy sticker!</span>
            </div>
          </div>
          <div className="space-y-3">
            <Input size="large" placeholder="Username" suffix={<UserOutlined rev={undefined} />} className="h-12 rounded-lg" />
            <Input.Password size="large" placeholder="Password" className="h-12 rounded-lg" />
          </div>
          <div className="mt-4">
            <span
              className="mb-2 text-yellow-300 italic underline hover:cursor-pointer lighter-color"
              onClick={handleForgotPasswordClick} // Add onClick event handler
            >
              Forgot Password?
            </span>
            <Button size="large" shape="round" className="w-full bg-green text-white mb-3">Login</Button>
            <div className="flex justify-center mb-2">
              <span className="white-text">or</span>
            </div>
            <Button size="large" shape="round" type="dashed" className="w-full" onClick={handleRegisterClick}>Register</Button> {/* Add onClick event handler */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
