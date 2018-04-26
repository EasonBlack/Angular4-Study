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


import com.entities.Authority;
import com.dao.AuthorityRepository;


@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/authority")
public class AuthorityController {

  @Autowired
  private AuthorityRepository authorityRepository;


  @RequestMapping(method = RequestMethod.GET)
  public @ResponseBody Iterable<Authority> getAllAuthority() {
    return authorityRepository.findAll();
  }

  @RequestMapping(method = RequestMethod.POST, consumes = "application/json")
  @ResponseBody
  public String saveAuthority(@RequestBody Authority authority) {
    authorityRepository.save(authority);
    return "success";
  }

  @RequestMapping(method = RequestMethod.PUT, consumes = "application/json")
  @ResponseBody
  public String updateAuthority(@RequestBody Authority authority) {
    authorityRepository.save(authority);
    return "success";
  }


  

}