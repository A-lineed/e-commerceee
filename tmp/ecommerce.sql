-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.3.27-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para ecommerce
DROP DATABASE IF EXISTS `ecommerce`;
CREATE DATABASE IF NOT EXISTS `ecommerce` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `ecommerce`;

-- Copiando estrutura para tabela ecommerce.produtos
DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(60) NOT NULL,
  `foto` varchar(60) NOT NULL,
  `preco` float(6,2) NOT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela ecommerce.produtos: ~60 rows (aproximadamente)
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
REPLACE INTO `produtos` (`id`, `nome`, `foto`, `preco`, `categoria`) VALUES
	(4, 'blusa4', 'blusa4.jpg', 45.95, 'feminino'),
	(5, 'blusa5', 'blusa5.jpg', 95.99, 'feminino'),
	(6, 'blusa8', 'blusa8.jpg', 66.50, 'feminino'),
	(7, 'blusa11', 'blusa11.jpg', 55.99, 'feminino'),
	(8, 'blusa15', 'blusa15.jpg', 111.00, 'feminino'),
	(9, 'blusa16', 'blusa16.jpg', 60.49, 'feminino'),
	(10, 'blusa18', 'blusa18.jpg', 30.00, 'feminino'),
	(11, 'blusa21', 'blusa21.jpg', 70.00, 'feminino'),
	(12, 'blusa22', 'blusa22.jpg', 66.90, 'feminino'),
	(13, 'blusa23', 'blusa23.jpg', 22.40, 'feminino'),
	(14, 'blusa24', 'blusa24.jpg', 45.59, 'feminino'),
	(15, 'blusa25', 'blusa25.jpg', 75.49, 'feminino'),
	(16, 'blusa26', 'blusa26.jpg', 92.90, 'feminino'),
	(17, 'blusa27', 'blusa27.jpg', 88.50, 'feminino'),
	(18, 'camisa1', 'camisa1.jpg', 75.70, 'masculino'),
	(19, 'camisa2', 'camisa2.jpg', 88.90, 'masculino'),
	(20, 'camisa3', 'camisa3.jpg', 76.70, 'masculino'),
	(21, 'camisa11', 'camisa11.jpg', 44.50, 'masculino'),
	(22, 'camisa12', 'camisa12.jpg', 33.80, 'masculino'),
	(23, 'camisa13', 'camisa13.jpg', 24.60, 'masculino'),
	(24, 'camisa14', 'camisa14.jpg', 77.50, 'masculino'),
	(25, 'camisa15', 'camisa15.jpg', 350.99, 'masculino'),
	(26, 'camisa17', 'camisa17.jpg', 220.00, 'masculino'),
	(27, 'camisa20', 'camisa20.jpg', 37.50, 'masculino'),
	(28, 'menina1', 'menina1.jpg', 22.90, 'infantil'),
	(29, 'menina2', 'menina2.jpg', 33.50, 'infantil'),
	(30, 'menina3', 'menina3.jpg', 27.80, 'infantil'),
	(31, 'menina4', 'menina4.jpg', 220.99, 'infantil'),
	(32, 'menina5', 'menina5.jpg', 45.50, 'infantil'),
	(33, 'menina6', 'menina6.jpg', 66.70, 'infantil'),
	(34, 'menina8', 'menina8.jpg', 75.50, 'infantil'),
	(35, 'menina9', 'menina9.jpg', 22.90, 'infantil'),
	(36, 'menina11', 'menina11.jpg', 99.50, 'infantil'),
	(37, 'menina13', 'menina13.jpg', 27.70, 'infantil'),
	(38, 'menina14', 'menina14.jpg', 88.80, 'infantil'),
	(39, 'menina15', 'menina15.jpg', 36.70, 'infantil'),
	(40, 'menina16', 'menina16.jpg', 49.50, 'infantil'),
	(41, 'menina18', 'menina18.jpg', 66.70, 'infantil'),
	(42, 'menina19', 'menina19.jpg', 99.90, 'infantil'),
	(43, 'menina20', 'menina20.jpg', 66.50, 'infantil'),
	(44, 'menino1', 'menino1.jpg', 55.70, 'infantil'),
	(45, 'menino2', 'menino2.jpg', 110.10, 'infantil'),
	(46, 'menino3', 'menino3.jpg', 66.70, 'infantil'),
	(47, 'menino5', 'menino5.jpg', 99.00, 'infantil'),
	(48, 'menino6', 'menino6.jpg', 55.40, 'infantil'),
	(49, 'menino7', 'menino7.jpg', 45.50, 'infantil'),
	(50, 'menino8', 'menino8.jpg', 76.70, 'infantil'),
	(51, 'menino9', 'menino9.jpg', 22.40, 'infantil'),
	(52, 'menino10', 'menino10.jpg', 67.70, 'infantil'),
	(53, 'menino11', 'menino11.jpg', 80.99, 'infantil'),
	(54, 'menino12', 'menino12.jpg', 45.00, 'infantil'),
	(55, 'menino13', 'menino13.jpg', 37.50, 'infantil'),
	(56, 'menino14', 'menino14.jpg', 66.60, 'infantil'),
	(57, 'menino15', 'menino15.jpg', 59.90, 'infantil'),
	(58, 'menino16', 'menino16.jpg', 49.99, 'infantil'),
	(59, 'menino17', 'menino17.jpg', 68.70, 'infantil'),
	(60, 'menino18', 'menino18.jpg', 32.80, 'infantil'),
	(61, 'menino19', 'menino19.jpg', 27.60, 'infantil'),
	(62, 'menino20', 'menino20.jpg', 30.00, 'infantil'),
	(63, 'vestido', 'vestido.jpg', 40.00, 'feminino');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;

-- Copiando estrutura para tabela ecommerce.usuarios
DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(60) NOT NULL,
  `email` varchar(40) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `numero` varchar(14) NOT NULL,
  `cep` varchar(20) NOT NULL,
  `logradouro` varchar(40) NOT NULL,
  `bairro` varchar(60) NOT NULL,
  `localidade` varchar(60) NOT NULL,
  `uf` varchar(2) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela ecommerce.usuarios: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
