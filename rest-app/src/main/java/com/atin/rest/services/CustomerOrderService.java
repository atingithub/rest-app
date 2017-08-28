/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.atin.rest.services;

import com.atin.rest.app.JPAUtility;
import com.atin.rest.model.CustomerOrder;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Random;
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
public class CustomerOrderService extends AbstractService<CustomerOrder> {
    
    public CustomerOrderService() {
        super(CustomerOrder.class);
    }
    
    @GET
    @Path("/orders")
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
    @Path("/order/add")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response addCustomerOrder(CustomerOrder customerOrder) {
        
        // create confirmation number
        Random random = new Random();
        int i = random.nextInt(999999999);
        customerOrder.setConfirmationNumber(i);
    
        // add surcharge
        BigDecimal surcharge = new BigDecimal(3.0);
        customerOrder.setAmount(customerOrder.getAmount().add(surcharge));
        
        // add the date
        customerOrder.setDateCreated(new Date());
                
        //super.create(customerOrder);
        customerOrder.setId(2);
        
        return Response.status(200).entity(customerOrder).build();
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
