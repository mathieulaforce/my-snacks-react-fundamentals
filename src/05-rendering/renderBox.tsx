// Helper NOT part of the training.
// Draws a box that flashes and counts every time the component that renders it re-renders.

import { useEffect, useRef, type ReactNode } from 'react';
import './renderBox.css';

type RenderBoxProps = {
  name: string;
  note?: string;
  children?: ReactNode;
};

export function RenderBox({ name, note, children }: RenderBoxProps) {
  const boxRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const renders = useRef(0);
  const lastRender = useRef<object | null>(null);

  const thisRender = {};

  useEffect(() => {
    if (lastRender.current === thisRender) {
      return;
    }
    lastRender.current = thisRender;
    renders.current += 1;
    badgeRef.current!.textContent = `renders: ${renders.current}`;

    const box = boxRef.current!;
    box.classList.remove('flash');
    void box.offsetWidth;
    box.classList.add('flash');
  });

  return (
    <div ref={boxRef} className="render-box">
      <div className="render-box-header">
        <strong>{name}</strong>
        <span ref={badgeRef} className="render-badge" />
      </div>
      {note && <p className="render-note">{note}</p>}
      {children}
    </div>
  );
}
