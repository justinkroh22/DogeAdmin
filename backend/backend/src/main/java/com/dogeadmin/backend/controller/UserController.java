package com.dogeadmin.backend.controller;

import java.io.Console;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.Executor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.dogeadmin.backend.models.UserInfo;
import com.dogeadmin.backend.security.DecodeJWT;
import com.dogeadmin.backend.security.TokenConverter;
import com.dogeadmin.backend.services.UserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.google.api.core.ApiFuture;
import com.google.api.core.ApiFutureCallback;
import com.google.api.core.ApiFutures;
import com.google.firebase.auth.EmailIdentifier;
import com.google.firebase.auth.ExportedUserRecord;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.GetUsersResult;
import com.google.firebase.auth.ListUsersPage;
import com.google.firebase.auth.UidIdentifier;
import com.google.firebase.auth.UserRecord;
import com.google.firebase.auth.UserRecord.CreateRequest;
import com.google.firebase.auth.UserRecord.UpdateRequest;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.security.oauth2.server.resource.authentication.BearerTokenAuthentication;

@RestController
@RequestMapping(path="/user", method = {RequestMethod.GET, RequestMethod.POST})
@PreAuthorize("hasAuthority('ROLE_Admin')")
public class UserController {
	
	@Autowired
	UserService userService;
	
	
    @PostMapping(path="/set-claims", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public void setClaim(@RequestHeader Map<String, String> headers, @RequestBody UserInfo u) throws JsonMappingException, JsonProcessingException, FirebaseAuthException{
    	
    	System.out.println(DecodeJWT.decodeJWTBodyAsLHM(TokenConverter.stripBearer(headers.get("authorization"))).get("user_id"));
    	System.out.println(u.getUid());
    	
    	this.userService.setClaim(u);

    }
    
    @PostMapping(path="/update-display-name", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public UserRecord updateDisplayName(@RequestHeader Map<String, String> headers, @RequestBody UserInfo u) throws JsonMappingException, JsonProcessingException, FirebaseAuthException{
    	
    	System.out.println(DecodeJWT.decodeJWTBodyAsLHM(TokenConverter.stripBearer(headers.get("authorization"))).get("user_id"));
    	System.out.println(DecodeJWT.decodeJWTBodyAsLHM(TokenConverter.stripBearer(headers.get("authorization"))).get("role"));
    	
    	return this.userService.updateDisplayName(u);

    }
	

    @GetMapping(path="/all", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public ArrayList<ExportedUserRecord> getAllUsers(@RequestHeader Map<String, String> headers) throws FirebaseAuthException{
    	  	    	
		return this.userService.getAllUsers(headers);

    }
    
    @GetMapping(path="u/{uId}", produces = MediaType.APPLICATION_JSON_VALUE) 
    @ResponseBody
	public UserRecord getUserByUID(@RequestHeader Map<String, String> headers, @PathVariable(name="uId", required = true) String uid) throws FirebaseAuthException {
    	   	
    	return this.userService.getUserByUID(uid);
	}
    
    @DeleteMapping(path="d/{uid}")
    @ResponseBody
    public ResponseEntity<String> deleteUser(@RequestHeader Map<String, String> headers, @PathVariable(name="uid", required = true) String uid) throws URISyntaxException{

        return this.userService.deleteUser(uid);
    }
    
    @PostMapping(path="/create-user", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public void createUser(@RequestHeader Map<String, String> headers, @RequestBody UserInfo u) throws FirebaseAuthException{
    
    	this.userService.createUser(u);

    }
    
    
    @PostMapping(path="/reset-password", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public void resetPassword(@RequestHeader Map<String, String> headers, @RequestBody String email) throws FirebaseAuthException{
    	
    	this.userService.resetPassword(email);
    	
    }
    
    
    @PostMapping(path="/disable-user", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public void disableUser(@RequestHeader Map<String, String> headers, @RequestBody String uid) throws FirebaseAuthException{
    	
    	this.userService.disableUser(uid);
    	   	

    }
    
    @PostMapping(path="/enable-user", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public void enableUser(@RequestHeader Map<String, String> headers, @RequestBody String uid) throws FirebaseAuthException{
    	
    	this.userService.enableUser(uid);
    }
    
    
    
    
    
}