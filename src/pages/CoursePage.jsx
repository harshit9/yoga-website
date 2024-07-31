import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Course: {id}</h1>
      {/* Add your course content here */}
    </div>
  );
};

export default CoursePage;