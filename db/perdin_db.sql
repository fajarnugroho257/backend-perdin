-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Mar 2025 pada 17.22
-- Versi server: 10.1.38-MariaDB
-- Versi PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perdin_db`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_kota`
--

CREATE TABLE `data_kota` (
  `kota_id` int(11) NOT NULL,
  `prov_id` int(11) DEFAULT NULL,
  `pulau_id` int(11) DEFAULT NULL,
  `kota_nama` varchar(75) DEFAULT NULL,
  `kota_latitude` varchar(150) DEFAULT NULL,
  `kota_longitude` varchar(150) DEFAULT NULL,
  `kota_st` enum('yes','no') DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `data_kota`
--

INSERT INTO `data_kota` (`kota_id`, `prov_id`, `pulau_id`, `kota_nama`, `kota_latitude`, `kota_longitude`, `kota_st`, `createdAt`, `updatedAt`) VALUES
(3, 6, 1, 'Surabaya', '-7.2575', '112.7521', 'yes', '2025-03-13 16:43:37', '2025-03-16 20:35:30'),
(7, 6, 1, 'Malang', '-7.9666', '112.6326', 'yes', '2025-03-15 15:13:57', '2025-03-16 01:22:39'),
(9, 4, 1, 'Semarang', '-6.9667', '110.4167', 'yes', '2025-03-15 15:59:08', '2025-03-16 01:23:06'),
(10, 4, 1, 'Salatiga', '-7.3305', '110.5084', 'yes', '2025-03-15 16:00:01', '2025-03-16 01:23:45'),
(13, 5, 1, 'Yogyakarta', '-7.7956', '110.5084', 'yes', '2025-03-15 16:47:03', '2025-03-16 01:24:12'),
(16, 6, 1, 'Blitar', '-8.098052', '112.165254', 'yes', '2025-03-16 10:39:22', '2025-03-17 20:20:17'),
(17, 7, 2, 'Kalbar', '444', '4545', 'yes', '2025-03-16 10:48:40', '2025-03-16 10:48:40'),
(19, 14, 11, 'Kota Singapura', '1.275689', '103.857437', 'no', '2025-03-17 17:18:31', '2025-03-17 20:19:24'),
(20, 3, 1, 'Kota Bandung', '-6.917500', '107.619100', 'yes', '2025-03-17 20:16:43', '2025-03-17 20:16:43');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_provinsi`
--

CREATE TABLE `data_provinsi` (
  `prov_id` int(11) NOT NULL,
  `pulau_id` int(11) DEFAULT NULL,
  `prov_nama` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `data_provinsi`
--

INSERT INTO `data_provinsi` (`prov_id`, `pulau_id`, `prov_nama`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'DKI Jakarta', '2025-03-16 09:41:58', NULL),
(2, 1, 'Banten', '2025-03-16 09:42:00', NULL),
(3, 1, 'Jawa Barat', '2025-03-16 09:42:00', NULL),
(4, 1, 'Jawa Tengah', '2025-03-16 09:42:00', NULL),
(5, 1, 'Daerah Istimewa Yogyakarta (DIY)\n', '2025-03-16 09:42:01', NULL),
(6, 1, 'Jawa Timur', '2025-03-16 09:42:02', NULL),
(7, 2, 'Kalimantan Barat', '2025-03-16 09:42:07', NULL),
(8, 2, 'Kalimantan Tengah', '2025-03-16 09:42:08', NULL),
(9, 2, 'Kalimantan Selatan', '2025-03-16 09:42:08', NULL),
(10, 2, 'Kalimantan Timur', '2025-03-16 09:42:08', NULL),
(11, 2, 'Kalimantan Utara', '2025-03-16 09:42:09', NULL),
(14, 11, 'Prov Singapura', '2025-03-17 17:17:46', '2025-03-17 17:17:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_pulau`
--

CREATE TABLE `data_pulau` (
  `pulau_id` int(11) NOT NULL,
  `pulau_nama` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `data_pulau`
--

INSERT INTO `data_pulau` (`pulau_id`, `pulau_nama`, `createdAt`, `updatedAt`) VALUES
(1, 'Jawa', NULL, '2025-03-17 14:59:50'),
(2, 'Kalimantan', NULL, NULL),
(3, 'Papua', NULL, NULL),
(4, 'Sulawesi', NULL, NULL),
(5, 'Sumatra', NULL, NULL),
(6, 'Timor', NULL, NULL),
(7, 'Pulau Luar Negeri', NULL, NULL),
(9, 'Aceh', '2025-03-17 14:57:43', '2025-03-17 14:57:43'),
(11, 'Pulau Buaya', '2025-03-17 17:16:52', '2025-03-17 17:17:08');

-- --------------------------------------------------------

--
-- Struktur dari tabel `perdin`
--

CREATE TABLE `perdin` (
  `perdin_id` varchar(20) NOT NULL,
  `user_id` varchar(20) DEFAULT NULL,
  `pref_id` varchar(10) DEFAULT NULL,
  `perdin_maksud` text,
  `perdin_start` date DEFAULT NULL,
  `perdin_end` date DEFAULT NULL,
  `perdin_asal` int(11) DEFAULT NULL,
  `perdin_tujuan` int(11) DEFAULT NULL,
  `perdin_durasi` varchar(5) DEFAULT NULL,
  `perdin_biaya` varchar(50) DEFAULT NULL,
  `perdin_st` enum('waiting','reject','approve') DEFAULT 'waiting',
  `perdin_saku` enum('yes','no') DEFAULT 'no',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `perdin`
--

INSERT INTO `perdin` (`perdin_id`, `user_id`, `pref_id`, `perdin_maksud`, `perdin_start`, `perdin_end`, `perdin_asal`, `perdin_tujuan`, `perdin_durasi`, `perdin_biaya`, `perdin_st`, `perdin_saku`, `createdAt`, `updatedAt`) VALUES
('P2503160001', 'U2503130002', '003', 'pegawai semarang mlg\nmenjadi surabaya yogya', '2025-03-17', '2025-03-20', 3, 9, '4', '1000000', 'approve', 'yes', '2025-03-16 15:08:18', '2025-03-17 11:01:36'),
('P2503160002', 'U2503130002', '004', 'Malang - Kalimantan 6 hari', '2025-03-16', '2025-03-21', 7, 17, '6', '1800000', 'approve', 'yes', '2025-03-16 15:11:01', '2025-03-17 11:05:54'),
('P2503160003', 'U2503130002', '004', 'Malang - Kalimantan 6 hari', '2025-03-16', '2025-03-21', 7, 17, '6', '1800000', 'waiting', 'yes', '2025-03-16 21:12:37', '2025-03-16 21:12:37'),
('P2503160004', 'U2503130002', '003', 'pegawai semarang mlg', '2025-03-16', '2025-03-17', 9, 7, '2', '500000', 'waiting', 'yes', '2025-03-16 21:59:49', '2025-03-16 21:59:49'),
('P2503170005', 'U2503130002', '003', 'jalan ', '2025-03-17', '2025-03-19', 9, 13, '3', '750000', 'reject', 'yes', '2025-03-17 11:08:11', '2025-03-17 13:02:55'),
('P2503170006', 'U2503130002', '005', 'Ke singapura', '2025-03-17', '2025-03-19', 3, 19, '3', '2452500', 'waiting', 'yes', '2025-03-17 17:19:40', '2025-03-17 17:19:40'),
('P2503170007', 'U2503170003', '004', 'dadada', '2025-03-17', '2025-03-18', 16, 17, '2', '600000', 'reject', 'yes', '2025-03-17 18:05:37', '2025-03-17 18:35:19'),
('P2503170008', 'U2503170004', '002', 'Perjalanan Dinas', '2025-03-17', '2025-03-22', 16, 3, '6', '1200000', 'approve', 'yes', '2025-03-17 18:57:09', '2025-03-17 19:01:36'),
('P2503170009', 'U2503170004', '005', 'Kunjungan luar negeri', '2025-03-17', '2025-03-21', 20, 19, '5', '4087500', 'approve', 'yes', '2025-03-17 20:21:03', '2025-03-17 20:21:45');

-- --------------------------------------------------------

--
-- Struktur dari tabel `preference`
--

CREATE TABLE `preference` (
  `pref_id` varchar(10) NOT NULL,
  `pref_name` varchar(50) DEFAULT NULL,
  `pref_value` varchar(50) DEFAULT NULL,
  `pref_ket` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `preference`
--

INSERT INTO `preference` (`pref_id`, `pref_name`, `pref_value`, `pref_ket`) VALUES
('001', 'melebihi_jarak', '60', NULL),
('002', 'satu_prov', '200000', 'Melebihi jarak 60 KM, dalam satu provinsi'),
('003', 'luar_prov_sama_pulau', '250000', 'Melebihi jarak 60 KM, luar provinsi masih dalam satu pulau'),
('004', 'luar_prov_beda_pulau', '300000', 'Melebihi jarak 60 KM, luar provinsi dan luar pulau'),
('005', 'luar_negeri', '817500', 'Melebihi jarak 60 KM, dan luar Negeri'),
('006', 'tidak_dapat', '0', 'Tidak mendapatkan uang saku..');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `user_id` varchar(20) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `role` enum('sdm','pegawai') DEFAULT 'pegawai',
  `createdAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `nama`, `role`, `createdAt`, `updatedAt`) VALUES
('U2503130001', 'akhdani', '$2b$10$HCt6Vn620hcI5/ugBjD4req7Ann/x6mRTK1ozVGXd/RXwg4KGXfLy', 'Akhdani', 'sdm', '2025-03-13 08:18:54', '2025-03-13 08:18:54'),
('U2503130002', 'pegawai', '$2b$10$M4T5wZLCoODUfFOOu8LP3OLeLR0qtjkqia1hvteE6cWibH0CC89Uy', 'Pegawai Akhdani Edit', 'pegawai', '2025-03-17 03:05:18', '2025-03-17 03:05:18'),
('U2503170003', 'dadada1', '$2b$10$kSJF8rYZDrT8lybYk5SxvOWrIAY/Q9YgHLAyE0ish6ygMIIyLWc7q', 'dadada RE', 'pegawai', '2025-03-17 11:37:19', '2025-03-17 11:37:19'),
('U2503170004', 'hahaha', '$2b$10$JYI5lHjFTQcXCZWHe4W6f.rUjO9rYLKEs.fYc38ICm1FxsMuAgQYq', 'hahaha', 'pegawai', '2025-03-17 11:53:48', '2025-03-17 11:53:48');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `data_kota`
--
ALTER TABLE `data_kota`
  ADD PRIMARY KEY (`kota_id`),
  ADD KEY `prov_id` (`prov_id`),
  ADD KEY `pulau_id` (`pulau_id`);

--
-- Indeks untuk tabel `data_provinsi`
--
ALTER TABLE `data_provinsi`
  ADD PRIMARY KEY (`prov_id`),
  ADD KEY `data_provinsi_ibfk_1` (`pulau_id`);

--
-- Indeks untuk tabel `data_pulau`
--
ALTER TABLE `data_pulau`
  ADD PRIMARY KEY (`pulau_id`);

--
-- Indeks untuk tabel `perdin`
--
ALTER TABLE `perdin`
  ADD PRIMARY KEY (`perdin_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `perdin_asal` (`perdin_asal`),
  ADD KEY `perdin_tujuan` (`perdin_tujuan`),
  ADD KEY `pref_id` (`pref_id`);

--
-- Indeks untuk tabel `preference`
--
ALTER TABLE `preference`
  ADD PRIMARY KEY (`pref_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `data_kota`
--
ALTER TABLE `data_kota`
  MODIFY `kota_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `data_provinsi`
--
ALTER TABLE `data_provinsi`
  MODIFY `prov_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `data_pulau`
--
ALTER TABLE `data_pulau`
  MODIFY `pulau_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `data_kota`
--
ALTER TABLE `data_kota`
  ADD CONSTRAINT `data_kota_ibfk_1` FOREIGN KEY (`prov_id`) REFERENCES `data_provinsi` (`prov_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `data_kota_ibfk_2` FOREIGN KEY (`pulau_id`) REFERENCES `data_pulau` (`pulau_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `data_provinsi`
--
ALTER TABLE `data_provinsi`
  ADD CONSTRAINT `data_provinsi_ibfk_1` FOREIGN KEY (`pulau_id`) REFERENCES `data_pulau` (`pulau_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `perdin`
--
ALTER TABLE `perdin`
  ADD CONSTRAINT `perdin_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `perdin_ibfk_4` FOREIGN KEY (`perdin_asal`) REFERENCES `data_kota` (`kota_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `perdin_ibfk_5` FOREIGN KEY (`perdin_tujuan`) REFERENCES `data_kota` (`kota_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `perdin_ibfk_6` FOREIGN KEY (`pref_id`) REFERENCES `preference` (`pref_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
