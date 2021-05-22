package com.park.syspentest.domain;


import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.Instant;

/**
 * A Notification.
 */
@Entity
@Table(name = "spt_notification")
public class Notification implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Size(max = 100)
    @Column(name = "notif_name", length = 100)
    private String notifName;

    @Column(name = "notif_description")
    private String notifDescription;

    @Size(max = 50)
    @Column(name = "notif_type", length = 50)
    private String notifType;

    @Column(name = "notif_status")
    private String notifStatus;

    @Column(name = "notif_date")
    private Instant notifDate;

    @Column(name = "notif_user")
    private String notifUser;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNotifName() {
        return notifName;
    }

    public Notification notifName(String notifName) {
        this.notifName = notifName;
        return this;
    }

    public void setNotifName(String notifName) {
        this.notifName = notifName;
    }

    public String getNotifDescription() {
        return notifDescription;
    }

    public Notification notifDescription(String notifDescription) {
        this.notifDescription = notifDescription;
        return this;
    }

    public void setNotifDescription(String notifDescription) {
        this.notifDescription = notifDescription;
    }

    public String getNotifType() {
        return notifType;
    }

    public Notification notifType(String notifType) {
        this.notifType = notifType;
        return this;
    }

    public void setNotifType(String notifType) {
        this.notifType = notifType;
    }

    public String getNotifStatus() {
        return notifStatus;
    }

    public Notification notifStatus(String notifStatus) {
        this.notifStatus = notifStatus;
        return this;
    }

    public void setNotifStatus(String notifStatus) {
        this.notifStatus = notifStatus;
    }

    public Instant getNotifDate() {
        return notifDate;
    }

    public Notification notifDate(Instant notifDate) {
        this.notifDate = notifDate;
        return this;
    }

    public void setNotifDate(Instant notifDate) {
        this.notifDate = notifDate;
    }

    public String getNotifUser() {
        return notifUser;
    }

    public void setNotifUser(String notifUser) {
        this.notifUser = notifUser;
    }

    public Notification notifUser(String notifUser) {
        this.notifUser = notifUser;
        return this;
    }
}
