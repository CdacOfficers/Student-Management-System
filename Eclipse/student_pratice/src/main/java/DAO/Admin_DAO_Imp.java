package DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import Model.Admin;
import Model.Student;
@Repository
public class Admin_DAO_Imp  implements Admin_DAO {
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public boolean admin_check(Admin a) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Admin> query=currentSession.createQuery("from Admin where login_no=:login_no", Admin.class);
		query.setParameter("login_no", a.getLogin_no());
		Admin  a1=query.getSingleResult();
		if(a1 != null)
		{
			return true;
		}
			
		else
			return false;
	}
	
	}
	


