'use client';

import React, { useEffect } from 'react';

export default function ScrollTriggersManager() {
  useEffect(() => {
    // 1. Split word headings reveal
    const headings = document.querySelectorAll('.split-reveal');
    headings.forEach((h) => {
      if (h.getAttribute('data-split-done')) return;
      const text = h.textContent || '';
      const words = text.trim().split(/\s+/);
      h.innerHTML = words
        .map((w) => `<span class="word"><span class="word-inner">${w}</span></span>`)
        .join(' ');
      const wordInners = h.querySelectorAll('.word-inner');
      wordInners.forEach((w, i) => {
        (w as HTMLElement).style.transitionDelay = `${i * 45}ms`;
      });
      h.setAttribute('data-split-done', 'true');
    });

    // Immediately trigger `.in` on all elements that are already visible in viewport
    const triggerVisible = () => {
      const allAnimEls = document.querySelectorAll('.reveal, .split-reveal, .skill-cell-3d, .tl-entry-3d, .proj-visual-3d');
      allAnimEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('in');
        }
      });
    };

    triggerVisible();
    setTimeout(triggerVisible, 100);
    setTimeout(triggerVisible, 500);

    // 2. Generic intersection observer for reveals & split headings
    const revealEls = document.querySelectorAll('.reveal, .split-reveal');
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 100px 0px' }
    );
    revealEls.forEach((el) => revealIO.observe(el));

    // 3. Staggered 3D flip for skill cards
    const skillCells = document.querySelectorAll('.skill-cell-3d');
    const skillIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const cell = e.target as HTMLElement;
            const idx = Array.from(skillCells).indexOf(cell);
            setTimeout(() => {
              cell.classList.add('in');
            }, (idx % 4) * 80);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 100px 0px' }
    );
    skillCells.forEach((c) => skillIO.observe(c));

    // 4. Timeline entries alternating slide + ring pulse
    const tlEntries = document.querySelectorAll('.tl-entry-3d');
    const tlIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px 100px 0px' }
    );
    tlEntries.forEach((t) => tlIO.observe(t));

    // 5. Parallax Scroll & Line Fill Listener
    const blobs = document.querySelectorAll('.blob');
    const heroSection = document.getElementById('hero');
    const edges = document.querySelectorAll('#hero-svg .edge');
    const nodes = document.querySelectorAll('#hero-svg .node-plate');
    const heroCopy = document.getElementById('heroCopy');
    const diagramCard = document.getElementById('diagramCard');
    const tlWrap = document.getElementById('tlWrap');
    const tlFill = document.getElementById('tlFill');

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY;

          // Parallax background blobs
          blobs.forEach((b) => {
            const speed = parseFloat(b.getAttribute('data-speed') || '0.12');
            (b as HTMLElement).style.transform = `translateY(${y * speed}px)`;
          });

          // Hero parallax depth
          if (heroSection && heroCopy && diagramCard) {
            const rect = heroSection.getBoundingClientRect();
            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
              const heroY = Math.max(0, -rect.top);
              heroCopy.style.transform = `translateY(${heroY * 0.14}px)`;
              diagramCard.style.transform = `translateY(${heroY * 0.05}px)`;

              edges.forEach((edge) => edge.classList.add('drawn'));
              nodes.forEach((n) => n.classList.add('lit'));
            }
          }

          // Timeline line progress fill
          if (tlWrap && tlFill) {
            const tlRect = tlWrap.getBoundingClientRect();
            const vh = window.innerHeight;
            let tprog = (vh * 0.6 - tlRect.top) / (tlRect.height || 1);
            tprog = Math.max(0, Math.min(1, tprog));
            tlFill.style.height = `${tprog * 100}%`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      revealIO.disconnect();
      skillIO.disconnect();
      tlIO.disconnect();
    };
  }, []);

  return null;
}
