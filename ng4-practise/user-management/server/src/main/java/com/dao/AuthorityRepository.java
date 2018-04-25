package com.dao;


import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.entities.Authority;


public interface AuthorityRepository extends CrudRepository<Authority, Long> {
 
}