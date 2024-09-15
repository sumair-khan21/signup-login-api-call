import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

function SignUp(){
  const [fullName, setFullName] = useState()
 const [email, setEmail] = useState()
 const [password, setPassword] = useState()
 const navigate = useNavigate()
 const handleSubmit = async (event)=>{
  try {
  event.preventDefault()
  console.log(fullName,email,password); 
  if(!fullName || !email || !password){
    toast.error("required field missing" , {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      return;
  }
  createUserWithEmailAndPassword(auth ,email, password)
  .then(async(userCredential)=>{
   console.log("userCredential",userCredential);
   console.log("userCredential",userCredential.user.uid);
   //user data store in firebase
   const userObj = {
    fullName,
    email,
    isActive : true,
    userRole: 1,
   }
   await setDoc(doc(db,"user", userCredential.user.uid),userObj)
   navigate("/")
  })
  .catch((error)=>{
    toast.error(error.message , {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  
  })
  } catch (error) {
    toast.error(error.message , {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    
    
  }
 }
 
    return(
        <>
        <div className="mainSignUp">
        <section className="flex flex-col items-center pt-6">
  <div
    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl px-20 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-dark">Create an
        account
      </h1>
      <form className="space-y-4 md:space-y-6" method="POST">
        <div>
          <label htmlFor={fullName} className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark" >Your full name</label>
          <input type="text" name="fullName" id="fullName" onChange={(e)=>setFullName(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Emelia Erickson" /> 
          </div>
          
        
        <div>
          <label htmlFor={email} className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark" >Email</label>
          <input type="text" name="email"id="email" onChange={(e)=>setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="emelia_erickson24" />
        </div>
        <div>
          <label htmlFor={password} className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark"  >Password</label>
          <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit} >Create an account</button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 ">Already have an account?  
        <Link className="mx-2 font-medium text-blue-600 hover:underline dark:text-blue-500" href="/signin" to="/">Go to Login</Link>
          
        </p>
      </form>
    </div>
  </div>
</section>
        </div>
        </>
    )
}
export default SignUp;