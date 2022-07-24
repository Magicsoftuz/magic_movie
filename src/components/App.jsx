import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Actors from "./Actors/Actors";
import MovieInformation from "./MovieInformation/MovieInformation";
import Movies from "./Movies/Movies";
import Navbar from "./Navbar/Navbar";
import Profile from "./Profile/Profile";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route index path="/movie/:id" element={<MovieInformation />} />

          <Route index path="/actors/:id" element={<Actors />} />

          <Route index path="/" element={<Movies />} />

          <Route index path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
