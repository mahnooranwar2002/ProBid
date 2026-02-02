-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2026 at 04:53 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_auction`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `status` int(11) NOT NULL,
  `description` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `status`, `description`) VALUES
(71, 'Furniture', 1, 'Furniture is the good category'),
(72, 'Electronic Accessories', 1, 'Electronic Accessories can be defined as supplementary devices or components designed to enhance the functionality, performance, usability, or aesthetics of core electronic devices like smartphones, computers, cameras, and gaming consoles.'),
(73, 'Books', 1, 'Books are a collection of pages, compiled in written, printed, or digital form, which are secured by a cover. They are the most important medium for transmitting knowledge, stories, information, ideas, and emotions from one generation to the next.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl-claim`
--

CREATE TABLE `tbl-claim` (
  `id` int(11) NOT NULL,
  `u_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` text NOT NULL,
  `status` varchar(50) NOT NULL,
  `products_Data` text NOT NULL,
  `u_id` int(11) NOT NULL,
  `price` varchar(50) NOT NULL,
  `totalPrice` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl-claim`
--

INSERT INTO `tbl-claim` (`id`, `u_name`, `email`, `address`, `status`, `products_Data`, `u_id`, `price`, `totalPrice`) VALUES
(3, 'mahnoor', 'kamran34@gmail.com', 'ssssssss', 'pending', 'aaaa', 1, '', '23'),
(18, 'ali', 'ali@gmail.com', 'gggh', 'pending', '', 17, '', '800'),
(19, 'ali', 'ali@gmail.com', 'ghghfg', 'aaaaaa', 'jhhh,aaa', 17, '', '800'),
(20, 'ali', 'ali@gmail.com', 'ghghfg', 'pending', 'jhhh,aaa', 17, '', '800'),
(21, 'ali', 'ali@gmail.com', 'ghghfg', 'delevered', 'jhhh,aaa', 17, '', '800');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_bidding`
--

CREATE TABLE `tbl_bidding` (
  `id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `P_id` int(11) NOT NULL,
  `P_name` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_bidding`
--

INSERT INTO `tbl_bidding` (`id`, `user_name`, `P_id`, `P_name`, `user_id`, `amount`) VALUES
(13, 'a', 36, 'jhhh', 16, 79),
(14, 'a', 36, 'jhhh', 16, 80),
(15, 'a', 36, 'jhhh', 16, 86),
(16, 'rafay', 37, 'jhhh', 16, 50),
(17, 'rafay', 38, 'gdfgffghg', 16, 799),
(18, 'rafay', 38, 'gdfgffghg', 16, 800000),
(19, 'rafay', 36, 'jhhh', 16, 500),
(20, 'rafay', 37, 'jhhh', 16, 60),
(21, 'ali', 36, 'jhhh', 17, 550),
(22, 'ali', 39, 'aaa', 17, 250);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_contact`
--

CREATE TABLE `tbl_contact` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `msg` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_items`
--

CREATE TABLE `tbl_items` (
  `id` int(11) NOT NULL,
  `itemTittle` varchar(50) NOT NULL,
  `picture` varchar(250) NOT NULL,
  `description` varchar(250) NOT NULL,
  `summary` varchar(100) NOT NULL,
  `bid_status` int(11) NOT NULL,
  `startDate` varchar(50) NOT NULL,
  `endDate` varchar(50) NOT NULL,
  `Incremenent` int(11) NOT NULL,
  `minimun_bid` int(11) NOT NULL,
  `categoryName` varchar(50) NOT NULL,
  `user_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_items`
--

INSERT INTO `tbl_items` (`id`, `itemTittle`, `picture`, `description`, `summary`, `bid_status`, `startDate`, `endDate`, `Incremenent`, `minimun_bid`, `categoryName`, `user_name`) VALUES
(36, 'jhhh', '71fDLbeHslL.jpg', 'fdggf', 'Watches are time-telling devices worn on the wrist, used to display the time and often featuring add', 1, '2025-12-11', '2025-09-12', 1, 550, 'Electronic Accessories', 'a'),
(37, 'jhhh', '71fDLbeHslL.jpg', 'dddddd', 'Watches are time-telling devices worn on the wrist, used to display the time and often featuring add', 2, '2025-12-11', '2025-09-12', 1, 60, 'Electronic Accessories', 'rafay'),
(38, 'gdfgffghg', '71fDLbeHslL.jpg', 'ssssssss', 'sfsdfgd', 2, '2025-12-11', '2025-09-12', 1, 800000, 'Electronic Accessories', 'rafay'),
(39, 'aaa', 'poster2.png', 'fgghhg ghgghm  ghfh sd kj gfb v hgjn n', 'A chair is a fundamental piece of furniture, typically designed for one person and characterized by ', 2, '2026-02-01', '2026-01-02', 1, 250, 'Electronic Accessories', 'kamran');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_reviews`
--

CREATE TABLE `tbl_reviews` (
  `id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_id` int(11) NOT NULL,
  `message` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `status` int(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `is_admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `name`, `email`, `status`, `password`, `is_admin`) VALUES
(1, 'mahnoor', 'n@gmail.com', 0, '123', 0),
(2, 'a', 'admina@gmail.com', 1, 'aaa', 0),
(10, 'aaa', 'a@gmial.com', 1, '$2y$10$tz28bmUQqEvR.LDV4WWcqe4JflSinKtjckHdC0VLdnhbBgjhp0o2y', 0),
(12, 'admin', 'admin@gmail.com', 1, '$2y$10$2pUuoMDVPPI8ZcHImNJarOjiIiwga3zOMl63AREaVmOqb5nGH90Fi', 1),
(13, 'mahnoor anwar', 'm@gmail.com', 1, '$2y$10$ndMADT8/l2hkj8GDzSk5ZOU2jmqCSVreCpfwPKVHtlYXej0Zte6NK', 0),
(14, 'mahnoor anwar', 'mahnoor1234@gmail.com', 1, '$2y$10$dFjqfouRt.gUH1796Db9kewackzyjUcZttE0YY1klxLiKLwT1n56m', 0),
(15, 'admin', 'admin1@gmail.com', 1, '$2y$10$pJI1NP4ho04e/SCV3uOwre49COxkS8m37tsbR/mX0w1Ed/wlt.BfG', 1),
(16, 'rafay', 'rafay@gmail.com', 1, '$2y$10$6HTTubRjeykZE1bxVrnFF.nXm0QGF4rd5RZVPBYc6qA9NLBLnKR/C', 0),
(17, 'ali', 'ali@gmail.com', 1, '$2y$10$U4ceIFrX/Oz/j5SL2jUMOOA7wSeIMNfNUZzCsh3o0LVFFiHb9NGFe', 0),
(18, 'kamran', 'kamran@gmail.com', 1, '$2y$10$TFA7qopII.i.W03qrj9ZXeqv9i6gKdicNQYi.bwiAbZ/2DfCMUpyO', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_winners`
--

CREATE TABLE `tbl_winners` (
  `winner_id` int(11) NOT NULL,
  `item_Id` int(11) NOT NULL,
  `buyer_id` int(11) NOT NULL,
  `winningBid` int(11) NOT NULL,
  `wining_Date` varchar(50) NOT NULL,
  `uName` varchar(100) NOT NULL,
  `PName` varchar(50) NOT NULL,
  `pImage` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_winners`
--

INSERT INTO `tbl_winners` (`winner_id`, `item_Id`, `buyer_id`, `winningBid`, `wining_Date`, `uName`, `PName`, `pImage`) VALUES
(13, 38, 16, 800000, '2025-12-10', 'rafay', 'gdfgffghg', ''),
(14, 36, 16, 500, '2025-12-10', 'rafay', 'jhhh', ''),
(15, 37, 16, 60, '2025-12-10', 'rafay', 'jhhh', ''),
(16, 36, 16, 500, '2025-12-11', 'rafay', 'jhhh', '71fDLbeHslL.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_wishlist`
--

CREATE TABLE `tbl_wishlist` (
  `id` int(11) NOT NULL,
  `p_name` varchar(250) NOT NULL,
  `user_id` int(11) NOT NULL,
  `img` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_wishlist`
--

INSERT INTO `tbl_wishlist` (`id`, `p_name`, `user_id`, `img`) VALUES
(6, 'abc', 1, 'advc'),
(7, 'abc', 123, 'advc'),
(8, 'asdsffg', 1, 'Apples-184940975-770x533-1_jpg.png'),
(13, 'watches', 10, 'SV-10059_Cam001_M21.png'),
(14, 'jhhh', 17, '71fDLbeHslL.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl-claim`
--
ALTER TABLE `tbl-claim`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_bidding`
--
ALTER TABLE `tbl_bidding`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_items`
--
ALTER TABLE `tbl_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_reviews`
--
ALTER TABLE `tbl_reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_winners`
--
ALTER TABLE `tbl_winners`
  ADD PRIMARY KEY (`winner_id`);

--
-- Indexes for table `tbl_wishlist`
--
ALTER TABLE `tbl_wishlist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `tbl-claim`
--
ALTER TABLE `tbl-claim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `tbl_bidding`
--
ALTER TABLE `tbl_bidding`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `tbl_contact`
--
ALTER TABLE `tbl_contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_items`
--
ALTER TABLE `tbl_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `tbl_reviews`
--
ALTER TABLE `tbl_reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tbl_winners`
--
ALTER TABLE `tbl_winners`
  MODIFY `winner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tbl_wishlist`
--
ALTER TABLE `tbl_wishlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
