import React from 'react';
import { CourseCard } from '@/components/molecules/CourseCard';

type Props = {
  courses: any[]; // TODO: Course型を後々作る
};

export const CourseCardGrid: React.VFC<Props> = ({ courses }) => {
  return (
    <div className="max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:auto-cols-max md:max-w-none">
      {courses.map((_, index) => {
        return <CourseCard key={index} />;
      })}
    </div>
  );
};
