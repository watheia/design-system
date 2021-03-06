import TimeAgo from "javascript-time-ago"
// import en from "javascript-time-ago/locale/en"

export default (date: string | number) => {
  const now = new Date()
  const versionDate = new Date(date)
  // TimeAgo.addLocale(en)
  const timeAgo = new TimeAgo("en-US")
  const diff = new Date(now.getTime() - versionDate.getTime())
  const res = timeAgo.format(now.getTime() - diff.getTime())
  return res.slice(0, 2) === "a " ? `${res[0].toUpperCase()}${res.slice(1)}` : res
}
