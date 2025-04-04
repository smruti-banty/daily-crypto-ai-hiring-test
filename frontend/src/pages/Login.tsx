import logo from '../assets/booknest.png';
import {Link, useNavigate} from "react-router";
import {FormEvent} from "react";
import {userLogin} from "../services/auth.service.ts";
import {AxiosError} from "axios";

const Login = () => {
    const navigate = useNavigate();
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            await userLogin(email, password);
            navigate("/");
        } catch (error) {
            if (error instanceof AxiosError) {
                alert(error.response?.data?.message);
            }
        }
    }

    return (<div className="min-h-[100vh] flex items-center justify-center bg-neutral-950">
        <section className="md:w-[60%] w-[90%] mx-auto shadow-2xl bg-neutral-800 p-2 rounded-lg">
            <div className="flex flex-col items-center justify-center ">
                <img src={logo} alt="booknest" className="w-20 h-20"/>
                <h2 className="lg:text-3xl text-2xl">Log in to continue</h2>
                <p className="text-amber-500 tracking-wider mt-1">Manage Your Library</p>
            </div>
            <hr className="my-3 border-amber-500"/>
            <div className="my-5">
                <form onSubmit={onSubmit}>
                    <div className="mx-auto flex flex-col items-center justify-center gap-4">
                        <div
                            className="bg-neutral-950 p-2 rounded-lg shadow-lg flex items-center gap-1 w-full md:w-[60%] lg:w-[40%]">
                            <i className='bx bx-envelope text-xl text-amber-500'></i>
                            <input type="email" autoFocus placeholder="Enter your email"
                                   name="email"
                                   className="w-full outline-none text-sm p-1" required/>
                        </div>

                        <div
                            className="bg-neutral-950 p-2 rounded-lg shadow-lg flex items-center gap-1 w-full md:w-[60%] lg:w-[40%]">
                            <i className='bx bx-lock text-xl text-amber-500'></i>
                            <input type="password" placeholder="Enter your password"
                                   name="password"
                                   className="w-full outline-none text-sm p-1" required/>
                        </div>

                        <div>
                            <div>
                                <button type="submit"
                                        className="text-sm bg-amber-600 px-8 py-1 rounded-lg shadow-2xl hover:bg-amber-700 cursor-pointer flex items-center gap-2">
                                    <i className="bx bx-exit text-xl"></i>Login
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="text-right mt-3">
                <Link to="/register" className="text-amber-500 underline text-sm">Click here for register</Link>
            </div>
        </section>
    </div>)
}

export default Login;