"use client"
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Login from "../components/Login";
import CategorySelector from "../components/CategorySelector";
import MovieList from "../components/MovieList";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { BuscarPeliculas } from "../components/buscarpeliculas";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  return (
    <div className="bg-black min-h-screen text-white">
      <Navigation />
      <div className="flex justify-end p-4">
        <Login />
      </div>
      <CategorySelector
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <MovieList selectedCategory={selectedCategory} />
      <BuscarPeliculas /> 
      <div style={{ position: 'relative' }}>
        <Avatar style={{ position: 'absolute', top: 0, right: 10, transform: 'translateY(-1963px)' }}>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Home;