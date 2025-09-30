import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedDoodleProps {
  src: string;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}

export default function AnimatedDoodle({
  src,
  delay = 0,
  duration = 3,
  style = {},
}: AnimatedDoodleProps) {
  const [svgPaths, setSvgPaths] = useState<string[]>([]);
  const [viewBox, setViewBox] = useState<string>("");

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((svgText) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgText, "image/svg+xml");
        const svg = doc.querySelector("svg");

        if (svg) {
          setViewBox(svg.getAttribute("viewBox") || "");
          const paths = Array.from(doc.querySelectorAll("path"));
          setSvgPaths(paths.map(p => p.getAttribute("d") || ""));
        }
      });
  }, [src]);

  if (!svgPaths.length) return null;

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0
    },
    visible: {
      pathLength: 1,
      opacity: style.opacity || 0.8,
      transition: {
        pathLength: {
          duration,
          ease: "easeInOut"
        },
        opacity: {
          duration: 0.3
        }
      }
    }
  };

  return (
    <motion.svg
      viewBox={viewBox}
      style={{
        ...style,
        overflow: "visible"
      }}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {svgPaths.map((d, index) => (
        <motion.path
          key={index}
          d={d}
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
          transition={{
            delay: delay + (index * 0.005)
          }}
        />
      ))}
    </motion.svg>
  );
}