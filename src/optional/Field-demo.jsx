import { ErrorMessage, Field, Form, Formik } from "formik";

// Custom Input Component example
const CustomInputComponent = ({ field, form, ...props }) => (
  <input {...field} {...props} />
);

const Field_demo = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{
        name: '',
        email: '',
        age: '',
        subscribe: false,
        gender: '',
        city: '',
        message: '',
        customField: ''
      }}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Required';
        }
        if (!values.email) {
          errors.email = 'Required';
        }
        if (!values.age) {
          errors.age = 'Required';
        }
        if (isNaN(Number(values.age))) {
          errors.age = 'Must be a number';
        }
        if (!values.city) {
          errors.city = 'Required';
        }
        return errors;
      }}
      onSubmit={(values, actions) => {
        // Handle form submission
        console.log('Form submitted:', values);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <Field type="text" id="age" name="age" />
            <ErrorMessage name="age" component="div" className="error" />
          </div>

          <div>
            <label>
              <Field type="checkbox" id="subscribe" name="subscribe" />
              Subscribe to newsletter
            </label>
          </div>

          <div>
            <label>
              <Field type="radio" id="gender_male" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" id="gender_female" name="gender" value="female" />
              Female
            </label>
          </div>

          <div>
            <label htmlFor="city">City</label>
            <Field as="select" id="city" name="city">
              <option value="">Select a city</option>
              <option value="new_york">New York</option>
              <option value="los_angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </Field>
            <ErrorMessage name="city" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <Field as="textarea" id="message" name="message" />
            <ErrorMessage name="message" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="customField">Custom Field</label>
            <Field
              name="customField"
              component={CustomInputComponent}
              type="text"
              placeholder="Enter custom field"
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);


export default Field_demo;