import React, { useCallback, useLayoutEffect, useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import './StaggeredMenu.css';

export interface SubMenuItem {
  name: string;
  href: string;
}

export interface MenuItem {
  label: string;
  link: string;
  ariaLabel?: string;
  children?: SubMenuItem[];
}

export interface SocialItem {
  label: string;
  link: string;
}

export interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: MenuItem[];
  socialItems?: SocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  changeMenuColorOnOpen?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = ['#FFAE00', '#1D4224', '#0E2015'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = false,
  className = '',
  logoUrl = '/assets/images/tzar-logo-main.png',
  menuButtonColor = '#0E2015',
  openMenuButtonColor = '#FFFFFF',
  accentColor = '#FFAE00',
  changeMenuColorOnOpen = true,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose
}) => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const openRef = useRef(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);
  const plusHRef = useRef<HTMLSpanElement | null>(null);
  const plusVRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);
  const textInnerRef = useRef<HTMLSpanElement | null>(null);
  const textWrapRef = useRef<HTMLSpanElement | null>(null);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);
  const spinTweenRef = useRef<gsap.core.Tween | null>(null);
  const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);
  const colorTweenRef = useRef<gsap.core.Tween | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const busyRef = useRef(false);
  const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSubmenu = useCallback((label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;
      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen, opacity: 1 });
      if (preContainer) {
        gsap.set(preContainer, { xPercent: 0, opacity: 1 });
      }
      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
      gsap.set(icon, { rotate: openRef.current ? 225 : 0, transformOrigin: '50% 50%' });
      gsap.set(textInner, { yPercent: openRef.current ? -50 : 0 });
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
    });
    return () => ctx.revert();
  }, [menuButtonColor, position, mounted]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    let layers = preLayerElsRef.current;
    if (!layers || !layers.length) {
      if (preLayersRef.current) {
        layers = Array.from(preLayersRef.current.querySelectorAll('.sm-prelayer'));
        preLayerElsRef.current = layers;
      } else {
        layers = [];
      }
    }
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
    const socialTitle = panel.querySelector('.sm-socials-title');
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));

    const offscreen = position === 'left' ? -100 : 100;
    const layerStates = layers.map(el => ({ el, start: offscreen }));
    const panelStart = offscreen;

    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    }
    if (numberEls.length) {
      gsap.set(numberEls, { '--sm-num-opacity': 0 });
    }
    if (socialTitle) {
      gsap.set(socialTitle, { opacity: 0 });
    }
    if (socialLinks.length) {
      gsap.set(socialLinks, { y: 25, opacity: 0 });
    }

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.45, ease: 'power4.out' }, i * 0.06);
    });
    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.06 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.07 : 0);
    const panelDuration = 0.58;
    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStartRatio = 0.15;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 0.85,
          ease: 'power4.out',
          stagger: { each: 0.06, from: 'start' }
        },
        itemsStart
      );
      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.5,
            ease: 'power2.out',
            '--sm-num-opacity': 1,
            stagger: { each: 0.05, from: 'start' }
          },
          itemsStart + 0.08
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;
      if (socialTitle) {
        tl.to(
          socialTitle,
          {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
          },
          socialsStart
        );
      }
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: 'power3.out',
            stagger: { each: 0.05, from: 'start' },
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: 'opacity' });
            }
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, [position]);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    let layers = preLayerElsRef.current;
    if (!layers || !layers.length) {
      if (preLayersRef.current) {
        layers = Array.from(preLayersRef.current.querySelectorAll('.sm-prelayer'));
        preLayerElsRef.current = layers;
      } else {
        layers = [];
      }
    }
    if (!panel) return;

    const all = [...layers, panel];
    closeTweenRef.current?.kill();
    const offscreen = position === 'left' ? -100 : 100;
    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.3,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        }
        const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
        if (numberEls.length) {
          gsap.set(numberEls, { '--sm-num-opacity': 0 });
        }
        const socialTitle = panel.querySelector('.sm-socials-title');
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
        busyRef.current = false;
      }
    });
  }, [position]);

  const animateIcon = useCallback((opening: boolean) => {
    const icon = iconRef.current;
    if (!icon) return;
    spinTweenRef.current?.kill();
    if (opening) {
      spinTweenRef.current = gsap.to(icon, { rotate: 225, duration: 0.7, ease: 'power4.out', overwrite: 'auto' });
    } else {
      spinTweenRef.current = gsap.to(icon, { rotate: 0, duration: 0.35, ease: 'power3.inOut', overwrite: 'auto' });
    }
  }, []);

  const animateColor = useCallback(
    (opening: boolean) => {
      const btn = toggleBtnRef.current;
      if (!btn) return;
      colorTweenRef.current?.kill();
      if (changeMenuColorOnOpen) {
        const targetColor = opening ? openMenuButtonColor : menuButtonColor;
        colorTweenRef.current = gsap.to(btn, {
          color: targetColor,
          delay: 0.15,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsap.set(btn, { color: menuButtonColor });
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
  );

  useEffect(() => {
    if (toggleBtnRef.current) {
      if (changeMenuColorOnOpen) {
        const targetColor = openRef.current ? openMenuButtonColor : menuButtonColor;
        gsap.set(toggleBtnRef.current, { color: targetColor });
      } else {
        gsap.set(toggleBtnRef.current, { color: menuButtonColor });
      }
    }
  }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]);

  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;
    textCycleAnimRef.current?.kill();

    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: opening ? -50 : 0,
      duration: 0.35,
      ease: 'power3.out'
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }
    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      setExpandedItems({});
      onMenuClose?.();
      playClose();
      animateIcon(false);
      animateColor(false);
      animateText(false);
    }
  }, [playClose, animateIcon, animateColor, animateText, onMenuClose]);

  // Lock background page scroll and pause Lenis when mobile menu is open
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (open) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      if ((window as any).__tzar_lenis?.stop) {
        (window as any).__tzar_lenis.stop();
      }

      const handleTouchMove = (e: TouchEvent) => {
        if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
          e.preventDefault();
        }
      };

      document.addEventListener('touchmove', handleTouchMove, { passive: false });

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.removeEventListener('touchmove', handleTouchMove);

        if ((window as any).__tzar_lenis?.start) {
          (window as any).__tzar_lenis.start();
        }
      };
    }
  }, [open]);

  return (
    <>
      {/* Inline Trigger Button rendered directly inside the navbar */}
      <button
        ref={toggleBtnRef}
        className={`sm-toggle ${className}`.trim()}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="staggered-menu-panel"
        onClick={toggleMenu}
        type="button"
        style={{ color: menuButtonColor }}
      >
        <span ref={textWrapRef} className="sm-toggle-textWrap" aria-hidden="true">
          <span ref={textInnerRef} className="sm-toggle-textInner">
            <span className="sm-toggle-line">Menu</span>
            <span className="sm-toggle-line">Close</span>
          </span>
        </span>
        <span ref={iconRef} className="sm-icon" aria-hidden="true">
          <span ref={plusHRef} className="sm-icon-line" />
          <span ref={plusVRef} className="sm-icon-line sm-icon-line-v" />
        </span>
      </button>

      {/* Fullscreen Overlay containing Background Layers & Slide-over Drawer */}
      {mounted && (
        <div
          className={`staggered-menu-overlay ${open ? 'is-open' : ''}`}
          style={accentColor ? ({ '--sm-accent': accentColor } as React.CSSProperties) : undefined}
          data-position={position}
          data-open={open || undefined}
          data-lenis-prevent="true"
          aria-hidden={!open}
        >
        {/* Click-away backdrop */}
        <div 
          className="staggered-menu-backdrop" 
          onClick={closeOnClickAway ? closeMenu : undefined} 
          data-lenis-prevent="true"
          aria-hidden="true" 
        />

        {/* Prelayer Curtain Strips */}
        <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
          {(() => {
            const raw = colors && colors.length ? colors.slice(0, 4) : ['#FFAE00', '#1D4224', '#0E2015'];
            let arr = [...raw];
            if (arr.length >= 3) {
              const mid = Math.floor(arr.length / 2);
              arr.splice(mid, 1);
            }
            return arr.map((c, i) => <div key={i} className="sm-prelayer" style={{ background: c }} />);
          })()}
        </div>

        {/* Main Content Drawer Panel */}
        <aside id="staggered-menu-panel" ref={panelRef} className="staggered-menu-panel" data-lenis-prevent="true">
          {/* Panel Top Brand & Close Bar */}
          <div className="flex items-center justify-between pb-4 mb-3 border-b border-white/10">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
              <img
                src={logoUrl}
                alt="TZAR VENTURE"
                className="h-7 w-auto object-contain"
                draggable={false}
              />
            </Link>
            <button
              onClick={closeMenu}
              className="sm-toggle !text-white !bg-white/10 hover:!bg-white/20 !border-white/20"
              aria-label="Close menu"
              type="button"
            >
              <span>Close</span>
              <span className="sm-icon" aria-hidden="true">
                <span className="sm-icon-line" style={{ transform: 'translate(-50%, -50%) rotate(45deg)' }} />
                <span className="sm-icon-line" style={{ transform: 'translate(-50%, -50%) rotate(-45deg)' }} />
              </span>
            </button>
          </div>

          <div className="sm-panel-inner">
            <ul className="sm-panel-list" role="list" data-numbering={displayItemNumbering || undefined}>
              {items && items.length ? (
                items.map((it, idx) => {
                  const hasChildren = it.children && it.children.length > 0;
                  const isExpanded = !!expandedItems[it.label];

                  return (
                    <li className="sm-panel-itemWrap" key={it.label + idx}>
                      {hasChildren ? (
                        <div>
                          <button
                            type="button"
                            onClick={(e) => toggleSubmenu(it.label, e)}
                            className="sm-panel-item sm-panel-item-btn"
                            aria-expanded={isExpanded}
                            aria-label={it.ariaLabel || `Toggle ${it.label} submenu`}
                            data-index={idx + 1}
                          >
                            <span className="sm-panel-itemLabel">
                              <span>{it.label}</span>
                              <ChevronDown
                                className={`w-5 h-5 shrink-0 transition-transform duration-300 text-[#FFAE00] ${isExpanded ? 'rotate-180' : ''}`}
                                strokeWidth={2.5}
                              />
                            </span>
                          </button>

                          {isExpanded && (
                            <div className="sm-submenu-list">
                              {it.children!.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  className="sm-submenu-item"
                                  onClick={closeMenu}
                                >
                                  <span className="sm-submenu-bullet" />
                                  <span className="sm-submenu-label">{sub.name}</span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          className="sm-panel-item"
                          href={it.link}
                          aria-label={it.ariaLabel || it.label}
                          data-index={idx + 1}
                          onClick={closeMenu}
                        >
                          <span className="sm-panel-itemLabel">{it.label}</span>
                        </Link>
                      )}
                    </li>
                  );
                })
              ) : (
                <li className="sm-panel-itemWrap" aria-hidden="true">
                  <span className="sm-panel-item">
                    <span className="sm-panel-itemLabel">No items</span>
                  </span>
                </li>
              )}
            </ul>

            {displaySocials && socialItems && socialItems.length > 0 && (
              <div className="sm-socials" aria-label="Social links">
                <h3 className="sm-socials-title">Connect &amp; Follow</h3>
                <ul className="sm-socials-list" role="list">
                  {socialItems.map((s, i) => (
                    <li key={s.label + i} className="sm-socials-item">
                      <a href={s.link} target="_blank" rel="noopener noreferrer" className="sm-socials-link">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
      )}
    </>
  );
};

export default StaggeredMenu;
