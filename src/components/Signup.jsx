import React, {useState} from 'react';
import authService from "../appwrite/auth";
import { Link, useNavigate } from 'react-router-dom';
import {login} from "../store/authSlice";
import {Button, Input, Logo} from "./index";
import { useDispatch } from 'react-redux';
import {useForm} from "react-hook-form";

function signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm();
  const create = async(data) => {
    setError("");
    try {
      
    } catch (error) {
      setError(error.messaget);
    }
  }
  return (
    <div>signup</div>
  )
}

export default signup