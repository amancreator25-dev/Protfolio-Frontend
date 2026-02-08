import React,{useEffect,useState} from "react"
import axios from "axios"

function contactApi(name,telephone,email,descripton){
    const [info, setInfo]=useState({})
}





/*
import React, { useEffect, useState } from "react";
import axios from 'axios'

function Api() {

  const [info , setInfo]=useState({});
  const [file0, setFile0]=useState(null);
  const [file1, setFile1]=useState(null);

useEffect(() => {
    if (!file0) return; // prevent sending request before file is chosen
    if(!file1) return;
    const formData = new FormData();
    formData.append("email", "dbca@gmail.com");
    formData.append("fullname", "Aman");
    formData.append("username", "aman@"); // don't forget username
    formData.append("password", "A1man@2340");
    formData.append("avatar", file0); // attach file
    formData.append("coverImage", file1); // attach file

    axios
      .post("/api/v1/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
        setInfo(res.data);
      })
      .catch((err) => {
        console.error("Error in fetching", err);
      });
  }, [file0,file1]); // run whenever file changes

  return (
    <>
      <h1>{String(info.email)}</h1>
      <h1>{String(info.fullname)}</h1>

      <input
        type="file"
        onChange={(e) => setFile0(e.target.files[0])}
      />

      <input
        type="file"
        onChange={(e) => setFile1(e.target.files[0])}
      />

    </>
  );
}

export default Api;
*/