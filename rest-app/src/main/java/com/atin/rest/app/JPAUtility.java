/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.atin.rest.app;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author Atin
 */
public class JPAUtility {
        private static final EntityManagerFactory entityManagerFactory;
	
	static {
		entityManagerFactory = Persistence.createEntityManagerFactory("com.atin_rest-app_war_1.0-SNAPSHOTPU");
	}
	
	public static EntityManager getEntityManager(){
		return entityManagerFactory.createEntityManager();
	}
	
	public static void close(){
		entityManagerFactory.close();
	}
}
