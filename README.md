# ng-waitstaff-calc

Angular JS web app to exercise basic concepts of the framework such as modules, controllers, scope, forms, two-way data binding, templating, routing, and views.

## Requirements

- Consists of 3 views:
  - Index
    - Should load when users visit the root URL for the site ('/')
    - Contains description of the app
    - Contains a link bar that access all the views
  - New Meal
    - Should load when users visit '/new-meal'
    - The user enters details for a new meal. When they click submit, the app validates that the value in each field is numeric. If the form is valid, the "Customer Charges" panel and data model for the My Earnings view should update accordingly.
    - In the "Customer Charges" panel, Subtotal is the value of the base meal price plus tax. Tip is the dollar value of the tip, given the subtotal and tip percentage. Total is equal to subtotal plus tip.
    - If the user clicks cancel, the form should be reset to its initial state.
  - My Earnings
    - Should load when users visit '/my-earnings'
    - Tracks the tip and meal totals for the waiter on a given shift. The data presented in this view should change as users add new meals. If the user clicks the "Reset" button, the cumulative earnings data should be zeroed out.
- If users try to visit any routes other than the three that have been explicitly defined, they should be redirected to the index of the site.

## To-do list

- Add "clear" functionality for "customer charges" part
