SELECT 
  CASE
    WHEN `address` LIKE '%大邑%' THEN '大邑'
    WHEN `address` LIKE '%崇州%' THEN '崇州'
    WHEN `address` LIKE '%邛崃%' THEN '邛崃'
    WHEN `address` LIKE '%青羊区%' THEN '青羊区'
    WHEN `address` LIKE '%锦江区%' THEN '锦江区'
		WHEN `address` LIKE '%金牛区%' THEN '金牛区'
    WHEN `address` LIKE '%郫都区%' THEN '郫都区'
		WHEN `address` LIKE '%温江区%' THEN '温江区'
    WHEN `address` LIKE '%都江堰%' THEN '都江堰'
    WHEN `address` LIKE '%成华区%' THEN '成华区'
		WHEN `address` LIKE '%武侯区%' THEN '武侯区'
  END AS HotelType,
  COUNT(*) AS Count
FROM `hotels`
WHERE `address` LIKE  '%大邑%'  
      OR `address` LIKE  '%崇州%'   
      OR `address` LIKE  '%邛崃%'  
      OR `address` LIKE  '%青羊区%'
      OR `address` LIKE  '%锦江区%'
      OR `address` LIKE  '%金牛区%'
      OR `address` LIKE  '%郫都区%'
			OR `address` LIKE  '%温江区%'
      OR `address` LIKE  '%都江堰%'
      OR `address` LIKE  '%成华区%'
      OR `address` LIKE  '%武侯区%'
GROUP BY HotelType;


SELECT 
  CASE
    WHEN `address` LIKE '%舒适型%' THEN '舒适型'
    WHEN `address` LIKE '%高档型%' THEN '高档型'
    WHEN `address` LIKE '%豪华型%' THEN '豪华型'
    WHEN `address` LIKE '%五星级%' THEN '五星级'
    WHEN `address` LIKE '%经济型%' THEN '经济型'
    WHEN `address` LIKE '%四星级%' THEN '四星级'
  END AS HotelType,
	ROUND(AVG(`rating`), 1) AS AveragePrice
FROM `hotels`
WHERE `address` LIKE '%舒适型%'
   OR `address` LIKE '%高档型%'
   OR `address` LIKE '%豪华型%'
   OR `address` LIKE '%五星级%'
   OR `address` LIKE '%经济型%'
   OR `address` LIKE '%四星级%'
GROUP BY HotelType;




SELECT 
  CASE
    WHEN `price` BETWEEN 100 AND 200 THEN '100-200元'
    WHEN `price` BETWEEN 200 AND 400 THEN '200-400元'
    ELSE '其他'
  END AS PriceRange,
  COUNT(*) AS Count,
  ROUND(COUNT(*) / (SELECT COUNT(*) FROM hotels) * 100, 2) AS Percentage
FROM hotels
WHERE `price` IS NOT NULL
GROUP BY PriceRange;

SELECT 
  CASE
    WHEN `price` BETWEEN 400 AND 600 THEN '400-600元'
    WHEN `price` > 600 THEN '600元以上'
    ELSE '其他'
  END AS PriceRange,
  COUNT(*) AS Count,
  ROUND(COUNT(*) / (SELECT COUNT(*) FROM hotels) * 100, 2) AS Percentage
FROM hotels
WHERE `price` IS NOT NULL
GROUP BY PriceRange;










SELECT 
  CASE
    WHEN `price` BETWEEN 100 AND 200 THEN '100-200元'
    WHEN `price` BETWEEN 200 AND 400 THEN '200-400元'
  END AS PriceRange,
  COUNT(*) AS Count,
  ROUND(COUNT(*) / (SELECT COUNT(*) FROM hotels) * 100, 2) AS Percentage
FROM hotels
WHERE `price` IS NOT NULL AND `price` BETWEEN 100 AND 400
GROUP BY PriceRange;


SELECT 
  CASE
    WHEN `price` BETWEEN 400 AND 600 THEN '400-600元'
    WHEN `price` > 600 THEN '600元以上'
  END AS PriceRange,
  COUNT(*) AS Count,
  ROUND(COUNT(*) / (SELECT COUNT(*) FROM hotels) * 100, 2) AS Percentage
FROM hotels
WHERE `price` IS NOT NULL AND `price` > 400
GROUP BY PriceRange;


SELECT 
  CASE
    WHEN `address` LIKE '%龙泉驿区%' THEN '龙泉驿区'
    WHEN `address` LIKE '%青白江区%' THEN '青白江区'
    WHEN `address` LIKE '%新都区%' THEN '新都区'
    WHEN `address` LIKE '%双流区%' THEN '双流区'
    WHEN `address` LIKE '%新津区%' THEN '新津区'
    WHEN `address` LIKE '%简阳%' THEN '简阳'
    WHEN `address` LIKE '%都江堰%' THEN '都江堰'
    WHEN `address` LIKE '%彭州%' THEN '彭州'
    WHEN `address` LIKE '%邛崃%' THEN '邛崃'
    WHEN `address` LIKE '%崇州%' THEN '崇州'
		WHEN `address` LIKE '%大邑%' THEN '大邑'
    WHEN `address` LIKE '%蒲江%' THEN '蒲江'
		WHEN `address` LIKE '%青羊区%' THEN '青羊区'
    WHEN `address` LIKE '%锦江区%' THEN '锦江区'
		WHEN `address` LIKE '%金牛区%' THEN '金牛区'
    WHEN `address` LIKE '%成华区%' THEN '成华区'
		WHEN `address` LIKE '%武侯区%' THEN '武侯区'
  END AS District,
  COUNT(*) AS Count
