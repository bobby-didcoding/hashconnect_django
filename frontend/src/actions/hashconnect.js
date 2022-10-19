import { HashConnect } from 'hashconnect'

let hashconnect = new HashConnect()

let appMetadata = {
    name: "Did Coding Hashconnect",
    description: "Example Hedera wallet connection app",
    icon: "https://absolute.url/to/icon.png"
}

export const pairHashpack = async () => {
    let initData = await hashconnect.init(appMetadata, "testnet", false);

    hashconnect.foundExtensionEvent.once((walletMetadata) => {
        hashconnect.connectToLocalWallet(initData.pairingString, walletMetadata);
    })

    hashconnect.pairingEvent.once((pairingData) => {
        console.log('wallet paired')
        console.log(pairingData)

        const accountId = document.getElementById('accountid')
        accountId.innerHTML = pairingData.accountIds[0]
    })

    return initData
}

