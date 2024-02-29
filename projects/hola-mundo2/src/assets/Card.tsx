

type CardProps = {
  backgroundImage?: string;
  title: string;
  description: string;
};

export function Card({ backgroundImage, title, description }: CardProps) {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <a href={description} target='_blank'>
      <header className='containerCard'>
        <div className='card' style={cardStyle} />
        <h2 className='title'>{title}</h2>
      </header>
    </a>
  );
}
