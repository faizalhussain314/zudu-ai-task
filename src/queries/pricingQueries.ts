export const PRICING_QUERY = `
  query GetPricingPlans {
    contentNodes(where: { contentTypes: PLANS }) {
      nodes {
        ... on Plans {
          id
          title
          pricingFields{
            price
            features
            subtitle
            interval
            ispopular
          }
        }
      }
    }
  }
`;
