import React, { useEffect } from "react";
import Background from "../../Components/Backgrounds/Background";
import MainCard from "../../Components/Cards/MainCard";
import InputForm from "../../Components/Inputs/InputForm";
import PrimaryButton from "../../Components/Buttons/Primary/PrimaryButton";
import Grid from "@mui/material/Grid";
import CardTitle from "../../Components/Titles/CardTitle";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
//
import { SnackCtx } from "../../Context/Snackcontext";
import { UserContext } from "../../Context/UserContext";

const endPoint = process.env.REACT_APP_END_POINT_URL;

const Login = (props) => {

    const { openSnackbar, closeSnackbar } = useContext(SnackCtx);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        if (user.logged) {
            navigate("/home");
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${endPoint}/login`, {
            method: "POST",
            body: JSON.stringify({ email, password }), // data can be `string` or {object}!
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((response) => {
                console.log("Success:", response);
                if (response.ok) {
                    setUser(response.payload);

                    openSnackbar("¡Bienvenido!", "success");
                    navigate("/home");
                    console.log("funciona", endPoint)
                } else {
                    openSnackbar("Usuario y/o contraseña incorrecto", "error");
                }
            })
            .catch((error) => {
                openSnackbar("Algo salió mal, intenta nuevamente", "error");
                console.error("Error:", error);
            });
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
                        <Grid
                            item
                            xs={10}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <CardTitle titleText="¡Bienvenido!" />
                        </Grid>
                        <Grid item xs={10}>
                            <InputForm
                                label="Correo electrónico"
                                required={true}
                                value={email}
                                onChangeValue={handleChangeEmail}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <InputForm
                                label="Contraseña"
                                required={true}
                                type="password"
                                value={password}
                                onChangeValue={handleChangePassword}
                            />
                        </Grid>
                        <Grid item xs={10}>
                            <Grid
                                container
                                spacing={{ xs: 2 }}
                                justifyContent="center"
                            >
                                <Grid item>
                                    <PrimaryButton
                                        buttonText="Iniciar sesión"
                                        color="secondary"
                                        type="submit"
                                        variant="contained"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={10}>
                            <p>
                                ¿No tienes cuenta?{" "}
                                <Link
                                    href="/signup"
                                    color="primary"
                                    underline="none"
                                >
                                    Registrate
                                </Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
            </MainCard>
        </div>
    );
};

export default Login;
