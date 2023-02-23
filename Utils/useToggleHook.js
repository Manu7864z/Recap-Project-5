import { useState } from "react";

export const useToggleFavorite = (initialState) => {
  const [isFavorite, setIsFavorite] = useState(initialState);

  const toggler = () => {
    setIsFavorite(!isFavorite);
  };
  return [isFavorite, toggler];
};
