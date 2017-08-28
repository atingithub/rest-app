/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.atin.rest.services;

import com.atin.rest.app.JPAUtility;
import com.atin.rest.model.Category;
import com.atin.rest.model.Product;
import java.util.Collection;
import java.util.List;
import javax.persistence.EntityManager;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author Atin
 */
@Path("api")
public class CategoryService extends AbstractService<Category> {

    public CategoryService() {
        super(Category.class);
    }

    /**
     *
     * @return
     */
    @GET
    @Path("/categories")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Category> findAllCategories() {
        return super.findAll();
    }
    
    @GET
    @Path("/category/{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Category findCategory(@PathParam("id") Integer id) {
        return super.find(id);
    }
    
    @GET
    @Path("/category/products/{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Collection<Product> findProductsById(@PathParam("id") Integer id) {
        return super.find(id).getProductCollection();
    }
    
    @GET
    @Path("/category/products")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Collection<Product> findProductsByName(@QueryParam("name") String name) {
        Category category = getEntityManager()
                .createNamedQuery("Category.findByName", Category.class)
                .setParameter("name", name)
                .getSingleResult();
                
        return category.getProductCollection();
    }
    
    @POST
    @Path("/category/create")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response createCategory(Category category) {
        //super.create(category);
        return Response.ok().build();
    }
    
    @PUT
    @Path("/category/update")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response updateCategory(Category category) {
        super.edit(category);
        return Response.ok().build();
    }
    
    @DELETE
    @Path("/category/remove")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response deleteCategory(Category category) {
        super.remove(category);
        return Response.ok().build();
    }
    
    @Override
    protected EntityManager getEntityManager() {
        return JPAUtility.getEntityManager();
    }
    
}
