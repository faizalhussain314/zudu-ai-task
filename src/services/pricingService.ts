import { PRICING_QUERY } from "@/queries/pricingQueries";

export const fetchPricingPlans = async () => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_GRAPHCQL_ENDPOINT as string,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: PRICING_QUERY }),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();

    const fetchedPlans = result.data.contentNodes.nodes.map((node: any) => ({
      id: node.id,
      name: node.title,
      description: node.pricingFields.subtitle,
      monthlyPrice: node.pricingFields.interval.includes("year")
        ? Math.round(((node.pricingFields.price / 12) * 10) / 12)
        : node.pricingFields.price,
      yearlyPrice: node.pricingFields.interval.includes("year")
        ? node.pricingFields.price
        : Math.round(node.pricingFields.price * 12 * 1.2),
      features: node.pricingFields.features
        ? node.pricingFields.features.split("\r\n")
        : [],
      isPopular: node.pricingFields.ispopular,
    }));

    return fetchedPlans;
  } catch (err: any) {
    throw new Error(err.message || "Error fetching pricing plans");
  }
};
