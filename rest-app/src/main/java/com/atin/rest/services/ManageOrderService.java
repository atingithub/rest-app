/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.atin.rest.services;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.atin.rest.order.ShoppingCart;

/**
 *
 * @author Atin
 */
@Path("api")
public class ManageOrderService {
    
    @POST
    @Path("/orders")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response placeOrders(ShoppingCart cart) {
        //super.create(orderedProduct);
        return Response.ok().build();
    }
}
