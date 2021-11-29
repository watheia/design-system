import { expect } from "chai"
import { ScopeUrl } from "./scope-url"
import { baseUrl } from "./constants"

describe("scope url", () => {
  it("should convert to url", () => {
    const id = "watheia.base-ui"

    const result = ScopeUrl.toUrl(id)

    expect(result).to.equal(`${baseUrl}/watheia/base-ui`)
  })

  it("should convert to url", () => {
    const id = "ioncannon"

    const result = ScopeUrl.toUrl(id)

    expect(result).to.equal(`${baseUrl}/ioncannon`)
  })
})

describe("scope url", () => {
  it("should convert to toPathname", () => {
    const id = "watheia.base-ui"

    const result = ScopeUrl.toPathname(id)

    expect(result).to.equal(`watheia/base-ui`)
  })

  it("should convert to url", () => {
    const id = "ioncannon"

    const result = ScopeUrl.toPathname(id)

    expect(result).to.equal(`ioncannon`)
  })
})
