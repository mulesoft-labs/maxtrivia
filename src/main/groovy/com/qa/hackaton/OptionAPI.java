package com.qa.hackaton;


import groovy.json.internal.LazyMap;
import groovyx.net.http.HttpResponseDecorator;
import groovyx.net.http.RESTClient;
import jdk.nashorn.internal.parser.JSONParser;
import net.sf.json.JSONArray;
import org.apache.commons.io.IOUtils;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.StringWriter;
import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

class OptionAPI {
    RESTClient client;
    private int productCategory;

    OptionAPI(int productCategory) {

        this.productCategory = productCategory;
        try {
            client = new RESTClient("https://maxtrivia-d3a3d.firebaseio.com");
        }catch (URISyntaxException e) {
            //log
        }
    }


    private String randomValueForQuestionAndAnswer() {
        Random random = new Random();
        return String.valueOf(random.nextInt(2));
    }

    public void getRandomQuestion() {

        try {
            String question = randomValueForQuestionAndAnswer();
            String valueProductName = getProductName(productCategory);

            Map<String, String> getMap = new HashMap<String, String>();
            getMap.put("path", "/products/" + valueProductName + "/questions/" +  question + ".json" );

            LazyMap response = (LazyMap) ((HttpResponseDecorator) client.get(getMap)).getData();

            QuestionAndAnswers q = new QuestionAndAnswers((String) response.get("description"), getAnswer(response, 0), getAnswer(response, 1), getAnswer(response, 2));

            System.out.println(q.Question);
            System.out.println(q.Answer1.description + " is correct: " + q.Answer1.isCorrect);
            System.out.println(q.Answer2.description + " is correct: " + q.Answer2.isCorrect);
            System.out.println(q.Answer3.description + " is correct: " + q.Answer3.isCorrect);



        } catch (Exception e) {
            System.out.println("exception" + e.getMessage());
        }
    }

    private Anwser getAnswer(LazyMap response, int index) {
        return new Anwser( (String) ((LazyMap) ((ArrayList) ((LazyMap) response).get("answers")).get(index)).get("description"),
                ((Boolean) ((LazyMap) ((ArrayList) ((LazyMap) response).get("answers")).get(index)).get("isCorrect")).booleanValue());
    }


    public String getProductName(int index) {

        if(index > 5) { throw new IndexOutOfBoundsException("Option not found");}

        HashMap<Integer, String> hmap = new HashMap<Integer, String>();
        hmap.put(0, "accessManagement");
        hmap.put(1, "cloudHub");
        hmap.put(2, "exchange");
        hmap.put(3, "runtimeManager");
        hmap.put(4, "studio");
        hmap.put(5, "apimanager");

        return hmap.get(index);

    }

}
