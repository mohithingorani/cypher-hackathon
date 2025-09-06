import pandas as pd
from sqlalchemy import create_engine

# your DATABASE_URL from .env
DATABASE_URL = "postgresql://myuser:12342@64.227.155.243:5432/wellnestdatabase"

# create connection engine
engine = create_engine(DATABASE_URL)

# load full table into pandas dataframe
table_name = "conversations"   # <-- change this to your table name
df = pd.read_sql_table(table_name, con=engine)

# display table
print(df)

# if you want to save it to CSV
df.to_csv(f"{table_name}.csv", index=False)
print(f"✅ Table {table_name} saved as {table_name}.csv")
