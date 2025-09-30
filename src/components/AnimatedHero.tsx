import { motion } from "framer-motion";

export default function AnimatedHero() {
  return (
    <div style={{ position: "relative" }}>
      {/* Doodles - Desktop only */}
      <motion.img
        src="/robot-surf-doodle.png"
        alt=""
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.55, ease: "easeOut" }}
        className="doodle-robot"
        style={{
          position: "absolute",
          top: "5%",
          right: "-50px",
          width: "200px",
          height: "auto",
          transform: "translateY(-50%) rotate(12deg)",
          zIndex: 1
        }}
      />

      <motion.img
        src="/rocket-gg-doodle.png"
        alt=""
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.45, ease: "easeOut" }}
        className="doodle-rocket"
        style={{
          position: "absolute",
          bottom: "-290px",
          left: "50px",
          width: "375px",
          height: "auto",
          transform: "rotate(-5deg)",
          zIndex: 1
        }}
      />

      <motion.img
        src="/alien-tree-doodle.png"
        alt=""
        initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
        animate={{ opacity: 0.7, scale: 1, rotate: 15 }}
        transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
        className="doodle-alien-desktop"
        style={{
          position: "absolute",
          top: "90%",
          right: "100px",
          width: "275px",
          height: "auto",
          transform: "translateY(-50%)",
          zIndex: 1
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.75, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="hero-content"
        style={{ position: "relative", zIndex: 2 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="hero-title"
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
          className="hero-text"
          style={{
            fontFamily: "'Reenie Beanie', cursive",
            fontSize: "2rem",
            lineHeight: "40px",
            maxWidth: "800px",
            color: "#374151"
          }}
        >
          I believe progress comes from questions we're <a href="https://www.reddit.com/r/Songwriting/comments/11b1vlx/john_mayer_on_songwriting/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'none' }}>stupid brave</a> enough to explore. Some deep, some delightfully dumb.
          <br /><br />
          If you do too, come <a href="/contact" style={{ color: '#1e40af', textDecoration: 'none' }}>say hi</a>.
        </motion.p>

        {/* Doodle - Mobile only */}
        <motion.img
          src="/alien-tree-doodle.png"
          alt=""
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          className="doodle-alien-mobile"
          style={{
            width: "200px",
            height: "auto",
            margin: "20px auto 0",
            display: "none"
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .doodle-robot,
          .doodle-rocket,
          .doodle-alien-desktop {
            display: none !important;
          }
          .doodle-alien-mobile {
            display: block !important;
          }
          .hero-title {
            font-size: 2rem !important;
            line-height: 40px !important;
            margin-bottom: 40px !important;
          }
          .hero-text {
            font-size: 1.25rem !important;
            line-height: 40px !important;
          }
        }
      `}</style>
    </div>
  );
}