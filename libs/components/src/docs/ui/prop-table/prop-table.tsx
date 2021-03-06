import React from "react"
// @ts-ignore - missing types
import useDimensions from "react-use-dimensions"
import { useDebounce } from "use-debounce"
import { Table } from "@watheia/docs.ui.table"
import { RowType } from "@watheia/docs.ui.table-row"

export type TableProps = {
  /**
   * the data to be shown in the table
   */
  rows: RowType[]
  /**
   * resolution to show table in list view
   */
  listViewResolution?: number
  /**
   * show list view
   */
  showListView?: boolean
  // & { ref: React.Ref<HTMLDivElement> }
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

/**
 * A table component that renders the properties of a component. The headings array determines how the data in the table is ordered.
 * The number of columns is 4 by default.
 */
export function PropTable({ rows, listViewResolution, showListView, ...rest }: TableProps) {
  const [ref, { width }] = useDimensions()
  const debouncedSize = useDebounce(width, 300, { leading: true })

  const isListView = showListView || +debouncedSize[0] <= (listViewResolution || 0)

  if (!width) return <div ref={ref} />

  return (
    <div ref={ref}>
      <Table
        {...rest}
        headings={["name", "type", "default", "description"]}
        rows={rows}
        isListView={isListView}
      />
    </div>
  )
}

PropTable.defaultProps = {
  listViewResolution: 768
}
