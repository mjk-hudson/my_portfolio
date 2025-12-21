import React from 'react'
import HeaderBar from './HeaderBar';
import Card from './card';
import { Outlet } from 'react-router-dom';
import './App.css'

export default function App ()
{
  return (
    <>
      <HeaderBar />
      <div>
        <Outlet />
      </div>
    </>
  );
}

