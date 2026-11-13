import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { renderAsync } from 'docx-preview';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';

/** Full-screen viewer for the uploaded DOCX resume. */
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const documentRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    let cancelled = false;
    const container = documentRef.current;

    const loadResume = async () => {
      try {
        const response = await fetch(profile.resumeDocx);
        if (!response.ok) {
          throw new Error(`Resume request failed with status ${response.status}`);
        }

        const documentData = await response.arrayBuffer();
        if (cancelled || !container) return;

        await renderAsync(documentData, container, container);
      } catch (cause) {
        if (cancelled) return;
        console.error('Unable to display the resume document', cause);
        setError('The resume document could not be displayed. You can download the original file instead.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void loadResume();
    return () => {
      cancelled = true;
      container?.replaceChildren();
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 pt-[env(safe-area-inset-top)]">
        <p className="truncate font-display text-2xl tracking-wide text-bone">The Full Story</p>
        <div className="flex items-center gap-2">
          <a href={profile.resumeDocx} download="Kashi_Mahtta_Resume.docx" className="rounded-md bg-bone px-4 py-2 text-xs font-bold text-ink">
            ⤓ Download DOCX
          </a>
          <button type="button" onClick={onClose} aria-label="Close resume" data-cursor="close" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20">
            ✕
          </button>
        </div>
      </div>
      <motion.div
        className="gutter min-h-0 flex-1 pb-6"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div data-lenis-prevent className="h-full overflow-y-auto rounded-xl bg-[#d7d7dc] p-3 sm:p-6">
          {loading && <p className="py-8 text-center text-sm text-ink">Loading resume document…</p>}
          {error && (
            <p role="alert" className="mx-auto max-w-lg py-8 text-center text-sm text-ink">
              {error}{' '}
              <a href={profile.resumeDocx} download="Kashi_Mahtta_Resume.docx" className="font-semibold underline">
                Download resume
              </a>
            </p>
          )}
          <div ref={documentRef} className="mx-auto w-fit max-w-full" />
        </div>
      </motion.div>
    </motion.div>
  );
}
