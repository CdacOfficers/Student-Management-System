package Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admin")
public class Admin {
@Id
	private int login_no;
private String passowrd;
public int getLogin_no() {
	return login_no;
}
public void setLogin_no(int login_no) {
	this.login_no = login_no;
}
public String getPassowrd() {
	return passowrd;
}
public void setPassowrd(String passowrd) {
	this.passowrd = passowrd;
}



	
	

}
