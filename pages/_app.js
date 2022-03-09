import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

import '../styles/globals.css';

/*
 * The chain ID 4 represents the Rinkeby network.
 * The "injected" connector is a web3 connection method used by Metamask.
 * */

const supportedChainIds = [4];
const connectors = {
    injected: {},
};

function MyApp({ Component, pageProps }) {
    return (
        <ThirdwebWeb3Provider
            connectors={connectors}
            supportedChainIds={supportedChainIds}
        >
            <Component {...pageProps} />
        </ThirdwebWeb3Provider>
    );
}

export default MyApp;
