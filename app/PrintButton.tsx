"use client";

import { useEffect } from "react";

export default function PrintButton() {
  useEffect(() => {
    const previousState = new Map<HTMLDetailsElement, boolean>();

    const expandFaqs = () => {
      previousState.clear();
      document.querySelectorAll<HTMLDetailsElement>("details").forEach((item) => {
        previousState.set(item, item.open);
        item.open = true;
      });
    };

    const restoreFaqs = () => {
      previousState.forEach((wasOpen, item) => {
        item.open = wasOpen;
      });
      previousState.clear();
    };

    window.addEventListener("beforeprint", expandFaqs);
    window.addEventListener("afterprint", restoreFaqs);

    return () => {
      window.removeEventListener("beforeprint", expandFaqs);
      window.removeEventListener("afterprint", restoreFaqs);
    };
  }, []);

  return (
    <button
      className="print-trigger"
      type="button"
      onClick={() => window.print()}
      aria-label="印刷・校正用の印刷画面を開く"
    >
      <span aria-hidden="true">⌑</span>
      印刷・校正用
    </button>
  );
}
