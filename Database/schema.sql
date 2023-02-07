-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: derweze
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contract`
--

DROP TABLE IF EXISTS `contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contract` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idSede` int NOT NULL,
  `service_request_date` datetime(3) NOT NULL,
  `validity_start_date` datetime(3) NOT NULL,
  `validity_end_date` datetime(3) NOT NULL,
  `offert_description` varchar(255) NOT NULL,
  `utility` varchar(255) NOT NULL,
  `contract_status` varchar(255) NOT NULL,
  `payment_type` varchar(255) NOT NULL,
  `taxable_power` double DEFAULT NULL,
  `available_power` double DEFAULT NULL,
  `annual_energy` int DEFAULT NULL,
  `annual_gas` int DEFAULT NULL,
  `use_cooking_foods` tinyint(1) DEFAULT NULL,
  `production_hot_sanitary_water` tinyint(1) DEFAULT NULL,
  `individual_heating` tinyint(1) DEFAULT NULL,
  `commercial_use` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_contract_idSede` (`idSede`),
  CONSTRAINT `fk_contract_idSede` FOREIGN KEY (`idSede`) REFERENCES `domicile` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contract`
--

LOCK TABLES `contract` WRITE;
/*!40000 ALTER TABLE `contract` DISABLE KEYS */;
/*!40000 ALTER TABLE `contract` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `domicile`
--

DROP TABLE IF EXISTS `domicile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `domicile` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Descrizione` varchar(255) NOT NULL,
  `Indirizzo` varchar(255) NOT NULL,
  `Civico` int NOT NULL,
  `CAP` char(5) NOT NULL,
  `Localita` varchar(255) NOT NULL,
  `Provincia` char(2) NOT NULL,
  `Nazione` char(2) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `domicile`
--

LOCK TABLES `domicile` WRITE;
/*!40000 ALTER TABLE `domicile` DISABLE KEYS */;
INSERT INTO `domicile` VALUES (1,'NADINI ROBERTA','VIA ETNA',12,'16134','GENOVA','GE','IT'),(2,'CARUFFI CARLO','VIA ROMA',78,'16132','GENOVA','GE','IT'),(3,'CERVISIO GAETANO','VIA CATANIA',9,'45011','ADRIA','RO','IT'),(4,'CASSATURO ANDREA','PIAZZA SIMONI',62,'80122','NAPOLI','NA','IT'),(5,'BEGHINI ALESSANDRA','VIA RIMINI',28,'25033','COLOGNE','BS','IT'),(6,'BEGHINI ALESSANDRA','VIA RIMINI',30,'25033','COLOGNE','BS','IT'),(7,'MOSETTI GABRIELE','VIA S. FRANCESCO',71,'25035','OSPITALETTO','BS','IT'),(8,'JOLLY FITNESS CLUB','VIA MARCONI',72,'80128','NAPOLI','NA','IT'),(9,'BAR CARPE DIEM','VIA MOROSELLI',15,'80127','NAPOLI','NA','IT'),(10,'SICENI LUCIANO','VIA NITTI',15,'80127','NAPOLI','NA','IT'),(11,'PANIFICIO PEROTTI','VIA DIAZ',52,'75100','MATERA','MT','IT'),(12,'PANIFICIO PEROTTI','VIA S. CATERINA',16,'75100','MATERA','MT','IT'),(13,'VILLA DOMENICI','VICOLO FRIULI',31,'70022','ALTAMURA','BA','IT'),(14,'RISTORANTE VILLA DOMENICI','VICOLO FRIULI',33,'70022','ALTAMURA','BA','IT');
/*!40000 ALTER TABLE `domicile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `idRegistry` int NOT NULL,
  `idContract` int NOT NULL,
  `type` char(1) NOT NULL,
  KEY `fk_permissions_idRegistry` (`idRegistry`),
  KEY `fk_permissions_idContract` (`idContract`),
  CONSTRAINT `fk_permissions_idContract` FOREIGN KEY (`idContract`) REFERENCES `contract` (`id`),
  CONSTRAINT `fk_permissions_idRegistry` FOREIGN KEY (`idRegistry`) REFERENCES `registry` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registry`
--

DROP TABLE IF EXISTS `registry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registry` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `business_name` varchar(255) NOT NULL,
  `vat_number` char(10) DEFAULT NULL,
  `telephone_number` varchar(20) DEFAULT NULL,
  `social_security_number` char(16) DEFAULT NULL,
  `is_admin` tinyint(1) DEFAULT '0',
  `Indirizzo` varchar(255) NOT NULL,
  `Civico` int NOT NULL,
  `CAP` char(5) NOT NULL,
  `Localita` varchar(255) NOT NULL,
  `Provincia` char(2) NOT NULL,
  `Nazione` char(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registry`
--

LOCK TABLES `registry` WRITE;
/*!40000 ALTER TABLE `registry` DISABLE KEYS */;
INSERT INTO `registry` VALUES (1,'ROBERTA','NADINI','NADINI ROBERTA',NULL,NULL,'NDNRRT68L29H193E',0,'VIA ETNA',12,'16134','GENOVA','GE','IT'),(2,'CARLO','CARUFFI','CARUFFI CARLO',NULL,'3471234309','CRFCRL64R25D969X',0,'VIA ROMA',78,'16132','GENOVA','GE','IT'),(3,'GAETANO','CERVISIO','CERVISIO GAETANO',NULL,'3426907124','CRVGTN61L14F939Y',0,'VIA CATANIA',9,'45011','ADRIA','RO','IT'),(4,'ANDREA','CASSATURO','CASSATURO ANDREA',NULL,'3358468334','CSSNDR64E09F809K',0,'PIAZZA SIMONI',62,'80122','NAPOLI','NA','IT'),(5,'ALESSANDRA','BEGHINI','BEGHINI ALESSANDRA',NULL,NULL,'BGNLSN83D14C528F',0,'VIA RIMINI',28,'25033','COLOGNE','BS','IT'),(6,'GABRIELE','MOSETTI','MOSETTI GABRIELE',NULL,'3355234506','MSTGRL75B29Z123K',0,'VIA S. FRANCESCO',71,'25035','OSPITALETTO','BS','IT'),(7,NULL,NULL,'JOLLY FITNESS CLUB','5801231208','3404321089',NULL,0,'VIA MARCONI',72,'80128','NAPOLI','NA','IT'),(8,NULL,NULL,'BAR CARPE DIEM','6044751606','3335754225','SCNLCN86B03E839G',0,'VIA MOROSELLI',15,'80127','NAPOLI','NA','IT'),(9,NULL,NULL,'PANIFICIO PEROTTI','4019077958','3208362856','PRTRPZ71A44F125K',0,'VIA DIAZ',52,'75100','MATERA','MT','IT'),(10,NULL,NULL,'VILLA DOMENICI','7065650630','3481112514','DMZNCL80H28A225V',0,'VICOLO FRIULI',31,'70022','ALTAMURA','BA','IT');
/*!40000 ALTER TABLE `registry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`id`) REFERENCES `registry` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'rnadini@google.com','-6775682311015860226'),(2,'ccaruffi@icloud.com','-6775682311015860226'),(3,'gaetano.cervisio@gmail.com','-6775682311015860226'),(4,'cassaturoandrea@libero.it','-6775682311015860226'),(5,'beghini.alessandra@hotmail.it','-6775682311015860226'),(6,'gab_mos@yahoo.com','-6775682311015860226'),(7,'jollyfitnessclub@iol.it','-6775682311015860226'),(8,'carpediem@hotmail.it','-6775682311015860226'),(9,'info@panificioperotti.com','-6775682311015860226'),(10,'info@villadomenici.it','-6775682311015860226');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-07 20:39:50
