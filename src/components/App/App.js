import "./App.css";
import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Error from "../Error/Error";
import { OK } from "../../utils/constants";
import mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";

function App() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState({
    isShown: false,
    message: "",
    code: OK,
  });

  React.useEffect(() => {
    tokenCheck();
  }, []);

  function tokenCheck() {
    const jwt = localStorage.getItem("jwt");

    if (jwt) {
      mainApi
        .checkToken(jwt)
        .then((res) => {
          setIsLoggedIn(true);
          navigate("/", { replace: true });
        })
        .catch(console.error);
    }
  }

  React.useEffect(() => {
    setIsLoading(true);
    mainApi
      .getUserInfo()
      .then(data => {
        setIsLoggedIn(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, [isLoggedIn]);

  React.useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUsersMovies()
        .then((data) => {
          setSavedMovies(data);
          setIsError(false);
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
        });
    }
  }, [isLoggedIn]);

  function handleRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then(data => {
        if (data) {
          console.log(data);
          handleLogin(email, password);
        }
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          message,
          isShown: true,
          code: statusCode,
          messageType: "register",
        });
      });
  }

  function handleLogin(email, password) {
    setIsLoading(true);
    mainApi
      .login(email, password)
      .then(res => {
        setIsLoggedIn(true);
        navigate("/movies", { replace: true });
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          message,
          isShown: true,
          code: statusCode,
          messageType: "login",
        });
      })
      .finally(() => setIsLoading(false));
  }

  function handleSignOut() {
    mainApi
      .signout()
      .then((res) => {
        localStorage.removeItem("jwt");
        setIsLoggedIn(false);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUserData(name, email) {
    mainApi
      .updateUserData(name, email)
      .then((data) => {
        setCurrentUser(data);
        setInfoMessage({
          ...infoMessage,
          isShown: true,
          type: "profile",
        });
      })
      .catch(({ message, statusCode }) => {
        setInfoMessage({
          ...infoMessage,
          message,
          isShown: true,
          code: statusCode,
          messageType: "profile",
        });
      });
  }

  function handleResetInfoMessage() {
    if (infoMessage.isShown) {
      setInfoMessage({
        ...infoMessage,
        message: "",
        isShown: false,
        messageType: "",
        code: OK,
      });
    }
  }

  function handleSaveMovie(movie) {
    mainApi
      .addNewMovie(movie)
      .then((newCard) => {
        setSavedMovies([newCard, ...savedMovies]);
      })
      .catch((err) => console.log(err));
  }

  function handleDeleteMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then(() => {
        const newMoviesList = savedMovies.filter((item) =>
          item._id === movie._id ? false : true
        );
        setSavedMovies(newMoviesList);
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div
        className="app"
        onClick={infoMessage.isShown ? handleResetInfoMessage : null}
      >
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Header isLoggedIn={isLoggedIn} />
            <Routes>
              <Route
                path="/movies"
                element={
                  <ProtectedRoute
                    element={Movies}
                    isLoggedIn={isLoggedIn}
                    savedMoviesList={savedMovies}
                    onLikeClick={handleSaveMovie}
                    onDeleteClick={handleDeleteMovie}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute
                    element={SavedMovies}
                    isLoggedIn={isLoggedIn}
                    list={savedMovies}
                    onDeleteClick={handleDeleteMovie}
                    isError={isError}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute
                    element={Profile}
                    isLoggedIn={isLoggedIn}
                    onSignOut={handleSignOut}
                    onUpdate={handleUpdateUserData}
                    infoMessage={infoMessage}
                  />
                }
              />
              <Route path="/" element={<Main />} />
              <Route
                path="/signup"
                element={
                  isLoggedIn ? (
                    <Navigate to="/movies" />
                  ) : (
                    <Register
                      onRegister={handleRegister}
                      infoMessage={infoMessage}
                    />
                  )
                }
              />
              <Route
                path="/signin"
                element={
                  isLoggedIn ? (
                    <Navigate to="/movies" />
                  ) : (
                    <Login onLogin={handleLogin} infoMessage={infoMessage} />
                  )
                }
              />
              <Route
                path="*"
                element={<Error message="Страница не найдена" status="404" />}
              />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
