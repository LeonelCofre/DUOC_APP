from pymongo import MongoClient

try:
    client = MongoClient('mongodb://localhost:27017/')
    db = client['database']  # el nombre de tu base de datos

    print("Conectado a la base de datos MongoDB")

except Exception as e:
    print(f"Error: {e}")

finally:
    client.close()
    print("Conexión a MongoDB cerrada")
