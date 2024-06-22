<script>
	let status = '';

	function detectNFT() {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			chrome.scripting.executeScript(
				{
					target: { tabId: tabs[0].id },
					function: detectNFTOnPage
				},
				(results) => {
					if (results && results[0] && results[0].result) {
						status = `Detected ${results[0].result} NFT(s) on this page.`;
					} else {
						status = 'No NFTs detected on this page.';
					}
				}
			);
		});
	}

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
</script>

<main>
	<h1>Aptos NFT Detector</h1>
	<button on:click={detectNFT}>Detect NFT</button>
	<div id="status">{status}</div>
</main>

<style>
	main {
		width: 200px;
		padding: 10px;
	}
	#status {
		font-size: 14px;
		margin-top: 10px;
	}
</style>
