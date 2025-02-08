package com.web.boat.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
import java.util.Date;

@Entity
public class BOATS implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double price;
    private String type;
    @DateTimeFormat(pattern = "dd-MM-yyyy")
    private Date Manufacturing;
    private boolean available;
    private String powersource;
    private String features;
    private double cleancapacity;
    private double boatrange;
    private String imgUrl;

    public BOATS(){}
    public BOATS(String name, double price, String type, Date manufacturing, boolean available, String powersource, String features, double cleancapacity, double range, String imgUrl) {
        this.name = name;
        this.price = price;
        this.type = type;
        this.Manufacturing = manufacturing;
        this.available = available;
        this.powersource = powersource;
        this.features = features;
        this.cleancapacity = cleancapacity;
        this.boatrange = range;
        this.imgUrl = imgUrl;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Date getManufacturing() {
        return Manufacturing;
    }

    public void setManufacturing(Date manufacturing) {
        Manufacturing = manufacturing;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

    public String getPowersource() {
        return powersource;
    }

    public void setPowersource(String powersource) {
        this.powersource = powersource;
    }

    public String getFeatures() {
        return features;
    }

    public void setFeatures(String features) {
        this.features = features;
    }

    public double getCleancapacity() {
        return cleancapacity;
    }

    public void setCleancapacity(double cleancapacity) {
        this.cleancapacity = cleancapacity;
    }

    public double getRange() {
        return boatrange;
    }

    public void setRange(double range) {
        this.boatrange = range;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    @Override
    public String toString() {
        return "BOATS{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", price=" + price +
                ", type='" + type + '\'' +
                ", Manufacturing=" + Manufacturing +
                ", available=" + available +
                ", powersource='" + powersource + '\'' +
                ", features='" + features + '\'' +
                ", cleancapacity=" + cleancapacity +
                ", range=" + boatrange +
                ", imgUrl='" + imgUrl + '\'' +
                '}';
    }
}
