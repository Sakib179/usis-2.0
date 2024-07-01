'use client'

import * as React from "react"
import { useEffect, useState } from "react"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { ColumnDef } from "@tanstack/react-table"

import { Button, buttonVariants } from "@/components/ui/button"

import { CircleX, Expand, Plus } from "lucide-react"

import DataTableCourse from "@/components/composite/DataTableCourse"
import DataTableSection from "@/components/composite/DataTableSection"
import DataTableCourseCart from "@/components/composite/DataTableCourseCart"
import { SkeletonCard } from "@/components/composite/SkeletonCard"
import { api_with_token } from "@/lib/api-requests"
import InformationCard from "@/components/composite/InformationCard"


export type Courses = {
  course_code: string,
  course_title: string,
  credit: number,
}

export type CourseCart = {
  course_code: string,
  section_no: number,
}

export type Sections = {
  section_no: string,
  faculty_initial: string,
  seats_remaining: number,
  max_seats: string,
  theory_schedule: string,
  lab_schedule: string,
}


// const temp_course_data: Courses[] = [
//   {
//     course_code: "MAT110",
//     course_title: "Differential Calculus",
//     credit: 3,
//     schedule: {
//       theory: "SUN 11:00-12:20, TUE 11:00-12:20",
//       lab: "SAT 8:00-9:20, SAT 9:30-10:50",
//     },
//     prerequisites: ["CSE101", "MAT101"],
//     necessity: "mandatory",
//   },
//   {
//     course_code: "MAT120",
//     course_title: "Integral Calculus",
//     credit: 3,
//     schedule: {
//       theory: "SUN 11:00-12:20, TUE 11:00-12:20",
//       lab: "SAT 8:00-9:20, SAT 9:30-10:50",
//     },
//     prerequisites: ["CSE101", "MAT101"],
//     necessity: "mandatory",
//   },
//   {
//     course_code: "CSE110",
//     course_title: "Programming Language I",
//     credit: 3,
//     schedule: {
//       theory: "SUN 11:00-12:20, TUE 11:00-12:20",
//       lab: "SAT 8:00-9:20, SAT 9:30-10:50",
//     },
//     prerequisites: ["CSE101", "MAT101"],
//     necessity: "mandatory",
//   },
//   {
//     course_code: "CSE111",
//     course_title: "Programming Language I",
//     credit: 3,
//     schedule: {
//       theory: "SUN 11:00-12:20, TUE 11:00-12:20",
//       lab: "SAT 8:00-9:20, SAT 9:30-10:50",
//     },
//     prerequisites: ["CSE101", "MAT101"],
//     necessity: "mandatory",
//   },
// ]
const temp_section_data: Sections[] = {
  CSE110: [{
    section_no: 1,
    faculty_initial: 'TRZ',
    seats_remaining: 4,
    max_seats: 30,
    theory_schedule: "SUN 11:00-12:20, TUE 11:00-12:20",
    lab_schedule: "SAT 8:00-9:20, SAT 9:30-10:50",
  },
  {
    section_no: 2,
    faculty_initial: 'ABC',
    seats_remaining: 10,
    max_seats: 30,
    theory_schedule: "MON 9:00-10:20, WED 9:00-10:20",
    lab_schedule: "FRI 8:00-9:20, FRI 9:30-10:50",
  },
  {
    section_no: 3,
    faculty_initial: 'XYZ',
    seats_remaining: 15,
    max_seats: 30,
    theory_schedule: "THU 11:00-12:20, FRI 11:00-12:20",
    lab_schedule: "SAT 10:00-11:20, SAT 11:30-12:50",
  },
  {
    section_no: 4,
    faculty_initial: 'TRZ',
    seats_remaining: 4,
    max_seats: 30,
    theory_schedule: "SUN 11:00-12:20, TUE 11:00-12:20",
    lab_schedule: "SAT 8:00-9:20, SAT 9:30-10:50",
  },
  {
    section_no: 5,
    faculty_initial: 'ABC',
    seats_remaining: 10,
    max_seats: 30,
    theory_schedule: "MON 9:00-10:20, WED 9:00-10:20",
    lab_schedule: "FRI 8:00-9:20, FRI 9:30-10:50",
  },
  {
    section_no: 6,
    faculty_initial: 'XYZ',
    seats_remaining: 15,
    max_seats: 30,
    theory_schedule: "THU 11:00-12:20, FRI 11:00-12:20",
    lab_schedule: "SAT 10:00-11:20, SAT 11:30-12:50",
  },
  {
    section_no: 7,
    faculty_initial: 'TRZ',
    seats_remaining: 4,
    max_seats: 30,
    theory_schedule: "SUN 11:00-12:20, TUE 11:00-12:20",
    lab_schedule: "SAT 8:00-9:20, SAT 9:30-10:50",
  },
  {
    section_no: 8,
    faculty_initial: 'ABC',
    seats_remaining: 10,
    max_seats: 30,
    theory_schedule: "MON 9:00-10:20, WED 9:00-10:20",
    lab_schedule: "FRI 8:00-9:20, FRI 9:30-10:50",
  },],
  MAT110: [  {
    section_no: 6,
    faculty_initial: 'XYZ',
    seats_remaining: 15,
    max_seats: 30,
    theory_schedule: "THU 11:00-12:20, FRI 11:00-12:20",
    lab_schedule: "SAT 10:00-11:20, SAT 11:30-12:50",
  },
  {
    section_no: 7,
    faculty_initial: 'TRZ',
    seats_remaining: 4,
    max_seats: 30,
    theory_schedule: "SUN 11:00-12:20, TUE 11:00-12:20",
    lab_schedule: "SAT 8:00-9:20, SAT 9:30-10:50",
  },
  {
    section_no: 8,
    faculty_initial: 'ABC',
    seats_remaining: 10,
    max_seats: 30,
    theory_schedule: "MON 9:00-10:20, WED 9:00-10:20",
    lab_schedule: "FRI 8:00-9:20, FRI 9:30-10:50",
  },
  {
    section_no: 9,
    faculty_initial: 'XYZ',
    seats_remaining: 15,
    max_seats: 30,
    theory_schedule: "THU 11:00-12:20, FRI 11:00-12:20",
    lab_schedule: "SAT 10:00-11:20, SAT 11:30-12:50",
  },
  {
    section_no: 10,
    faculty_initial: 'TRZ',
    seats_remaining: 4,
    max_seats: 30,
    theory_schedule: "SUN 11:00-12:20, TUE 11:00-12:20",
    lab_schedule: "SAT 8:00-9:20, SAT 9:30-10:50",
  },],
  MAT120: [  {
    section_no: 6,
    faculty_initial: 'XYZ',
    seats_remaining: 15,
    max_seats: 30,
    theory_schedule: "THU 11:00-12:20, FRI 11:00-12:20",
    lab_schedule: "SAT 10:00-11:20, SAT 11:30-12:50",
  },
  {
    section_no: 7,
    faculty_initial: 'TRZ',
    seats_remaining: 4,
    max_seats: 30,
    theory_schedule: "SUN 11:00-12:20, TUE 11:00-12:20",
    lab_schedule: "SAT 8:00-9:20, SAT 9:30-10:50",
  },
  {
    section_no: 8,
    faculty_initial: 'ABC',
    seats_remaining: 10,
    max_seats: 30,
    theory_schedule: "MON 9:00-10:20, WED 9:00-10:20",
    lab_schedule: "FRI 8:00-9:20, FRI 9:30-10:50",
  },
  {
    section_no: 9,
    faculty_initial: 'XYZ',
    seats_remaining: 15,
    max_seats: 30,
    theory_schedule: "THU 11:00-12:20, FRI 11:00-12:20",
    lab_schedule: "SAT 10:00-11:20, SAT 11:30-12:50",
  },
  {
    section_no: 10,
    faculty_initial: 'TRZ',
    seats_remaining: 4,
    max_seats: 30,
    theory_schedule: "SUN 11:00-12:20, TUE 11:00-12:20",
    lab_schedule: "SAT 8:00-9:20, SAT 9:30-10:50",
  },],
  CSE111: [ {
    section_no: 3,
    faculty_initial: 'XYZ',
    seats_remaining: 15,
    max_seats: 30,
    theory_schedule: "THU 11:00-12:20, FRI 11:00-12:20",
    lab_schedule: "SAT 10:00-11:20, SAT 11:30-12:50",
  },
  {
    section_no: 4,
    faculty_initial: 'TRZ',
    seats_remaining: 4,
    max_seats: 30,
    theory_schedule: "SUN 11:00-12:20, TUE 11:00-12:20",
    lab_schedule: "SAT 8:00-9:20, SAT 9:30-10:50",
  },
  {
    section_no: 5,
    faculty_initial: 'ABC',
    seats_remaining: 10,
    max_seats: 30,
    theory_schedule: "MON 9:00-10:20, WED 9:00-10:20",
    lab_schedule: "FRI 8:00-9:20, FRI 9:30-10:50",
  },
  {
    section_no: 6,
    faculty_initial: 'XYZ',
    seats_remaining: 15,
    max_seats: 30,
    theory_schedule: "THU 11:00-12:20, FRI 11:00-12:20",
    lab_schedule: "SAT 10:00-11:20, SAT 11:30-12:50",
  },
  {
    section_no: 7,
    faculty_initial: 'TRZ',
    seats_remaining: 4,
    max_seats: 30,
    theory_schedule: "SUN 11:00-12:20, TUE 11:00-12:20",
    lab_schedule: "SAT 8:00-9:20, SAT 9:30-10:50",
  },
  {
    section_no: 8,
    faculty_initial: 'ABC',
    seats_remaining: 10,
    max_seats: 30,
    theory_schedule: "MON 9:00-10:20, WED 9:00-10:20",
    lab_schedule: "FRI 8:00-9:20, FRI 9:30-10:50",
  },
  {
    section_no: 9,
    faculty_initial: 'XYZ',
    seats_remaining: 15,
    max_seats: 30,
    theory_schedule: "THU 11:00-12:20, FRI 11:00-12:20",
    lab_schedule: "SAT 10:00-11:20, SAT 11:30-12:50",
  },],
}

