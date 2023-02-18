import { signIn } from "next-auth/react"
import Image from "next/image"
import Mysocialbook from "../public/mysocialbook.png"
function Login() {
    return (
        <div className="grid place-items-center">
            <Image
                src={Mysocialbook}
                height={300}
                width={500}
                objectFit="contain"
                className=""
            >

            </Image>
            <h1 onClick={signIn} className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login with Facebook</h1>
        </div>
    )
}

export default Login