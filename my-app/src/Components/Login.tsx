import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../Firebase/Setup';
import { signInWithPopup, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import guitar from '../assets/guitar.png';
import google from '../assets/google.png';
import phone from '../assets/phone.png';

type popupProp = {
  setLoginPop: (value: boolean) => void;
  setIsLoggedIn: (value: boolean) => void;
  isLoggedIn: boolean;
};

const Login = ({ setLoginPop, setIsLoggedIn, isLoggedIn }: popupProp) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setIsLoggedIn(true);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-96 sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <h1 onClick={() => setLoginPop(false)} className="cursor-pointer font-semibold text-3xl">X</h1>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <img src={guitar} className="w-20 h-20 ml-32" alt="guitar" />
                    <p className="text-base font-medium mt-5 text-center">
                      Help us become one of the safest places <br />to buy and sell
                    </p>
                    {!isSignup ? (
                      <>
                        <div className="flex border-2 border-black p-2 rounded-md mt-12 cursor-pointer">
                          <img src={phone} className="w-6 h-6" alt="phone" />
                          <h1 className="font-semibold ml-3">Continue with phone</h1>
                        </div>
                        <div onClick={googleSignin} className="flex border border-gray-300 p-2 rounded-md mt-4 cursor-pointer">
                          <img src={google} className="w-6 h-6" alt="google" />
                          <h1 className="font-semibold ml-12">Continue with Google</h1>
                        </div>
                        <h1 className="text-center mt-4 cursor-pointer">OR</h1>
                        <h1 onClick={() => setIsSignup(true)} className="text-center mt-4 text-lg font-medium text-blue-600 underline cursor-pointer hover:text-blue-800 transition-colors duration-200">
                          Don't have an account? Signup
                        </h1>
                      </>
                    ) : (
                      <div className="mt-5">
                        <input
                          type="text"
                          placeholder="Name"
                          className="w-full border border-gray-300 p-2 rounded-md mt-4"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="w-full border border-gray-300 p-2 rounded-md mt-4"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          type="password"
                          placeholder="Password"
                          className="w-full border border-gray-300 p-2 rounded-md mt-4"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleSignup} className="w-full bg-blue-600 text-white p-2 rounded-md mt-4">Signup</button>
                        <h1 onClick={() => setIsSignup(false)} className="text-center mt-4 text-lg font-medium text-blue-600 underline cursor-pointer hover:text-blue-800 transition-colors duration-200">
                          Already have an account? Login
                        </h1>
                      </div>
                    )}
                    <h1 className="text-center mt-28 text-xs">All your personal details are safe with us.</h1>
                    <h1 className="text-center mt-4 text-xs">
                      If you continue, you are accepting{' '}
                      <span className="text-blue-600">OLX Terms and <br />Conditions and Privacy Policy</span>
                    </h1>
                    {isLoggedIn && (
                      <button onClick={handleLogout} className="w-full bg-red-600 text-white p-2 rounded-md mt-4">Logout</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
