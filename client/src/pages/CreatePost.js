import "../App.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CreatePost = () => {
  return (
    <div className="cretePostPage">
      <Formik>
        <Form>
          <label>Title: </label>
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="(EX:- Title...)"
          />
          <label>Post: </label>
          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="(EX:- Post...)"
          />
          <label>Username: </label>
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="(EX:- John123...)"
          />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePost;
