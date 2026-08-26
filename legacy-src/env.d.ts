/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MONGODB_URL: string;
  readonly VITE_GOOGLE_SHEETS_WEBHOOK: string;
  readonly VITE_RAZORPAY_KEY_ID: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_GTM_ID: string;
  readonly VITE_GA_ID: string;
  readonly VITE_FB_PIXEL_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
