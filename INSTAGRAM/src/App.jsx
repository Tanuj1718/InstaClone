import { useState } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import AuthPage from './pages/AuthPage/AuthPage'
import PageLayout from './Layout/PageLayout/PageLayout'

function App() {

  return (
    <>
    <PageLayout>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/auth' element={<AuthPage/>}/>
      <Route path='/:username' element={<ProfilePage/>}/>
     </Routes>
     </PageLayout>
    </>
  )
}

export default App
