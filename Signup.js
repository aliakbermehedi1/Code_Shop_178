import React from "react";
import { useFormik } from "formik";

const Signup = () => {
  const formik = useFormik({
    initialvalue: {
      name: "",
      email: "",
      password: "",
    },
    onSubmi: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h2>User Signup</h2>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div>
          <label htmlFor="email">Emails: </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
      </form>
    </div>
  );
};

export default Signup;
