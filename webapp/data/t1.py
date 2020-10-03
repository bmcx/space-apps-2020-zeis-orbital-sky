
tle = []
with open("tle.20200714.txt" , "r") as f:
    lines = f.readlines()

# total tle count
print(len(lines))

# single tle data
print(lines[1].split())

# getting norad IDs
for l in lines:
    if(l.split()[1].isnumeric()):
        print(l.split()[1])

# https://www.w3schools.com/python/python_mysql_insert.asp