"use client";

import React, { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, Heart, Clock, Star } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Movie } from "@/components/types";
import { MOVIES } from "@/components/constants";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogDescription = DialogPrimitive.Description;
export const DialogHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col space-y-1.5 text-center sm:text-left">
    {children}
  </div>
);
export const DialogTitle = DialogPrimitive.Title;
export const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-5xl translate-x-[-50%] translate-y-[-50%] gap-4 bg-zinc-900/95 p-0 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-2xl",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 z-50 rounded-full bg-zinc-900/90 p-2 text-white opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2">
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const MovieDialog = ({ movie }: { movie: Movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity hover:opacity-100">
          <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20">
            Ver detalles
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="grid grid-cols-[2fr,3fr] overflow-hidden p-0">
        <div className="relative h-full">
          <Image
            src={movie.image}
            alt={movie.title}
            className="absolute inset-0 h-full w-full object-cover"
            width={500}
            height={750}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>

        <div className="flex flex-col p-8">
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-4xl font-bold text-white">
                {movie.title}
              </DialogTitle>
              <div className="mt-2 flex items-center gap-4 text-zinc-400">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {movie.duration}
                </span>
                <span>{movie.year}</span>
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
                  {movie.rating || "PG-13"}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="rounded-full p-2 transition-colors hover:bg-white/10"
            >
              <Heart
                className={cn("h-6 w-6 transition-colors", 
                  isFavorite ? "fill-red-500 text-red-500" : "text-zinc-400"
                )}
              />
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {movie.genre.split(",").map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-white/10 px-3 py-1 text-sm text-white"
              >
                {genre.trim()}
              </span>
            ))}
          </div>

          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            {movie.description}
          </p>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">Reparto</h3>
            <div className="mt-2 text-zinc-400">
              {movie.starring || "No disponible"}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">Dirección</h3>
            <div className="mt-2 text-zinc-400">{movie.director || "No disponible"}</div>
          </div>

          <button className="mt-8 rounded-lg bg-white px-8 py-3 font-semibold text-black transition-colors hover:bg-zinc-200">
            Reproducir
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const MovieList = ({ selectedCategory }: { selectedCategory: string }) => {
  const filteredMovies =
    selectedCategory === "All"
      ? MOVIES
      : MOVIES.filter((movie) => movie.genre.includes(selectedCategory));

  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {filteredMovies.map((movie) => (
          <div key={movie.title} className="group relative flex flex-col">
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-zinc-800">
              <Image
                src={movie.image}
                alt={movie.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                width={200}
                height={300}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <MovieDialog movie={movie} />
            </div>
            <div className="mt-2 px-0.5">
              <h3 className="truncate text-sm font-medium text-white">
                {movie.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span>{movie.year}</span>
                {movie.duration && (
                  <>
                    <span>•</span>
                    <span>{movie.duration}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { MovieList };