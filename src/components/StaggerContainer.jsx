import { motion } from "motion/react";

const StaggerContainer = ({ children, delay = 0, staggerChildren = 0.1, className = "", amount = 0.05 }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: staggerChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
