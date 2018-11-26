4HC3 Assignment 2
Group 4

Chosen project: Digital Parking Meter

Aaska Shah 		001422791
Kerala Brendon		001424625
Nolan Slade 		001401079
Vyome Kishore		001406201

- - - - - - - - - - - - - -

Notable Extra Features:

- Option to pay with membership card
- Option to manage membership account by:
	- Checking current membership card balance
	- Adding funds to membership card balance via coins or credit card

- - - - - - - - - - - - - - 

Design Decisions & Other Info:

- We provided static card numbers and payment amounts instead of dynamically generating page content
	- This decision allowed us to show final content format, while still allowing easy and quick
- We decided to disable forward navigation through the nav bar, but allow backwards navigation.
	- Current tab is green as a signifier to the user
	- Buttons are greyed out when disabled to provide a signifier to the user; clickable buttons
	  are transparent with green border. This is consistent across all textual buttons as well as
	  the 'Next' and 'Previous' arrow buttons
	- This decision was made to serve as a logical constraint - users should only be allowed to
	  quickly navigate to pages they've already filled out - forward pages should be a linear 
	  progression. E.g. it would not make sense for a user to skip to payment confirmation without
	  first specifying payment amount, etc.