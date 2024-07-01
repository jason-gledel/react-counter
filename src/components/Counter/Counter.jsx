// Importation des modules nécessaires depuis React
import React, { useState, useEffect } from 'react';
// Importation des styles depuis un module CSS
import styles from './style.module.css';

// Définition du composant fonctionnel Counter
const Counter = () => {
  // Déclaration de l'état local pour le compteur et le message
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // Ajoute un message différent à chaque passage de dizaine
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
  };

  // Fonction pour incrémenter le compteur
  const increment = () => {
    setCount(count + 1);
  };

  // Fonction pour décrémenter le compteur, uniquement si le compteur est supérieur à 0
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Fonction pour réinitialiser le compteur à zéro
  const reset = () => {
    setCount(0);
  };

  // Effet pour mettre à jour le message chaque fois que le compteur change
  useEffect(() => {
    // Calcul de la dizaine de base actuelle
    const base = Math.floor(count / 10) * 10;
    // Si un message existe pour cette dizaine, on le met à jour
    if (messages[base]) {
      setMessage(messages[base]);
    } else if (count === 0) {
      // Si le compteur est à zéro, on réinitialise le message
      setMessage('');
    }
  }, [count, messages]);

  // Retourne le JSX du composant
  return (
    <div className={styles.counter}>
      <h1>Compteur</h1>
      <p className={styles.nombreCounter}>{count}</p>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.incrButton}`} onClick={increment}>Incrémenter</button>
        <button className={`${styles.button} ${styles.decrButton}`} onClick={decrement}>Décrémenter</button>
        <button className={`${styles.button} ${styles.zeroButton}`} onClick={reset}>Remettre à zéro</button>
      </div>

      {/* Affiche le message si un message est présent */}
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
};

// Exportation du composant Counter comme exportation par défaut
export default Counter;
