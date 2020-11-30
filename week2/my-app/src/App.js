import React from 'react';
import './App.css';
import BlogList from './components/bloglist/blogList.css'
import Header from './components/header/header.css'
import Footer from './components/footer/footer.js'

function App() {
  
    return (
        <div>
            <Header />
            <BlogList />
            <Footer />
        </div>
    )
}

export default App
