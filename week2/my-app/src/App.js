import React from 'react';
import './App.css';
import BlogList from './components/bloglist/blogList.js'
import Header from './components/header/header.js'
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
