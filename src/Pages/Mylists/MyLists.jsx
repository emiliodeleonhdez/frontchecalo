import React, { useEffect, useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Background from "../../Components/Backgrounds/Background";
import { Grid } from "@mui/material";
import Navbar from "../../Components/Navbar/Navbar";
import Lists from "../../Components/Lists/Lists";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import FixedBottomNavbar from "../../Components/FixedBottomNavbar/FixedBottomNavbar";

const endPoint = process.env.REACT_APP_END_POINT_URL;

export default function AlignItemsList() {
    const [list, setList] = useState([]);
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetch(`${endPoint}/list/${id}`, {
            headers: {
                token: user.token,
            },
        }).then((result) =>
            result.json().then((data) => {
                setList(data.list.listItems);
            })
        );
    }, []);

    console.log("Ejemplos Listas", list);
    return (
        <div>
            <Navbar />
            <Background />
            <Grid
                container
                justifyContent="center"
                flexDirection="column"
                marginBottom={10}
                alignItems="center"
            >
                <Grid item marginTop={2}>
                    <Typography
                        fontWeight="700"
                        fontSize={25}
                        color={"grey"}
                        textAlign="center"
                    >
                        Mis Escaneos
                    </Typography>
                </Grid>
                <Grid item margin={2}>
                    {list.map((item, index) => (
                        <Lists
                            key={index}
                            imgAvatar={item.img || ""}
                            productTitle={item.name || ""}
                            date={item.createAt || ""}
                            code={item.code}
                        ></Lists>
                    ))}
                </Grid>
            </Grid>
            <FixedBottomNavbar />

        </div>
    );
}
