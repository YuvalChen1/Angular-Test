# EX  1
1. Support veicle Weight_in_lbs filter
2. Support number of result, size


# EX  2
1. Add new field - manufacturer 
2. Create aggregation query for Manufacturer




# Homework
 1. Api - vehicles
 2. Client - Angular
 3. DB - mongoDB

 - Create Angular client with the following pages :
 - vehicles - presenting the all vehicles with filters
 - add vehicles - will support adding new vehicle to the collection |( form with all the fields)
 - update vehicle price , search vehicle by ID, the page will be empty and show result only if vehicle exist, add a number input to update the price , also insert into the input the old price if exist, save the new price by clicking the save button
- save every update price operation in audit collection ( new collection ) that holds the car id, new price, old price and timestamp
- show the audit in a new page ( table )

Important notes:
 1. create 4 routes
 2. show message when operation succeeded
 3. support reusing the components ( car row, table )




