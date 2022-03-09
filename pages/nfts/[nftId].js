import Header from '../../components/Header';
import { useEffect, useMemo, useState } from 'react';
import { useWeb3 } from '@3rdweb/hooks';
import { useRouter } from 'next/router';
import { ThirdwebSDK } from '@3rdweb/sdk';
import NFTImage from '../../components/nft/NFTImage';
import GeneralDetails from '../../components/nft/GeneralDetails';

const style = {
    wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
    container: `container p-6`,
    topContent: `flex`,
    nftImgContainer: `flex-1 mr-4`,
    detailsContainer: `flex-[2] ml-4`,
};

const NftItem = () => {
    const { provider } = useWeb3();

    const router = useRouter();

    const [selectedNft, setSelectedNft] = useState(null);
    const [listings, setListings] = useState([]);

    const nftModule = useMemo(() => {
        if (!provider) return;

        const sdk = new ThirdwebSDK(
            provider.getSigner(),
            'https://eth-rinkeby.alchemyapi.io/v2/_0_oWUvVCaEYCyaG66kOB3XEu8-WVZwP'
        );
        return sdk.getNFTModule('0x142b87A374eD82D5D7361BB649F08C6639830dA5');
    }, [provider]);

    const marketPlaceModule = useMemo(() => {
        if (!provider) return;

        const sdk = new ThirdwebSDK(
            provider.getSigner(),
            'https://eth-rinkeby.alchemyapi.io/v2/_0_oWUvVCaEYCyaG66kOB3XEu8-WVZwP'
        );
        return sdk.getMarketplaceModule(
            '0xD5DC50811ec2a968855C731aEd35Bb4DB2b46384'
        );
    }, [provider]);

    // Get all NFTs in the collection
    useEffect(() => {
        if (!nftModule) return;
        (async () => {
            const allNfts = await nftModule.getAll();

            const selectedNftArray = allNfts.find(
                (nft) => nft.id === router.query.nftId
            );

            setSelectedNft(selectedNftArray);
        })();
    }, [nftModule]);

    // Get all listings in the collection
    useEffect(() => {
        if (!marketPlaceModule) return;
        (async () => {
            const allListings = await marketPlaceModule.getAllListings();
            setListings(allListings);
        })();
    }, [marketPlaceModule]);

    return (
        <div>
            <Header />
            <div className={style.wrapper}>
                <div className={style.container}>
                    <div className={style.topContent}>
                        <div className={style.nftImgContainer}>
                            <NFTImage selectedNft={selectedNft} />
                        </div>
                        <div className={style.detailsContainer}>
                            <GeneralDetails selectedNft={selectedNft} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NftItem;
