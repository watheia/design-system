import * as path from "path"
import { stripTrailingChar } from "@watheia/base-ui.utils.string.strip-trailing-char"

const DEFAULT_SEPARATOR = "/"

export function isPathInside(thePath: string, potentialParent: string): boolean {
  // For inside-directory checking, we want to allow trailing slashes, so normalize.
  thePath = stripTrailingChar(thePath, path.sep)
  potentialParent = stripTrailingChar(potentialParent, path.sep)

  // Node treats only Windows as case-insensitive in its path module; we follow those conventions.
  if (process.platform === "win32") {
    thePath = thePath.toLowerCase()
    potentialParent = potentialParent.toLowerCase()
  }

  return (
    thePath.lastIndexOf(potentialParent, 0) === 0 &&
    (thePath[potentialParent.length] === DEFAULT_SEPARATOR ||
      thePath[potentialParent.length] === undefined)
  )
}
