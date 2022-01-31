import React from "react";
import Background from "../Backgrounds/Background";
import MainCard from "../Cards/MainCard";
import InputForm from "../Inputs/InputForm";
import styles from "./Login.module.scss";
import PrimaryButton from "../Buttons/Primary/PrimaryButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { grid } from "@mui/system";
import CardTitle from "../Titles/CardTitle";
import { useState } from "react";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password); //ELIMINAR
    fetch("https://checalo-mx-api.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify({ userName: email, password: password }), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => console.log("Success:", response))
      .catch((error) => console.error("Error:", error));
  };

  const handleChangeEmail = (value) => {
    setEmail(value);
  };

  const handleChangePassword = (value) => {
    setPassword(value);
  };

  return (
    <div>
      <Background />
      <MainCard>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={{ xs: 2 }} justifyContent="center">
            <Grid item xc={10}>
              <CardTitle titleText="¡Bienvenido!" />
            </Grid>
            <Grid item xs={10}>
              <InputForm
                label="Correo electrónico"
                value={email}
                onChangeValue={handleChangeEmail}
              />
            </Grid>
            <Grid item xs={10}>
              <InputForm
                label="Contraseña"
                type="password"
                value={password}
                onChangeValue={handleChangePassword}
              />
            </Grid>
            <Grid item xs={10}>
              <PrimaryButton
                buttonText="Iniciar sesión"
                color="secondary"
                type="submit"
              />
            </Grid>
          </Grid>
        </form>
      </MainCard>
    </div>
  );
};

export default Login;
