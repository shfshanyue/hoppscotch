import { parseUrlAndPath } from "../uri"

describe("parseUrlAndPath", () => {
  test("has url and path fields", () => {
    const result = parseUrlAndPath("https://postwoman.devtool.tech/")

    expect(result).toHaveProperty("url")
    expect(result).toHaveProperty("path")
  })

  test("parses out URL correctly", () => {
    const result = parseUrlAndPath("https://postwoman.devtool.tech/test/page")

    expect(result.url).toBe("https://postwoman.devtool.tech")
  })
  test("parses out Path correctly", () => {
    const result = parseUrlAndPath("https://postwoman.devtool.tech/test/page")

    expect(result.path).toBe("/test/page")
  })
})
