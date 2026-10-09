'use client';

import React, { useEffect, useState } from 'react';
import type { DotLottieReactProps } from '@lottiefiles/dotlottie-react';

type DotLottieComponent = React.ComponentType<DotLottieReactProps>;

/**
 * Drop-in replacement for <DotLottieReact>.
 *
 * The Lottie player (JS + 1.2 MB WASM) is loaded as a separate chunk after
 * the page hydrates, instead of being part of the page's first-load bundle.
 * Until it arrives we render exactly the markup DotLottieReact renders
 * (<div className><canvas style="width:100%;height:100%"/></div>), so the
 * server HTML and the layout are identical and nothing shifts.
 */
export function LazyDotLottie(props: DotLottieReactProps) {
  const [Player, setPlayer] = useState<DotLottieComponent | null>(null);

  useEffect(() => {
    let active = true;
    import('@lottiefiles/dotlottie-react').then((mod) => {
      // Local WASM avoids a CDN round-trip (same as the previous setup).
      mod.setWasmUrl('/assets/lottie/dotlottie-player.wasm');
      if (active) setPlayer(() => mod.DotLottieReact as DotLottieComponent);
    });
    return () => {
      active = false;
    };
  }, []);

  if (!Player) {
    return (
      <div className={props.className}>
        <canvas style={{ width: '100%', height: '100%' }} />
      </div>
    );
  }
  return <Player {...props} />;
}

export default LazyDotLottie;
