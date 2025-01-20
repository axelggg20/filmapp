"use client";

import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Login from "../components/Login";
import CategorySelector from "../components/CategorySelector";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MovieList } from "../components/ui/dialog"; 

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  return (
    <div className="bg-black min-h-screen text-white">
      <Navigation />
      <div className="flex justify-end p-4">
        <Login />
      </div>

      <Dialog>
  <DialogTrigger asChild>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle></DialogTitle>
      <DialogDescription>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

      <Card>
        <CardHeader/>
          <CardTitle/>
          <CardDescription/>
        <CardContent/>
        <CardFooter/>
      </Card>

      <div className="flex justify-between p-6">
        <CategorySelector
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <div className="flex w-3/4 max-w-sm items-center justify-end space-x-2">
          <Input placeholder="Search Movie" />
          <Button>Search</Button>
        </div>
      </div>

      <MovieList selectedCategory={selectedCategory} />
    </div>
  );
};

export default Home;
