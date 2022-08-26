export function getData() {
  return fetch("https://opensea.io/__api/graphql/", {
    headers: {
      accept: "*/*",
      "accept-language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
      "cache-control": "no-cache",
      "content-type": "application/json",
      pragma: "no-cache",
      "sec-ch-ua":
        '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-app-id": "opensea-web",
      "x-build-id": "53fb42a7781b35cb1ec130e4a07c45fdec775593",
      "x-signed-query":
        "7107e404ceb0709abb528cc0fb20cb4365fb90f5212c522c0e7f034b8cc08550",
    },
    referrer: "https://opensea.io/",
    referrerPolicy: "strict-origin",
    body: '{"id":"CollectionTooltipQuery","query":"query CollectionTooltipQuery(\\n  $slug: CollectionSlug!\\n) {\\n  collection(collection: $slug) {\\n    name\\n    imageUrl\\n    bannerImageUrl\\n    defaultChain {\\n      identifier\\n    }\\n    owner {\\n      ...CollectionTooltip_ownerInfo\\n      id\\n    }\\n    stats {\\n      numOwners\\n      totalSupply\\n      id\\n    }\\n    nativePaymentAsset {\\n      asset {\\n        imageUrl\\n        ...CollectionTooltip_stat_asset\\n        id\\n      }\\n      id\\n    }\\n    ...collection_stats\\n    id\\n  }\\n}\\n\\nfragment CollectionTooltip_ownerInfo on AccountType {\\n  address\\n  isCompromised\\n  config\\n  user {\\n    publicUsername\\n    id\\n  }\\n  ...wallet_accountKey\\n}\\n\\nfragment CollectionTooltip_stat_asset on AssetType {\\n  imageUrl\\n}\\n\\nfragment collection_stats on CollectionType {\\n  statsV2 {\\n    numOwners\\n    totalSupply\\n    totalVolume {\\n      unit\\n    }\\n    floorPrice {\\n      unit\\n    }\\n  }\\n  collectionOffers(first: 1) {\\n    edges {\\n      node {\\n        priceType {\\n          eth\\n        }\\n        id\\n      }\\n    }\\n  }\\n}\\n\\nfragment wallet_accountKey on AccountType {\\n  address\\n}\\n","variables":{"slug":"by-art"}}',
    method: "POST",
    mode: "cors",
    credentials: "include",
  }).then((response) => response.json());
}
