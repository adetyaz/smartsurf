// Detect NFTs based on specific attributes and image URL patterns
function detectNFTOnPage() {
	const nfts = document.querySelectorAll('[data-aptos-nft], .aptos-nft'); // Adjust selectors for known marketplaces
	const nftImages = Array.from(document.querySelectorAll('img')).filter((img) =>
		/aptos-nft/.test(img.src)
	);
	const detectedNFTs = [...nfts, ...nftImages];

	detectedNFTs.forEach((nft) => {
		nft.style.border = '2px solid red'; // Highlight the NFT
	});

	return detectedNFTs.length;
}

// Expose function for the popup script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.action === 'detectNFT') {
		const nftCount = detectNFTOnPage();
		sendResponse({ nftCount });
	}
});
