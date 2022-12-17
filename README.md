# AKL PROJECT (REACT)
# JOANNA SZADKOWSKA

Check meme application live at:
https://johanv2.github.io/alk_projekt/

Features:
- 4 tabs containing:
    - `99gag`: all memes (sorted from latest to oldest memes)
    - `hot`: best memes filtered by rule: (upvotes - downvotes > 5)
    - `regular`: remaining memes filtered by rule: (upvotes - downvotes =< 5)
    - `add meme`: form in which user can enter title (max 30 characters) and valid image URL. New meme will be shown firstly in 99gag and regular tabs. 

Every meme has 2 buttons (upvote and downvote). User has only one vote per meme, but can change upvote to downvote (and downvote to upvote) or even discard vote (by pressing vote button again). Vote is shown by color-changing vote buttons.
Votes can be seen in every tabs (99gag, hot, regular).
Best (hot) and remaining (regular) memes will appear and disappear live in hot and regular tabs depending on uesr votes (rules written above). All memes can be seen in 99gag tab.

Active tab is shown by another tab color. Switching tabs does not reload the application.

`GOD MODE`: 
in default, app in NOT in GOD MODE.
Pressing GOD MODE button will activate mode in which user in no longer normal user, but GOD; GOD can upvote and dovnvote all memes without standard restrictions (but incrementing only). Voting in GOD MODE will not affect standard user's votes. GOD MODE is activated when activation button becomes red.
Pressing again will quit GOD MODE and impose vote restrictions to normal user, as default.


