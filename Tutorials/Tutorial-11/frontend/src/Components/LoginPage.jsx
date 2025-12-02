import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormComponent from "./FormComponent";
import Cookies from "js-cookie";
export default function LoginPage() {
  //States
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [postResponse, setPostResponse] = useState("");
  const navigate = useNavigate();

  //Handlers
  //This function will update the form data state on input change
  const handleOnChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  //This function will handle the form submission
  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    setFormData({ username: "", password: "" });
  };

  //This function will send a login request to the server
  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        ...formData,
      });
      // show server message
      setPostResponse(response.data.message);
      if (response.status === 200) {
        // Login successful status code is 200
        console.log("Success");
        navigate("/private"); // Navigate to private page upon successful login
      }
    } catch (error) {
      // show descriptive error message returned by the server (e.g., "Incorrect username or password")
      setPostResponse(error.response?.data?.message || "Login failed");
      // console.error(error);
    }
  };

  //Render
  return (
    <FormComponent
      nextPage={"register"}
      currentPage={"login"}
      handleOnChange={handleOnChange}
      handleOnSubmit={handleOnSubmit}
      formData={formData}
      postResponse={postResponse}
    />
  );
}
