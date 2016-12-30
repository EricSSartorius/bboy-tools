import React from 'react';

export const MainLayout = ({ content }) => (
  <div>
    <div>
      <Header />
      <main className="main-layout">
        {content()}
      </main>
    </div>
    <footer className="site-footer">
      Bboy Tools © 2016
    </footer>
  </div>
);
