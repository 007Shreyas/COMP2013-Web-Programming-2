import { useState } from "react";
import FormComponent from "./FormComponent";
import axios from "axios";
export default function FormPage() {
  //States
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [postResponse, setPostResponse] = useState("");

  //Handlers
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
    handleRegister();
    setFormData({ username: "", password: "" });
  };
  //This function will send a registration request to the server
  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:3000/register", {
        ...formData,
      });
      setPostResponse(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FormComponent
        formData={formData}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        postResponse={postResponse}
        nextPage="login"
        currentPage="Register"
      />
    </div>
  );
}
