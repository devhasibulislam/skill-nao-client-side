import React from 'react';
import Card from '../components/Card';
import Title from '../components/Title';
import MiniLoading from '../shared/MiniLoading';
import useGetAllCourses from '../utils/useGetAllCourses';

const AllCourses = () => {
    const { courses, isLoading } = useGetAllCourses();

    if (isLoading) {
      return <MiniLoading/>;
    }
    return (
        <section>
          <Title title={"category | all courses"} />
        <h2 className="mb-4">
          Total Courses:{" "}
          <span className="text-[#ffb96d] font-semibold">{courses?.length}</span>
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-y-4">
          {courses?.map((course, index) => (
            <Card key={index} course={course} />
          )).reverse()}
        </div>
      </section>
    );
};

export default AllCourses;