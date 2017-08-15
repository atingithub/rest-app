/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.atin.rest.services;

import com.atin.rest.app.JPAUtility;
import com.atin.rest.model.CustomerOrder;
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
public class CustomerOrderService extends AbstractService<CustomerOrder> {
    
    public CustomerOrderService() {
        super(CustomerOrder.class);
    }
    
    @GET
    @Path("orders")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<CustomerOrder> findAllCustomerOrders() {
        return super.findAll();
    }
    
    @GET
    @Path("/order/{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public CustomerOrder findCustomerOrderById(@PathParam("id") Integer id) {
        return super.find(id);
    }
    
    @POST
    @Path("/order/create")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response createCustomerOrder(CustomerOrder customerOrder) {
        super.create(customerOrder);
        return Response.ok().build();
    }
    
    @PUT
    @Path("/order/update")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response updateCustomerOrder(CustomerOrder customerOrder) {
        super.edit(customerOrder);
        return Response.ok().build();
    }
    
    @DELETE
    @Path("/order/remove")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response deleteCustomerOrder(CustomerOrder customerOrder) {
        super.remove(customerOrder);
        return Response.ok().build();
    }
    
    @Override
    protected EntityManager getEntityManager() {
        return JPAUtility.getEntityManager();
    }
}
