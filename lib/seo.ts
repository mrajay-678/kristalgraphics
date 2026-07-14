import type { Metadata } from "next";

export const siteDescription =
  "Full-service union print shop with 4 decades of expertise. Bulk screen printing, embroidery, custom labels, packaging, and promo products. Made in the USA. Built to scale your business. Get a quote today!";

export const siteTitle =
  "Custom Promotional Products & Branded Merch | Screen Printing, Embroidery, Labels & Packaging.";

const homepageKeywords = [
  "commercial print shop",
  "bulk printing services",
  "union print shop",
  "b2b printing vendor",
  "full service printing company",
  "custom print solutions",
  "in house printing services",
  "commercial screen printing",
  "custom branded merchandise",
  "high volume printing",
  "custom labels and decals",
  "apparel screen printing",
  "corporate print management",
  "custom product packaging print",
  "kristal graphics",
  "Made in USA",
  "rush service available",
  "same day printing",
];

export const servicesKeywords = [
  "bulk screen printing services",
  "custom apparel embroidery",
  "custom die cut decals",
  "product label printing",
  "label printing",
  "custom printed packaging boxes",
  "contract screen printing",
  "custom hat embroidery",
  "Tshirt embroidery",
  "custom buttons",
  "industrial vinyl decals",
  "branded shipping boxes",
  "custom merch printing",
  "roll label printing",
  "custom patch embroidery",
  "eco friendly packaging print",
  "high volume merch production",
  "custom logo apparel printing",
];

const aboutKeywords = [
  "union printer",
  "union made print shop",
  "experienced commercial printers",
  "in house print production",
  "american union print shop",
  "reliable bulk print vendor",
  "print production crew",
  "40 years print experience",
  "trusted commercial print partner",
  "fast turnaround print shop",
  "custom print manufacturer",
  "quality print fulfillment",
  "b2b print supplier",
  "union label printer",
  "high scale print facility",
  "Made in USA",
];

const quoteKeywords = [
  "custom promotional items",
  "branded corporate swag",
  "custom logo promotional products",
  "bulk promo items for events",
  "corporate gift printing",
  "branded drinkware custom print",
  "custom tradeshow giveaways",
  "bulk logo pens and mugs",
  "custom office promotional items",
  "branded merch sets",
  "promotional items for businesses",
  "custom print swag bags",
  "executive promotional gifts",
  "custom tech giveaway items",
  "bulk promotional merch vendor",
];

const buildMetadata = (title: string, keywords: string[]): Metadata => ({
  title,
  description: siteDescription,
  keywords,
  openGraph: {
    title,
    description: siteDescription,
    siteName: "Kristal Graphics",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteDescription,
  },
});

export const seoMetadata = {
  default: buildMetadata(siteTitle, homepageKeywords),
  home: buildMetadata("Home | Bulk Promotional Products", homepageKeywords),
  services: buildMetadata("Services | Custom Printing Solutions", servicesKeywords),
  about: buildMetadata("About Us | Partner In Print", aboutKeywords),
  quote: buildMetadata("Get A Quote | Custom Branded Merch", quoteKeywords),
  portfolio: buildMetadata("Portfolio | Custom Printing Solutions", servicesKeywords),
};
