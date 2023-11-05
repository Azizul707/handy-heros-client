/* eslint-disable no-unused-vars */
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import login from "../../assets/svg/login.json";
import loginAvatar from "../../assets/svg/login-page.json";
import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {

    const { singIn, googleSingIn } = useContext( AuthContext );

    const handleSingIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        singIn( email, password )
            .then( result => {
                toast.success( 'Successfully Sing In!' )

            } )
            .catch( err => {
                toast.error( 'Some error occurred!' )
            } )


    }

    const handleGoogleLogin = () => {
        googleSingIn()
            .then( result => {
                toast.success( 'Successfully logged In!' )
            } )
            .catch( err => {
                toast.error( 'Some error occurred!' )
            } )
    }





    return (
        <div className="">
            <div className='md:flex justify-center'>
                <div className="flex items-center justify-center">
                    <Lottie animationData={ login } loop={ true } ></Lottie>
                </div>
                <section className="flex-1  dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <Link to='/'
                            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                        >

                            <Lottie className='' animationData={ loginAvatar }></Lottie>
                        </Link>
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sing In Here
                                </h1>

                                <form onSubmit={ handleSingIn } className="space-y-4 md:space-y-6">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@company.com"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                        />
                                    </div>

                                    <div>

                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="terms"
                                                aria-describedby="terms"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required=""
                                            />
                                        </div>


                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="terms"
                                                className="font-light text-gray-500 dark:text-gray-300"
                                            >
                                                I accept the{ " " }
                                                <a
                                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                    href="#"
                                                >
                                                    Terms and Conditions
                                                </a>
                                            </label>
                                        </div>

                                    </div>
                                    <div className="border">
                                        <button onClick={ handleGoogleLogin }
                                            type="button"
                                            className="w-full text-white bg-blue-600 hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
                                        >
                                            <svg
                                                className="w-4 h-4 mr-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 18 19"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Sign in with Google
                                        </button>

                                    </div>


                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Sing In
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Do not have an account?{ " " }
                                        <Link to='/register'

                                            className="font-medium text-blue-600 hover:underline dark:text-primary-500"
                                        >
                                            Sing Up
                                        </Link>

                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>

    );
};

export default Login;