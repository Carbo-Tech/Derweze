import csv
import os
import mysql.connector
from mysql.connector import Error

path, tail = os.path.split(__file__)
os.chdir(path)

file_directory = "./file/"


def find_empty_keys(dict_list: list[dict]):
    empty_keys = set()
    for ignore, d in enumerate(dict_list):
        for key, value in d.items():
            if not value:
                empty_keys.add(key)
    return empty_keys


def remove_extra_args(dict_list: list[dict], args: list[str]):
    for dictionary in dict_list:
        for arg in args:
            if arg in dictionary:
                del dictionary[arg]
    return dict_list


def add_extra_args(dict_list: list[dict], args: dict):
    for i, dictionary in enumerate(dict_list):
        dict_list[i] = {**dictionary, **args}
    return dict_list


def replace_with_null(dict_list: list[dict]):
    for i, dictionary in enumerate(dict_list):
        for key, value in dictionary.items():
            if not value:
                dict_list[i][key] = None
    return dict_list


def execute_query(dict_list: list[dict], table: str):
    try:
        connection = mysql.connector.connect(host='localhost',
                                             user='root',
                                             database='derweze',
                                             password='passwordsicura')
        if connection.is_connected():
            db_Info = connection.get_server_info()
            print("Connected to MySQL Server version ", db_Info)
            cursor = connection.cursor()
            cursor.execute("select database()", "")
            record = cursor.fetchone()
            print("You're connected to database: ", record)
            print("Performing queries...")
            # query
            for dictionary in dict_list:

                placeholders = ', '.join(['%s'] * len(dictionary))
                columns = ', '.join(dictionary.keys())
                sql = "INSERT INTO %s ( %s ) VALUES ( %s )" % (
                    table, columns, placeholders)
                cursor.execute(sql, list(dictionary.values()))
                connection.commit()

            # close connection
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
    except Error as e:
        print("Error while connecting to MySQL", e)


def open_file_and_execute_query(filename: str, exclude_args: list[str], table: str):

    with open(file_directory + filename, encoding='utf-8-sig') as f:

        execute_query(
            replace_with_null(
                remove_extra_args(
                    list(csv.DictReader(f, delimiter=";")),
                    exclude_args
                )),
            table
        )


boold = True
if __name__ == "__main__":
    if boold:
        print("Start")

    open_file_and_execute_query(
        'Anagrafiche.csv',
        ["IDAnagrafica", "email"],
        "registry"
    )

    open_file_and_execute_query(
        'Contratti.csv',
        ["IDRigaContratto"],
        "contract"
    )

    open_file_and_execute_query(
        'Sedi.csv',
        ["IDSede", "IDAnagrafica"],
        "domicile"
    )

    file_directory = "./file/"
    with open(file_directory + 'Anagrafiche.csv', encoding='utf-8-sig') as f:

        execute_query(
            add_extra_args(
                remove_extra_args(
                    list(csv.DictReader(f, delimiter=";")),
                    ["IDAnagrafica", "surname", "name", "business_name", "vat_number", "social_security_number",
                     "Indirizzo", "Civico", "CAP", "Localita", "Provincia", "Nazione", "telephone_number"]
                ),
                {"password": hash("passwordsicura")}
            ),
            "user"
        )

    if boold:
        print("End")
