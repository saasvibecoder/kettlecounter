// Keyed by "category-slug/sub-niche-slug". Add one entry per sub-niche as you write it.
// Any sub-niche with no entry here still gets a working page, using the placeholder text
// built into ReviewArticle.astro, so nothing ever 404s while you're still writing content.
export const reviews: Record<string, {
  productName: string;
  title: string;
  hook: string;
  intro?: string;
  whatIsIt?: string;
  featuresIntro?: string;
  features?: string[];
  productDescription?: string;
  prosConsIntro?: string;
  pros: string[];
  cons: string[];
  customerSummary?: string;
  whyBuyIt?: string;
  verdict?: string;
  ctaText?: string;
  amazonUrl?: string;
}> = {
  "coffee/espresso": {
    productName: "15-Bar Compact Espresso Machine",
    title: "Best Espresso Machine Under $150: Our Top Pick",
    hook: "Consistent shots without the countertop clutter or the $500 price tag — here's the machine we'd actually buy.",
    intro: "Most people's first home espresso machine ends the same way: a thin, sour shot that tastes nothing like the café version, followed by a drawer full of parts nobody uses. The usual culprit is pump pressure, cheap machines simply can't build enough of it, and no amount of fancy beans fixes that. The fix isn't spending $500, it's knowing which spec actually matters at this price point.",
    whatIsIt: "This is a compact, semi-automatic espresso machine built around a 15-bar Italian pump and a 1450W heating element, with a built-in steam wand for frothing milk. \"Semi-automatic\" means you control the shot manually (you start and stop the extraction), rather than the machine doing it fully automatically, which keeps the price down without sacrificing shot quality.",
    featuresIntro: "At this price, most competitors cut corners on one of these five areas. This one doesn't.",
    features: [
      "15-bar Italian pump for proper extraction pressure",
      "1450W heating element, ready to brew in about 45 seconds",
      "Stainless steel steam wand for latte and cappuccino foam",
      "1.2L removable water tank, refill without unplugging the machine",
      "Dishwasher-safe drip tray and portafilter basket",
    ],
    productDescription: "Day to day, this sits closer to a small toaster than a bulky espresso rig, it fits under most standard cabinets. The water tank detaches from the back for easy refilling, and the portafilter uses a standard 51mm basket, a size shared with many entry-level machines, so replacement baskets are easy to find later if one wears out. The steam wand swivels fully, which matters more than it sounds, stationary wands make frothing in a short cup awkward.",
    prosConsIntro: "No machine at this price is perfect, here's what you're actually trading off.",
    pros: [
      "15-bar pump pulls a real crema, not a watery shot",
      "Stainless steel frothing wand makes café-style milk foam",
      "45-second heat-up, no waiting around before your first cup",
      "Removable 1.2L water tank and drip tray are dishwasher-safe",
    ],
    cons: [
      "No built-in grinder, you'll need pre-ground or a separate grinder",
      "Single boiler means you wait a bit between pulling a shot and frothing milk",
      "Portafilter is a standard 51mm, so some third-party baskets won't fit",
    ],
    customerSummary: "Across the reviews we read, the pattern is consistent: buyers moving up from a pod machine are surprised by how close this gets to café-quality espresso, and the steam wand is the single most-praised feature. The most common complaint is the single-boiler design, since you do need to wait roughly a minute between pulling a shot and getting the wand back up to steam temperature, which matters if you're making several drinks back to back.",
    whyBuyIt: "If your current setup is a pod machine or a drip coffee maker and you want a real espresso-and-milk setup without learning a commercial machine, this is the lowest-friction way in. The combination of real pump pressure and a usable steam wand is genuinely hard to find below $150.",
    verdict: "For under $150, this is the espresso machine we'd tell a friend to buy first. It won't replace a café-grade setup, but it consistently pulls a better shot than anything else we tested in this price range, and the steam wand means you're not stuck drinking straight espresso. Pair it with a basic grinder and you've got a full home setup for well under $250 total.",
    ctaText: "If café-style espresso at home has felt out of reach, this is the machine that gets you there without the $500 price tag or the steep learning curve. Check today's price on Amazon before deciding.",
  },

  "air-fryers/dual-basket": {
    productName: "Dual-Basket 8-Quart Air Fryer",
    title: "Best Dual-Basket Air Fryer Under $150: Our Top Pick",
    hook: "Cook the fries and the chicken at the same time, at different temperatures, and have them finish together — no more juggling one basket.",
    intro: "A single-basket air fryer forces a choice: cook your protein and your side one after another, or cram them into one basket and get uneven results. By the time the fries are done, the chicken's gone cold, or vice versa. That timing problem is the single biggest complaint about air fryers in general, and it's solvable, just not with a single-basket design.",
    whatIsIt: "This is a two-zone air fryer, two fully separate 4-quart baskets, each with its own heating element and controls, so you can run two different foods at two different temperatures and times in the same unit, side by side.",
    featuresIntro: "The dual-zone design is the headline, but these details are what make it actually convenient day to day.",
    features: [
      "Two independent 4-quart baskets, 8 quarts total capacity",
      "1700W combined heating output across both zones",
      "Match Cook syncs finish times across different settings",
      "6 presets: fries, chicken, fish, vegetables, bacon, reheat",
      "Dishwasher-safe nonstick baskets and crisper plates",
    ],
    productDescription: "Each basket operates as its own independent fryer, you could cook frozen fries in one at 400°F for 18 minutes while slow-roasting vegetables in the other at 350°F for 25, and the Match Cook feature automatically staggers the start times so both finish together. The unit is noticeably wider than a single-basket fryer, worth measuring your counter space before buying.",
    prosConsIntro: "The two-basket format solves the timing problem, but it comes with its own trade-offs.",
    pros: [
      "Two 4-quart baskets run independent times and temperatures",
      "Match Cook button syncs both baskets to finish at the same time",
      "1700W total output, nearly as fast as a full-size convection oven",
      "Dishwasher-safe baskets and crisper plates",
    ],
    cons: [
      "Takes up more counter space than a single-basket fryer",
      "8 quarts combined sounds big, but each basket alone is modest for a family meal",
      "No app or Wi-Fi connectivity, it's controls-only",
    ],
    customerSummary: "The recurring theme in customer feedback is relief at no longer timing two separate cooking rounds, people specifically call out cooking a full meal (protein plus side) in one sitting as the main win. The most repeated criticism is counter space, several buyers mention it's noticeably bigger than they expected from the listing photos.",
    whyBuyIt: "If you regularly cook a main and a side and are tired of doing it in two rounds, the two-basket format is the single biggest upgrade over a standard air fryer, more than extra wattage or a bigger single basket would give you.",
    verdict: "For under $150, the dual-basket format is the one feature that actually changes how you cook, not just how fast. If your kitchen has the counter space for it, this is the one we'd recommend first.",
    ctaText: "If mismatched cook times have been the one thing holding your air fryer back from replacing the oven, this solves exactly that. Check today's price on Amazon before deciding.",
  },
};