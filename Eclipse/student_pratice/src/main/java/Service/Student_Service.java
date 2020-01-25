package Service;

import java.util.List;

import Model.Admin;
import Model.Student;

public interface Student_Service { 

	
	public boolean saveStudent(Student student);
	public List<Student> getStudents();
	public boolean deleteStudent(Student student);
	public List<Student> getStudentByID(Student student);
	public boolean updateStudent(Student student);
	public boolean admin_check( Admin a);
}
