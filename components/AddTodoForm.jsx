"use client";
import React from 'react'
const AddTodoForm = () => {
    return (
        <div className='login'>
            <section>
                <form>
                    <input type='text' placeholder='Task TItle' autoComplete='off' />
                    <input type='text' placeholder='Task Description' autoComplete='off' />

                    <button type='submit'>Add Task</button>
                </form>
            </section>
        </div>
    )
}

export default AddTodoForm