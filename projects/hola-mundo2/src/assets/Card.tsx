type CardProps = {
  backgroundImage?: string;
  title: string;
  description: string;
};

export function Card({ backgroundImage, title, description }: CardProps) {
  // Verifica si el título está vacío y asigna "New Post" en su lugar
  const displayTitle = title.trim() === '' ? 'New Post' : title;

  // Verifica si el fondo de pantalla está vacío y asigna el enlace proporcionado en su lugar
  const displayBackgroundImage = backgroundImage ? backgroundImage : "./test.jpg";

  const cardStyle = {
    backgroundImage: `url(${displayBackgroundImage})`,
  };

  return (
    <a href={description} target='_blank'>
      <header className='containerCard'>
        <div className='card' style={cardStyle} />
        <h2 className='title'>{displayTitle}</h2>
      </header>
    </a>
  );
}
