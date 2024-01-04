name = input("Input customer name:")
address = input("Input customer address:")
number = input("Input customer number:")
totalCars = int(input("Input number of cars:"))

while totalCars > 5:
    totalCars = int(input("Input number of cars"))


car_prices =  { 
"Lamborghini Gallardo" : 59, 
"Lamborghini Huracan" : 59, 
"Ferrari F40" : 49, 
"Porsche Boxster" : 39, 
"Audi A5" : 39, 
"BMW i8" : 39, 
"Lotus Elise" : 30} 

car_choices = []
i = 0

while i < totalCars:
    car = input("Input your desired car/s")
    car_choices.append(car)
    i+=1


def calculate_cost( car_choices, car_prices):
    totalCost = 0
    car_cost = 0
    for car in car_choices:
        car_cost+=car_prices[car]
    extraLaps = int(input("How many additional laps would you like"))
    lapCost = extraLaps * 15
    totalCost += lapCost + car_cost
    return totalCost, extraLaps

totalCost, extraLaps = calculate_cost(car_choices, car_prices)

print(f"Customer Name: {name}")
print(f"Customer Address: {address}")
print(f"Customer Number: {number}")
print(f"Total Cars: {totalCars}")

for car in car_choices:
    print(f"Car: {car} Price: {car_prices[car]}")

print(f"Additional Laps: {extraLaps}")
print(f"Total Cost: {totalCost}")