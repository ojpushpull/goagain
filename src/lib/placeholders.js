// Demo store placeholders
const PLACEHOLDERS = {
  HEROS: [
    // primaryHero
    {
      heading: {value: 'All Dogs Love Toys'},
      byline: {
        value: 'Dogs gotta play',
      },
      cta: {value: 'Shop Now →'},
      handle: 'playtime',
      spread: {
        reference: {
          mediaContentType: 'IMAGE',
          alt: 'Dog doing dog stuff with toy',
          previewImage: {
            url: 'https://i.ibb.co/12JXp7V/Pet-store-2.png',
          },
          id: 'gid://shopify/MediaImage/29259478466616',
          image: {
            url: 'https://i.ibb.co/12JXp7V/Pet-store-2.png',
            width: 2500,
            height: 3155,
          },
        },
      },
     
    // secondaryHero
    
      heading: {value: 'The Doggoo 2022 Collection'},
      byline: {value: 'Just Dropped'},
      cta: {value: 'Shop Now →'},
      handle: 'Dog-2022',
      spread: {
        reference: {
          mediaContentType: 'IMAGE',
          alt: 'TDogs still playing around',
          previewImage: {
            url: 'https://i.ibb.co/12JXp7V/Pet-store-2.png',
          },
          id: 'gid://shopify/MediaImage/29259478302776',
          image: {
            url: 'https://i.ibb.co/12JXp7V/Pet-store-2.png',
            width: 5000,
            height: 2500,
          },
        },
      },
      spreadSecondary: null,
    },
    // tertiaryHero
    {
      heading: {value: 'From the store to doghouse'},
      byline: null,
      cta: {value: 'Shop Now →'},
      handle: 'dogcountry',
      spread: {
        reference: {
          mediaContentType: 'IMAGE',
          alt: 'A dog plays around with toys',
          previewImage: {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDcOK0rud1qIYtc8IGKxdJrG7sAG_NB2XMuA&usqp=CAU',
          },
          id: 'gid://shopify/MediaImage/29259478368312',
          image: {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDcOK0rud1qIYtc8IGKxdJrG7sAG_NB2XMuA&usqp=CAU',
            width: 2500,
            height: 2500,
          },
        },
      },
      spreadSecondary: {
        reference: {
          mediaContentType: 'IMAGE',
          alt: 'A dog needs toys to keep busy all day',
          previewImage: {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkS1DiBizihNn6vGcr7jUgAjVZGvWJBVC5QQ&usqp=CAU',
          },
          id: 'gid://shopify/MediaImage/29259478401080',
          image: {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkS1DiBizihNn6vGcr7jUgAjVZGvWJBVC5QQ&usqp=CAU',
            width: 2500,
            height: 2500,
          },
        },
      },
    },
  ],
  PRODUCT_INFO: [
    {
      title: 'Description',
      content:
        'We threw snow tires on our core classics... Good for all year round! Named after my favorite football match of the year. Just like any of our joints, dress them up or down...',
    },
    {
      title: 'Size and Fit',
      content:
        'We threw snow tires on our core classics... Good for all year round! Named after my favorite football match of the year. Just like any of our joints, dress them up or down...',
    },
    {
      title: 'Delivery and Returns',
      content: `The towels had been hanging from the rod for years. They were stained and worn, and quite frankly, just plain ugly. Debra didn't want to touch them but she really didn't have a choice. It was important for her to see what was living within them. Patrick didn't want to go. The fact that she was insisting they must go made him want to go even less. He had no desire to make small talk with strangers he would never again see just to be polite. But she insisted that Patrick go, and she would soon find out that this would be the biggest mistake she could make in their relationship.`,
    },
  ],
  PRODUCT: {
    label: 'Limited Edition',
    id: 'gid://shopify/Product/6730850828344',
    title: 'The Hydrogen',
    publishedAt: '2021-06-17T18:33:17Z',
    handle: 'snowboard',
    description:
      "Description Our flagship board, ideal for technical terrain and those who dare to go where the chairlift can't take you. The Hydrogen excels in the backcountry making riding out of bounds as easy as resort groomers. New for 2021, the Hydrogen Snowboard has Oxygen Pack inserts giving you more float on the deepest days. Care Guide Clean well after use Wax regularly Specs Weight: 5 lb Length: 4 ft Width: 1 ft Manufactured on: 8/2/2021, 3:30:00 PM Manufactured by: Shopify",
    priceRange: {
      minVariantPrice: {
        amount: '775.0',
        currencyCode: 'CAD',
      },
      maxVariantPrice: {
        amount: '775.0',
        currencyCode: 'CAD',
      },
    },
    options: [
      {
        name: 'Color',
        values: ['Morning', 'Evening', 'Night'],
      },
      {
        name: 'Size',
        values: ['154', '158', '160'],
      },
    ],
    variants: {
      nodes: [
        {
          id: 'gid://shopify/ProductVariant/41007289630776',
          image: {
            url: 'https://cdn.shopify.com/s/files/1/0551/4566/0472/products/hydrogen-morning.jpg?v=1636146509',
            altText: 'The Hydrogen snowboard, color Morning',
            width: 1200,
            height: 1504,
          },
          priceV2: {
            amount: '775.0',
            currencyCode: 'CAD',
          },
          compareAtPriceV2: {
            amount: '840.0',
            currencyCode: 'CAD',
          },
        },
      ],
    },
  },
};

/**
 * getHeroPlaceholder() returns placeholder content when the expected metafields
 * don't exist. Define the following five custom metafields on your Shopify store to override placeholders:
 * - hero.title             Single line text
 * - hero.byline            Single line text
 * - hero.cta               Single line text
 * - hero.spread            File
 * - hero.spread_secondary   File
 *
 * @see https://help.shopify.com/manual/metafields/metafield-definitions/creating-custom-metafield-definitions
 * @see https://github.com/Shopify/hydrogen/discussions/1790
 */

export function getHeroPlaceholder(heros) {
  if (!heros?.length) return [];

  // when we pass a collection without metafields,
  // we merge it with placeholder data
  return heros.map((hero, index) => {
    // assume passed hero has metafields data already
    if (hero?.heading?.value) {
      return hero;
    }

    // hero placeholder
    const placeholder = PLACEHOLDERS.HEROS[index];

    // prioritize metafield data if available, else the hero hero values
    // otherwise the placeholder values
    const byLine =
      hero?.byLine || hero?.descriptionHtml
        ? {value: hero.descriptionHtml}
        : placeholder.byline;

    const heading =
      hero?.heading || hero?.title ? {value: hero.title} : placeholder.heading;

    // merge hero placeholder with hero data
    return {
      heading,
      byLine,
      cta: hero?.cta || placeholder.cta,
      handle: hero?.handle || placeholder.handle,
      id: hero?.id || index,
      spread: hero?.spread || placeholder.spread,
      spreadSecondary: hero?.spreadSecondary || placeholder.spreadSecondary,
      height: placeholder?.height || undefined,
      top: placeholder?.top || undefined,
    };
  });
}

// get product info placeholder data
export function getProductInfoPlaceholder() {
  function getMultipleRandom(arr, infos) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, infos);
  }
  return getMultipleRandom(PLACEHOLDERS.PRODUCT_INFO, 3);
}

export function getProductPlaceholder() {
  return PLACEHOLDERS.PRODUCT;
}

