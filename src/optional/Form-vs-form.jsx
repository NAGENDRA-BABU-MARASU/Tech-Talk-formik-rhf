import { ErrorMessage, Field, Form, Formik } from "formik";

const Practice = () => {
    return (
        <div>
            <Formik
                initialValues={{ name: "", email: "" }}
                onSubmit={(values) => { console.log('%csrc/practice.jsx:8 values', 'color: #007acc;', values); }}
            >
                {({ }) => (
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

                        <button type="submit">
                            Submit
                        </button>
                    </Form>
                )}

            </Formik>
            <hr />
            <Formik
                initialValues={{ name: "", email: "" }}
                onSubmit={(values) => { console.log('%csrc/practice.jsx:8 values', 'color: #007acc;', values); }}
            >
                {({ handleSubmit }) => (
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label htmlFor="name">Name</label>
                            <Field type="text" id="name" name="name" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>

                        <div>
                            <label htmlFor="name">Name</label>
                            <Field type="text" id="name" name="name" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>

                        <button type="submit">
                            Submit
                        </button>
                    </form>
                )
                }

            </Formik>
        </div >
    )
}

export default Practice;
