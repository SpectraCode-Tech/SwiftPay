import { React, useState } from 'react'
import API from '../api/api'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
  email: "",
  password: ""
});

const navigate = useNavigate()

 const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await API.post('/', formData);
            alert('Login successful!');

            localStorage.setItem('token', res.data.token);
            localStorage.setItem('role', res.data.user.role);

            if(res.data.user.role === 'admin'){
                navigate("/admin")
            }else{
                navigate("/dashboard")
            }


        }catch(error){
            alert(error.response?.data?.message || 'Login failed.');
        }
    } 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-[#0a2540] mb-6">
          Login to SwiftPay
        </h1>

        <div className="mb-4">
          <label 
            htmlFor="email" 
            className="block text-sm font-semibold text-[#0a2540] mb-2"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bfa6]"
          />
        </div>

        <div className="mb-6">
          <label 
            htmlFor="password" 
            className="block text-sm font-semibold text-[#0a2540] mb-2"
          >
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00bfa6]"
          />
        </div>

        {/* Login Button */}
        <button 
          type="submit"
          className="w-full bg-[#0a2540] text-white font-semibold py-2 rounded-lg hover:bg-[#00bfa6] transition-colors mb-3"
        >
          Login
        </button>

        {/* Go to Home Button */}
        <a 
          href="/" 
          className="block w-full text-center border border-[#0a2540] text-[#0a2540] font-semibold py-2 rounded-lg hover:bg-[#00bfa6] hover:text-white transition-colors"
        >
          Go to Home
        </a>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="signup" className="text-[#00bfa6] font-semibold hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  )
}

export default Login