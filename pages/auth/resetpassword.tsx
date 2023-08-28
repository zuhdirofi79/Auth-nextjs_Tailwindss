import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link"; // Import Link
import React from "react";

const ResetPassword: NextPage = () => {
    return (
        <>
            <Head>
                <title>Reset Password</title>
            </Head>

            <div className="w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/assets/bg/background-cowboy-bebop(1).jpg")' }}
            >
                <div className="bg-gray-700 rounded-lg p-5 w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                    <div className="flex justify-center mb-5">
                        <Image src="/assets/logo/Qowiy Rofi Logo.png" width={30} height={30} alt="Logo" />
                        <div className="ml-3 flex flex-col">
                            <span className="text-2xl text-center font-mono font-semibold text-white">QOWBOY STICKER</span>
                            <span className="font-light text-white">Reset Password untuk akun Anda!</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <Input size="large" placeholder="Email" suffix={<UserOutlined rev={undefined} />} className="h-12 rounded-lg" />
                    </div>
                    <div className="mt-4">
                        <Button size="large" shape="round" className="w-full bg-green text-white mb-3">
                            Reset Password
                        </Button>
                        <div className="flex justify-center mb-2">
                            <span className="white-text">or</span>
                        </div>
                        <Button size="large" shape="round" type="dashed" className="w-full">
                            <Link href="pages\auth\login.tsx">Back to Login</Link> {/* Link to Login page */}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
