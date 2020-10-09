import React, { useState } from "react";

export const Form = () => {
    const [formState, setFormState] = useState({
        name: "",
        age: "",
        height: "",
    })

    const handleChange = (e) => {
        e.persist()
        setFormState({ [e.target.name]: e.target.value})
    }

    return(
        <>
        <h2>Test Form</h2>
        <form>
            <label htmlFor="name">Name:
            <input name="name" id="name" type="text" value={formState.name} onChange={handleChange}></input>
            </label>
            <label htmlFor="age">Age:
            <input name="age" id="age" type="text" value={formState.age} onChange={handleChange}></input>
            </label>
            <label htmlFor="height">Height:
            <input name="height" id="height" type="text" value={formState.height} onChange={handleChange}></input>
            </label>
        </form>
        </>     
    )
}