FROM hotels
WHERE `address` LIKE '%龙泉驿区%'
   OR `address` LIKE '%青白江区%'
   OR `address` LIKE '%新都区%'
   OR `address` LIKE '%双流区%'
   OR `address` LIKE '%新津区%'
   OR `address` LIKE '%简阳%'
   OR `address` LIKE '%都江堰%'
   OR `address` LIKE '%彭州%'
   OR `address` LIKE '%邛崃%'
   OR `address` LIKE '%崇州%'
	 OR `address` LIKE '%大邑%'
   OR `address` LIKE '%蒲江%'
	 OR `address` LIKE '%青羊区%' 
   OR `address` LIKE '%锦江区%' 
	 OR `address` LIKE '%金牛区%' 
   OR `address` LIKE '%成华区%' 
	 OR `address` LIKE '%武侯区%' 
GROUP BY District
ORDER BY Count DESC;





SELECT 
  CASE
    WHEN `address` LIKE '%龙泉驿区%' THEN '龙泉驿区'
    WHEN `address` LIKE '%青白江区%' THEN '青白江区'
    WHEN `address` LIKE '%新都区%' THEN '新都区'
    WHEN `address` LIKE '%双流区%' THEN '双流区'
    WHEN `address` LIKE '%新津区%' THEN '新津区'
    WHEN `address` LIKE '%简阳%' THEN '简阳'
    WHEN `address` LIKE '%都江堰%' THEN '都江堰'
    WHEN `address` LIKE '%彭州%' THEN '彭州'
    WHEN `address` LIKE '%邛崃%' THEN '邛崃'
    WHEN `address` LIKE '%崇州%' THEN '崇州'
    WHEN `address` LIKE '%大邑%' THEN '大邑'
    WHEN `address` LIKE '%蒲江%' THEN '蒲江'
  END AS District,
  COUNT(*) AS Count
FROM hotels
WHERE `address` LIKE '%龙泉驿区%'
   OR `address` LIKE '%青白江区%'
   OR `address` LIKE '%新都区%'
   OR `address` LIKE '%双流区%'
   OR `address` LIKE '%新津区%'
   OR `address` LIKE '%简阳%'
   OR `address` LIKE '%都江堰%'
   OR `address` LIKE '%彭州%'
   OR `address` LIKE '%邛崃%'
   OR `address` LIKE '%崇州%'
   OR `address` LIKE '%大邑%'
   OR `address` LIKE '%蒲江%'
GROUP BY District
ORDER BY Count DESC;












SELECT 
  CASE
    WHEN `name` LIKE '%川菜%' THEN '川菜'
    WHEN `name` LIKE '%火锅%' THEN '火锅'
    WHEN `name` LIKE '%烧烤%' THEN '烧烤'
    WHEN `name` LIKE '%面%' THEN '面馆'
    WHEN `name` LIKE '%串串%' THEN '串串店'
    WHEN `name` LIKE '%鱼%' THEN '鱼摆摆'
-- 		WHEN `name` LIKE '%水饺%' THEN '水饺'
  END AS 类别,
  COUNT(*) AS Count
FROM foods
WHERE `name` LIKE '%川菜%'
   OR `name` LIKE '%火锅%'
   OR `name` LIKE '%烧烤%'
   OR `name` LIKE '%面%'
   OR `name` LIKE '%串串%'
   OR `name` LIKE '%鱼%'
-- 	  OR `name` LIKE '%水饺%'
GROUP BY 类别
ORDER BY Count DESC;





SELECT 
  CASE
    WHEN `name` LIKE '%火锅%' THEN '火锅'
    WHEN `name` LIKE '%烧烤%' THEN '烧烤'
    WHEN `name` LIKE '%面%' THEN '面馆'
    WHEN `name` LIKE '%鱼%' THEN '鱼摆摆'
  END AS 类别,
  COUNT(*) AS Count
FROM foods
WHERE `name` LIKE '%火锅%'
   OR `name` LIKE '%面%'
   OR `name` LIKE '%鱼%'
   OR `name` LIKE '%烧烤%'
GROUP BY 类别
ORDER BY Count DESC;







-- 算美食类别

SELECT 
  CASE
    WHEN `name` LIKE '%火锅%' THEN '火锅'
    WHEN `name` LIKE '%烧烤%' THEN '烧烤'
    WHEN `name` LIKE '%面%' THEN '面馆'
    WHEN `name` LIKE '%鱼%' THEN '鱼摆摆'
  END AS 类别,
  AVG(`aver_consum`) AS 平均消费,
  AVG(`rating`) AS 平均评分
FROM foods
WHERE `name` LIKE '%火锅%'
   OR `name` LIKE '%烧烤%'
   OR `name` LIKE '%面%'
   OR `name` LIKE '%鱼%'
GROUP BY 类别
ORDER BY 类别;