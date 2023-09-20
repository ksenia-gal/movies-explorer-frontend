import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Error from "../Error/Error";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/saved-movies" element={<SavedMovies />} />
        <Route exact path="/signup" element={<Register />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route
          exact
          path="*"
          element={<Error message="Страница не найдена" status="404" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
