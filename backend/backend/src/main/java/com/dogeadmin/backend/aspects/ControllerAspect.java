package com.dogeadmin.backend.aspects;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.LinkedHashMap;
import java.time.*;

import com.dogeadmin.backend.security.DecodeJWT;
import com.dogeadmin.backend.security.TokenConverter;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.exc.MismatchedInputException;

import lombok.extern.slf4j.Slf4j;

@Aspect
@Component
@Slf4j
public class ControllerAspect {
	
	
	@After("execution(* com.dogeadmin.backend.controller.UserController.*(..))")
	public void logAfter(JoinPoint jp) throws Exception {
			
		
		String methodName = jp.getSignature().getName();
		
		Object o = jp.getArgs()[0];
		ObjectMapper mapper = new ObjectMapper();
		String jsonString = mapper.writeValueAsString(o);
		LinkedHashMap<String, String> lhm = mapper.readValue(jsonString, LinkedHashMap.class);
		String ipAddress = lhm.get("referer");
	    String jwtBody = DecodeJWT.decodeJWTBody(TokenConverter.stripBearer(lhm.get("authorization")));
		
	    LocalDateTime currentTime = LocalDateTime.now();
	    LocalDate date = currentTime.toLocalDate();
	    LocalTime time = currentTime.toLocalTime();
	    
	    String controllerLog = "<CONTROLLER LOGS>: " + methodName + " "
	    		+ "Was Invoked From"  + " " + ipAddress + " "
	    		// + "at Date:" + " " + date + " " + "Time: " + time +  " "
	    		+ "With Token Info" + " " + jwtBody;

		log.info(controllerLog);
	    
	}
	
}
