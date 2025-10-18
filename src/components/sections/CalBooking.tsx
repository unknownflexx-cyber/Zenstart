import React, { useEffect, useRef, useState } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

const CalBooking: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Prepare Cal UI (safe even if we use inline embed)
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    // Scroll into view when expanding
    requestAnimationFrame(() => {
      containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <section className="py-16 md:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] bg-clip-text text-transparent">
            Book a 30‑minute discovery call
          </h2>
          <p className="text-thin mb-8 max-w-2xl mx-auto">
            Pick a time that works for you. We’ll discuss your goals and the best path forward.
          </p>

          {!isOpen && (
            <button
              onClick={handleOpen}
              className="px-8 py-4 bg-gradient-to-r from-[#A1BFFF] via-white to-[#A649D2] text-gray-900 font-semibold rounded-full hover:from-[#8FA9FF] hover:via-gray-100 hover:to-[#9440C2] transition-all duration-300 shadow-xl"
            >
              Book Discovery Call
            </button>
          )}

          <div ref={containerRef} className={`mt-10 w-full overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'}`} style={{ maxHeight: isOpen ? 900 : 0 }}>
            {isOpen && (
              <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl p-2">
                <Cal
                  calLink="zenstart/30min"
                  config={{ layout: 'month_view' }}
                  style={{ width: '100%', height: '760px' }}
                  className="w-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalBooking;


