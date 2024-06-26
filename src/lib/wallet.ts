import {
  Account,
  AccountAuthenticator,
type  AnyRawTransaction,
  Aptos,
  AptosConfig,
  Hex,
  Network,
  SigningScheme,
  PublicKey,
} from "@aptos-labs/ts-sdk";
import {
  APTOS_CHAINS,
  AccountInfo,
  type AptosConnectMethod,
  type AptosDisconnectMethod,
  type AptosGetAccountMethod,
  type AptosGetNetworkMethod,
  type AptosOnAccountChangeMethod,
  type AptosSignMessageInput,
  type AptosSignMessageMethod,
  type AptosSignMessageOutput,
  type AptosSignTransactionMethod,
  type AptosWallet,
  type IdentifierArray,
  type NetworkInfo,
  type UserResponse,
  registerWallet,
  type AptosWalletAccount,
  type AptosOnNetworkChangeMethod,
  type AptosFeatures,
  UserResponseStatus,
} from "@aptos-labs/wallet-standard";

/**
 * A class to create a mock wallet for demonstration a wallet
 * implementation compatible with Aptos AIP-62 Wallet Standard
 */
    export class MyWalletAccount implements AptosWalletAccount {
  address: string;

  publicKey: Uint8Array;

  chains: IdentifierArray;

  features: IdentifierArray;

  signingScheme: SigningScheme;

  label?: string;

  icon?:
    | `data:image/svg+xml;base64,${string}`
    | `data:image/webp;base64,${string}`
    | `data:image/png;base64,${string}`
    | `data:image/gif;base64,${string}`
    | undefined;

  constructor(account: Account) {
    this.address = account.accountAddress.toString();
    this.publicKey = account.publicKey.toUint8Array();
    this.chains = APTOS_CHAINS;
    this.features = ["aptos:connect"];
    this.signingScheme = SigningScheme.Ed25519;
  }
}

export class MyWallet implements AptosWallet {
  readonly url: string = "https://chromewebstore.google.com/detail/netsepio/bbkfclgnbddljhepbfpongcollhocghd";
  readonly version = "1.0.0";
  readonly name: string = "Netsepio";
  readonly icon =
    "data:image/png;base64,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";
  chains = APTOS_CHAINS;
  accounts: MyWalletAccount[] = [];

  // Local MyWallet class variables
  signer: Account;
  aptos: Aptos;

 get features(): AptosFeatures {
    return {
      "aptos:connect": {
        version: "1.0.0",
        connect: this.connect,
      },
      "aptos:network": {
        version: "1.0.0",
        network: this.network,
      },
      "aptos:disconnect": {
        version: "1.0.0",
        disconnect: this.disconnect,
      },
      "aptos:signTransaction": {
        version: "1.0.0",
        signTransaction: this.signTransaction,
      },
      "aptos:signMessage": {
        version: "1.0.0",
        signMessage: this.signMessage,
      },
      "aptos:onAccountChange": {
        version: "1.0.0",
        onAccountChange: this.onAccountChange,
      },
      "aptos:onNetworkChange": {
        version: "1.0.0",
        onNetworkChange: this.onNetworkChange,
      },
      "aptos:account": {
        version: "1.0.0",
        account: this.account,
      },
    };
  }
  constructor() {
    // Local MyWallet class variables
    this.signer = Account.generate();
    const aptosConfig = new AptosConfig({
      network: Network.DEVNET,
    });
    this.aptos = new Aptos(aptosConfig);

    this.accounts = [new MyWalletAccount(this.signer)];
  }

  account: AptosGetAccountMethod = async (): Promise<AccountInfo> => {
    const account = new AccountInfo({
      address: this.signer.accountAddress.toString(),
      publicKey: this.signer.publicKey,
    });
    return Promise.resolve(account);
  };

  connect: AptosConnectMethod = async (): Promise<
    UserResponse<AccountInfo>
  > => {
    try {
      await this.aptos.fundAccount({
        accountAddress: this.signer.accountAddress,
        amount: 1_000_000_000_000,
      });
      const account = new AccountInfo({
        address: this.signer.accountAddress,
        publicKey: this.signer.publicKey,
      })   
      return {
        status: UserResponseStatus.APPROVED,
        args: account,
      };
    } catch (e) {
      throw Error(`error connecting to wallet ${e}`);
    }
  };

  network: AptosGetNetworkMethod = async (): Promise<NetworkInfo> => {
    const network = await this.aptos.getLedgerInfo();
    return {
      name: Network.DEVNET,
      chainId: network.chain_id,
      url: "https://fullnode.devnet.aptoslabs.com/v1",
    };
  };

  disconnect: AptosDisconnectMethod = async (): Promise<void> => {
    return Promise.resolve();
  };

  signTransaction: AptosSignTransactionMethod = async (
    transaction: AnyRawTransaction,
    asFeePayer?: boolean
  ): Promise<UserResponse<AccountAuthenticator>> => {
    if (asFeePayer) {
      const senderAuthenticator = this.aptos.transaction.signAsFeePayer({
        signer: this.signer,
        transaction,
      });

      return Promise.resolve({
        status: UserResponseStatus.APPROVED,
        args: senderAuthenticator,
      });
    }
    const senderAuthenticator = this.aptos.transaction.sign({
      signer: this.signer,
      transaction,
    });

    return Promise.resolve({
      status: UserResponseStatus.APPROVED,
      args: senderAuthenticator,
    });
  };

  signMessage: AptosSignMessageMethod = async (
    input: AptosSignMessageInput
  ): Promise<UserResponse<AptosSignMessageOutput>> => {
    // 'Aptos' + application + address + nonce + chainId + message
    const messageToSign = `Aptos
    demoAdapter
    ${this.signer.accountAddress.toString()}
    ${input.nonce}
    ${input.chainId ?? (await this.network()).chainId}
    ${input.message}`;

    const encodedMessageToSign = new TextEncoder().encode(messageToSign);

    const signature = this.signer.sign(encodedMessageToSign);

    return Promise.resolve({
      status: UserResponseStatus.APPROVED,
      args: {
        address: this.signer.accountAddress.toString(),
        fullMessage: messageToSign,
        message: input.message,
        nonce: input.nonce,
        prefix: "APTOS",
        signature: signature,
      },
    });
  };

  onAccountChange: AptosOnAccountChangeMethod = async (): Promise<void> => {
    return Promise.resolve();
  };

  onNetworkChange: AptosOnNetworkChangeMethod = async (): Promise<void> => {
    return Promise.resolve();
  };
}

// a wallet call to register itself (this happens on the wallet side)
(function () {
  if (typeof window === "undefined") return;
  const myWallet = new MyWallet();
  registerWallet(myWallet);
})();