package com.dao;


import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import com.entities.User;


public interface UserRepository extends CrudRepository<User, Long> {
  @Query("select u.role from User u where u.id=:id")
  String findUserRoleById(@Param("id") Long userId);

  @Modifying
  @Transactional
  @Query(value = "UPDATE User u SET u.role=?2 WHERE u.id = ?1")
  void updateUserRole(Long id, String role);

}