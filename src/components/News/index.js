import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

const News = () => (
   <div className="App">
        <Header />
        <header className="masthead text-center text-white bgParallax"  id="news">
            <div className="masthead-content">
                <div className="container">
                    <h1 className="masthead-heading mb-0">Notícias</h1>
                </div>
            </div>
        </header>
        <Footer />
   </div>
);