package com.atin.rest.app;

import com.atin.rest.model.Category;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("myresource")
public class MyResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getIt() {
        
        /*
        Category category = JPAUtility.getEntityManager()
                                .createNamedQuery("Category.findById", Category.class)
                                .setParameter("id", 1)
                                .getSingleResult();*/
                                
        return "Hello, Heroku!";
    }
}
