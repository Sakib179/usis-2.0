'use client'
import React, { useState, useEffect } from "react";

import { api_with_token } from "@/lib/api-requests";
import InformationCard from "@/components/composite/InformationCard";
import InformationCardMultikey from "@/components/composite/InformationCardMultikey";
import { SkeletonCard } from "@/components/composite/SkeletonCard";

export default function StudentGradesheet() {
  const [studentInfo, setStudentInfo] = useState({
    student_info: [] as any[],
    education: [] as any[],
    guardian: [] as any[],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

  const fetchData = async () => {
    try {
      const response = await api_with_token.get('/api/user/student-profile-info');
      setStudentInfo(response.data);
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
    <>
    <InformationCard data={studentInfo.student_info} title='Student Information'/>
    <InformationCardMultikey data={studentInfo.education} title='Education'/>
    <InformationCardMultikey data={studentInfo.guardian} title='Guardian Information'/>
    </>
  );
}
