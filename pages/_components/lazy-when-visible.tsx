import React, { useEffect, useRef, useState } from "react";

type LazyWhenVisibleProps = {
  children: React.ReactNode;
  /** Placeholder height before the section mounts (reduces CLS). */
  minHeight?: number | string;
  /** Start loading slightly before the section enters the viewport. */
  rootMargin?: string;
  className?: string;
};

/**
 * Defers mounting (and thus dynamic chunk download) until near viewport.
 * Critical for Lighthouse: next/dynamic alone still fetches chunks on first paint
 * if the component is in the initial tree.
 */
const LazyWhenVisible: React.FC<LazyWhenVisibleProps> = ({
  children,
  minHeight = 400,
  rootMargin = "280px 0px",
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, visible]);

  return (
    <div
      ref={ref}
      className={className}
      style={visible ? undefined : { minHeight }}
    >
      {visible ? children : null}
    </div>
  );
};

export default LazyWhenVisible;
