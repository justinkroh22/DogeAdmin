package com.dogeadmin.backend.security;

public class TokenConverter {
	
	public static String stripBearer(String bearerToken) {
		
		String[] token = bearerToken.split(" ");
		
		return token[1];
	}


}
