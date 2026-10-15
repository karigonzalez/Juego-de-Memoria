# 🧠 Juego de la Memoria (Memory Match)

Un clásico juego de memoria interactivo desarrollado con **HTML5**, **CSS3** y **JavaScript**. El objetivo del juego es encontrar todas las parejas de íconos volteando las cartas en el menor número de intentos posible.

---

## 🚀 Características

* **Diseño responsivo y moderno:** Interfaz limpia con animaciones de volteo en 3D para las cartas.
* **Contador de intentos en tiempo real:** Mide tu rendimiento a medida que descubres las parejas.
* **Función de reinicio:** Permite barajar las cartas aleatoriamente para iniciar una nueva partida en cualquier momento.
* **Algoritmo de mezclado:** Utiliza el método Fisher-Yates para asegurar que la posición de los íconos sea completamente aleatoria en cada partida.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica de la interfaz y el tablero.
* **CSS3:** Diseño con Grid, Flexbox y transformaciones 3D (`transform-style: preserve-3d`).
* **JavaScript (ES6+):** Lógica del juego, manejo del DOM, eventos de clic y control de estados (bloqueo de tablero, comparación de parejas y detección de victoria).

---

## 📁 Estructura del Proyecto

```text
Juego-de-Memoria/
│
├── index.html          # Archivo principal de la interfaz
├── css/
│   └── style.css       # Estilos, animaciones y diseño del tablero
└── js/
    └── script.js       # Lógica del juego y gestión de eventos
