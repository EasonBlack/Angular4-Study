package com.dao;


import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import com.entities.Role;


public interface RoleRepository extends CrudRepository<Role, Long> {
  @Query("select r.authority from Role r where r.id=:id")
  String findRoleAuthorityById(@Param("id") Long roleId);

  @Modifying
  @Transactional
  @Query(value = "UPDATE Role r SET r.authority=?2 WHERE r.id = ?1")
  void updateRoleAuthority(Long id, String authority);
}