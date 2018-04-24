package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.entities.User;
import com.entities.Role;
import com.dao.RoleRepository;
import com.dao.UserRepository;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UserController {

  @Autowired
  private RoleRepository roleRepository;
  @Autowired
  private UserRepository userRepository;


  @RequestMapping(method = RequestMethod.GET)
  public @ResponseBody Iterable<User> getAllUsers() {
    return userRepository.findAll();
  }

  @RequestMapping(method = RequestMethod.POST, consumes = "application/json")
  @ResponseBody
  public String saveUser(@RequestBody User user) {
    userRepository.save(user);
    return "success";
  }

  @RequestMapping(method = RequestMethod.PUT, consumes = "application/json")
  @ResponseBody
  public String updateUser(@RequestBody User user) {
    userRepository.save(user);
    return "success";
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  @ResponseBody
  public String deleteUser(@PathVariable Long id) {
    userRepository.delete(id);
    return "success";
  }

  @RequestMapping("/roles")
  public @ResponseBody Iterable<Role> getAllRoles() {
    return roleRepository.findAll();
  }

}