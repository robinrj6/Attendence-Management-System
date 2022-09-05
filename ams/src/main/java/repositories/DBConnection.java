package repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import entities.Person;

public interface DBConnection extends JpaRepository<Person, Integer> {

	@Transactional
	@Modifying
	@Query("update Person p set p.attendence = true, p.date=CURRENT_DATE where p.id = :id")
	void markAttendence(@Param("id") Integer id);
}
