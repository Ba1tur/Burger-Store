import React, { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

export type SortProductContextType = {
  sortProduct: string;
  setSortProduct: Dispatch<SetStateAction<string>> | string | undefined;
};

export const Context = createContext<SortProductContextType | undefined>(undefined);