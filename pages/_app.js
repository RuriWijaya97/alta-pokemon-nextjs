import "../styles/globals.css";
import { PokemonProvider } from "../src/provider/Pokemon";

function MyApp({ Component, pageProps }) {
  return (
    <PokemonProvider>
      <Component {...pageProps} />
    </PokemonProvider>
  );
}

export default MyApp;
