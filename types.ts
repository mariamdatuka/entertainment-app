import { ReactNode } from 'react';

export interface Data{
    _id:string;
    title:string;
    regularSmall: string;
    regularMedium: string;
    regularLarge: string;
    year:number,
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
}

export interface userData{
    avatar:any;
    email:string;
    password:string;
}

export interface LogUser{
    email:string;
    password:string;
}

export interface ProtectedRouteProps {
    element: ReactNode;
    isAuth: boolean;
  }