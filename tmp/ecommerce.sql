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
	(4, 'Conj. Legging Sport', 'blusa4.jpg', 145.95, 'feminino'),
	(5, 'Croped Ciganinha', 'blusa5.jpg', 45.99, 'feminino'),
	(6, 'Short Saia Fitnes', 'blusa8.jpg', 36.50, 'feminino'),
	(7, 'Tshirt Basic Cores', 'blusa11.jpg', 45.99, 'feminino'),
	(8, 'Conj. Motocross Cinza/Pink', 'blusa15.jpg', 141.00, 'feminino'),
	(9, 'Macacão Triatletismo', 'blusa16.jpg', 160.49, 'feminino'),
	(10, 'Macacão Salmão', 'blusa18.jpg', 130.00, 'feminino'),
	(11, 'Calça Skyni Preta', 'blusa21.jpg', 170.00, 'feminino'),
	(12, 'Tshirt Basic Temática', 'blusa22.jpg', 66.90, 'feminino'),
	(13, 'Bermudão Klin', 'blusa23.jpg', 72.40, 'feminino'),
	(14, 'Terninho Chick Marfin', 'blusa24.jpg', 145.59, 'feminino'),
	(15, 'Tshirt BasicFrases', 'blusa25.jpg', 75.49, 'feminino'),
	(16, 'Tshirt BasicFrases', 'blusa26.jpg', 75.49, 'feminino'),
	(17, 'Terninho Chick Preto', 'blusa27.jpg', 138.50, 'feminino'),
	(18, 'Camisa Basic Cores', 'camisa1.jpg', 75.70, 'masculino'),
	(19, 'Camisa Slinn Cores', 'camisa2.jpg', 65.90, 'masculino'),
	(20, 'Jaqueta Florida', 'camisa3.jpg', 176.70, 'masculino'),
	(21, 'Jaqueta Nike', 'camisa11.jpg', 144.50, 'masculino'),
	(22, 'Jaqueta Nike Sports', 'camisa12.jpg', 133.80, 'masculino'),
	(23, 'Shorts Nike Basic Diversos', 'camisa13.jpg', 70.60, 'masculino'),
	(24, 'Shorts Nike Basic Diversos', 'camisa14.jpg', 70.60, 'masculino'),
	(25, 'Shorts Nike Basic Diversos', 'camisa15.jpg', 70.60, 'masculino'),
	(26, 'Camisa Temas', 'camisa17.jpg', 52.00, 'masculino'),
	(27, 'Calça Jeans Style', 'camisa20.jpg', 137.50, 'masculino'),
	(28, 'Conj. Flamingo', 'menina1.jpg', 82.90, 'infantil'),
	(29, 'Conj. Rec.Nasc. Vinho', 'menina2.jpg', 133.50, 'infantil'),
	(30, 'Conj. Poá Minnie', 'menina3.jpg', 77.80, 'infantil'),
	(31, 'Conj. Floral', 'menina4.jpg', 120.99, 'infantil'),
	(32, 'Conj. Unicórnio', 'menina5.jpg', 75.50, 'infantil'),
	(33, 'Conj. Mini Poá', 'menina6.jpg',136.70, 'infantil'),
	(34, 'Vestido Floral Social', 'menina8.jpg', 175.50, 'infantil'),
	(35, 'Conj. Dog Pink', 'menina9.jpg', 72.90, 'infantil'),
	(36, 'Conj. ByDay', 'menina11.jpg', 69.50, 'infantil'),
	(37, 'Vestido Princess', 'menina13.jpg', 67.70, 'infantil'),
	(38, 'Conj. Poá Xadrez', 'menina14.jpg', 128.80, 'infantil'),
	(39, 'Conj. Margarida Baby', 'menina15.jpg', 66.70, 'infantil'),
	(40, 'Vestido Happy', 'menina16.jpg', 69.50, 'infantil'),
	(41, 'Conj. Love', 'menina18.jpg', 66.70, 'infantil'),
	(42, 'Conj. Princess', 'menina19.jpg', 59.90, 'infantil'),
	(43, 'Conj. Girafa', 'menina20.jpg', 66.50, 'infantil'),
	(44, 'Conj. Fundo do Mar', 'menino1.jpg', 85.70, 'infantil'),
	(45, 'Conj. Batismo Branco/Bege', 'menino2.jpg', 210.10, 'infantil'),
	(46, 'Conj. Basic Diversos', 'menino3.jpg', 46.70, 'infantil'),
	(47, 'Short Temático', 'menino5.jpg', 59.00, 'infantil'),
	(48, 'Conj. Basic Diversos', 'menino6.jpg', 46.70, 'infantil'),
	(49, 'Camisa Basic Cinza', 'menino7.jpg', 45.50, 'infantil'),
	(50, 'Camisa Basic Cinza', 'menino8.jpg', 45.50, 'infantil'),
	(51, 'Camisa Basic Preto/Branco', 'menino9.jpg', 62.40, 'infantil'),
	(52, 'Conj. Basic Diversos', 'menino10.jpg', 46.70, 'infantil'),
	(53, 'Conj. Rec.Nasc. Bege', 'menino11.jpg', 130.99, 'infantil'),
	(54, 'Short Moleton', 'menino12.jpg', 45.00, 'infantil'),
	(55, 'Conj. Basic Diversos', 'menino13.jpg', 46.70, 'infantil'),
	(56, 'Conj. Basic Diversos', 'menino14.jpg', 46.70, 'infantil'),
	(57, 'Conj. FineSport', 'menino15.jpg', 159.90, 'infantil'),
	(58, 'Conj. Basic Diversos', 'menino16.jpg', 46.70, 'infantil'),
	(59, 'Conj. Basic Diversos', 'menino17.jpg', 46.70, 'infantil'),
	(60, 'Conj. Basic Diversos', 'menino18.jpg', 46.70, 'infantil'),
	(61, 'Conj. FineSport', 'menino19.jpg', 157.60, 'infantil'),
	(62, 'Conj. Fundo do Mar', 'menino20.jpg', 85.70, 'infantil'),
	(63, 'Vestido', 'vestido.jpg', 40.00, 'feminino');
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
