export enum SoonaverseOtrAddress {
  IOTA = 'iota1qpwxxaw6fw8zeezefyqf0y7hnrpkcmfa4afc67ywfkpp3gwj0ttzcexhvan',
  SHIMMER = 'smr1qp0248uakdvfrhyr58yk5lswhnt033vrhst2j4c77laepdv2rk0psgh4t4x',
  TEST = 'rms1qp29ma9mugkrlaq9e60pmdray4sn2zjpet4vyk86cezm0jqpdwuhv68j3vh',
}

export function deepLinkPage(c: any): any {
  return c.html(
    <html>
      <head>
        <title>IOTA / SMR - Deep Link</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <div
          class="h-screen flex flex-col gap-12 items-center justify-center bg-gray-200"
        >
          <div class="text-2xl font-bold">
            <span>Select wallet to process your payment</span>
          </div>

          <div class="text-xl">
            <span>To validate your address we will have you send 1 SMR and then we will immediately send it back. We use the Tangle to initiate the claim process for both L1 and L2 SOON tokens.</span>
          </div>

          <div class="text-xl">
            <span>Note: For the L2 claim, we don't need you to use SMR wallet linked to those tokens. We only use it to initiate the claim process.</span>
          </div>

          <div class="text-xl">
            <span>Once you finish above, you can validate your claim by refreshing frame or by looking at tangle explorer block's response.</span>
          </div>

          <div class="flex flex-col space-x-12 items-center justify-center w-full lg:flex-row lg:w-auto">
              <a
                href={getBloomDeepLink(c.req.param('eth'))}
                class="rounded-full py-2 px-4 border-solid border-2 border-gray-400"
                nzSize="large"
              >
                <div class="flex items-center">
                  <img src="https://i.imgur.com/IJsSqGs.png" alt="Bloom logo" class="w-32" />
                </div>
              </a>
              <a
                href={getFireflyDeepLink(c.req.param('eth'))}
                class="rounded-full py-2 px-4 border-solid border-2 border-gray-400"
                nzSize="large"
              >
                <div class="flex items-center">
                  <img src="https://i.imgur.com/wqZPKGJ.png" alt="Firefly logo" class="mr-2" />
                  <div class="text-foregrounds-primary dark:text-foregrounds-primary-dark">
                    Firefly
                  </div>
                </div>
              </a>
            </div>
            <div class="text-xs">
            <span>Only IOTA & Shimmer wallets that supports metadata passed via deeplink are supported.</span>
          </div>
        </div>
      </body>
    </html>,
  );
}

export function getBloomDeepLink(eth: string): string {
  const parameters = {
    address: SoonaverseOtrAddress.SHIMMER,
    baseCoinAmount: Number(1000000).toFixed(0),
    giftStorageDeposit: true,
    disableToggleGift: true,
    disableChangeExpiration: true,
    disableChangeTimelock: true,
    metadata: JSON.stringify(getMetadata(eth)),
  };
  const searchParametersArray: (string | undefined)[] = Object.entries(parameters).map(
    ([key, value]) => {
      return value ? `${key}=${value}` : undefined;
    },
  );
  const searchParametersString = searchParametersArray
    .filter((x) => x !== undefined)
    .flat()
    .join('&');

  return `bloom://wallet/sendTransaction?${searchParametersString}`;
}

export function getFireflyDeepLink(eth: string): string {
  return (
    'firefly://wallet/sendConfirmation?address=' +
    SoonaverseOtrAddress.SHIMMER +
    '&disableToggleGift=true&disableChangeExpiration=true' +
    '&amount=' +
    Number(1000000).toFixed(0) +
    '&giftStorageDeposit=true&metadata=' +
    JSON.stringify(getMetadata(eth))
  );
}

export function getMetadata(eth: string): any {
  return {
    request: {
      requestType: 'VERIFY_ETH_ADDRESS',
      ethAddress: eth,
    },
  };
}
