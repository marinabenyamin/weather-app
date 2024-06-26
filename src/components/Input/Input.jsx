import React, { useState } from 'react'

export default function Input() {
  const [form, setForm]=useState({
    firstName:"",
    lastName:"",
    email:"",
  })

  const handleForm = (e) =>{
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
  }
  const submit = (e) =>{ 
    e.preventDefault(); // prevent reloading on form submission (btmn3 el reload  ya marina)
    //send data to api with axios or fetch
    console.log(form);
}

  return (
    <>
    <div>input</div>
    <form onSubmit={submit}>
      <input value={form.firstName} onChange={handleForm} name="firstName" placeholder='firstname'></input>
      <input value={form.lastName} onChange={handleForm} name="lastName" placeholder='lastname'></input>
      <input value={form.email} onChange={handleForm} name="email" placeholder='email'></input>
      <button type="submit">ok</button>
    </form>

    </>
    
  )
}
