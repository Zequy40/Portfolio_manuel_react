-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 20-08-2023 a las 07:12:17
-- Versión del servidor: 10.6.12-MariaDB-cll-lve
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u161264770_test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotos`
--

CREATE TABLE `fotos` (
  `id` int(11) NOT NULL,
  `images` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `fotos`
--

INSERT INTO `fotos` (`id`, `images`) VALUES
(1, 'img-00361.png'),
(2, 'img-01331.png'),
(3, 'img-02361.png'),
(4, 'img-06241.png'),
(5, 'img-06361.png'),
(6, 'img-07521.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `header`
--

CREATE TABLE `header` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `header`
--

INSERT INTO `header` (`id`, `name`, `image`) VALUES
(1, 'Manuel Cavilla', 'Manuel Cavilla.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `works`
--

CREATE TABLE `works` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` varchar(700) NOT NULL,
  `category` varchar(100) NOT NULL,
  `date_insert` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `works`
--

INSERT INTO `works` (`id`, `name`, `image`, `description`, `category`, `date_insert`) VALUES
(1, 'Zeky', '1.png', 'This is a logo created for a freelancer who works as a web developer in France. The logo is formed by the initials of the client, giving the shape of two brackets (), which are the principal characters used by developers. It uses brush strokes to give the logo an organic feel. The colors used are orange and white, which symbolize youth and innovation. ', 'Logo', '2023-08-10'),
(2, 'Learn With Amber', '5.png', 'This is a company logo that has fun colors denoting peace and a happy feeling. It aligns with the personality of the company, which aims to make learning a fun journey for people of all ages.', 'Logo', '2023-08-10'),
(3, 'Fomatec', '4.png', 'Fomatec is a company of web developers and web designers that mainly works in Canada, France, and Spain. The logo has sharp typographic elements, giving it a robotic look that denotes technology. The \"F\" of Fomatec forms a cube, with each side highlighting its pixel shape. This emphasizes the importance of pixels in programming.', 'Logo', '2023-05-02'),
(4, 'Railm5', '3.png', 'This is a catering business based in the UK that combines traditional Afro-Caribbean food with Cape Verdean cuisine and soul food. The name is an acronym of the names of 5 sisters, one of whom became a chef and started the catering business. They also own a pub called The Windmill, located between Hitchin and Steveneage. The logo is minimalistic and elegant, playing with the letter \"L\" to make it look like a knife. It is monochromatic, allowing it to work with any color to match uniforms, bills, and other uses.', 'Design', '2023-02-15'),
(5, 'Livia Betancourt', '2.png', 'This company is a clothing brand based in London, UK. The logo is monochromatic, making it easy to change colors to match the clothes, accessories, and patterns associated with the brand. It is a simplified shape inspired by chimneys from a particular island, where the owner of the brand is native. The combination of these elements produces an elegant shape.', 'Branding', '2023-05-23');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `fotos`
--
ALTER TABLE `fotos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `header`
--
ALTER TABLE `header`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `works`
--
ALTER TABLE `works`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `fotos`
--
ALTER TABLE `fotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `header`
--
ALTER TABLE `header`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `works`
--
ALTER TABLE `works`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
