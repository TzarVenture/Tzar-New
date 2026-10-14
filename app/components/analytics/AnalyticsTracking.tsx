import React from "react";
import Script from "next/script";

export const GTM_ID = "GTM-NKLMM6DX";
export const GA_MEASUREMENT_ID = "G-C01Z53HPJQ";
export const FB_PIXEL_ID = "468974660407931";

export function AnalyticsTracking() {
  return (
    <>
      {/* ── 01. GOOGLE TAG MANAGER (HEAD SCRIPT) ── */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />

      {/* ── 02. GOOGLE ANALYTICS (GA4) ── */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`,
        }}
      />

      {/* ── 03. GOOGLE TAG DELAYED NAVIGATION CONVERSION HELPER ── */}
      <Script
        id="gtag-send-event"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `function gtagSendEvent(url) {
  var callback = function () {
    if (typeof url === 'string') {
      window.location = url;
    }
  };
  if (typeof gtag === 'function') {
    gtag('event', 'ads_conversion_Contact_Us_1', {
      'event_callback': callback,
      'event_timeout': 2000,
    });
  }
  return false;
}`,
        }}
      />

      {/* ── 04. META / FACEBOOK PIXEL ── */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');`,
        }}
      />
    </>
  );
}

export function AnalyticsNoscript() {
  return (
    <>
      {/* Google Tag Manager (noscript fallback) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          aria-hidden="true"
        />
      </noscript>

      {/* Meta Pixel (noscript fallback) */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt="Meta Pixel"
          aria-hidden="true"
        />
      </noscript>
    </>
  );
}

export default AnalyticsTracking;
