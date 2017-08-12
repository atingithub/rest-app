/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.atin.rest.services;

import com.atin.rest.model.Category;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author Atin
 */
@Stateless
@Path("category")
public class CategoryService extends AbstractService<Category> {

    @PersistenceContext(unitName = "com.atin_rest-app_war_1.0-SNAPSHOTPU")
    private EntityManager entityManager;
    
    public CategoryService() {
        super(Category.class);
    }

    @GET
    @Path("{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Category find(@PathParam("id") Integer id) {
        return super.find(id);
    }
    
    @Override
    protected EntityManager getEntityManager() {
        return entityManager;
    }
    
}
