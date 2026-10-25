import { describe, expect, it } from "vitest";
import { BONUS_DRAWING_COUNT, ORIGINAL_PRICE, PRICE } from "@/config/offer";

describe("Oferta do Kit Pequenos Exploradores", () => {
  it("mantém o preço anterior de R$ 19,90", () => {
    expect(ORIGINAL_PRICE).toBe("19,90");
  });

  it("mantém o preço promocional de R$ 9,90", () => {
    expect(PRICE).toBe("9,90");
  });
  it("oferece 20 desenhos no bônus para colorir", () => {
    expect(BONUS_DRAWING_COUNT).toBe(20);
  });
});