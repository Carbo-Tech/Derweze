import csv
import os
import mysql.connector
from mysql.connector import Error

path, tail = os.path.split(__file__)
os.chdir(path)

def find_empty_keys(dict_list):
    empty_keys = set()
    for i, d in enumerate(dict_list):
        for key, value in d.items():
            if not value:
                empty_keys.add(key)
    return empty_keys

def remove_IDAnagrafica(dict_list):
    for d in dict_list:
        if "IDAnagrafica" in d:
            del d["IDAnagrafica"]

boold = True
if __name__ == "__main__":
    if boold:
        print("Start")

    file_directory = "./file/"


    csv_filename = 'Anagrafiche.csv'

    with open(file_directory +  csv_filename, encoding='utf-8-sig') as f:
        reader: list[dict] = remove_IDAnagrafica(list(csv.DictReader(f, delimiter=";")))

        print(reader)




    try:
        connection = mysql.connector.connect(host='localhost',
                                             user='root',
                                             database='derweze',
                                             password='passwordsicura')
        if connection.is_connected():
            db_Info = connection.get_server_info()
            print("Connected to MySQL Server version ", db_Info)
            cursor = connection.cursor()
            cursor.execute("select database();")
            record = cursor.fetchone()
            print("You're connected to database: ", record)

            table = "registry"
            # query
            for row in reader:

                placeholders = ', '.join(['%s'] * len(row))
                columns = ', '.join(row.keys())
                sql = "INSERT INTO %s ( %s ) VALUES ( %s )" % (table, columns, placeholders)
                print(sql)
                cursor.execute(sql, list(row.values()))



            # close connection
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
    except Error as e:
        print("Error while connecting to MySQL", e)

    if boold:
        print("End")
