package com.dogeadmin.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
		
		System.out.println("\n");
		
		System.out.println(DOGEBANNER);
		System.out.println(DMOTD);
		
		
	}
	
	
	
	
	public static final String DOGEBANNER = "								░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐░░░\r\n"
			+ "  _____                                 _           _       	░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐░░░\r\n"
			+ " |  __ \\                       /\\      | |         (_)      	░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐░░░\r\n"
			+ " | |  | | ___   __ _  ___     /  \\   __| |_ __ ___  _ _ __  	░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌░░░\r\n"
			+ " | |  | |/ _ \\ / _` |/ _ \\   / /\\ \\ / _` | '_ ` _ \\| | '_ \\ 	░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌░░\r\n"
			+ " | |__| | (_) | (_| |  __/  / ____ \\ (_| | | | | | | | | | |	░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐░░\r\n"
			+ " |_____/ \\___/ \\__, |\\___| /_/    \\_\\__,_|_| |_| |_|_|_| |_|	░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌░\r\n"
			+ "                __/ |                                       	░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌░\r\n"
			+ "               |___/                                        	▀▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐░\r\n"
			+ "	By: Justin Kroh			Version 0.1		▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌\r\n"
			+ "								▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐░\r\n"
			+ "								░▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌░";

	
	
	
	public static final String DMOTD = "Much Wow, Very Auth, Such Admin";
	
	
}
