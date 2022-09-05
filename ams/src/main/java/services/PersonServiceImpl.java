package services;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import entities.Person;
import repositories.DBConnection;

@Service
public class PersonServiceImpl implements PersonService<Person, Integer> {

	@Autowired
	private DBConnection perRepo;
	
	public PersonServiceImpl() {
		super();
	}

	@Override
	public Collection<Person> getAll() {
		// TODO Auto-generated method stub
		Collection<Person> listAll=perRepo.findAll();
		return listAll;
	}

	@Override
	public Person getByID(Integer key) {
		// TODO Auto-generated method stub
		Person p =perRepo.getById(key);
		return p;
	}

	@Override
	public Person addNew(Person t) {
		// TODO Auto-generated method stub
		Person newP=perRepo.save(t);
		return newP;
	}

	@Override
	public Person deleteById(Integer Key) {
		// TODO Auto-generated method stub
		Person p = perRepo.getById(Key);
		perRepo.delete(p);
		return p;
	}

	@Override
	public boolean checker(Person p) {
		// TODO Auto-generated method stub
		boolean flag=true;
		Collection<Person> listAll=perRepo.findAll();
		for (Person person : listAll) {
			if(person.getFname().equals(p.getFname()) && person.getLname().equals(p.getLname()) ) {
				flag=false;
				break;
			}
		}
		return flag;
	}

	@Override
	public Person markAtt(Integer id) {
		perRepo.markAttendence(id);
		Person p=perRepo.getById(id);
		return p;
	}

}
