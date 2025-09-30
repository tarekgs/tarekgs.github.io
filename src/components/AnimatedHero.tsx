import { motion } from "framer-motion";

export default function AnimatedHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="hero-content"
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        style={{
          fontFamily: "'Reenie Beanie', cursive",
          fontSize: "4rem",
          lineHeight: "80px",
          marginBottom: "40px",
          color: "#1e3a8a"
        }}
      >
        Hey, I'm Tarek
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        style={{
          fontFamily: "'Reenie Beanie', cursive",
          fontSize: "2rem",
          lineHeight: "40px",
          maxWidth: "800px",
          color: "#374151"
        }}
      >
        I'm drawn to deep tech, human systems, and the messy space between them. DC-born and SF-based, I'm a cross-country curiousity chaser.
        <br /><br />
        I believe progress comes from the questions we're willing to explore. If you do too, let's trade a few.
      </motion.p>
    </motion.div>
  );
}