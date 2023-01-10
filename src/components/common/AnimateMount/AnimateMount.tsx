import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  variant: 'fade' | 'fadeAndGrow';
};

const AnimateMount: React.FC<Props> = ({ children, variant }) => {
  switch (variant) {
    case 'fade':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {children}
        </motion.div>
      );
    case 'fadeAndGrow':
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15 }}
        >
          {children}
        </motion.div>
      );
    default:
      console.warn(`AnimateMount: invalid 'variant' prop (${variant})`);
      return (<></>);
  }
  
};

export default AnimateMount;