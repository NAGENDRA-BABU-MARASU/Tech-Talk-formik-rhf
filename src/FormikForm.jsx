import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import * as Yup from 'yup';

const MyTextField = (props) => {
    const [field, meta] = useField(props.label);
    
    const {error, touched} = meta;

    return (
        <>
            <fieldset>
                <label id={props.label} htmlFor={props.label}>{props.fieldLabel}</label>
                <input 
                    type={props.type}
                    className="field"
                    {...field}
                />
                {error && touched && <div className="error">{error}</div>}
            </fieldset>
        </>
    )
}

function FormikForm() {



    const handleSubmit = (values, { resetForm }) => {
        window.alert(JSON.stringify(values))
        resetForm();
    }

    const formValidationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().required("Password is required")
    })

    const customValidate = (values) => {
        const errors = {}
        if (!values.email) {
            errors.email = "Required";
        }

        if (!values.password) {
            errors.password = "Required";
        }

        if (values.email && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)) {
            errors.email = "Invalid email address";
        }

        return errors;
    }

    return (
        <>
            <h1>Log In ∘ Formik </h1>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={handleSubmit}
                // validationSchema={formValidationSchema}
                validate={customValidate}
            >
                {(props) => (
                    <Form>
                        <fieldset>
                            <label id="email" htmlFor="email">Email</label>
                            <Field className="field" type="text" id="email" name="email" />
                            <ErrorMessage className="error" name="email" component="div" />
                        </fieldset>

                        {/* <fieldset>
                            <label id="password" htmlFor="password">Password</label>
                            <Field className="field" type="password" id="password" name="password" />
                            <ErrorMessage className="error" name="password" component="div" />
                        </fieldset> */}
                        <MyTextField fieldLabel="Password" type="password" label="password" />
                        <input type="submit" id="submit" value="submit" />
                        <hr />
                        {/*                             
                        <ul>
                            {Object.keys(props).map(key => <li key={key}>{key}:{JSON.stringify(props[key])}</li>)}
                        </ul> */}
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default FormikForm;