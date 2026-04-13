import { useState, useEffect } from 'react';

/**
 * Tracks which section id is currently visible in the viewport.
 * Used by the Navbar to highlight the active navigation link.
 *
 * @param {string[]} sectionIds - Ordered list of section id attributes to observe.
 * @param {number}   [offset=80] - Top offset in pixels that accounts for the fixed navbar height.
 * @returns {string} The id of the section that is currently in view.
 */
function useActiveSection(sectionIds, offset = 80) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}

export default useActiveSection;
