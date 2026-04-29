# Step 1: Install Angular CLI globally
npm install -g @angular/cli

# Step 2: Create a new Angular project (type 'y' if it asks about routing or CSS)
ng new angular-fetch-app

# Navigate into the new folder
cd angular-fetch-app

# Generate the required Service and Component
ng generate service data
ng generate component items

#start
ng serve -o