-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 08, 2014 at 09:32 AM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `carsale`
--
CREATE DATABASE IF NOT EXISTS `carsale` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `carsale`;

-- --------------------------------------------------------

--
-- Table structure for table `demand`
--

CREATE TABLE IF NOT EXISTS `demand` (
  `DemandId` varchar(100) NOT NULL,
  `UserId` varchar(100) NOT NULL,
  `Brand` varchar(20) NOT NULL,
  `Type` varchar(20) NOT NULL,
  `Colour` varchar(20) NOT NULL,
  `Motor` varchar(20) NOT NULL,
  `State` varchar(20) NOT NULL,
  `isSecured` int(11) NOT NULL,
  PRIMARY KEY (`DemandId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `demand`
--

INSERT INTO `demand` (`DemandId`, `UserId`, `Brand`, `Type`, `Colour`, `Motor`, `State`, `isSecured`) VALUES
('1', '13', 'Volkswagen', 'sedan', 'green', 'oil', 'second-hand', 0),
('23211396886646', '2321', 'Dongfeng', 'Sedan', 'Black', 'Oil', 'New', 0),
('23211396934439', '2321', 'Dongfeng', 'Sedan', 'Black', 'Oil', 'New', 0),
('23211396935000', '2321', 'Dongfeng', 'Sedan', 'Black', 'Oil', 'New', 0),
('23211396935004', '2321', 'Dongfeng', 'Sedan', 'Black', 'Oil', 'New', 0),
('23211396935134', '2321', 'Dongfeng', 'Sport', 'Black', 'Oil', 'New', 0),
('jean1396886895', 'jean', 'Toyota', 'Minivan', 'Black', 'Oil', 'New', 0),
('michel1396882977', 'michel', 'Dongfeng', 'Sedan', 'Black', 'Oil', 'New', 0),
('michel1396883018', 'michel', 'Saab', 'Minivan', 'Green', 'Oil', 'Second-hand', 0);

-- --------------------------------------------------------

--
-- Table structure for table `offer`
--

CREATE TABLE IF NOT EXISTS `offer` (
  `OfferId` varchar(100) NOT NULL,
  `DemandId` varchar(100) NOT NULL,
  `UserId` varchar(100) NOT NULL,
  `Price` int(11) NOT NULL,
  PRIMARY KEY (`OfferId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `offer`
--

INSERT INTO `offer` (`OfferId`, `DemandId`, `UserId`, `Price`) VALUES
('1', '1', '63', 4000),
('2', '1', '94', 6000),
('29', '1', '13', 8000);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `UserId` varchar(100) NOT NULL,
  `UserName` varchar(100) NOT NULL,
  `Hash` varchar(100) NOT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserId`, `UserName`, `Hash`) VALUES
('paul', 'Paul', '0ab8704c27fc675fc61de40329a38bb3ad81aadf8c03da1a1e9e7821fee1d675ac3c22d83746097e8a7932923067c615c166'),
('pierre', 'Pierre', '2643b42c44b11a47e93bb68a62bc370fbb499b40feabd368041e0abe18d51578572cb6a65fc1790cf1af0a5f97a9d9eb4c05');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
