import { useState } from 'react';
import { useRouter } from 'next/router';
import astroServer from '../constants/url';
import { PopUp } from '../components/popUp';
import { useAuth } from '../context/token'; // Import the user context

const Login = () => {
  const router = useRouter();
  const { setUserToken,userToken } = useAuth(); // Use the user context
  const [userLoginData, setUserLoginData] = useState({
    name:'',
    password:''
  });
  const [apiError, setApiError] = useState('');
  const [yes, setYes] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await astroServer.post('/auth/authenticate', userLoginData );
      localStorage.setItem('accessToken', res?.data?.userId); 
      setUserToken(res?.data?.userId) 
      router.push('/home'); 
    } catch (error) {
      setApiError(error?.response?.data?.errors[0]?.msg || 'An error occurred.');
      setYes(true);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <div className='space-y-4'>
          <div>
            {yes ? <PopUp data={apiError} setYes={setYes}/> : null}

            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="name"
              value={userLoginData.name}
              onChange={(e) => setUserLoginData({
                ...userLoginData,
                name : e.target.value
              })}
              required
              className=" px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={userLoginData.password}
              onChange={(e) => setUserLoginData({
                ...userLoginData,
                password : e.target.value
              })}
              required
              className="px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
            />
          </div>
          <div
            type="submit"
            className="bg-blue-400 p-4 rounded-lg text-center"
            onClick={handleSubmit}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
