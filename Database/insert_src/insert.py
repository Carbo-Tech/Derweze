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
    complete=0
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
            print(f"Performing queries on {table} ...", )
            # query
            for dictionary in dict_list:

                placeholders = ', '.join(['%s'] * len(dictionary))
                columns = ', '.join(dictionary.keys())
                sql = "INSERT INTO %s ( %s ) VALUES ( %s )" % (
                    table, columns, placeholders)
                cursor.execute(sql, list(dictionary.values()))
                connection.commit()
                complete += 1

            # close connection
            cursor.close()
            connection.close()
            
    except Error as e:
        print("Error while connecting to MySQL", e)
    finally:
        print(f"Queries complete [{complete}/{len(dict_list)}]")
        print("MySQL connection is closed")

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

import csv

# definire la directory dei file
file_directory = "path/della/directory/dei/file/"

def create_permissions_query():
    # Lettura dati da file CSV
    with open(file_directory + 'Anagrafica.csv', encoding='utf-8-sig') as file_anagrafica, \
         open(file_directory + 'Contratti.csv', encoding='utf-8-sig') as file_contratti, \
         open(file_directory + 'Sedi.csv', encoding='utf-8-sig') as file_sedi:
        anagrafica_reader = csv.DictReader(file_anagrafica, delimiter=';')
        contratti_reader = csv.DictReader(file_contratti, delimiter=';')
        sedi_reader = csv.DictReader(file_sedi, delimiter=';')

        # Crea un dizionario che associa l'ID dell'anagrafica con i dati dell'anagrafica
        anagrafiche = {}
        for row in anagrafica_reader:
            anagrafiche[row['IDAnagrafica']] = row

        # Crea un dizionario che associa l'ID del contratto con i dati del contratto
        contratti = {}
        for row in contratti_reader:
            contratti[row['IDRigaContratto']] = row

        # Crea un dizionario che associa l'ID della sede con i dati della sede e dell'anagrafica associata
        sedi = {}
        for row in sedi_reader:
            id_anagrafica = row['IDAnagrafica']
            anagrafica = anagrafiche[id_anagrafica]
            sede = {**row, **anagrafica}
            sedi[row['IDSede']] = sede

        # Crea le query di inserimento
        for id_contratto, contratto in contratti.items():
            id_sede = contratto['idSede']
            sede = sedi[id_sede]

            id_registry = sede['IDAnagrafica']
            id_contract = id_contratto
            type = 'U'

            print(f"INSERT INTO permissions (idRegistry, idContract, type) VALUES ({id_registry}, {id_contract}, '{type}');")


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

    create_permissions_query()

    if boold:
        print("End")
