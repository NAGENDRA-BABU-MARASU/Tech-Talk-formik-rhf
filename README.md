# Formik
Formik is 3rd party library to create forms in React.   
It simplifies the process of handling form state, validation and submission.  
Formik's primary features include :
- Managing form state  
- Handling form submissions  
- Validating form input
- Displaying error messages

## Formik - Getting Started 
You can install formik as follows:  
`npm install formik (or) yarn add formik`

Then to use formik, import formik and other required components from the formik package   
`import { Formik, Field } from "formik"`

Formik provides various components like Formik, Form, Field, ErrorMessage etc..,

### &lt;Formik&gt;
<Formik:> It is a hiher order component, it keeps track of our form's state and renders the forms and also exposes a few methods and event handlers to our form via props.  
<p style="text-align: center;">Props</p>

| Prop          | Types    | Description                                                                                                                                                                 |
|---------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| initialValues | Object   | An object containing initial values for the form fields. Each key corresponds to a field name, and the value  represents the initial value of the field.                    |
| onSubmit      | Function | A function called when the form is submitted. It receives the form values as an argument.                                                                                   |
| children      | Function | A render prop function that receives props related to form state and functions to interact with the form. It should return React elements representing the form components. |

### &lt;Form&gt;

Form is a wrapper around the regular HTML `<formik>` element that automatically hooks into Formik's handleSubmit and handleReset functions.

// we can use this  
`<Form />`

// instead of this  
 `<form onReset={formikProps.handleReset} onSubmit={formikProps.handleSubmit} {...props} />`

 ### &lt;Field&gt;

 &lt;Field&gt; is a component provided by Formik that serves as an input field within a form. It abstracts the logic for handling different types of form inputs (eg., text input, checkboxes, select) and integrates seamlessly with Formik's form state management.

<p style="text-align: center;">props</p>

| Prop      | Types                | Description                                                                                        |
|-----------|----------------------|----------------------------------------------------------------------------------------------------|
| name      | string               | Required.  The name of field, which corresponds to the state of object in the form’s state object. |
| type      | string               | Specifies the type of input.                                                                       |
| component | string/react element | Specifies the type of input component to render.                                                   |

### &lt;ErrorMessage&gt;

&lt;ErrorMessage&gt; is a component that renders the error message of a given field if that field has been visited and there is an error message present.

<p style="text-align: center;">props</p>

| Prop      | Types                | Description                                                                  |
|-----------|----------------------|------------------------------------------------------------------------------|
| name      | string               | Required. The name of field for which validation errors should be displayed. |
| component | string/react element | Specifies the type of input component to render. 


---------------------------------

# React Hook Form 

React-hook-form is the most popular react library for creating forms compared to formik and other form libraries.

It is a minimal library without any other dependencies while being performant and straightforward to use also.

React-hook-form adopts the use of uncontrolled inputs using ref instead of depending on the state to control the inputs.This approach makes the form more performant and reduces the number of re-renders.

## React Hook Form - Getting Started

You can install React-Hook-Form as follows:  
`npm install react-hook-form (or) yarn add react-hook-form`

Then to use React-Hook-Form, import useForm hook from the react-hook-form package:   
`import { useForm } from "react-hook-form"`

### useForm hook

The useForm Hook returns an object containing a variety properties like 
- register
- formState
- reset
- handleSubmit

### register

With the register method, we can register an input field into React Hook Form so that it is available for the validation, to track changes and also telling to react-hook-form to manage this field.

`‹input type="text" name="firstName" {... register('firstName')} />`

Note: The input component must have a name prop, and its value should be unique.

### formState
This object contains the entire information about the form state like errors, what are the values in the fields, whether they are touched or not, is the form submitted or not etc.,
`const { register, handleSubmit, formState: { errors } } = useForm();`

### handleSubmit
The handleSubmit method, manages form submission. It needs to be passed as the value to the onSubmit prop of the form
component.
```
const onFormSubmit = data => console.log(data);
const onErrors = errors => console.log(errors);
<form 
    onSubmit={handleSubmit(onFormSubmit, onErrors)}
>
    ...
</form>
```
### reset 
With the help of this function, we can reset the entire form state.
```
const { register, handleSubmit, reset, formState: { errors } } = useForm();

const handleReset = () => {
    reset(); // Reset the form values
};
```



