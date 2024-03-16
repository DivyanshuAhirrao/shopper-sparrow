import React, { useState } from "react";

const LSForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: ''
      });
    
      // Handle form input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform any action with the form data here (e.g., send it to a server)
        console.log(formData);
      };
    

  return (
    <div className="w-[100%] h-[100vh] bg-slate-800 flex justify-center items-center">
      <article className="w-[80%] h-[85vh] flex ">
        <aside
          id="one"
          className="h-[100%] w-[50%]  flex rounded-l-xl justify-center items-center flex-col transition-all duration-300 gap-16"
        >
          <h1>LOGIN</h1>

          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <br />

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
            <br />

            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </label>
            <br />

            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </label>
            <br />

            <button type="submit">Submit</button>
          </form>
        </aside>
        <aside
          id="two"
          className="rounded-r-xl h-[100%] w-[50%] flex transition-all duration-300 justify-center items-center flex-col gap-16"
        >
          <h1>SignUp</h1>
          <button
            className="p-2 px-5 rounded-lg bg-blue-500"
          >
            SignUp
          </button>
        </aside>
      </article>
    </div>
  );
};

export default LSForm;
