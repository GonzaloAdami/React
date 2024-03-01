import  { ChangeEvent, useEffect, useState } from 'react';
import { App } from './App';

type CardType = {
  id: number;
  title: string;
  description: string;
  backgroundImage: string; // Suponiendo que backgroundImage es una cadena URL
};




export function Menu() {


  const [formData, setFormData] = useState({
    title: '',
    description: '',
    backgroundImage: '',
  });

  const [arrayCards, setArrayCards] = useState<CardType[]>([]);

  useEffect(() => {
    // Load data from local storage when the component mounts
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      setArrayCards(JSON.parse(storedCards));
    }
  }, []);

  useEffect(() => {
    // Save data to local storage when arrayCards changes
    localStorage.setItem('cards', JSON.stringify(arrayCards));
   
  }, [arrayCards]);

  function cambiarFoto(file: ChangeEvent<HTMLInputElement>) {
    if (file) {
      render(file);
    }
  }

  function render(event: ChangeEvent<HTMLInputElement>) {
    
  
    const input = event.target;
    const files = input.files;
  
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const base64String = e.target?.result as string;
       
  
        setFormData({
          ...formData,
          backgroundImage: base64String,
        });
      };
  
      // Read the file as base64
      reader.readAsDataURL(file);
    }
  }
  
  function handleSubmit() {
    const { title, description, backgroundImage } = formData;
  
    if (backgroundImage) {
      const newCard: CardType = {
        id: arrayCards.length + 1,
        title,
        description,
        backgroundImage,
      };
  
      setArrayCards([...arrayCards, newCard]);
      setFormData({
        title: '',
        description: '',
        backgroundImage: '',
      });
    }
  }
  
  return (
    <section>
      <nav>
        <ul>
          <li>
            {/* Add your navigation items here */}
          </li>
          <li>
            <label htmlFor="name">
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </label>
          </li>
          <li>
            <label htmlFor="url">
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </label>
          </li>
          <li>
            <div className="file-upload">
              <label htmlFor="file-input" className="fileInputLabel">
                Upload Image
              </label>
              <input id="file-input" type="file" accept="image/*" onChange={cambiarFoto} className="fileInput" />
            </div>
          </li>
          <li>
            <button onClick={handleSubmit} className='button'>Publicar</button>
          </li>
        </ul>
      
      </nav>
      <App cards={arrayCards} />
      
    </section>
  );
}
