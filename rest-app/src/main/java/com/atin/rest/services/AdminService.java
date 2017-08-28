/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.atin.rest.services;

import com.atin.rest.app.JPAUtility;
import com.atin.rest.model.Admin;
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
public class AdminService extends AbstractService<Admin> {

    public AdminService() {
        super(Admin.class);
    }

    /**
     *
     * @return
     */
    @GET
    @Path("/admin")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<Admin> findAllAdmin() {
        return super.findAll();
    }
    
    @GET
    @Path("/admin/{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Admin findAdminById(@PathParam("id") Integer id) {
        return super.find(id);
    }

    @POST
    @Path("/admin/create")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response createAdmin(Admin admin) {
        //super.create(category);
        return Response.ok().build();
    }
    
    @PUT
    @Path("/admin/update")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response updateAdmin(Admin admin) {
        super.edit(admin);
        return Response.ok().build();
    }
    
    @DELETE
    @Path("/admin/delete")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response deleteAdmin(Admin admin) {
        super.remove(admin);
        return Response.ok().build();
    }
    
    @Override
    protected EntityManager getEntityManager() {
        return JPAUtility.getEntityManager();
    }
    
}
