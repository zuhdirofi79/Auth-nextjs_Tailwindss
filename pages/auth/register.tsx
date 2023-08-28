import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button, Input } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";

const Register: NextPage = () => {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Register</title>
            </Head>

            <div className="w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
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
                        <Input size="large" placeholder="Full Name" prefix={<UserOutlined rev={undefined} />} className="h-12 rounded-lg" />
                        <Input size="large" placeholder="Email" prefix={<MailOutlined rev={undefined} />} className="h-12 rounded-lg" />
                        <Input.Password size="large" placeholder="Password" prefix={<LockOutlined rev={undefined} />} className="h-12 rounded-lg" />
                    </div>
                    <div className="mt-4">
                        <Button size="large" shape="round" className="w-full bg-green text-white mb-3">
                            
                        </Button>
                        <div className="flex justify-center mb-2">
                            <span className="white-text">or</span>
                        </div>
                        <div className="mt-5 flex justify-center">
                         <span className="mb-2">
                        Already have an account?</span>
                        <span className="underline ml-2 text-blue-500 italic hover:cursor-pointer"
                           onClick={() => router.push('/login')}
                           >
                             Sign In
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
