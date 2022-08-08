import "./StudentList.scss";
import Student from "../../components/Student/Student";

export default function StudentList() {
  return (
    <section className="student-list">
      <Student />
      <Student />
      <Student />
    </section>
  );
}
