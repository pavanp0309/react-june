import React from "react";
import MovieList from "./components/movieapp/MovieList";
import MovieDetails from "./components/movieapp/MovieDetails";
import { Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        {/* Default route: localHost:5173/ */}
        <Route path="/" element={<Navigate to={"/movies"} replace />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default App;
