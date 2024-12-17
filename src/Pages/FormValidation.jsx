import { useFormik } from "formik";
import { logInSchemas } from "./Schemas";


const FormValidation = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: logInSchemas,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="container mt-3">
        <div className="row">
          <h4>Form Validation</h4>

          {/* Name Field */}
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {/* Error message for Name */}
            {formik.touched.name && formik.errors.name && (
              <div style={{ color: "red" }}>{formik.errors.name}</div>
            )}
          </div>

          {/* Email Field */}
          <div className="col-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {/* Error message for Email */}
            {formik.touched.email && formik.errors.email && (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            )}
          </div>

          {/* Password Field */}
          <div className="col-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {/* Error message for Password */}
            {formik.touched.password && formik.errors.password && (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="col-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Your Password"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            {/* Error message for Confirm Password */}
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div style={{ color: "red" }}>{formik.errors.confirmPassword}</div>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-12 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormValidation