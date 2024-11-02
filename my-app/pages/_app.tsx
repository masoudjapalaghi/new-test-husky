import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  let a = "test" 
  return <Component {...pageProps} />;
}
