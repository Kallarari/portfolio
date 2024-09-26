"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

const MeuComponente: React.FC = () => {
  const { t } = useTranslation();
  const textToShow = " Stack Showcase";
  const [visibleText, setVisibleText] = useState("");
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [thirdText, setThirdText] = useState("");

  const SPACING = 25;
  let ROWS = 3;
  let COLS = 5;

  const NUM_PARTICLES = (ROWS = 60) * (COLS = Math.floor(window.innerWidth / SPACING));
  const THICKNESS = 100 ** 2;
  const MARGIN = 0;
  const COLOR = 0;
  const DRAG = 0.9;
  const EASE = 1;

  const particle = {
    vx: 0,
    vy: 0,
    x: 0,
    y: 0,
    ox: 0,
    oy: 0,
  };

  let container,
    canvas,
    ctx,
    list = [],
    mx = 0,
    my = 0,
    man = false;

  function init() {
    container = document.getElementById('container');
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.style.position = 'absolute';

    for (let i = 0; i < NUM_PARTICLES; i++) {
      const p = Object.create(particle);
      p.x = p.ox = MARGIN + SPACING * (i % COLS);
      p.y = p.oy = MARGIN + SPACING * Math.floor(i / COLS);
      list[i] = p;
    }

    if (container)
      container.addEventListener('mousemove', (e) => {
        const bounds = canvas.getBoundingClientRect(); // Use canvas bounding rect
        mx = e.clientX - bounds.left;
        my = e.clientY - bounds.top;
        man = true;
      });

    if (container)
      container.appendChild(canvas); // Append canvas to the container
  }

  function step() {

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    if (man) {
      for (let i = 0; i < NUM_PARTICLES; i++) {
        const p = list[i];

        const dx = mx - p.x;
        const dy = my - p.y;
        const d = dx * dx + dy * dy;
        const f = -THICKNESS / d;

        if (d < THICKNESS) {
          const t = Math.atan2(dy, dx);
          p.vx += f * Math.cos(t);
          p.vy += f * Math.sin(t);
        }

        p.x += (p.vx *= DRAG) + (p.ox - p.x) * EASE;
        p.y += (p.vy *= DRAG) + (p.oy - p.y) * EASE;
      }
    }

    for (let i = 0; i < NUM_PARTICLES; i++) {
      const p = list[i];
      ctx.fillStyle = `rgba(${COLOR},${COLOR},${COLOR},1)`;
      ctx.fillRect(p.x, p.y, 1, 1); // Draw particles as small squares
    }

    requestAnimationFrame(step);
  }
  
  useEffect(() => {
    let currentLength1 = 0;

    init();
    step();
    const intervalShow = setInterval(() => {
      if (currentLength1 < 7) {
        setFirstText(t("name").substring(0, currentLength1 + 1));
        setSecondText("itor ".substring(0, currentLength1 + 1));
        setThirdText("inosso ".substring(0, currentLength1 + 1));
        currentLength1++;
      } else {
        clearInterval(intervalShow);
        setTimeout(() => {
          const intervalHide = setInterval(() => {
            if (currentLength1 >= 0) {
              setFirstText(t("name").substring(0, currentLength1));
              setSecondText("itor ".substring(0, currentLength1));
              setThirdText("inosso ".substring(0, currentLength1));
              currentLength1--;
            } else {
              clearInterval(intervalHide);
            }
          }, 200);
        }, 2000);
      }
    }, 200);

    let currentLength = 0;
    const timeoutStart = setTimeout(() => {
      setInterval(() => {
        if (currentLength < textToShow.length) {
          setVisibleText(textToShow.substring(0, currentLength + 1));
          currentLength++;
        }
      }, 100);
    }, 6000);
    return () => {
      clearTimeout(timeoutStart);
      clearInterval(intervalShow);
    };

  }, []);
  return (
    <div id="container" className={styles.container}>
      <h1 className={styles.name_text}>
        <strong>J</strong>
        {firstText}
        <strong>V</strong>
        {secondText}
        <strong>M</strong>
        {thirdText}
      </h1>
      <h1 className={styles.stack_show}>
        {visibleText}
      </h1>
    </div>
  );
};

export default MeuComponente;