export default function DemoPage() {
  // const data = await getData()
  const [studentInfo, setStudentInfo] = useState([]) 
  const [courseData, setCourseData] = useState([])
  const [sectionData, setSectionData] = useState([])
  const [addedCourses, setAddedCourses] = useState([])

  const [currentSemester, setCurrentSemester] = useState("summer2024")
  const [selectedCourseCode, setSelectedCourseCode] = useState("")


  const handleAddCourse = async (course_code: any, section_no: number, semester: string) => {
    if (!addedCourses.some(course => course.course_code == course_code)) {
      setAddedCourses(addedCourses.concat({ course_code, section_no, semester }));
      console.log(addedCourses);
    }
    else {
      console.log('course already exists');
      
    }
    
  }
  
  const handleExpandSections = async (course_code: any) => {
    const reqBody = {'course_code': 'CSE110'}
    try {
      setSectionData(temp_section_data[course_code]);
      setSelectedCourseCode(course_code)
    } catch (err: any) {
      console.error('Error:', err.response);
    }
  }

  const handleRemoveCartCourse = async (course_code: any) => {
    var courses: { course_code: any }[] = addedCourses;
    const filteredCourses = courses.filter(course => course.course_code !== course_code);
    setAddedCourses(filteredCourses as never[]);
  }

  const course_columns: ColumnDef<Courses>[] = [
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
            onClick={() => (
              handleExpandSections(row.getValue("course_code"))
            )} 
            className="w-full"
          >
            <Expand />
          </Button>
        )
      },
    },
  ]

  const course_cart_columns: ColumnDef<CourseCart>[] = [
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
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original
  
        return (
          <Button
            variant="ghost"
            onClick={() => (
              handleRemoveCartCourse(row.getValue("course_code"))
            )} 
            className="w-auto"
          >
            <CircleX />
          </Button>
        )
      },
    },
  ]
  // section no, faculty initialize, class schedule, lab scheduler, seat remaining, total seats 
  const section_columns: ColumnDef<Sections>[] = [
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
            Remaining Seats
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
            Total Seats
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
            onClick={() => {
              handleAddCourse(selectedCourseCode, row.getValue("section_no"), row.getValue('faculty_initial') ,currentSemester)
            }} 
            className="w-auto"
          >
            <Plus/>
          </Button>
        )
      },
    },
  ]

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

  const fetchData = async () => {
    try {
      const response = await api_with_token.get('/api/advising/student-advising-info');
      setCourseData(response.data.degree_courses);
      setStudentInfo(response.data.student_info)
      const cards_to_render = []
      setLoading(false);
    } catch (err: any) {
      console.error('Error:', err.response);
      setError(err.response ? err.response.data : "An error occurred");
      setLoading(false);
    }
  };

    fetchData();
  }, []);

  if (loading) return <SkeletonCard/>;
  if (error) return <div>Error: {error}</div>;

  
  return (
    <div className="container mx-auto py-10">
      <InformationCard data={studentInfo} title="My Information"/>
      <div className="flex space-x-8">
        <div className="w-7/12">
          <h1>Program Courses</h1>
          <DataTableCourse columns={course_columns} data={courseData}/>
        </div>
        <div className="w-5/12">
          <h1>Added courses</h1>
          <DataTableCourseCart columns={course_cart_columns} data={addedCourses}/>
        </div>
      </div>
      <h1>Course Sections</h1>
      <DataTableSection columns={section_columns} data={sectionData}/>
    </div>
  )
}


