import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  words: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export function TypingEffect({
  words,
  className = "",
  speed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentWord) {
      // Finished typing, wait then start deleting
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (isDeleting && displayText === "") {
      // Finished deleting, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Continue typing or deleting
      const currentSpeed = isDeleting ? deleteSpeed : speed;
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, currentSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, speed, deleteSpeed, delayBetweenWords]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block"
      >
        |
      </motion.span>
    </span>
  );
}
