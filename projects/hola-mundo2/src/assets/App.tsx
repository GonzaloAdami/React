import React from 'react';
import { Card } from './Card';

type CardType = {
  id: number;
  title: string;
  description: string;
  backgroundImage: string; // Almacena solo el nombre del archivo
};

type AppProps = {
  cards: CardType[];
};


export const App: React.FC<AppProps> = ({ cards }) => {
  return (
    <div className='containerCards'>
      {cards.map((card) => (
        <Card
        key={card.id}
        backgroundImage={card.backgroundImage}
        title={card.title}
        description={card.description}
        />
      ))}
    </div>
  );
};
