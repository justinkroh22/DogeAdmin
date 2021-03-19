package com.dogeadmin.backend.security;

import java.util.LinkedHashMap;

import org.apache.commons.codec.binary.Base64;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class DecodeJWT {
	
	
	 public static String decodeJWTHeader(String jwtToken) {

	        String[] splitToken = jwtToken.split("\\.");
	        String encodedHeader= splitToken[0];
	        Base64 base64Url = new Base64(true);
	        String header = new String(base64Url.decode(encodedHeader));
	        return header;

	    }
	 
	 public static String decodeJWTBody(String jwtToken) throws JsonMappingException, JsonProcessingException {

	        String[] splitToken = jwtToken.split("\\.");
	        String encodedBody= splitToken[1];
	        Base64 base64Url = new Base64(true);
	        String body = new String(base64Url.decode(encodedBody));
	        
			ObjectMapper mapper = new ObjectMapper();
			LinkedHashMap<String, String> lhm = mapper.readValue(body, LinkedHashMap.class);
	        
			System.out.println(lhm);
	        
	        return body;

	    }
	 
	 public static LinkedHashMap decodeJWTBodyAsLHM(String jwtToken) throws JsonMappingException, JsonProcessingException {

	        String[] splitToken = jwtToken.split("\\.");
	        String encodedBody= splitToken[1];
	        Base64 base64Url = new Base64(true);
	        String body = new String(base64Url.decode(encodedBody));
	        
			ObjectMapper mapper = new ObjectMapper();
			LinkedHashMap<String, String> lhm = mapper.readValue(body, LinkedHashMap.class);
	        
			System.out.println(lhm);
	        
	        return lhm;

	    }

	 public static String decodeJWTSignature(String jwtToken) {

	        String[] splitToken = jwtToken.split("\\.");
	        String encodedSignature= splitToken[2];
	        Base64 base64Url = new Base64(true);
	        String signature = new String(base64Url.decode(encodedSignature));
	        return signature;

	    }
	 

	

}
