-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 08, 2014 at 09:40 AM
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
('pc1396949879', 'pc', 'Citroen', 'Minivan', 'Blue', 'Oil', 'Second-hand', 0);

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

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `UserId` varchar(100) NOT NULL,
  `UserName` varchar(100) NOT NULL,
  `Hash` varchar(512) NOT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`UserId`, `UserName`, `Hash`) VALUES
('pc', 'portable', '40b244112641dd78dd4f93b6c9190dd46e0099194d5a44257b7efad6ef9ff4683da1eda0244448cb343aa688f5d3efd7314dafe580ac0bcbf115aeca9e8dc114');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
