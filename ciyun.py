# # 美食推荐菜词云代码
# import jieba  # 如果是中文文本，使用 jieba 分词
# from collections import Counter
# import pymysql  # 用于连接 MySQL 数据库
# from wordcloud import WordCloud
# import matplotlib.pyplot as plt
# # 连接数据库
# db = pymysql.connect(
#     host="localhost",
#     user="root",
#     password="root",
#     database="data_vis",
#     charset="utf8mb4"
# )
#
# # 查询数据
# cursor = db.cursor()
# cursor.execute("SELECT recommend FROM foods")
# rows = cursor.fetchall()
#
# # 合并 recommend 数据
# text = " ".join([str(row[0]) for row in rows if row[0]])  # 只处理 recommend 字段
#
# # 分词
# words = jieba.lcut(text)
#
# # 停用词列表（根据实际情况扩展）
# stop_words = set(["的", "是", "了", "和", "我", "在", "有", "也", "很", "与", "及"])
#
# # 过滤停用词和长度小于 2 的词
# filtered_words = [word for word in words if word not in stop_words and len(word) > 1]
#
# # 统计词频
# word_counts = Counter(filtered_words)
#
# # 输出前 50 个词及其词频
# top_words = word_counts.most_common(100)
# # print("Top words:", top_words)
# formatted_data = [[word, freq] for word, freq in top_words]
#
# # 打印结果
# print(formatted_data)




# # 美食评论词云代码
# import jieba  # 如果是中文文本，使用 jieba 分词
# from collections import Counter
# import pymysql  # 用于连接 MySQL 数据库
# from wordcloud import WordCloud
# import matplotlib.pyplot as plt
# # 连接数据库
# db = pymysql.connect(
#     host="localhost",
#     user="root",
#     password="root",
#     database="data_vis",
#     charset="utf8mb4"
# )
#
# # 查询数据
# cursor = db.cursor()
# cursor.execute("SELECT review FROM foods")
# rows = cursor.fetchall()
#
# # 合并 review 数据
# text = " ".join([str(row[0]) for row in rows if row[0]])  # 只处理 recommend 字段
#
# # 分词
# words = jieba.lcut(text)
#
# # 停用词列表（根据实际情况扩展）
# stop_words = set(["的", "是", "了", "和", "我", "在", "有", "也", "很", "与","...", "及"])
#
# # 过滤停用词和长度小于 2 的词
# filtered_words = [word for word in words if word not in stop_words and len(word) > 1]
#
# # 统计词频
# word_counts = Counter(filtered_words)
#
# # 输出前 100 个词及其词频
# top_words = word_counts.most_common(100)
# formatted_data = [[word, freq] for word, freq in top_words]
#
# # 打印结果
# print(formatted_data)



# # 酒店评论词云代码
# import jieba  # 如果是中文文本，使用 jieba 分词
# from collections import Counter
# import pymysql  # 用于连接 MySQL 数据库
# from wordcloud import WordCloud
# import matplotlib.pyplot as plt
# # 连接数据库
# db = pymysql.connect(
#     host="localhost",
#     user="root",
#     password="root",
#     database="data_vis",
#     charset="utf8mb4"
# )

# # 查询数据
# cursor = db.cursor()
# cursor.execute("SELECT review FROM hotels")
# rows = cursor.fetchall()
#
# # 合并 review 数据
# text = " ".join([str(row[0]) for row in rows if row[0]])  # 只处理 recommend 字段
#
# # 分词
# words = jieba.lcut(text)
#
# # 停用词列表（根据实际情况扩展）
# stop_words = set(["感觉", "老板", "出现", "这家", "还是", "我", "就是", "也", "很", "与","人员", "真的","景点"])
#
# # 过滤停用词和长度小于 2 的词
# filtered_words = [word for word in words if word not in stop_words and len(word) > 1]
#
# # 统计词频
# word_counts = Counter(filtered_words)
#
# # 输出前 100 个词及其词频
# top_words = word_counts.most_common(100)
# formatted_data = [[word, freq] for word, freq in top_words]
#
# # 打印结果
# print(formatted_data)


# # 景点简介词云代码
# import jieba  # 如果是中文文本，使用 jieba 分词
# from collections import Counter
# import pymysql  # 用于连接 MySQL 数据库
# from wordcloud import WordCloud
# import matplotlib.pyplot as plt
# # 连接数据库
# db = pymysql.connect(
#     host="localhost",
#     user="root",
#     password="root",
#     database="data_vis",
#     charset="utf8mb4"
# )
#
# # 查询数据
# cursor = db.cursor()
# cursor.execute("SELECT introduction FROM scenic_spots")
# rows = cursor.fetchall()
#
# # 合并 review 数据
# text = " ".join([str(row[0]) for row in rows if row[0]])  # 只处理 recommend 字段
#
# # 分词
# words = jieba.lcut(text)
#
# # 停用词列表（根据实际情况扩展）
# stop_words = set(["感觉", "老板", "出现", "这家", "还是", "我", "就是", "也", "很", "与","人员", "真的","景点"])
#
# # 过滤停用词和长度小于 2 的词
# filtered_words = [word for word in words if word not in stop_words and len(word) > 1]
#
# # 统计词频
# word_counts = Counter(filtered_words)
#
# # 输出前 100 个词及其词频
# top_words = word_counts.most_common(100)
# formatted_data = [[word, freq] for word, freq in top_words]
#
# # 打印结果
# print(formatted_data)