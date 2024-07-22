import { createContext } from "react";
import { AuthenticatedContext } from "@/app/authentication/dtos/authentication";

export const AuthContext = createContext<AuthenticatedContext | null>(null);
