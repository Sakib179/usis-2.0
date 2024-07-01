"use client"

import * as React from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button, buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Expand, Plus } from "lucide-react"

export type Courses = {
  course_code: string,
  course_title: string,
  credit: number,
}

export type Sections = {
  section_no: string,
  faculty_initial: string,
  seats_remaining: number,
  max_seats: string,
  theory_schedule: string,
  lab_schedule: string,
}

export const course_columns: ColumnDef<Courses>[] = [
  {
    accessorKey: "course_code",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
          className="w-full"
        >
          Code
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="uppercase font-semibold">{row.getValue("course_code")}</div>,
  },
  {
    accessorKey: "course_title",
    header: "Course Title",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("course_title")}</div>
    ),
  },
  {
    accessorKey: "credit",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
          className="w-full"
        >
          Credit
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const credit = parseFloat(row.getValue("credit"));

      // Format the credit as a number with two decimal places
      const formatted = credit.toFixed(2);

      return <div className="text-center font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <Button
          variant="ghost"
          //onClick={} 
          className="w-full"
        >
          <Expand />
        </Button>
      )
    },
  },
]

// section no, faculty initialize, class schedule, lab scheduler, seat remaining, total seats 
export const section_columns: ColumnDef<Sections>[] = [
  {
    accessorKey: "section_no",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
          className="w-full"
        >
          Section no.
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="uppercase font-semibold">{row.getValue("section_no")}</div>,
  },
  {
    accessorKey: "faculty_initial",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
          className="w-full"
        >
          Faculty Initial
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="uppercase font-semibold">{row.getValue("faculty_initial")}</div>,
  },
  {
    accessorKey: "seats_remaining",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
          className="w-full"
        >
          Seat Remaining
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="uppercase font-semibold">{row.getValue("seats_remaining")}</div>,
  },
  {
    accessorKey: "max_seats",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} 
          className="w-full"
        >
          Seat Remaining
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="uppercase font-semibold">{row.getValue("max_seats")}</div>,
  },
  {
    accessorKey: "theory_schedule",
    header: "Class Schedule",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("theory_schedule")}</div>
    ),
  },
  {
    accessorKey: "lab_schedule",
    header: "Lab Schedule",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("lab_schedule")}</div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <Button
          variant="ghost"
          //onClick={} 
          className="w-full"
        >
          <Plus/>
        </Button>
      )
    },
  },
]
