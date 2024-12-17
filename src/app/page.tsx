// pages/index.tsx
import { NextPage } from 'next';
import ColorPicker from '../components/ColorPicker';

const Home: NextPage = () => {
  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: 'url("https://i.pinimg.com/736x/7d/6d/c9/7d6dc903d2ae934f50424f95ce20fe74.jpg")', // Replace with your image URL
        backgroundSize: 'cover', // Ensures the image covers the whole area
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Ensures the image doesn't repeat
      }}
    >
      <ColorPicker />
    </div>
  );
};

export default Home;
