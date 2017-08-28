/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.atin.rest.services;

import com.atin.rest.app.JPAUtility;
import com.atin.rest.model.Admin;
import com.atin.rest.model.User;
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
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author Atin
 */
@Path("api")
public class UserService extends AbstractService<User> {

    public UserService() {
        super(User.class);
    }

    /**
     *
     * @return
     */
    @GET
    @Path("/user")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<User> findAllUser() {
        return super.findAll();
    }
    
    @GET
    @Path("/user/{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public User findUserById(@PathParam("id") Integer id) {
        return super.find(id);
    }

    @POST
    @Path("/user/create")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response createUser(User user) {
        //super.create(category);
        return Response.ok().build();
    }
    
    @PUT
    @Path("/user/update")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response updateUser(User user) {
        super.edit(user);
        return Response.ok().build();
    }
    
    @DELETE
    @Path("/user/delete")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response deleteUser(User user) {
        super.remove(user);
        return Response.ok().build();
    }
    
    @Override
    protected EntityManager getEntityManager() {
        return JPAUtility.getEntityManager();
    }
    
}
