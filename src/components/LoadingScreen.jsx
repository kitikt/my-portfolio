import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/loading.json';
import '../style/LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div
          className="loading-logo"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>Tran Gia Kiet</h1>
          <p>Portfolio</p>
        </motion.div>
        
        <motion.div
          className="loading-lottie"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            autoplay={true}
            style={{ width: 300, height: 300 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 