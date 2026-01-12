"use client";
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Client = () => {
  return (
    <main className='min-h-dvh'>
      <h1>Fill out the form below to contribute to our fast growing community of Researchers</h1>

      <section>
        <Formik>
            <Form>
                <div>
                    <label htmlFor="">Research Title</label>
                    <Field/>
                </div>

                <div>
                    <label htmlFor="">Select Category</label>
                    <Field component="select">
                        <option value="marketing">Marketing</option>
                        <option value="politics">Politics</option>
                        <option value="health">Health</option>
                        <option value="programming">Programming</option>
                        <option value="technology">Technology</option>
                        <option value="recipes">Recipes</option>
                        <option value="military">Military</option>
                        <option value="history">History</option>
                        <option value="movies">Movies</option>
                        <option value="music">Music</option>
                    </Field>
                </div>

                <div>
                    <label htmlFor="">Research Note</label>
                    <Field/>
                </div>
            </Form>
        </Formik>
      </section>
    </main>
  )
}

export default Client