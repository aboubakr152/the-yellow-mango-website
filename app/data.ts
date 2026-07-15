export const products = [
  { slug: "manual-juicer", name: "Manual Juicer", tag: "Fresh juice, beautifully simple", description: "A sturdy countertop press designed for citrus, pomegranates and more, with smooth leverage and dependable construction.", pos: "0% 0%", href: "https://www.amazon.com/s?k=The+Yellow+Mango+manual+juicer", reviewUS: "https://www.amazon.com/review/create-review?asin=B0FBKLTSKS", reviewAU: "https://www.amazon.com.au/review/create-review?asin=B0DXFN4SB5" },
  { slug: "potato-chipper", name: "Potato Chipper", tag: "Crisp, even cuts in seconds", description: "Turn potatoes into evenly cut chips with a strong lever action and a stable, easy-to-clean frame.", pos: "100% 0%", href: "https://www.amazon.com/s?k=The+Yellow+Mango+potato+chipper", reviewUS: "https://www.amazon.com/s?k=The+Yellow+Mango+potato+chipper", reviewAU: "https://www.amazon.com.au/s?k=The+Yellow+Mango+potato+chipper" },
  { slug: "tea-kettle", name: "Tea Kettle", tag: "A warmer way to slow down", description: "A cheerful stovetop essential made for quiet morning cups, shared tea and the everyday comfort of a warm kitchen.", pos: "0% 100%", href: "https://www.amazon.com/s?k=The+Yellow+Mango+tea+kettle", reviewUS: "https://www.amazon.com/s?k=The+Yellow+Mango+tea+kettle", reviewAU: "https://www.amazon.com.au/s?k=The+Yellow+Mango+tea+kettle" },
  { slug: "thermos-bottle", name: "Thermos Bottle", tag: "Good drinks, ready to go", description: "Keep your favourite drinks close through busy mornings, long afternoons and everything in between.", pos: "100% 100%", href: "https://www.amazon.com/s?k=The+Yellow+Mango+thermos+bottle", reviewUS: "https://www.amazon.com/s?k=The+Yellow+Mango+thermos+bottle", reviewAU: "https://www.amazon.com.au/s?k=The+Yellow+Mango+thermos+bottle" },
];

export const nav = [
  ["Home", "/"], ["Shop", "/shop"], ["Our Story", "/our-story"],
  ["Why The Yellow Mango", "/why-the-yellow-mango"], ["Feedback", "/feedback"], ["Contact Us", "/contact-us"],
] as const;
