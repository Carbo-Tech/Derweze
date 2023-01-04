-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: derweze
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `cibo`
--

DROP TABLE IF EXISTS `cibo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cibo` (
  `nome` varchar(30) NOT NULL,
  `prezzo` float NOT NULL,
  `qty` int NOT NULL,
  `img` varchar(40) NOT NULL,
  `caldoFreddo` varchar(6) NOT NULL,
  `categoria` varchar(11) NOT NULL,
  `dolceSalato` varchar(6) NOT NULL,
  `disponibilita` int NOT NULL,
  `professori` int NOT NULL,
  `qtyBK` int DEFAULT '0',
  PRIMARY KEY (`nome`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cibo`
--

LOCK TABLES `cibo` WRITE;
/*!40000 ALTER TABLE `cibo` DISABLE KEYS */;
INSERT INTO `cibo` VALUES ('Acqua Gassata',0.4,100,'ag.png','1','0','1',1,0,100),('Acqua Naturale',0.4,97,'an.png','1','0','1',1,0,100),('Arancino di riso',1.5,15,'default.png','0','0','1',0,0,15),('Arancino riso',1.5,0,'default.png','0','0','1',0,0,0),('Calzone funghi cotto',2,7,'calzone.png','0','0','1',1,0,10),('Crocchetta di patate',2.5,10,'default.png','0','0','1',1,0,8),('Crocchetta di riso',2.5,15,'default.png','0','0','1',0,0,15),('Fagottino salsiccia',2.5,10,'default.png','0','0','1',0,0,10),('Focaccia prosciutto ',2,8,'default.png','1','0','1',0,0,8),('Goleador cola',0.1,190,'goleador.png','1','0','0',1,0,200),('Goleador dribbling',0.1,146,'default.png','1','0','0',1,0,150),('Goleador frutta',0.1,191,'goleador.png','1','0','0',1,0,200),('Goleador liquirizia',0.1,47,'goleador.png','1','0','0',1,0,47),('HotDog',2.8,2,'hotdog.png','0','0','1',1,0,0),('Lupo Alberto',0.1,492,'Lupo_alberto.png','1','0','0',1,0,500),('NUTELLAPANZEROTTO',2,1,'default.png','0','0','0',1,0,20),('Panino Asiago',1.4,9,'default.png','1','0','1',1,0,10),('Panino caprese',1.4,100,'default.png','1','0','1',1,0,100),('Panino Cotoletta',2.8,0,'cotoletta.png','0','0','1',0,0,0),('Panino diablo',1.6,17,'diablo.png','1','0','1',1,0,20),('Panino ins.russa',1.4,20,'default.png','1','0','1',0,0,20),('Panino KEBAB',2.8,6,'default.png','0','0','1',0,0,6),('Panino mortadella',1.4,97,'default.png','1','0','1',1,0,100),('Panino Porchetta',1.4,98,'default.png','1','0','1',1,0,100),('Panino prosc.cotto',1.4,99,'default.png','1','0','1',1,0,100),('Panino RADICCHIO',2,20,'default.png','1','0','1',0,0,20),('Panino salame',1.4,97,'default.png','1','0','1',1,0,100),('Panino SPECK ASIAGO',1.6,7,'default.png','1','0','1',1,0,10),('Panino STRACCHINO',2.5,8,'default.png','1','0','1',1,0,10),('Panino Tonnato',1.6,19,'default.png','1','0','1',1,0,20),('Panzerotto',2,90,'panzerotto.png','0','0','1',1,0,200),('Patate classiche50gr',1,20,'default.png','1','0','1',0,0,20),('Saccottino manzo',2.8,6,'default.png','0','0','1',0,0,6),('Sandwich gluten free',1.6,4,'default.png','1','0','1',0,0,4),('Scricchi morato 35gr',0.5,6,'default.png','1','0','1',1,0,6),('Tirolese',1.4,15,'default.png','1','0','1',0,0,15),('Toast Grande',1.5,8,'default.png','0','0','1',1,0,8),('Trancio margherita',2,97,'pizza_al_trancio.png','0','0','1',1,0,100),('Trancio panc/patate',2,97,'pizza_al_trancio.png','0','0','1',1,0,100),('Trancio salamino',2,98,'pizza_al_trancio.png','0','0','1',1,0,100),('Trancio wurstel font',2,98,'default.png','0','0','1',1,0,100),('Trancio zucchine spe',2,12,'default.png','1','0','1',0,0,12),('Trancio zucchine str',2,8,'default.png','0','0','1',0,0,8),('Treccia alla cipolla',1.6,6,'default.png','1','0','1',0,0,6),('Wurstel e Patate',2.5,6,'default.png','0','0','1',0,0,6),('zAxeliooo',100,-1,'axelito.png','0','1','1',1,0,-1),('zcastaCasta',100,-1,'castaCasta.png','0','0','1',1,0,-1),('zedd',100,-1,'edd.png','0','0','0',1,0,-1),('znicc',100,-1,'zermano.png','0','0','0',1,0,-1),('ztom',100,-1,'ilVilo.png','1','1','0',1,0,-1);
/*!40000 ALTER TABLE `cibo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cibo_ingredienti`
--

DROP TABLE IF EXISTS `cibo_ingredienti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cibo_ingredienti` (
  `ingrediente` varchar(20) NOT NULL,
  `cibo` varchar(30) NOT NULL,
  PRIMARY KEY (`ingrediente`,`cibo`),
  KEY `cibo_ingredienti_ibfk_2` (`cibo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cibo_ingredienti`
--

LOCK TABLES `cibo_ingredienti` WRITE;
/*!40000 ALTER TABLE `cibo_ingredienti` DISABLE KEYS */;
INSERT INTO `cibo_ingredienti` VALUES ('Acqua','Acqua Gassata'),('Acqua','Acqua Naturale'),('Funghi','Arancino di riso'),('Mozzarella','Arancino di riso'),('Scamorza','Arancino di riso'),('Speck','Arancino di riso'),('Mozzarella','Arancino riso'),('Prosciutto Cotto','Arancino riso'),('Funghi','Calzone funghi cotto'),('Mozzarella','Calzone funghi cotto'),('Pomodoro','Calzone funghi cotto'),('Prosciutto Cotto','Calzone funghi cotto'),('Pancetta','Crocchetta di patate'),('patate','Crocchetta di patate'),('Scamorza','Crocchetta di patate'),('Piselli','Crocchetta di riso'),('Prosciutto Cotto','Crocchetta di riso'),('Scamorza','Crocchetta di riso'),('Fontina','Fagottino salsiccia'),('Salsiccia','Fagottino salsiccia'),('Emmental','Focaccia prosciutto '),('Prosciutto Cotto','Focaccia prosciutto '),('Coca Cola','Goleador cola'),('Frutta','Goleador dribbling'),('Frutta','Goleador frutta'),('Liquirizia','Goleador liquirizia'),('Wurstel','HotDog'),('Frutta','Lupo Alberto'),('Nutella','NUTELLAPANZEROTTO'),('Zucchero semolato','NUTELLAPANZEROTTO'),('Formaggio Asiago','Panino Asiago'),('Mozzarella','Panino caprese'),('Pomodoro','Panino caprese'),('Cotoletta','Panino Cotoletta'),('Insalata','Panino Cotoletta'),('Maionese','Panino Cotoletta'),('Formaggio','Panino diablo'),('Maionese','Panino diablo'),('Salame','Panino diablo'),('Salsa Piccante','Panino diablo'),('Insalata russa','Panino ins.russa'),('Prosciutto Cotto','Panino ins.russa'),('Cipolla','Panino KEBAB'),('Insalata','Panino KEBAB'),('Maionese','Panino KEBAB'),('Pane','Panino KEBAB'),('Pollo','Panino KEBAB'),('Pomodoro','Panino KEBAB'),('Mortadella','Panino mortadella'),('Porchetta','Panino Porchetta'),('Salsa Funghi','Panino Porchetta'),('Prosciutto Cotto','Panino prosc.cotto'),('Pancetta','Panino RADICCHIO'),('Salsa Radicchio','Panino RADICCHIO'),('Scamorza','Panino RADICCHIO'),('Salame','Panino salame'),('Formaggio Asiago','Panino SPECK ASIAGO'),('Speck','Panino SPECK ASIAGO'),('Prosciutto Crudo','Panino STRACCHINO'),('Rucola','Panino STRACCHINO'),('Stracchino','Panino STRACCHINO'),('Capperi','Panino Tonnato'),('Insalata','Panino Tonnato'),('Salsa Tonnata','Panino Tonnato'),('Mozzarella','Panzerotto'),('Pomodoro','Panzerotto'),('Senza glutine','Patate classiche50gr'),('Cipolla','Saccottino manzo'),('Fontina','Saccottino manzo'),('Polpetta manzo','Saccottino manzo'),('Insalata','Sandwich gluten free'),('Pane senza glutine','Sandwich gluten free'),('Pomodoro','Sandwich gluten free'),('snack  al mais','Scricchi morato 35gr'),('Cetriolo','Tirolese'),('Pane integrale','Tirolese'),('Speck','Tirolese'),('Fontina','Toast Grande'),('Prosciutto Cotto','Toast Grande'),('Mozzarella','Trancio margherita'),('Pomodoro','Trancio margherita'),('Mozzarella','Trancio panc/patate'),('Pancetta','Trancio panc/patate'),('patate','Trancio panc/patate'),('Pomodoro','Trancio panc/patate'),('Mozzarella','Trancio salamino'),('Pomodoro','Trancio salamino'),('Salamino','Trancio salamino'),('Fontina','Trancio wurstel font'),('Mozzarella','Trancio wurstel font'),('Pomodoro','Trancio wurstel font'),('Wurstel','Trancio wurstel font'),('Mozzarella','Trancio zucchine spe'),('Speck','Trancio zucchine spe'),('Zucchine','Trancio zucchine spe'),('Mozzarella','Trancio zucchine str'),('Pomodoro','Trancio zucchine str'),('Stracchino','Trancio zucchine str'),('Zucchine','Trancio zucchine str'),('Cipolla','Treccia alla cipolla'),('Mozzarella','Treccia alla cipolla'),('Pancetta','Treccia alla cipolla'),('Pane','Treccia alla cipolla'),('Pane','Wurstel e Patate'),('patate','Wurstel e Patate'),('Wurstel','Wurstel e Patate'),('GRAFICO','zAxeliooo'),('TECNICO','zcastaCasta'),('PROGRAMMATORE','zedd'),('PROGRAMMATORE','znicc'),('PROGRAMMATORE','ztom');
/*!40000 ALTER TABLE `cibo_ingredienti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredienti`
--

DROP TABLE IF EXISTS `ingredienti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredienti` (
  `ingrediente` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredienti`
--

LOCK TABLES `ingredienti` WRITE;
/*!40000 ALTER TABLE `ingredienti` DISABLE KEYS */;
INSERT INTO `ingredienti` VALUES ('Acqua'),('C'),('caffe'),('Capperi'),('Carne'),('Cetriolo'),('Cioccolato'),('Cipolla'),('Coca Cola'),('Cotoletta'),('Crema'),('Emmental'),('Fontina'),('Formaggio'),('Formaggio Asiago'),('Frutta'),('Funghi'),('GRAFICO'),('Insalata'),('Insalata russa'),('Ketchup'),('Liquirizia'),('Maionese'),('Mais'),('Mayonese'),('Mortadella'),('Mozzarella'),('Nutella'),('Pancetta'),('Pane'),('Pane integrale'),('Pane senza glutine'),('Paprica'),('patate'),('Peperoni'),('Pesto'),('Piselli'),('Pollo'),('Polpetta manzo'),('Pomodorini'),('Pomodoro'),('Porchetta'),('PROGRAMMATORE'),('Prosciutto Cotto'),('Prosciutto Crudo'),('Radicchio'),('Ragu'),('rosmarino'),('Rucola'),('Salame'),('Salame Milano'),('Salamino'),('Salsa Fattoria'),('Salsa Funghi'),('Salsa Piccante'),('Salsa pomodoro'),('Salsa Radicchio'),('Salsa Tonnata'),('Salsiccia'),('Scamorza'),('Senza glutine'),('snack  al mais'),('Speck'),('Stracchino'),('sugar'),('Tacchino'),('Tastasal'),('TECNICO'),('Tonno'),('Vuoto'),('Wurstel'),('Zafferano'),('Zucchero semolato'),('Zucchina'),('Zucchine');
/*!40000 ALTER TABLE `ingredienti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordinazioni`
--

DROP TABLE IF EXISTS `ordinazioni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordinazioni` (
  `codice` int NOT NULL AUTO_INCREMENT,
  `codice_ordine` int DEFAULT NULL,
  `cibo` varchar(30) NOT NULL,
  `qty` int NOT NULL,
  PRIMARY KEY (`codice`),
  KEY `codice_ordine` (`codice_ordine`),
  KEY `cibo` (`cibo`),
  CONSTRAINT `ordinazioni_ibfk_1` FOREIGN KEY (`codice_ordine`) REFERENCES `ordini` (`codice`),
  CONSTRAINT `ordinazioni_ibfk_2` FOREIGN KEY (`cibo`) REFERENCES `cibo` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=256 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordinazioni`
--

LOCK TABLES `ordinazioni` WRITE;
/*!40000 ALTER TABLE `ordinazioni` DISABLE KEYS */;
INSERT INTO `ordinazioni` VALUES (1,1,'Acqua Gassata',2),(2,2,'Acqua Gassata',1),(3,3,'Acqua Naturale',4),(4,4,'Calzone funghi cotto',1),(5,5,'Calzone funghi cotto',2),(6,6,'Calzone funghi cotto',2),(7,7,'Goleador cola',2),(8,6,'Goleador cola',2),(9,8,'Lupo Alberto',6),(10,9,'Panino Asiago',1),(11,9,'Panino mortadella',1),(12,9,'Panino Porchetta',1),(13,1,'Panzerotto',1),(14,10,'Calzone funghi cotto',1),(15,11,'Calzone funghi cotto',1),(16,12,'Calzone funghi cotto',2),(17,13,'Goleador cola',2),(18,14,'Goleador cola',11),(19,12,'Goleador cola',10),(20,15,'Goleador cola',10),(21,15,'Goleador dribbling',5),(22,13,'Goleador frutta',2),(23,16,'Goleador frutta',1),(24,17,'Goleador frutta',5),(25,12,'HotDog',1),(26,16,'Lupo Alberto',1),(27,18,'Lupo Alberto',1),(28,19,'Lupo Alberto',1),(29,20,'Lupo Alberto',2),(30,21,'Lupo Alberto',1),(31,22,'Lupo Alberto',1),(32,15,'Lupo Alberto',10),(33,23,'NUTELLAPANZEROTTO',1),(34,24,'Panino Asiago',1),(35,25,'Panino caprese',1),(36,10,'Panino diablo',1),(37,26,'Panino diablo',4),(38,27,'Panino diablo',3),(39,22,'Panino diablo',1),(40,14,'Panino diablo',1),(41,15,'Panino diablo',1),(42,28,'Panino mortadella',1),(43,29,'Panino mortadella',1),(44,30,'Panino Porchetta',1),(45,31,'Panino prosc.cotto',1),(46,30,'Panino prosc.cotto',1),(47,32,'Panino prosc.cotto',1),(48,33,'Panino prosc.cotto',1),(49,34,'Panino prosc.cotto',1),(50,35,'Panino prosc.cotto',1),(51,36,'Panino prosc.cotto',3),(52,37,'Panino prosc.cotto',2),(53,38,'Panino prosc.cotto',1),(54,39,'Panino prosc.cotto',3),(55,40,'Panino prosc.cotto',3),(56,41,'Panino prosc.cotto',1),(57,14,'Panino prosc.cotto',2),(58,15,'Panino prosc.cotto',2),(59,42,'Panino salame',3),(60,43,'Panino salame',4),(61,44,'Panino salame',4),(62,45,'Panino salame',4),(63,46,'Panino salame',3),(64,47,'Panino salame',2),(65,48,'Panino salame',2),(66,49,'Panino salame',2),(67,50,'Panino salame',2),(68,51,'Panino salame',2),(69,52,'Panino salame',2),(70,53,'Panino salame',2),(71,14,'Panino salame',1),(72,54,'Panino SPECK ASIAGO',2),(73,14,'Panino SPECK ASIAGO',1),(74,55,'Panino Tonnato',1),(75,56,'Panino Tonnato',1),(76,57,'Panino Tonnato',4),(77,21,'Panino Tonnato',3),(78,58,'Panino Tonnato',4),(79,59,'Panino Tonnato',1),(80,60,'Panino Tonnato',4),(81,34,'Panino Tonnato',5),(82,36,'Panino Tonnato',5),(83,39,'Panino Tonnato',5),(84,22,'Panino Tonnato',5),(85,61,'Panino Tonnato',2),(86,40,'Panino Tonnato',5),(87,62,'Panino Tonnato',2),(88,63,'Panino Tonnato',5),(89,53,'Panino Tonnato',4),(90,64,'Panino Tonnato',1),(91,15,'Panino Tonnato',1),(92,65,'Panzerotto',12),(93,66,'Panzerotto',11),(94,67,'Panzerotto',10),(95,68,'Panzerotto',15),(96,69,'Panzerotto',10),(97,70,'Panzerotto',12),(98,71,'Panzerotto',11),(99,72,'Panzerotto',10),(100,73,'Panzerotto',10),(101,74,'Panzerotto',14),(102,75,'Panzerotto',15),(103,76,'Panzerotto',10),(104,77,'Panzerotto',15),(105,78,'Panzerotto',10),(106,79,'Panzerotto',13),(107,80,'Panzerotto',12),(108,81,'Panzerotto',16),(109,82,'Panzerotto',10),(110,83,'Panzerotto',13),(111,84,'Panzerotto',14),(112,85,'Panzerotto',11),(113,86,'Panzerotto',10),(114,87,'Panzerotto',14),(115,88,'Panzerotto',10),(116,89,'Panzerotto',16),(117,90,'Panzerotto',10),(118,91,'Panzerotto',18),(119,92,'Panzerotto',10),(120,93,'Panzerotto',11),(121,94,'Panzerotto',8),(122,95,'Panzerotto',7),(123,96,'Panzerotto',11),(124,97,'Panzerotto',8),(125,98,'Panzerotto',7),(126,99,'Panzerotto',7),(127,100,'Panzerotto',11),(128,101,'Panzerotto',7),(129,102,'Panzerotto',12),(130,103,'Panzerotto',8),(131,104,'Panzerotto',4),(132,105,'Panzerotto',4),(133,106,'Panzerotto',11),(134,107,'Panzerotto',3),(135,63,'Panzerotto',6),(136,52,'Panzerotto',2),(137,53,'Panzerotto',4),(138,64,'Panzerotto',2),(139,14,'Panzerotto',2),(140,12,'Panzerotto',6),(141,15,'Panzerotto',6),(142,108,'Toast Grande',1),(143,11,'Toast Grande',1),(144,57,'Toast Grande',1),(145,109,'Trancio margherita',3),(146,110,'Trancio margherita',3),(147,111,'Trancio margherita',3),(148,112,'Trancio margherita',3),(149,113,'Trancio margherita',1),(150,19,'Trancio margherita',1),(151,56,'Trancio margherita',1),(152,21,'Trancio margherita',1),(153,58,'Trancio margherita',1),(154,34,'Trancio margherita',2),(155,36,'Trancio margherita',1),(156,114,'Trancio margherita',2),(157,22,'Trancio margherita',1),(158,115,'Trancio margherita',1),(159,15,'Trancio margherita',1),(160,56,'Trancio panc/patate',2),(161,31,'Trancio panc/patate',2),(162,30,'Trancio panc/patate',2),(163,116,'Trancio panc/patate',1),(164,21,'Trancio panc/patate',1),(165,58,'Trancio panc/patate',1),(166,60,'Trancio panc/patate',2),(167,39,'Trancio panc/patate',1),(168,22,'Trancio panc/patate',1),(169,63,'Trancio panc/patate',1),(170,117,'Trancio salamino',1),(171,18,'Trancio salamino',1),(172,118,'Trancio salamino',3),(173,113,'Trancio salamino',1),(174,19,'Trancio salamino',1),(175,25,'Trancio salamino',2),(176,57,'Trancio salamino',1),(177,21,'Trancio salamino',2),(178,34,'Trancio salamino',1),(179,36,'Trancio salamino',1),(180,119,'Acqua Gassata',1),(181,120,'Acqua Gassata',1),(182,121,'Acqua Gassata',1),(183,122,'Acqua Gassata',1),(184,123,'Acqua Gassata',1),(185,124,'Acqua Gassata',1),(186,125,'Acqua Gassata',1),(187,126,'Acqua Gassata',1),(188,127,'Acqua Gassata',1),(189,128,'Acqua Gassata',1),(190,129,'Acqua Gassata',1),(191,130,'Acqua Gassata',1),(192,131,'Acqua Gassata',1),(193,132,'Acqua Gassata',3),(194,133,'Acqua Naturale',5),(195,134,'Acqua Naturale',4),(196,135,'Acqua Naturale',4),(197,136,'Acqua Naturale',4),(198,137,'Acqua Naturale',4),(199,138,'Acqua Naturale',4),(200,139,'Acqua Naturale',4),(201,140,'Acqua Naturale',4),(202,141,'Acqua Naturale',4),(203,142,'Acqua Naturale',4),(204,143,'Acqua Naturale',4),(205,144,'Acqua Naturale',2),(206,145,'Acqua Naturale',1),(207,146,'Acqua Naturale',1),(208,147,'Acqua Naturale',1),(209,148,'Acqua Naturale',1),(210,149,'Arancino riso',2),(211,150,'Arancino riso',1),(212,151,'Calzone funghi cotto',1),(213,152,'Calzone funghi cotto',1),(214,153,'Calzone funghi cotto',1),(215,154,'Calzone funghi cotto',2),(216,155,'Goleador cola',5),(217,156,'Goleador cola',7),(218,157,'Goleador cola',4),(219,158,'Goleador cola',6),(220,159,'Goleador cola',4),(221,160,'Goleador cola',7),(222,161,'Goleador cola',2),(223,162,'Goleador cola',6),(224,163,'Goleador cola',7),(225,164,'Goleador cola',6),(226,165,'Goleador cola',4),(227,166,'Goleador cola',3),(228,167,'Goleador cola',3),(229,168,'Goleador cola',6),(230,169,'Goleador cola',2),(231,170,'Goleador frutta',1),(232,171,'Goleador frutta',3),(233,172,'Panzerotto',4),(234,173,'Panzerotto',4),(235,174,'Panzerotto',2),(236,175,'Panzerotto',4),(237,176,'Panzerotto',1),(238,177,'Panzerotto',1),(239,178,'Panzerotto',6),(240,179,'Panzerotto',1),(241,180,'Panzerotto',7);
/*!40000 ALTER TABLE `ordinazioni` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordini`
--

DROP TABLE IF EXISTS `ordini`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordini` (
  `codice` int NOT NULL AUTO_INCREMENT,
  `utente` int NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ip` varchar(16) NOT NULL,
  `evaso` int DEFAULT '0',
  PRIMARY KEY (`codice`),
  UNIQUE KEY `NONCLUSTERED` (`utente`,`data`,`ip`),
  CONSTRAINT `ordini_ibfk_1` FOREIGN KEY (`utente`) REFERENCES `utenti` (`codice`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=256 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordini`
--

LOCK TABLES `ordini` WRITE;
/*!40000 ALTER TABLE `ordini` DISABLE KEYS */;
INSERT INTO `ordini` VALUES (1,702,'2022-10-19 11:43:08','172.16.1.7',1),(2,702,'2022-10-26 07:31:01','172.16.14.228',1),(3,702,'2022-10-26 07:25:20','172.16.13.228',1),(4,702,'2022-10-26 07:28:18','172.16.14.228',1),(5,702,'2022-10-27 06:20:38','172.16.13.228',1),(6,702,'2022-10-27 20:28:24','172.16.1.7',1),(7,702,'2022-10-27 06:21:08','172.16.13.228',1),(8,702,'2022-10-27 20:29:28','172.16.1.7',1),(9,702,'2022-11-12 15:30:33','172.16.13.228',1),(10,705,'2021-11-11 07:11:33','151.18.131.196',1),(11,705,'2021-12-03 07:15:42','151.36.91.97',1),(12,705,'2022-11-04 06:02:46','172.16.1.7',1),(13,705,'2021-11-12 07:28:12','151.34.67.174',1),(14,705,'2022-10-28 06:56:00','172.16.1.7',1),(15,705,'2022-11-11 09:02:56','172.16.1.7',1),(16,705,'2021-11-15 07:35:15','151.34.121.120',1),(17,705,'2022-04-01 05:44:01','151.36.117.0',1),(18,705,'2021-11-19 07:21:18','151.46.37.155',1),(19,705,'2021-12-17 07:22:39','151.34.101.153',1),(20,705,'2022-03-08 07:28:37','151.36.102.251',1),(21,705,'2022-03-18 07:40:00','151.34.116.130',1),(22,705,'2022-05-13 05:36:08','151.34.165.138',1),(23,705,'2021-11-15 07:35:16','151.34.121.120',1),(24,705,'2021-12-21 07:13:32','151.82.162.131',1),(25,705,'2022-02-11 07:40:06','151.18.127.169',1),(26,705,'2021-11-12 07:28:13','151.34.67.174',1),(27,705,'2021-11-26 07:43:38','151.18.209.216',1),(28,705,'2022-04-13 05:36:37','151.44.71.130',1),(29,705,'2022-05-18 05:20:36','151.36.237.160',1),(30,705,'2022-03-04 07:34:59','151.68.197.96',1),(31,705,'2022-02-25 07:42:22','151.82.46.191',1),(32,705,'2022-04-05 05:39:13','151.68.116.226',1),(33,705,'2022-04-06 05:35:07','151.18.96.238',1),(34,705,'2022-04-08 05:38:42','151.34.25.89',1),(35,705,'2022-04-11 05:38:03','151.38.140.38',1),(36,705,'2022-04-29 05:38:51','151.34.9.43',1),(37,705,'2022-05-02 05:15:14','151.44.88.107',1),(38,705,'2022-05-04 05:34:29','151.34.39.127',1),(39,705,'2022-05-06 05:38:52','151.82.102.92',1),(40,705,'2022-05-20 05:39:34','151.36.234.137',1),(41,705,'2022-05-27 05:39:06','151.38.135.154',1),(42,705,'2022-02-21 07:40:51','151.68.82.6',1),(43,705,'2022-02-25 07:42:22','151.68.82.6',1),(44,705,'2022-03-04 07:34:59','151.68.82.6',1),(45,705,'2022-03-18 07:40:00','151.68.82.6',1),(46,705,'2022-04-01 05:35:31','151.68.82.6',1),(47,705,'2022-04-08 05:38:42','151.68.82.6',1),(48,705,'2022-04-26 05:15:38','151.68.82.6',1),(49,705,'2022-05-02 05:15:14','151.68.82.6',1),(50,705,'2022-05-06 05:38:52','151.68.82.6',1),(51,705,'2022-05-27 05:34:31','151.68.82.6',1),(52,705,'2022-05-30 05:31:35','151.68.82.6',1),(53,705,'2022-06-03 05:36:59','151.34.171.89',1),(54,705,'2021-12-22 07:38:36','151.36.12.234',1),(55,705,'2022-02-16 07:16:11','151.38.171.60',1),(56,705,'2022-02-18 07:34:11','151.18.6.198',1),(57,705,'2022-03-11 07:39:02','151.38.121.185',1),(58,705,'2022-03-25 07:38:38','151.46.26.132',1),(59,705,'2022-03-30 05:42:40','151.82.13.136',1),(60,705,'2022-04-01 05:35:31','151.36.117.0',1),(61,705,'2022-05-19 05:38:34','151.82.151.252',1),(62,705,'2022-05-26 05:39:21','151.18.75.175',1),(63,705,'2022-05-27 05:34:31','151.38.135.154',1),(64,705,'2022-06-08 05:36:12','172.16.1.7',1),(65,705,'2021-11-12 07:28:13','151.38.135.154',1),(66,705,'2021-11-15 07:35:17','151.38.135.154',1),(67,705,'2021-11-18 07:12:32','151.38.135.154',1),(68,705,'2021-11-19 07:21:18','151.38.135.154',1),(69,705,'2021-11-22 07:13:23','151.38.135.154',1),(70,705,'2021-11-26 07:13:16','151.38.135.154',1),(71,705,'2021-11-29 07:16:54','151.38.135.154',1),(72,705,'2021-11-30 07:23:52','151.38.135.154',1),(73,705,'2021-12-01 07:14:58','151.38.135.154',1),(74,705,'2021-12-03 07:15:42','151.38.135.154',1),(75,705,'2021-12-10 07:16:54','151.38.135.154',1),(76,705,'2021-12-16 07:33:22','151.38.135.154',1),(77,705,'2021-12-17 07:22:39','151.38.135.154',1),(78,705,'2021-12-20 07:33:05','151.38.135.154',1),(79,705,'2021-12-22 07:38:36','151.38.135.154',1),(80,705,'2021-12-23 07:34:35','151.38.135.154',1),(81,705,'2022-02-11 07:40:06','151.38.135.154',1),(82,705,'2022-02-16 07:16:11','151.38.135.154',1),(83,705,'2022-02-18 07:34:11','151.38.135.154',1),(84,705,'2022-02-25 07:42:22','151.38.135.154',1),(85,705,'2022-03-04 07:34:59','151.38.135.154',1),(86,705,'2022-03-08 07:28:37','151.38.135.154',1),(87,705,'2022-03-11 07:39:02','151.38.135.154',1),(88,705,'2022-03-17 07:37:14','151.38.135.154',1),(89,705,'2022-03-18 07:40:00','151.38.135.154',1),(90,705,'2022-03-23 07:34:39','151.38.135.154',1),(91,705,'2022-03-25 07:38:38','151.38.135.154',1),(92,705,'2022-03-30 05:42:40','151.38.135.154',1),(93,705,'2022-04-01 05:35:31','151.38.135.154',1),(94,705,'2022-04-05 05:39:13','151.38.135.154',1),(95,705,'2022-04-06 05:35:07','151.38.135.154',1),(96,705,'2022-04-08 05:38:42','151.38.135.154',1),(97,705,'2022-04-11 05:38:03','151.38.135.154',1),(98,705,'2022-04-13 05:37:02','151.38.135.154',1),(99,705,'2022-04-26 05:15:38','151.38.135.154',1),(100,705,'2022-04-29 05:38:51','151.38.135.154',1),(101,705,'2022-05-04 05:34:29','151.38.135.154',1),(102,705,'2022-05-06 05:38:52','151.38.135.154',1),(103,705,'2022-05-13 05:36:08','151.38.135.154',1),(104,705,'2022-05-18 05:20:36','151.38.135.154',1),(105,705,'2022-05-19 05:38:34','151.38.135.154',1),(106,705,'2022-05-20 05:39:34','151.38.135.154',1),(107,705,'2022-05-26 05:39:21','151.38.135.154',1),(108,705,'2021-11-11 07:11:34','151.18.131.196',1),(109,705,'2021-11-11 07:11:34','151.18.209.216',1),(110,705,'2021-11-12 07:28:13','151.18.209.216',1),(111,705,'2021-11-22 07:13:23','151.18.209.216',1),(112,705,'2021-11-26 07:13:16','151.18.209.216',1),(113,705,'2021-12-03 07:15:43','151.36.91.97',1),(114,705,'2022-05-06 05:42:39','151.82.102.92',1),(115,705,'2022-06-01 05:34:20','151.82.157.5',1),(116,705,'2022-03-11 07:39:01','151.38.121.185',1),(117,705,'2021-11-18 07:12:33','151.38.218.59',1),(118,705,'2021-11-26 07:43:39','151.18.209.216',1),(119,706,'2021-12-21 07:35:53','109.52.75.242',1),(120,706,'2022-02-14 07:30:02','151.36.162.66',1),(121,706,'2022-02-16 07:38:13','151.68.213.52',1),(122,706,'2022-02-22 07:20:53','5.169.106.142',1),(123,706,'2022-02-23 07:32:05','5.168.243.4',1),(124,706,'2022-03-09 07:26:07','5.168.165.71',1),(125,706,'2022-03-15 07:25:26','5.168.99.177',1),(126,706,'2022-03-18 07:26:27','5.170.108.23',1),(127,706,'2022-04-11 05:19:29','95.74.200.207',1),(128,706,'2022-05-11 05:25:20','5.168.251.107',0),(129,706,'2022-05-12 05:16:54','5.168.195.177',1),(130,706,'2022-05-26 05:19:28','5.169.142.195',1),(131,706,'2022-06-03 05:11:46','176.201.246.58',1),(132,706,'2022-11-04 08:56:21','172.16.1.7',1),(133,706,'2022-02-22 07:14:34','5.170.101.137',1),(134,706,'2022-03-22 07:20:44','5.170.101.137',1),(135,706,'2022-03-24 07:20:29','5.170.101.137',1),(136,706,'2022-04-06 05:18:00','5.170.101.137',1),(137,706,'2022-04-11 05:19:29','5.170.101.137',1),(138,706,'2022-04-13 05:31:38','5.170.101.137',1),(139,706,'2022-04-20 05:17:58','5.170.101.137',1),(140,706,'2022-04-26 05:26:13','5.170.101.137',1),(141,706,'2022-04-27 05:22:30','5.170.101.137',1),(142,706,'2022-05-04 05:34:09','5.170.101.137',1),(143,706,'2022-05-17 05:26:08','5.170.101.137',1),(144,706,'2022-05-18 05:17:56','5.170.101.137',1),(145,706,'2022-05-24 05:25:39','62.19.221.83',1),(146,706,'2022-05-25 05:28:02','95.74.198.156',1),(147,706,'2022-05-26 05:27:29','5.169.142.195',1),(148,706,'2022-05-27 05:19:29','5.168.130.193',1),(149,706,'2021-10-13 05:36:19','151.34.48.15',1),(150,706,'2021-12-22 07:25:39','109.52.103.123',1),(151,706,'2021-10-07 05:37:48','151.34.175.207',1),(152,706,'2021-12-03 07:11:55','5.168.232.119',1),(153,706,'2022-05-20 05:20:54','158.148.212.38',1),(154,706,'2022-11-11 08:54:03','172.16.1.7',1),(155,706,'2021-09-23 05:33:16','172.16.1.7',1),(156,706,'2021-09-24 05:44:01','172.16.1.7',1),(157,706,'2021-09-27 05:37:27','172.16.1.7',1),(158,706,'2021-09-28 05:45:06','172.16.1.7',1),(159,706,'2021-11-19 07:23:45','172.16.1.7',1),(160,706,'2021-11-24 07:34:25','172.16.1.7',1),(161,706,'2021-12-09 07:33:51','172.16.1.7',1),(162,706,'2021-12-10 07:28:35','172.16.1.7',1),(163,706,'2021-12-13 07:25:01','172.16.1.7',1),(164,706,'2022-02-10 07:34:22','172.16.1.7',1),(165,706,'2022-02-11 07:25:54','172.16.1.7',1),(166,706,'2022-02-22 07:44:20','172.16.1.7',1),(167,706,'2022-03-04 07:29:05','172.16.1.7',1),(168,706,'2022-03-25 07:26:35','172.16.1.7',1),(169,706,'2022-06-08 05:21:41','172.16.1.7',1),(170,706,'2021-10-08 05:40:38','37.162.148.200',1),(171,706,'2022-03-11 07:25:54','158.148.53.172',1),(172,716,'2022-04-07 05:46:06','172.16.20.22',1),(173,716,'2022-04-08 05:37:33','172.16.20.22',1),(174,716,'2022-04-20 05:37:29','172.16.20.22',1),(175,716,'2022-04-22 05:48:05','172.16.20.22',1),(176,716,'2022-04-26 05:44:51','217.171.72.203',1),(177,716,'2022-05-04 05:48:08','5.77.89.231',1),(178,716,'2022-05-06 05:36:30','217.171.66.81',1),(179,716,'2022-05-09 05:40:00','5.77.104.30',1),(180,716,'2022-05-13 05:36:48','5.90.134.129',1);
/*!40000 ALTER TABLE `ordini` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utenti`
--

DROP TABLE IF EXISTS `utenti`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utenti` (
  `codice` int NOT NULL,
  `ruolo` char(1) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nome` varchar(40) NOT NULL,
  `ordineGrande` float NOT NULL,
  `spesaTotale` float NOT NULL,
  `online` int NOT NULL,
  `checkOrdine` int NOT NULL DEFAULT '0',
  `checkRitiro` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`codice`),
  UNIQUE KEY `utenti_nome_uindex` (`nome`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utenti`
--

LOCK TABLES `utenti` WRITE;
/*!40000 ALTER TABLE `utenti` DISABLE KEYS */;
INSERT INTO `utenti` VALUES (660,'0','***','bar',0,0,0,0,0),(661,'2','***','admin',0,0,0,0,0),(702,'1','***','1zz',8,29,0,0,0),(705,'1','***','1AI',22.5,54.8,0,0,0),(706,'1','***','1BI',22.4,57.2,0,0,0),(707,'1','***','1CI',28,122.9,0,0,0),(708,'1','***','1DI',7.4,17.6,0,0,0),(709,'1','***','1EI',34.7,426.2,0,1,1),(710,'1','***','1FL',74,375.1,0,1,1),(711,'1','***','1GL',35.2,399.5,0,0,0),(712,'1','***','1HL',61.6,499.5,0,1,1),(713,'1','***','1IL',30,144.7,0,0,0),(714,'1','***','1LE',42.7,81.7,0,0,0),(715,'1','***','1ME',34,314.5,0,1,1),(716,'1','***','1NE',36.7,456.2,0,1,1),(717,'1','***','1OE',15.9,181.8,0,0,0),(718,'1','***','1PE',26.4,94.8,0,0,0),(719,'1','***','1QL',25,360.3,0,0,0),(720,'1','***','1RI',105,329.5,0,1,1),(721,'1','***','1SE',30.3,179.1,0,0,0),(722,'1','***','2AI',13,155.8,0,1,1),(723,'1','***','2BI',34,312,0,1,1),(724,'1','***','2CI',12.2,84.9,0,0,0),(725,'1','***','2DI',10.2,18.2,0,0,0),(726,'1','***','2EI',0,0,0,0,0),(727,'1','***','2FL',22,406.7,0,1,1),(728,'1','***','2GL',11.4,64.8,0,0,0),(729,'1','***','2HL',9.4,43,0,1,1),(730,'1','***','2IL',20,256.3,0,0,0),(731,'1','***','2LE',11.4,24.2,0,0,0),(732,'1','***','2ME',16,270.8,0,1,1),(733,'1','***','2NE',16,195.3,0,0,0),(734,'1','***','2OE',37,271.8,0,1,1),(735,'1','***','2PE',2.8,8.4,0,0,0),(736,'1','***','3AC',24.6,125.4,0,0,0),(737,'1','***','3AE',33.6,472.4,0,1,1),(738,'1','***','3AI',20,159.1,0,1,1),(739,'1','***','3AL',20.2,28.3,0,0,0),(740,'1','***','3AT',3,3,0,0,0),(741,'1','***','3BE',24.4,297.7,0,0,0),(742,'1','***','3BI',7.2,59.9,0,0,0),(743,'1','***','3BL',16.2,56.1,0,1,1),(744,'1','***','3CI',20.3,241.5,0,1,1),(745,'1','***','3DI',23.2,92.8,0,0,0),(746,'1','***','3EI',0,0,0,0,0),(747,'1','***','3FI',0,0,0,0,0),(748,'1','***','3GI',0,0,0,0,0),(749,'1','***','4AC',9.4,13.4,0,0,0),(750,'1','***','4AE',8.8,43.8,0,0,0),(751,'1','***','4AI',14.3,41,0,0,0),(752,'1','***','4AL',9.2,81,0,1,1),(753,'1','***','4AT',14.8,189.5,0,1,1),(754,'1','***','4BE',21.8,354.2,0,1,1),(755,'1','***','4BI',20.3,306.1,0,1,1),(756,'1','***','4BL',19.8,118.6,0,1,1),(757,'1','***','4CI',15.6,143.3,0,0,0),(758,'1','***','4DI',19.6,357,0,0,0),(759,'1','***','4EI',6,68.9,0,0,0),(760,'1','***','5AC',21,168.3,0,0,0),(761,'1','***','5AE',9,43.4,0,0,0),(762,'1','***','5AI',15.4,133.1,0,0,0),(763,'1','***','5AL',19.2,208.7,0,0,0),(764,'1','***','5AT',24.5,302.4,0,0,0),(765,'1','***','5BI',20.4,181.7,0,1,1),(766,'1','***','5BL',18.2,43.5,0,0,0),(767,'1','***','5CI',6,26,0,0,0),(768,'1','***','5DI',2,2,0,0,0),(769,'1','***','5EI',10.4,66.4,0,1,1),(772,'0','***','helpdesk',0,0,0,0,0),(773,'1','***','5FI',0,0,0,0,0),(774,'1','***','1AC',0,0,0,0,0),(778,'0','***','bar1',0,0,0,0,0),(780,'1','***','5FE',0,0,0,0,0),(781,'1','***','2QL',0,0,0,0,0),(782,'1','***','2RI',14.8,151,0,0,0),(783,'1','***','2SE',15.6,155.1,0,0,0),(784,'1','***','4FI',9.3,82,0,0,0),(785,'1','***','4GI',10.4,153.6,0,1,1),(788,'1','***','5BE',13,75.2,0,0,0),(789,'0','***','bar3',0,0,0,0,0);
/*!40000 ALTER TABLE `utenti` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-04 17:22:39
