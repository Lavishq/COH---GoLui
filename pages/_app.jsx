import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
// import type { AppProps } from 'next/app';
import { Chain, RainbowKitProvider, getDefaultWallets } from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import Navbar from './components/Navbar';


const cantoChain = {
  id: 7700,
  name: 'Canto',
  network: 'canto',
  iconUrl: 'https://example.com/icon.svg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'canto',
    symbol: 'CANTO',
  },
  rpcUrls: {
    default: 'https://canto.evm.chandrastation.com/',
  },
  blockExplorers: {
    default: { name: 'canto', url: 'https://evm.explorer.canto.io/' },
    etherscan: { name: 'canto', url: 'https://explorer.nodestake.top/canto' },
  },
  testnet: false,
};

const { provider, chains } = configureChains(
  [cantoChain],
  [jsonRpcProvider({ rpc: chain => ({ http: chain.rpcUrls.default }) })]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  // webSocketProvider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient} >
      <RainbowKitProvider chains={chains}>
      <div class="relative container mx-auto p-8 bg-black text-white">
        <Navbar />
      </div>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
