The app is an inventory management system meant to keep track of store items by
allowing the user to show the entire inventory, find a specific item, delete an
item, create an item, or update an item.

Users must first sign up and sign in before gaining access to inventory tools.

API Endpoints

Authentication
Verb | URI | Header | Body
--- | --- | --- | ---
POST | /sign-up | N/A | Credentials
POST | /sign-on | N/A | Credentials
PATCH | /change-password | Token | Password
DELTE | /sign-out | Token | N/A

Inventory Actions
Verb | URI | Header | Body
--- | --- | --- | ---
POST- | /items | Token | upc, description, price, cost, quantity, ads
PATCH- | /items/:id | Token | id, upc, description, price, cost, quantity, ads
DELETE- | /items/:id | Token | id
GET- | /items | Token | N/A
GET- | /items/:id | Token | id


Link to front-end repo:
https://github.com/ceconley/inventory-management-system-client

Deployed heroku: https://pure-headland-95535.herokuapp.com/
Deployed gh-pages: https://ceconley.github.io/inventory-management-system-client/

ERD: https://i.imgur.com/NYlt28V.jpg


Technologies used: express, mongoDB, mongoose, handlebars, bootstrap, jQuery,
ajax, javascript, html, css.

Problems to be fixed:
- formatting the table so currency shows propery

Version 2.0:
- upcs require 10 digits
- adding bar codes
- authentication for admins

User stories:
As a user I want to be able to sign up with an account.
I want to be able to sign in with a password.
Once signed in, I want to be able to change my password.
I want to be able to sign out.
Only authenticated users will be able to work within the inventory database.
I want to be able to create an inventory item.
I want to be able to view 1 inventory item.
I want to be able to view all inventory.
I want to be able to view attributes of items based on price, quantity and other soon to be determined qualities of our products.
I want to be able to sort products by price, quantity, and other soon to be determined qualities of our products.
I want to be able to delete an item from inventory.
I want each of my items to have a unique identifier which will create a link between the manufacturer’s database and my own inventory management system.

Planning, Process, and Problem Solving:

For this project it was very important that we were all on the same page understanding the code we'd be writing. Two of the group members had a much more comfortable understanding of api's and form data implementation. From the beginning, we wanted to make sure that no one was left behind so the first steps were to gain a clear understanding of the requirements, our tables, and the minimal viable product. It was pivotal to keep these in sight at all times and remained our guiding principal throughout.

We realized early, that there were plenty of interesting stretch goals that we would be able to implement and wanted to tackle either in pairs or individually. That was tempered with a very streamlined and narrow mvp that had all of us working on the same code since personnel was more plentiful than work. We took this opportunity to make sure that each of us spent some hands on time coding with what we dubbed "quad-coding" (or "pair-pair programming"). This allowed us all to stay involved in what would normally have been done by one or two group members. As we moved along in our project, we gained more room to work on separate features, sometimes dividing work up according to task. The task oriented programming was a great way to keep an ongoing understanding of the code, tracing a single functionality throughout multiple files, but would make for a rather long morning resolving conflicts. Moving further along, we were able to keep this divide and conquer mentality with more elbow room, consolidating our scope as we approached the finished product.

Mornings, were begun with a "stand up" outlining accomplishments from the night before, any road blocks we faced, and what our plan of action was. There was constant communication and when there was an issue to be solved, it was our practice to ask a team member for a second pair of eyes or even assemble the entire group for a problem solving "sprint". When all options were exhausted, or time was more of a concern, the group would assign a member to write an issue queue as the rest of the group continued running through possible solutions.
