import { useForm } from "react-hook-form";

function ReactHookForm() {

    const { register, formState: { errors }, handleSubmit, reset } = useForm(
        {
            mode: 'onChange',
            defaultValues: {
                email: "you@example.com",
                password: ""
            }
        }
    );

    const onSubmitForm = (data) => {
        window.alert(JSON.stringify(data))
        reset();
    }


    return (
        <>
            <h1>Log In ∘ React-Hook-Form </h1>
            <form onSubmit={handleSubmit(onSubmitForm)} >
                <fieldset>
                    <label id="email" htmlFor="email">Email</label>
                    <input {...register('email', {
                        required: true,
                        pattern: {
                            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Invalid email address',
                        }
                    })} className="field" type="text" id="email" />
                    {errors.email && errors.email.type === 'required'
                        && <div className="error">Email is required</div>}
                    {errors.email && errors.email.type === 'pattern'
                        && <div className="error">{errors.email.message}</div>}
                </fieldset>

                <fieldset>
                    <label id="password" htmlFor="password">Password</label>
                    <input {...register('password', { required: true })} 
                        className="field" type="password" id="password" />
                    {errors.password && <div className="error">Password is required</div>}
                </fieldset>

                <input type="submit" id="submit" value="submit" />
            </form>
        </>
    )

}

export default ReactHookForm;