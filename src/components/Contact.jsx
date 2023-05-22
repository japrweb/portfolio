import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: name.trim() === "",
      email: email.trim() === "",
      message: message.trim() === "",
    };
    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      e.target.submit();
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0e0e0e] flex justify-center items-center p-4 md:mt-[10%]"
    >
      <form
        method="POST"
        action="https://getform.io/f/445d41c0-bf81-4a1d-bfd4-7ad0f3ac698d"
        className="flex flex-col max-w-[800px] p-4 w-full"
        onSubmit={handleSubmit}
      >
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-[#6BD425] text-gray-300">
            <i class="fa-solid fa-envelope pr-2"></i>
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email to{" "}
            <a
              href="mailto:japr893@gmail.com"
              target="_blank"
              className="text-gray-500 hover:text-[#6BD425]"
            >
              japr893@gmail.com
            </a>
          </p>
        </div>
        <input
          className={`py-2 px-3 bg-white rounded-md border-2 ${errors.name ? "border-red-500 placeholder-red-300" : "border-white"}`}
          type="text"
          placeholder={errors.name ? "* Enter your name" : "Name"}
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className={`my-4 py-2 px-3 bg-white rounded-md border-2 ${errors.email ? "border-red-500 placeholder-red-300" : "border-white"}`}
          type="text"
          placeholder={errors.email ? "* Enter your email" : "Email"}
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        <textarea
          className={`py-2 px-3 bg-white rounded-md border-2 ${errors.message ? "border-red-500 placeholder-red-300" : "border-white"}`}
          name="message"
          cols="30"
          rows="10"
          placeholder={errors.message ? "* Enter your message" : "Message"}
          value={message}
          onChange={handleInputChange}
        ></textarea>
        <button className="text-white border-2 hover:bg-[#6BD425] hover:border-[#6BD425] hover:text-[#1b1b1b] font-medium px-6 py-3 my-4 mx-auto ml-0 flex items-center rounded-md duration-700">
          Send Form
        </button>
      </form>
    </div>
  );
}

export default Contact;
