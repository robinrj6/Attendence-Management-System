package controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import entities.Person;
import services.PersonService;

@RestController
public class AMSController{
	
	@Autowired
	private PersonService<Person, Integer> perRepo;
	
	@CrossOrigin(origins="http://localhost:4200/")
	@PostMapping("/addNew")
	public void addNew(@RequestBody Person p) {
		if(perRepo.checker(p)==false) {}else {
		perRepo.addNew(p);
		}//handle errors like null in names and return values not obtained.
	}
	
	@GetMapping("/getAll")
	public Collection<Person> getAll(){
		Collection<Person> listAll= perRepo.getAll();
		System.out.println(listAll);
		return listAll;
	}
	
	@PostMapping("/getbyid/{id}")
	public Person getById(@PathVariable Integer id) {
		Person p=perRepo.markAtt(id);
		return p;
	}
	
}
