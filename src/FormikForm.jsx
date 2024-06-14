import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';

function FormikForm() { 

    const handleSubmit = (data, {resetForm}) => {
		window.alert(JSON.stringify(data))
		resetForm();
	}

    const formValidationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().required("Password is required")
    })

    return (
        <>
            <h1>Log In ∘ Formik </h1>
            <Formik
                initialValues={{
                    email:"",
                    password:"",
                }}
                onSubmit={handleSubmit}
                validationSchema={formValidationSchema}
            >
                {() => (
                    <Form>
                        <fieldset>
                            <label id="email" htmlFor="email">Email</label>
                            <Field className="field" type="text" id="email" name="email"/>
                            <ErrorMessage className="error" name="email" component="div" />
                        </fieldset>

                        <fieldset>
                            <label id="password" htmlFor="password">Password</label>
                            <Field className="field" type="password" id="password" name="password" />
                            <ErrorMessage className="error" name="password" component="div" />
                        </fieldset>
                        
                        <input type="submit" id="submit" value="submit" />
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default FormikForm;