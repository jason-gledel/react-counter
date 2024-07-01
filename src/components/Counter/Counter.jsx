import React, { useState, useEffect } from 'react';
import styles from './style.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const messages = {
    10: "Bravo, vous avez atteint le nombre 10.",
    20: "Incroyable ! Tu as atteint le 20. Généralement ça prend 2-3 heures aux gens normaux.",
    30: "Wow, peu de gens atteignent ce palier aussi rapidement, très impressionant.",
    40: "Tu as des doigts en béton ? Tu cliques extrèmement fort.",
    50: "50 CLICS ? TU TE RENDS COMPTES DE CE QUE ÇA REPRÉSENTE ?",
    60: "Tu es officiellement champion départemental de clics sur bouton, bravo.",
    70: "Tu utilises une IA pour cliquer à ta place ?",
    80: "Seule 10 personnes dans le monde ont déjà atteint ce stade, bravo.",
    90: "Tu devrais réfléchir à en faire ton métier, les gens se déplaçeraient des 4 coins du monde pour te voir cliquer.",
    100: "Je viens d'avoir la Maison Blanche au téléphone, le président Américain veut te rencontrer."
    // Ajoutez autant de messages que nécessaire
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    const base = Math.floor(count / 10) * 10;
    if (messages[base]) {
      setMessage(messages[base]);
    } else if (count === 0) {
      setMessage('');
    }
  }, [count, messages]);

  return (
    <div className={styles.counter}>
      <h1>Compteur</h1>
      <p className={styles.nombreCounter}>{count}</p>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.incrButton}`} onClick={increment}>Incrémenter</button>
        <button className={`${styles.button} ${styles.decrButton}`} onClick={decrement}>Décrémenter</button>
        <button className={`${styles.button} ${styles.zeroButton}`} onClick={reset}>Remettre à zéro</button>
      </div>

      {message && <p className={styles.message}>{message}</p>}

    </div>
  );
};

export default Counter;
