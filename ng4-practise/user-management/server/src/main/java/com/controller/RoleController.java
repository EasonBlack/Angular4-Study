package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;


import com.entities.Role;
import com.dao.RoleRepository;


@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/roles")
public class RoleController {

  @Autowired
  private RoleRepository roleRepository;


  @RequestMapping(method = RequestMethod.GET)
  public @ResponseBody Iterable<Role> getAllRoles() {
    return roleRepository.findAll();
  }


  @RequestMapping(method = RequestMethod.POST, consumes = "application/json")
  @ResponseBody
  public String saveRole(@RequestBody Role role) {
    roleRepository.save(role);
    return "success";
  }

  @RequestMapping(method = RequestMethod.PUT, consumes = "application/json")
  @ResponseBody
  public String updateRole(@RequestBody Role role) {
    roleRepository.save(role);
    return "success";
  }

  @RequestMapping(value = "/{id}/authority", method = RequestMethod.GET)
  @ResponseBody
  public String getRoleAuthority(@PathVariable Long id) {
    return roleRepository.findRoleAuthorityById(id);
  }

  @RequestMapping(value = "/{id}/authority", method = RequestMethod.PUT)
  @ResponseBody
  public String updateRoleAuthority(@PathVariable Long id, @RequestPart("authority") String authority) {
    System.out.println(id + "   " + authority);
    roleRepository.updateRoleAuthority(id, authority);
    return "success";
  }

}