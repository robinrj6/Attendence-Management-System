package services;

import java.util.Collection;

public interface PersonService<T,K> {
	Collection<T> getAll();
	T getByID( K key);
	boolean checker(T t);
	T addNew(T t);
	T deleteById(K Key);
	T markAtt(K Key);
}
