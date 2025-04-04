import logo from '../assets/booknest.png';
import {Link, useNavigate} from "react-router";
import {FormEvent} from "react";
import {registerUser} from "../services/auth.service.ts";
import {AxiosError} from "axios";

const Register = () => {
    const navigate = useNavigate();
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        try {
            await registerUser(email, password, name);
            navigate("/?success");
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
                <h2 className="lg:text-3xl text-2xl">Become a member</h2>
                <p className="text-amber-500 tracking-wider mt-1">Manage Your Library</p>
            </div>
            <hr className="my-3 border-amber-500"/>
            <div className="my-5">
                <form onSubmit={onSubmit}>
                    <div className="mx-auto flex flex-col items-center justify-center gap-4">
                        <div
                            className="bg-neutral-950 p-2 rounded-lg shadow-lg flex items-center gap-1 w-full md:w-[60%] lg:w-[40%]">
                            <i className='bx bx-user text-xl text-amber-500'></i>
                            <input type="text" autoFocus placeholder="Enter your name"
                                   className="w-full outline-none text-sm p-1" name="name" required/>
                        </div>

                        <div
                            className="bg-neutral-950 p-2 rounded-lg shadow-lg flex items-center gap-1 w-full md:w-[60%] lg:w-[40%]">
                            <i className='bx bx-envelope text-xl text-amber-500'></i>
                            <input type="email" placeholder="Enter your email"
                                   className="w-full outline-none text-sm p-1" name="email" required/>
                        </div>

                        <div
                            className="bg-neutral-950 p-2 rounded-lg shadow-lg flex items-center gap-1 w-full md:w-[60%] lg:w-[40%]">
                            <i className='bx bx-lock text-xl text-amber-500'></i>
                            <input type="password" placeholder="Enter your password"
                                   className="w-full outline-none text-sm p-1" name="password" required/>
                        </div>

                        <div>
                            <div>
                                <button type="submit"
                                        className="text-sm bg-amber-600 px-8 py-1 rounded-lg shadow-2xl hover:bg-amber-700 cursor-pointer flex items-center gap-2">
                                    Register<i className="bx bx-chevron-right text-xl"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="text-right mt-3">
                <Link to="/login" className="text-amber-500 underline text-sm">Click here for login</Link>
            </div>
        </section>
    </div>)
}

export default Register;