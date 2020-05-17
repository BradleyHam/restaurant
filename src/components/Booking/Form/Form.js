import React from 'react'
import { useForm } from "react-hook-form";
import Button from '../../Button/Button'
import classes from './Form.module.scss'

const Form = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className={classes.FormSection}>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="name" placeholder='Name' ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input name="email" placeholder='Email' ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <Button type='submit' text='make reservation' />
            </form>
        </div>
    )

}

export default Form;