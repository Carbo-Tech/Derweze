-- Exported from QuickDBD: https: //www.quickdatabasediagrams.com/
-- Link to schema        : https: //app.quickdatabasediagrams.com/#/d/md79Su
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.
CREATE TABLE `user` (
    `id`        INT AUTO_INCREMENT  NOT NULL,
    `email`     VARCHAR(255)        NOT NULL,
    `password`  VARCHAR(255)        NOT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `registry` (
    `id`                        INT AUTO_INCREMENT,
    `name`                      VARCHAR(255)            DEFAULT NULL,
    `surname`                   VARCHAR(255)            DEFAULT NULL,
    `business_name`             VARCHAR(255)            NOT NULL,
    `vat_number`                CHAR(10)                DEFAULT NULL,
    `telephone_number`          VARCHAR(20)             DEFAULT NULL,
    `social_security_number`    CHAR(16)                DEFAULT NULL,
    `is_admin`                  BOOLEAN                 DEFAULT FALSE,
    `Indirizzo`                 VARCHAR(255)            NOT NULL,
    `Civico`                    INT                     NOT NULL,
    `CAP`                       CHAR(5)                 NOT NULL,
    `Localita`                  VARCHAR(255)            NOT NULL,
    `Provincia`                 CHAR(2)                 NOT NULL,
    `Nazione`                   CHAR(2)                 NOT NULL,
    PRIMARY KEY (`id`)
);
CREATE TABLE `permissions` (
    `idRegistry`    INT         NOT NULL,
    `idContract`    INT         NOT NULL,
    -- view/modify(e/v)
    `type`          char(1)     NOT NULL
);
CREATE TABLE `domicile` (
    `ID`            INT AUTO_INCREMENT  NOT NULL,
    `Descrizione`   VARCHAR(255)        NOT NULL,
    `Indirizzo`     VARCHAR(255)        NOT NULL,
    `Civico`        INT                 NOT NULL,
    `CAP`           CHAR(5)             NOT NULL,
    `Localita`      VARCHAR(255)        NOT NULL,
    `Provincia`     CHAR(2)             NOT NULL,
    `Nazione`       CHAR(2)             NOT NULL,
    PRIMARY KEY (`ID`)
);
CREATE TABLE `contract` (
    `id`                                INT AUTO_INCREMENT      NOT NULL,
    `idSede`                            INT                     NOT NULL,
    `service_request_date`              DATETIME(3)             NOT NULL,
    `validity_start_date`               DATETIME(3)             NOT NULL,
    `validity_end_date`                 DATETIME(3)             NOT NULL,
    `offert_description`                VARCHAR(255)            NOT NULL,
    `utility`                           VARCHAR(255)            NOT NULL,
    `contract_status`                   VARCHAR(255)            NOT NULL,
    `payment_type`                      VARCHAR(255)            NOT NULL,
    `taxable_power`                     DOUBLE                  DEFAULT NULL,
    `available_power`                   DOUBLE                  DEFAULT NULL,
    `annual_energy`                     INT                     DEFAULT NULL,
    `annual_gas`                        INT                     DEFAULT NULL,
    `use_cooking_foods`                 BOOLEAN                 DEFAULT NULL,
    `production_hot_sanitary_water`     BOOLEAN                 DEFAULT NULL,
    `individual_heating`                BOOLEAN                 DEFAULT NULL,
    `commercial_use`                    BOOLEAN                 DEFAULT NULL,
    PRIMARY KEY (`id`)
);
ALTER  TABLE       `user`
ADD    CONSTRAINT  `fk_user_id`                 FOREIGN  KEY(`id`)          REFERENCES  `registry`  (`id`);
ALTER  TABLE       `permissions`
ADD    CONSTRAINT  `fk_permissions_idRegistry`  FOREIGN  KEY(`idRegistry`)  REFERENCES  `registry`  (`id`);
ALTER  TABLE       `permissions`
ADD    CONSTRAINT  `fk_permissions_idContract`  FOREIGN  KEY(`idContract`)  REFERENCES  `contract`  (`id`);
ALTER  TABLE       `contract`
ADD    CONSTRAINT  `fk_contract_idSede`         FOREIGN  KEY(`idSede`)      REFERENCES  `domicile`  (`ID`);