import { render, screen, act } from "@testing-library/react";
import React from "react";
import { PricingTable } from "../pricing-table";

const mockGraphQLResponse = {
  data: {
    contentNodes: {
      nodes: [
        {
          id: "cG9zdDoxNw==",
          title: "Basic",
          pricingFields: {
            price: 19,
            features: "1 Project\r\nBasic Analytics",
            subtitle: "For individuals",
            interval: ["year"],
            ispopular: false,
          },
        },
        {
          id: "cG9zdDoxOQ==",
          title: "Pro",
          pricingFields: {
            price: 49,
            features: "5 Projects\r\nAdvanced Analytics",
            subtitle: "For businesses",
            interval: ["year"],
            ispopular: true,
          },
        },
      ],
    },
  },
};

global.fetch = jest.fn(() =>
  Promise.resolve(
    new Response(JSON.stringify(mockGraphQLResponse), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  )
);

describe("PricingTable", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shows the loading state initially", () => {
    render(<PricingTable />);
    expect(screen.getByText("Loading pricing plans...")).toBeInTheDocument();
  });

  it("renders pricing plans after data is fetched", async () => {
    await act(async () => {
      render(<PricingTable />);
    });

    // Also inside act, make sure all updates are awaited
    await act(async () => {
      expect(await screen.findByText("Basic")).toBeInTheDocument();
      expect(await screen.findByText("Pro")).toBeInTheDocument();
    });
  });
});
