export const Decoration = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full h-[50%] pointer-events-none">
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
        className="w-full h-full  [mask-image:linear-gradient(to_bottom,black_20%,transparent_90%)]"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="5%" stopColor="#8ed1fc"></stop>
            <stop offset="95%" stopColor="#a684ff"></stop>
          </linearGradient>
        </defs>

        {/* LAYER 1 (DARI KIRI): Base Wave */}
        <path
          d="M 0,600 L 0,500 C 400,450 800,600 1440,550 L 1440,600 Z"
          fill="url(#gradient)"
          fillOpacity="0.5"
        ></path>

        {/* LAYER 2 (DARI KIRI): Deep Sweep Left to Right */}
        <path
          d="M 0,0 C 300,100 800,300 1000,450 C 1200,600 1400,550 1440,600 L 0,600 Z"
          fill="url(#gradient)"
          fillOpacity="0.4"
        ></path>

        {/* LAYER 3 (DARI KIRI): Main Front Wave Left to Right */}
        <path
          d="M 0,200 C 300,300 600,50 900,200 C 1200,350 1440,300 1440,600 L 0,600 Z"
          fill="url(#gradient)"
          fillOpacity="0.8"
        ></path>

        {/* LAYER 4 (DARI KANAN): The Single Sweep */}
        <path
          d="M 1440,50 C 1100,150 700,500 400,300 C 200,200 0,550 0,600 L 1440,600 Z"
          fill="url(#gradient)"
          fillOpacity="0.4"
        ></path>
      </svg>
    </div>
  );
};
