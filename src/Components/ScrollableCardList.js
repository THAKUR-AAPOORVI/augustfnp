import React, { useState } from 'react';
import Card from './Card';
import './ScrollableCardList.css';

const ScrollableCardList = ({ cards }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollAmount) => {
    setScrollPosition(scrollPosition + scrollAmount);
  };

  return (
    <div className="scrollable-card-list">
      <div className="cards-container">
        <div
          className="cards-inner-container"
          style={{ transform: `translateX(-${scrollPosition * 300}px)` }}
        >
          {cards.map((card, index) => (
            <Card key={index} imageSrc={card.imageSrc} title={card.title} />
          ))}
        </div>
      </div>
      <button
        className="scroll-button left"
        onClick={() => handleScroll(-1)}
        disabled={scrollPosition === 0}
      >
        &lt;
      </button>
      <button
        className="scroll-button right"
        onClick={() => handleScroll(1)}
        disabled={scrollPosition >= cards.length - 1}
      >
        &gt;
      </button>
    </div>
  );
};

export default ScrollableCardList;
