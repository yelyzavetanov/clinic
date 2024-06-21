-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Час створення: Чрв 20 2024 р., 10:15
-- Версія сервера: 10.4.32-MariaDB
-- Версія PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `clinic`
--

-- --------------------------------------------------------

--
-- Структура таблиці `clinics`
--

CREATE TABLE `clinics` (
  `id` varchar(200) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `specialization` text NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп даних таблиці `clinics`
--

INSERT INTO `clinics` (`id`, `name`, `description`, `specialization`, `address`) VALUES
('31a4ccff-4984-435b-b9c9-391c41ea10db', 'VNTU', 'programming and pain', 'pain, depression, death, exams', 'vntu'),
('d6b27f00-e1c6-4231-b136-3a1da9de7704', 'psyshka', 'shiza', 'shizagdr[ogkjdfpojgporfdjgv', 'psyshka'),
('bde66a76-70fd-46ad-8ae0-17cd4aac6fd5', 'Лікарня ім. Пирогова', 'Сучасна лікарня допомогає своїм пацієнтам.123', 'Лікарня широкого профілю', 'вул. Київська 123');

-- --------------------------------------------------------

--
-- Структура таблиці `doctors`
--

CREATE TABLE `doctors` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `clinic` varchar(100) NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  `specialization` varchar(100) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп даних таблиці `doctors`
--

INSERT INTO `doctors` (`id`, `name`, `username`, `password`, `clinic`, `status`, `specialization`, `description`) VALUES
(1, 'test doctor', 'doctor', '', 'VNTU', 'doctor', 'doctor', 'sdfsdfsdf'),
(2, 'Vladislav', 'vlad', '', 'VNTU', 'doctor', 'poyasnyvalna zapyska', 'vntu student'),
(3, 'test doctor', 'psyshkaDoctor', '', 'psyshka', 'doctor', 'pain', 'doctor in psyshka'),
(9133, 'Коваленко Володимир Мефодійович', 'kovalenkovolodimir', '', '', 'doctor', 'Лікування бронхіту', 'Чесна працьовита людина.'),
(67871045, 'Шевченко Іван Володимирович', 'shevchenkoivan', '', 'Лікарня ім. Пирогова', 'doctor', 'Кардіолог', 'Просто кардіолог');

-- --------------------------------------------------------

--
-- Структура таблиці `patients`
--

CREATE TABLE `patients` (
  `id` varchar(100) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `problems` text NOT NULL,
  `treatment` text NOT NULL,
  `birth_date` text NOT NULL,
  `clinic` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп даних таблиці `patients`
--

INSERT INTO `patients` (`id`, `name`, `description`, `problems`, `treatment`, `birth_date`, `clinic`) VALUES
('39483498', 'Yelyzaveta Novikova', 'vntu student', 'haven\'t made kursach yet', 'make kursach', '2024-06-11', 'VNTU'),
('435', 'Kuripko Vladislav', 'another vntu student', 'haven\'t written poyasnyvalna zapiska yet', 'write', '2024-06-12', 'VNTU'),
('f89b4197-8f52-45ac-a595-f43640fe9f29', 'Nazar Khmil', 'just Nazar', 'no problems', 'no treatment', '2024-06-11', 'VNTU'),
('82d3926c-e266-44ef-a852-22cd9c1bc518', 'burdemon', 'is a demon', 'demon', 'demon', '1991-10-21', 'VNTU'),
('8393254c-83ca-4f7d-8b97-21d012ba8517', 'yelyzaveta nov', 'has shiza because of kursach', 'shiza', 'no kursach', '2005-03-13', 'psyshka'),
('4df2bf81-6ba3-41b9-a34e-c2ef00dd763b', 'Петренко Олена', 'Просто хороша людина.', 'Хронічний бронхіт.', 'Медикаментозне лікування.', '2017-06-28', 'Лікарня ім. Пирогова'),
('89a795fd-b51c-41d2-b302-6576ab5a11c5', 'Топчак Олександра', 'Дуже хороша людина.', 'Хронічний нежіть.', 'Медикаментозне.', '2001-12-07', 'Лікарня ім. Пирогова'),
('69896d8d-8049-4411-baf3-954fc9a3a228', 'Зелений Василь', 'Хороша людина.', 'Запалення легень.', 'Медикаменти.', '1992-06-20', 'Лікарня ім. Пирогова');

-- --------------------------------------------------------

--
-- Структура таблиці `receptions`
--

CREATE TABLE `receptions` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `patient` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `doctor_username` varchar(255) DEFAULT NULL,
  `status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп даних таблиці `receptions`
--

INSERT INTO `receptions` (`id`, `date`, `time`, `patient`, `description`, `type`, `color`, `doctor_username`, `status`) VALUES
(2, '2024-06-17', '08:00:00', 'Yelyzaveta Novikova', 'monday', 'consultation', 'red', 'doctor', 'planned'),
(9, '2024-06-20', '10:00:00', 'Топчак Олександра', 'Прийом пацієнта', 'operation', 'blue', 'kovalenkovolodimir', 'planned'),
(10, '2024-06-11', '11:00:00', 'Ivanov Petro', 'consultation', 'consultation', 'purple', 'doctor', 'planned'),
(11, '2024-06-11', '12:00:00', 'Petrenko Olena', 'check-up', 'check-up', 'blue', 'doctor', 'planned'),
(12, '2024-06-12', '09:00:00', 'Shevchenko Taras', 'follow-up', 'follow-up', 'green', 'doctor', 'planned'),
(13, '2024-06-13', '10:00:00', 'Kovalenko Dmytro', 'consultation', 'consultation', 'red', 'vlad', 'planned'),
(14, '2024-06-13', '11:00:00', 'Shevchenko Marina', 'check-up', 'check-up', 'green', 'vlad', 'planned'),
(15, '2024-06-14', '09:00:00', 'Petrov Artem', 'follow-up', 'follow-up', 'blue', 'vlad', 'planned'),
(21, '2024-06-19', '09:00:00', 'Петренко Олена', 'Прийом', 'operation', 'green', 'kovalenkovolodimir', 'Completed!'),
(42, '2024-06-15', '15:00:00', 'burdemon', 'demon', 'operation', 'red', 'doctor', 'planned'),
(85, '2024-06-15', '10:00:00', 'burdemon', 'burdemon 1', 'operation', 'purple', 'doctor', 'planned'),
(930, '2024-06-18', '08:00:00', 'Петренко Олена', 'Консультація з пацієнтом', 'consultation', 'purple', 'kovalenkovolodimir', 'Completed'),
(503618, '2024-06-17', '09:00:00', 'Топчак Олександра', 'Огляд пацієнта', 'consultation', 'blue', 'kovalenkovolodimir', 'Completed!'),
(44710294, '2024-06-06', '09:00:00', 'Yelyzaveta Novikova', 'test', 'consultation', 'green', 'doctor', 'planned'),
(44710298, '2024-06-19', '08:00:00', 'Топчак Олександра', 'Прийом пацієнта', 'operation', 'red', 'kovalenkovolodimir', 'Completed!'),
(2147483647, '2024-06-18', '08:00:00', 'Топчак Олександра', 'Якийсь прийом', 'else', 'red', 'shevchenkoivan', 'planned');

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

CREATE TABLE `users` (
  `id` text NOT NULL,
  `username` text NOT NULL,
  `password` text DEFAULT NULL,
  `name` text NOT NULL,
  `clinic` text NOT NULL,
  `status` text NOT NULL,
  `specialization` text NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп даних таблиці `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `clinic`, `status`, `specialization`, `description`) VALUES
('ed3557b5-82dc-4d4e-9e23-aaca7166cbb4', 'yelz', '$2b$10$tsaA7yUkZC1YRUNSK1znf.voNdIsaB0BN0pegM.jOvkLWTqSwnyE.', 'yelz nov', 'VNTU', 'administrator', 'pain, depression, death', 'vntu student'),
('9dfdc2df-82ec-4473-a906-76c8eb75f300', 'doctor', '$2b$10$LL9apgE0eVkFyg1Z34R6VejnlBgYAfnQQBEOAqbXcevCHNtRp9wqm', 'test doctor', 'VNTU', 'doctor', 'doctor', 'just a test doctor'),
('244442c6-273b-4355-aee7-112e1e4c2ae5', 'vlad', '$2b$10$3.mdos5lkLU0s9qb6sCQNud8sfPkmx3XtkgjO3bNi7snBYbJckOgW', 'Vladislav', 'VNTU', 'doctor', 'poyasnyvalna zapyska', 'vntu student'),
('dcfe586c-eba4-479a-a1fd-223449d0bf88', 'psyshkaAdmin', '$2b$10$KxNks5cEZXJjAydIndMd3OJsBY7y2EgUVMjkeTFPCN5OM23yA5MBK', 'test', 'psyshka', 'administrator', 'test', 'admin in psyshka'),
('38159c1a-0da4-42a2-ba06-4747fdbfc0de', 'psyshkaDoctor', '$2b$10$0BQJmSilDet2XhIRb7Q8zebk2.Qlchr8ShahVtNNVVHZDIaB1tsUa', 'test doctor', 'psyshka', 'doctor', 'pain', 'doctor in psyshka'),
('e86f216f-2333-4146-8eb0-d9603c27c5fd', 'mariyaryshnikova', '$2b$10$Vn452ON9OoB9koB2cPFXT.grisoNV18UtYlaQU5efuSUH4q7VVcgO', 'Рушникова Марія Іванівна', 'Лікарня ім. Пирогова', 'administrator', 'Адміністратор', 'Адміністратор в лікарні ім. Пирогова'),
('9133a394-b3e8-44a7-889d-c77763a16579', 'kovalenkovolodimir', '$2b$10$NUGO4eHUtc.MBEPHtDeYEOdPA4g1M7IpIDDaWpZ24c.0wWeU2MrfG', 'Коваленко Володимир Мефодійович', 'Лікарня ім. Пирогова', 'doctor', 'Лікування бронхіту', 'Чесна працьовита людина.'),
('67871045-4fc7-4187-9196-b7aa8d37df3e', 'shevchenkoivan', '$2b$10$izUTqY4Oi.rzCYLFhisw5ejnXMZBUgHvm3pyTGVZCX7Zyqsdakg56', 'Шевченко Іван Володимирович', 'Лікарня ім. Пирогова', 'doctor', 'Кардіолог', 'Просто кардіолог');

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `doctors`
--
ALTER TABLE `doctors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `username_2` (`username`);

--
-- Індекси таблиці `patients`
--
ALTER TABLE `patients`
  ADD UNIQUE KEY `id` (`id`);

--
-- Індекси таблиці `receptions`
--
ALTER TABLE `receptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_doctor_username` (`doctor_username`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `doctors`
--
ALTER TABLE `doctors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67871046;

--
-- AUTO_INCREMENT для таблиці `receptions`
--
ALTER TABLE `receptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2147483648;

--
-- Обмеження зовнішнього ключа збережених таблиць
--

--
-- Обмеження зовнішнього ключа таблиці `receptions`
--
ALTER TABLE `receptions`
  ADD CONSTRAINT `fk_doctor_username` FOREIGN KEY (`doctor_username`) REFERENCES `doctors` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
