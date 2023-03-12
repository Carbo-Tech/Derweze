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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registry`
--

LOCK TABLES `registry` WRITE;
/*!40000 ALTER TABLE `registry` DISABLE KEYS */;
INSERT INTO `registry` VALUES (1,'ROBERTA','NADINI','NADINI ROBERTA',NULL,NULL,'NDNRRT68L29H193E',0,'VIA ETNA',12,'16134','GENOVA','GE','IT'),(2,'CARLO','CARUFFI','CARUFFI CARLO',NULL,'3471234309','CRFCRL64R25D969X',0,'VIA ROMA',78,'16132','GENOVA','GE','IT'),(3,'GAETANO','CERVISIO','CERVISIO GAETANO',NULL,'3426907124','CRVGTN61L14F939Y',0,'VIA CATANIA',9,'45011','ADRIA','RO','IT'),(4,'ANDREA','CASSATURO','CASSATURO ANDREA',NULL,'3358468334','CSSNDR64E09F809K',0,'PIAZZA SIMONI',62,'80122','NAPOLI','NA','IT'),(5,'ALESSANDRA','BEGHINI','BEGHINI ALESSANDRA',NULL,NULL,'BGNLSN83D14C528F',0,'VIA RIMINI',28,'25033','COLOGNE','BS','IT'),(6,'GABRIELE','MOSETTI','MOSETTI GABRIELE',NULL,'3355234506','MSTGRL75B29Z123K',0,'VIA S. FRANCESCO',71,'25035','OSPITALETTO','BS','IT'),(7,NULL,NULL,'JOLLY FITNESS CLUB','5801231208','3404321089',NULL,0,'VIA MARCONI',72,'80128','NAPOLI','NA','IT'),(8,NULL,NULL,'BAR CARPE DIEM','6044751606','3335754225','SCNLCN86B03E839G',0,'VIA MOROSELLI',15,'80127','NAPOLI','NA','IT'),(9,NULL,NULL,'PANIFICIO PEROTTI','4019077958','3208362856','PRTRPZ71A44F125K',0,'VIA DIAZ',52,'75100','MATERA','MT','IT'),(10,NULL,NULL,'VILLA DOMENICI','7065650630','3481112514','DMZNCL80H28A225V',0,'VICOLO FRIULI',31,'70022','ALTAMURA','BA','IT'),(14,'ciao',NULL,'cs',NULL,NULL,NULL,0,'d',10,'12121','ca','df','ds');
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
  `salt` char(32) DEFAULT NULL,
  `password` char(64) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`id`) REFERENCES `registry` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'rnadini@google.com','40a1d2d638f84f85cf2e964ae3e8a050','0d7f6c55d6d6c2aebf124bc06794b80dc739981b9f264bd97a291613bbb784c1'),(2,'ccaruffi@icloud.com','b69b0c7bde8237d5e774b5dca6feb81a','ccc26bee76b4ed076d439dac7900cbed29964d1663038d58b6f364cb335c6246'),(3,'gaetano.cervisio@gmail.com','4fe2bd62881bf95f5c0b4e3a7afb938a','e5fee10d5326723ce296370135da5ff6273802bccffbccf2e6640e2affafdfdb'),(4,'cassaturoandrea@libero.it','71a596c68de0b734f60d71784b0003bf','31e0d2646cf656eb76225de8820580e9588ac0c3cb485d6d148576ba87959753'),(5,'beghini.alessandra@hotmail.it','8c566c81bf00c727be26f35484da6988','b52844dd1534bb54bd178ba0062660a3b93a6c49fe6be96670f8f605ecaa9eb0'),(6,'gab_mos@yahoo.com','dbfc30f76daccaee716e4c135e57ea75','66914b3f3ec14aa61bd6b48311df593eb24f2b8101635dc3f8b0888dd6df3b80'),(7,'jollyfitnessclub@iol.it','7b0c15df83ace4329ddf5fbaeaf15fdf','072e7d349b587bc0b9868447f9286ff16627545af203860841c386c96e75dd94'),(8,'carpediem@hotmail.it','8edd4834b3475c98267e9abadf500ca5','da313e58f5289d259e029d4418fe1773fb0af0c95dd50c10131ec8f34c20733e'),(9,'info@panificioperotti.com','982fa4249ba51b543d2565472410b62c','4dc74612b2aeda5aeded3486a141f9a96c0a7bb041c9663f5bd8075ecba6816f'),(10,'info@villadomenici.it','d454d83cee2d3fd89ebc8a0531c7b985','eff0f250e012b97bf2e1dfa747bd46079231f95af5e2adc4363c0c02b58b245e'),(14,'ciao','0c5f67c486b595ef62a5f8e93f6b723a','44b3f58eb1839f261f74617cfc335f77759764fd6cde1a2f470604eb78cad8a2');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `ai_uuidtable` AFTER INSERT ON `user` FOR EACH ROW SET @last_uuid = NEW.salt */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Dumping routines for database 'derweze'
--
/*!50003 DROP FUNCTION IF EXISTS `RegisterUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = latin1 */ ;
/*!50003 SET character_set_results = latin1 */ ;
/*!50003 SET collation_connection  = latin1_swedish_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` FUNCTION `RegisterUser`(email VARCHAR(255),password TEXT) RETURNS int
    MODIFIES SQL DATA
BEGIN
    DECLARE uuidM CHAR(32);
    DECLARE hashedp CHAR(64);
    SET uuidM=md5(uuid());
    SET hashedP=SHA2(CONCAT(email,CONCAT(uuidM,password)),256);
    INSERT INTO user (id,email,salt,password) VALUES (LAST_INSERT_ID(),email,uuidM,hashedp);
    RETURN LAST_INSERT_ID();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-12 16:57:07
