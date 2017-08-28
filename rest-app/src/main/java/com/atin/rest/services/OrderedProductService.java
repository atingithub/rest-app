/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.atin.rest.services;

import com.atin.rest.app.JPAUtility;
import com.atin.rest.model.CustomerOrder;
import com.atin.rest.model.OrderedProduct;
import com.atin.rest.model.OrderedProductPK;
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
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author Atin
 */
@Path("api")
public class OrderedProductService extends AbstractService<OrderedProduct> {
    
    public OrderedProductService() {
        super(OrderedProduct.class);
    }
    
    @GET
    @Path("/order/products")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public List<OrderedProduct> findAllOrderedProducts() {
        return super.findAll();
    }
    
    @GET
    @Path("/order/product/{id}")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public OrderedProduct findOrderedProduct(@PathParam("id") Integer id) {
        return super.find(id);
    }
    
    @POST
    @Path("/order/product/create")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response createOrderedProduct(OrderedProduct orderedProduct) {
        //super.create(orderedProduct);
        return Response.ok().build();
    }
    
    @POST
    @Path("/order/product/add")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response addOrderedProducts(CustomerOrder customerOrder) {
        
        Collection<OrderedProduct> orderedProductCollection =
                    customerOrder.getOrderedProductCollection();
            
        for (OrderedProduct orderedProduct : orderedProductCollection)
        {
            int productId = orderedProduct.getProduct().getId();
            // set up primary key object
            OrderedProductPK orderedProductPK = new OrderedProductPK();
            orderedProductPK.setCustomerOrderId(customerOrder.getId());
            orderedProductPK.setProductId(productId);

            orderedProduct.setOrderedProductPK(orderedProductPK);
            //super.create(orderedProduct);
        }
        
        return Response.status(200).entity(customerOrder).build();
    }
    
    @PUT
    @Path("/order/product/update")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response updateOrderedProduct(OrderedProduct orderedProduct) {
        super.edit(orderedProduct);
        return Response.ok().build();
    }
    
    @DELETE
    @Path("/order/product/remove")
    @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
    public Response deleteOrderedProduct(OrderedProduct orderedProduct) {
        super.remove(orderedProduct);
        return Response.ok().build();
    }
    
    @Override
    protected EntityManager getEntityManager() {
        return JPAUtility.getEntityManager();
    }
}
